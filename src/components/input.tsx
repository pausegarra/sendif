interface Props {
  label: string;
  type?: string;
  step?: string;
  min?: number;
  name: string;
  errorMessages?: string[];
}

export function Input({
  label,
  type = 'text',
  step,
  min,
  name,
  errorMessages = []
}: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor="">{label}</label>
      <input name={name} type={type} className={`rounded-md px-2 py-1 ${errorMessages.length > 0 ? 'border-red-500 border-2' : 'border'}`} step={step} min={min} />
      {errorMessages.length > 0 && (
        <span className='text-red-500 text-sm font-bold'>{errorMessages.join(',')}</span>
      )}
    </div>
  );
}