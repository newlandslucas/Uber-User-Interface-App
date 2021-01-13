import React from 'react';
import {Image} from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const HomeMap = () => {
  return(
      <MapView
          style={{
          height: '100%',
          width: '100%'
          }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: -15.841763,
              longitude: -48.020961,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134,
            }}
            showsUserLocation
          >
            
            <Marker 
              coordinate={{latitude: -15.8418305, longitude: -48.0249147}}
            >
              <Image 
              style={{width: 50, height: 50, resizeMode: 'contain'}}
              source={require('../../assets/images/top-UberX.png')}
              />

            </Marker>
          </MapView>
  )
}

export default HomeMap;