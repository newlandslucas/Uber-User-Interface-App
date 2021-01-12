import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const HomeSearch = () => {
  return(
      <View>
          <View style={styles.inputBox}>
              <Text style={styles.inputText}>Para onde?</Text>

              <View style={styles.timeContainer}>
                <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                <Text>Agora</Text>
                <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
              </View>
          </View>

          <View style={styles.row}>
              <View style={styles.iconContainer}>
                <AntDesign name={'clockcircle'} size={20} color={'#ffffff'}/>
              </View>
              <Text style={styles.destinationText}>Pontão Lago Sul</Text>
          </View>

          <View style={styles.row}>
              <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                <Entypo name={'home'} size={20} color={'#ffffff'}/>
              </View>
              <Text style={styles.destinationText}>Casa</Text>
          </View>
      </View>
  )
}

export default HomeSearch;