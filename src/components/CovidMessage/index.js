import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const CovidMessage = () => {
  return(
      <View style={styles.container}>
          <Text style={styles.title}>Viaje somente se necessário</Text>
          <Text style={styles.text}>Viaje somente se necessário</Text>
          <Text style={styles.learnMore}>Leia Sobre</Text>

      </View>
  )
}

export default CovidMessage;