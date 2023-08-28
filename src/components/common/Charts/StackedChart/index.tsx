import { FlexRow } from '@Components/common/Layouts';
import RoundedContainer from '@Components/common/RoundedContainer';
import formatNumberWithCommas from '@Utils/formatNumberWithCommas';
import { StackedChartFills } from '../constants';

interface IStackedChartProps {
  title: string;
  data: Record<string, any>;
  className?: string;
  labelAlignment?: 'vertical' | 'horizontal';
}
type IUpdatedData = {
  name: string;
  color: string;
  width: string;
  value: number;
}[];

export default function StackedChart({
  title,
  data,
  className,
  labelAlignment,
}: IStackedChartProps) {
  const total =
    data.reduce(
      (sum: number, item: Record<string, any>) => sum + item.value,
      0,
    ) || 0;

  const updatedData: IUpdatedData = data.map(
    (item: Record<string, any>, index: number) => ({
      ...item,
      width: `${((item.value / total) * 100).toFixed(0)}%`,
      color: StackedChartFills[index],
    }),
  );

  return (
    <RoundedContainer
      className={`naxatw-flex naxatw-w-full naxatw-flex-1 naxatw-flex-col naxatw-gap-2.5
      naxatw-rounded-xl naxatw-bg-primary-50 naxatw-px-5 naxatw-py-3 naxatw-shadow-md md:!naxatw-h-28 ${className}`}
    >
      <h5>{title}</h5>
      <FlexRow className="naxatw-overflow-hidden naxatw-rounded">
        {updatedData.map(({ name, color, width }) => (
          <div
            key={name}
            className="naxatw-h-4"
            style={{
              width,
              backgroundColor: color,
            }}
          />
        ))}
      </FlexRow>
      <div
        className={`naxatw-flex naxatw-pt-1 ${
          labelAlignment === 'vertical'
            ? 'naxatw-flex-col naxatw-gap-2'
            : 'naxatw-flex-col md:naxatw-flex-row md:naxatw-justify-between'
        }`}
      >
        {updatedData.map(({ name, value, color }) => (
          <FlexRow key={value} className="naxatw-items-center naxatw-gap-2">
            <div
              className={`naxatw-h-3 naxatw-w-3 ${
                labelAlignment === 'vertical'
                  ? 'naxatw-rounded'
                  : 'naxatw-rounded-full'
              } `}
              style={{
                backgroundColor: color,
              }}
            />
            <FlexRow
              className={` ${
                labelAlignment === 'vertical'
                  ? ' naxatw-gap-10'
                  : 'naxatw-w-full naxatw-gap-0.5'
              }`}
            >
              <FlexRow
                className={`naxatw-items-center naxatw-text-sm naxatw-capitalize naxatw-text-grey-800
              ${
                labelAlignment === 'horizontal'
                  ? 'naxatw-pt-0.5'
                  : 'naxatw-w-40'
              } `}
              >
                {name}
              </FlexRow>
              <h5
                className={` ${
                  labelAlignment === 'vertical'
                    ? 'naxatw-text-sm'
                    : 'naxatw-ml-auto'
                }`}
              >
                {formatNumberWithCommas(value)}
              </h5>
            </FlexRow>
          </FlexRow>
        ))}
      </div>
    </RoundedContainer>
  );
}
