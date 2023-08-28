import MapLibreMap from '@Components/common/Map/MapLibreMap';
import RoundedContainer from '@Components/common/RoundedContainer';

export default function Map() {
  return (
    <RoundedContainer className="naxatw-h-full naxatw-w-full">
      <MapLibreMap
        isLoading={false}
        className="naxatw-h-full naxatw-w-full naxatw-rounded-[20px] naxatw-bg-white"
        controls={{ geoLocate: true, navigation: true, fullScreen: true }}
        options={{ zoom: 6 }}
        controlLocation="bottom-right"
      />
    </RoundedContainer>
  );
}
