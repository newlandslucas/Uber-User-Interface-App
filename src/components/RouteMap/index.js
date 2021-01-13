import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = "AIzaSyDggY6sCeUWt3gqkz-Mb0UBuoAM4KfqlIk"
const RouteMap = () => {

    const origin = {
        latitude: -15.841763,
        longitude: -48.020961
    };

    const destination = {
        latitude: -15.8264,
        longitude: -47.8734
    }
  return(
      <MapView
        showsUserLocation
          style={{
          height: '100%',
          width: '100%'
          }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude: -15.841763,
            longitude: -48.020961,
            latitudeDelta: 0.0143,
              ongitudeDelta: 0.0134,
        }}>
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor={"black"}
            />

            <Marker 
                coordinate={origin}
                title={"Origem"}
            />
             <Marker 
                coordinate={destination}
                title={"Destino"}
            />
        </MapView>
  )
}

export default RouteMap;