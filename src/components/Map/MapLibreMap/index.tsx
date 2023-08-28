/* eslint-disable no-nested-ternary */
import useMapLibreMap from '@Hooks/useMapLibreMap';
import { IDivProps, IUseMapLibreMapProps } from '@Schemas/interfaces';
import { Children, cloneElement, ReactElement } from 'react';

interface IMapLibreMapProps extends IUseMapLibreMapProps, IDivProps {
  isLoading: boolean;
  children?: ReactElement<any> | ReactElement<any>[];
}

export default function MapLibreMap({
  children,
  className,
  controls,
  options,
  controlLocation,
  isLoading,
}: IMapLibreMapProps) {
  const { map, mapContainerRef, mapLoaded } = useMapLibreMap({
    options,
    controls,
    controlLocation,
  });
  const childrenCount = Children.count(children);

  if (isLoading)
    return <div className="naxatw-h-full naxatw-w-full">Loading...</div>;

  return (
    <div
      className={`naxatw-relative naxatw-z-0 ${className}`}
      ref={mapContainerRef}
    >
      {childrenCount < 1 ? (
        <></>
      ) : childrenCount > 1 ? (
        Children.map(children, child =>
          child ? cloneElement(child, { map, maploaded: mapLoaded }) : <></>,
        )
      ) : (
        cloneElement(children as ReactElement<any>, {
          map,
          maploaded: mapLoaded,
        })
      )}
    </div>
  );
}
