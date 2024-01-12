'use client';

import { calculateReturn } from '@/actions/calculate-return.action';
import { Input } from '@/components/input';
import { SubmitButton } from '@/components/submit-button';
import { useFormState } from 'react-dom';
import { Result } from './result';

const initialState: { [key: string]: any; } = {
  errors: {},
  result: null,
  resultPercentage: null,
  resultStyle: {},
};

export function ReturnForm() {
  const [state, formAction] = useFormState(calculateReturn, initialState);

  return (
    <>
      <form className='flex flex-col gap-3' action={formAction}>
        <Input label='Distancia total en KM' name="distance" type='number' step="0.1" min={0} errorMessages={state?.errors.distance} />
        <Input label='Desnivel positivo en M' name="slope" type='number' step="0.1" min={0} errorMessages={state?.errors.slope} />
        <SubmitButton />
      </form>

      <Result result={state?.result} style={state?.resultStyle || {}} resultPercentage={state?.resultPercentage} />
    </>
  );
}