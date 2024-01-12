'use server';

import { getColor } from '@/helpers';
import { z } from 'zod';

const schema = z.object({
  distance: z.number().positive('Ingresa un número mayor a 0'),
  slope: z.number().positive('Ingresa un número mayor a 0')
});

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

  const color = getColor(percentage);

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