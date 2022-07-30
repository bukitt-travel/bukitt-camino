import { useState } from 'react';
import Map, { Marker, Popup, NavigationControl, ScaleControl } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RiMapPin2Fill } from 'react-icons/ri';

import { useMemo } from 'react';

const RouteMap = ({ routeMap, color }) => {
    const [popupInfo, setPopupInfo] = useState(null);

    const coordinates = routeMap.map((stage) => ({
        latitude: stage.coordinates.lat,
        longitude: stage.coordinates.lng,
    }));

    const center = getCenter(coordinates);

    const pins = useMemo(
        () =>
            routeMap.map((stage, idx) => (
                <Marker
                    key={idx}
                    longitude={stage.coordinates.lng}
                    latitude={stage.coordinates.lat}
                    anchor="bottom"
                    onClick={(e) => {
                        e.originalEvent.stopPropagation();
                        setPopupInfo(stage);
                    }}
                >
                    <div className="flex cursor-pointer flex-col items-center">
                        <RiMapPin2Fill className="h-6 w-6" style={{ color: color }} />
                        <div className="mt-1 text-xs font-black text-stone-900">{stage.order}</div>
                    </div>
                </Marker>
            )),
        [color, routeMap],
    );

    return (
        <Map
            style={{ width: '100%', height: '100%' }}
            mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            initialViewState={{
                // @ts-expect-error need to find types for useStore()
                latitude: center.latitude,
                // @ts-expect-error need to find types for useStore()
                longitude: center.longitude,
                zoom: 7,
                bearing: 0,
                pitch: 0,
            }}
            scrollZoom={false}
            // // minZoom={1}
            // // maxZoom={7.5}
        >
            <NavigationControl position="top-left" />
            <ScaleControl />

            {pins}

            {popupInfo && (
                <Popup
                    anchor="top"
                    longitude={Number(popupInfo.coordinates.lng)}
                    latitude={Number(popupInfo.coordinates.lat)}
                    closeButton={false}
                    onClose={() => setPopupInfo(null)}
                >
                    <div className="space-y-2 font-serif">
                        {popupInfo.location && (
                            <p className="space-x-2">
                                <span className="text-xl font-medium">{popupInfo.location}</span>
                            </p>
                        )}
                    </div>
                    {popupInfo.coordinates.alt && (
                        <div className="mt-2 text-base">
                            <span>Altitude</span>{' '}
                            <span className="font-bold">
                                {popupInfo.coordinates.alt.toFixed(0)}m
                            </span>
                        </div>
                    )}
                </Popup>
            )}
        </Map>
    );
};

export default RouteMap;
