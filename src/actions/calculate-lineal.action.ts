'use server';

import { getColor } from '@/helpers';
import { z } from 'zod';

const schema = z.object({
  distance: z.number().positive('Ingresa un número mayor a 0'),
  slope: z.number().positive('Ingresa un número mayor a 0'),
  negative_slope: z.number().positive('Ingresa un mayor a 0')
});

export async function calculateLineal(prevState: any, formData: FormData) {
  const validated = schema.safeParse({
    distance: Number(formData.get('distance')),
    slope: Number(formData.get('slope')),
    negative_slope: Number(formData.get('negative_slope'))
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors
    };
  }

  const c = validated.data.distance;
  const dp = validated.data.slope;
  const dn = validated.data.negative_slope;

  const result = Math.round(1.5 * Math.pow(c, 2) + 10 * c + ((1.5 * dp + 0.35 * dn) / 2) + ((dp + 1.1 * dn) / c));
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