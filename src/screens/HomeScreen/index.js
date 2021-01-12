import React from 'react';
import { View } from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';

const HomeScreen = () => {
  return(
      <View>
          <HomeMap />
          <CovidMessage />
      </View>
  )
}

export default HomeScreen;