import { ProgressBar } from './progress-bar';

interface Props {
  result: number;
  resultPercentage: number;
  style: any;
}

export function Result({ result, resultPercentage, style }: Props) {
  return (
    <div className='mt-3'>
      <p className='text-center font-bold text-2xl' style={{ color: style.color }}>{result || 0}</p>
      <ProgressBar image={style.image} color={style.color} percentage={resultPercentage || 0} />
    </div>
  );
}