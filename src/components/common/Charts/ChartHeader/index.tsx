import ToolTip from '@Components/RadixComponents/ToolTip';
import CaptureComponent from '../CaptureComponent';

export interface IChartHeaderProps {
  chartTitle: string;
  hasDownloadBtn?: boolean;
  downloadComponentRef: React.RefObject<any>;
}

export default function ChartHeader({
  chartTitle,
  hasDownloadBtn,
  downloadComponentRef,
}: IChartHeaderProps) {
  return (
    <div className="naxatw-flex naxatw-items-start naxatw-justify-between">
      <h3 className="naxatw-relative naxatw-pr-5 naxatw-text-lg naxatw-font-bold naxatw-text-grey-800">
        {chartTitle}
      </h3>

      <div className="naxatw-flex naxatw-items-center naxatw-justify-end naxatw-gap-3">
        {hasDownloadBtn && (
          <div
            className="actions naxatw-w-40px naxatw-flex naxatw-cursor-pointer
           naxatw-rounded-lg naxatw-p-1"
          >
            <ToolTip
              name="download"
              message="Download chart"
              className="!naxatw-text-2xl"
              messageStyle="naxatw-font-normal"
              iconClick={() =>
                CaptureComponent({
                  componentRef: downloadComponentRef,
                  captureName: chartTitle,
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
