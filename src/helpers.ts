type ResultColor = {
  range: (x: number) => boolean;
  color: string;
  image: string;
};

const resultColors: ResultColor[] = [
  { range: x => x <= 20, color: '#00ab64', image: 'very_easy' },
  { range: x => x > 20 && x <= 40, color: '#03b1ec', image: 'easy' },
  { range: x => x > 40 && x <= 60, color: '#f3772f', image: 'mid' },
  { range: x => x > 60 && x <= 80, color: '#ee3342', image: 'hard' },
  { range: x => x > 80, color: '#000', image: 'very_hard' }
];

export function getColor(percentage: number): ResultColor {
  return resultColors.find(item => item.range(percentage)) as ResultColor;
}