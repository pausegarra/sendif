import { ImageLevels } from './image-levels';

interface Props {
  percentage: number;
  color: string;
  image: string;
}

export function ProgressBar({ percentage, color, image }: Props) {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className={` h-6 rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <ImageLevels selected={image} />
    </>
  );
}