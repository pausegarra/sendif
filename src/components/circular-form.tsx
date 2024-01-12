'use client';

import { Input } from '@/components/input';
import { SubmitButton } from '@/components/submit-button';

export function CircularForm() {
  return (
    <form className='flex flex-col gap-3'>
      <Input label='Distancia total en KM' name="distance" type='number' step="0.1" min={0} />
      <Input label='Desnivel positivo en M' name="slope" type='number' step="0.1" min={0} />
      <Input label='Desnivel negativo en M' name="negative_slope" type='number' step="0.1" min={0} />
      <SubmitButton />
    </form>
  );
}