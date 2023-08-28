import PortalTemplate from '@Components/common/PortalTemplate';

export default function Fallback() {
  return (
    <PortalTemplate>
      <div className="naxatw-absolute naxatw-left-1/2 naxatw-top-1/2 naxatw-flex -naxatw-translate-x-1/2 -naxatw-translate-y-1/2 naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-2">
        <h4 className="naxatw-text-2xl naxatw-font-extrabold naxatw-text-black">
          Loading...
        </h4>
      </div>
    </PortalTemplate>
  );
}
