import Image from 'next/image';

interface Props {
  selected: string;
}

const images: string[] = [
  'very_easy', 'easy', 'mid', 'hard', 'very_hard'
];

export function ImageLevels({ selected }: Props) {
  return (
    <div className='my-3 flex justify-between'>
      {images.map(image => <Image src={`/assets/${image}.svg`} className={`${selected === image ? 'opacity-1' : 'opacity-50'} transition duration-500 ease-in-out`} alt="very_easy" width={75} height={75} />)}
    </div>
  );
}