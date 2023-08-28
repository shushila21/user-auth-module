import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartFills } from '../constants';
import { IChartProps } from '../types';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip naxatw-relative naxatw-z-20 naxatw-rounded-xl naxatw-border-2 naxatw-bg-white naxatw-px-3 naxatw-py-2 naxatw-text-sm naxatw-text-primary-400">
        <p className="label naxatw-font-bold">{label}</p>
        {payload?.map((item: any) => {
          if (item.dataKey !== 'name')
            return (
              <div
                key={item.dataKey}
                className="naxatw-flex naxatw-w-fit naxatw-items-center naxatw-justify-between naxatw-gap-5"
              >
                <div className="naxatw-flex naxatw-items-center naxatw-justify-center naxatw-gap-1">
                  <div
                    className="naxatw-h-3 naxatw-w-3 naxatw-rounded-sm"
                    style={{ backgroundColor: `${item?.fill}` }}
                  />
                  <span>{item.dataKey}</span>
                </div>
                <p className="naxatw-font-semibold">{item.value}</p>
              </div>
            );
          return <></>;
        })}
      </div>
    );
  }

  return null;
};

export default function BarChartComponent({
  data,
  fills = ChartFills,
  scrollable = false,
  width = '150%',
}: IChartProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const keys = Object.keys(data[0]);

  return (
    <ResponsiveContainer
      width={scrollable && width ? width : '100%'}
      minHeight={150}
      maxHeight={230}
    >
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} stroke="#DDD" />
        <XAxis
          dataKey="name"
          style={{
            fontSize: '13.4px',
            color: '#484848',
          }}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          style={{
            fontSize: '12px',
            color: '#484848',
          }}
          tickLine={false}
        />

        <Tooltip content={<CustomTooltip />} />
        {keys.map((key, i) => (
          <Bar
            key={key}
            yAxisId="left"
            dataKey={key}
            fill={fills[i - 1]}
            barSize={28}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
