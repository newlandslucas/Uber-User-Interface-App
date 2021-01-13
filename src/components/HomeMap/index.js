import React from 'react';
import { View } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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
          />
  )
}

export default HomeMap;