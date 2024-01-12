'use server';

import { z } from 'zod';

const schema = z.object({
  distance: z.number().positive('Ingresa un número mayor a 0'),
  slope: z.number().positive('Ingresa un número mayor a 0')
});

type ResultColors = {
  range: (x: number) => boolean;
  color: string;
  image: string;
};

const resultColors: ResultColors[] = [
  { range: x => x <= 20, color: '#00ab64', image: 'very_easy' },
  { range: x => x > 20 && x <= 40, color: '#03b1ec', image: 'easy' },
  { range: x => x > 40 && x <= 60, color: '#f3772f', image: 'mid' },
  { range: x => x > 60 && x <= 80, color: '#ee3342', image: 'hard' },
  { range: x => x > 80, color: '#000', image: 'very_hard' }
];

export async function calculateReturn(prevState: any, formData: FormData) {
  const validated = schema.safeParse({
    distance: Number(formData.get('distance')),
    slope: Number(formData.get('slope'))
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors
    };
  }

  const a = validated.data.distance;
  const b = validated.data.slope;

  const result = Math.round(1.5 * Math.pow(a, 2) + 10 * a + ((1.5 * b + 0.35 * b) / 2) + ((b + 1.1 * b) / a));
  let percentage = (result / 1200) * 100;
  percentage = percentage > 100 ? 100 : percentage;

  const color = resultColors.find(item => item.range(percentage));

  return {
    result,
    resultPercentage: percentage,
    resultStyle: {
      color: color?.color,
      image: color?.image
    },
    errors: {}
  };
}