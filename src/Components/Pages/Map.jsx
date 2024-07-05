import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

export default function Contacts(){
    return (  
        <YMaps>
        <Map
         width='700px'
         height='670px'
          defaultState={{
            center: [48.7424164, 44.5369358],
            zoom: 12,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[48.7424164, 44.5369358]}
            properties={{
              balloonContentBody:
                "This is balloon loaded by the Yandex.Maps API module system",
            }}
          />
        </Map>
      </YMaps>
      )
}