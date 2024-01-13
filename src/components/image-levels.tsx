import { resultColors } from '@/helpers';
import Image from 'next/image';

interface Props {
  selected: string;
}

const nameMap: { [key: string]: string; } = {
  very_easy: 'Muy fácil',
  easy: 'Fácil',
  mid: 'Moderado',
  hard: 'Difícil',
  very_hard: 'Muy difícil'
}

export function ImageLevels({ selected }: Props) {
  return (
    <div className='my-3 flex justify-between'>
      {resultColors.map(item => (
        <div className={`${selected === item.image ? 'opacity-1' : 'opacity-20'} transition duration-500 ease-in-out`}>
          <Image src={`/assets/${item.image}.svg`} alt="very_easy" width={75} height={75} />
          <p className={`text-center font-bold`} style={{ color: item.color }}>{nameMap[item.image]}</p>
        </div>
      ))}
    </div>
  );
}