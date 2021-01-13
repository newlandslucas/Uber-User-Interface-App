import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import UberTypesRow from '../UberTypesRow';
import typesData from '../../assets/data/types'

const UberTypes = () => {

  const confirm = () => {
    alert('confirm')
  }
  return(
      <View>
          {typesData.map((type) =>(
             <UberTypesRow type={type} />
          ))}

          <TouchableOpacity onPress={confirm} style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 10,
            alignItems: 'center',
          }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Confirmar Uber
            </Text>
          </TouchableOpacity>

        </View>
  )
}

export default UberTypes;