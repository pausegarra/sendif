'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className='bg-primary px-2 py-1 rounded-md text-white font-bold disabled:opacity-50'>
      Consultar
    </button>
  );
}