import React, {useState, useEffect} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View, TextInput, SafeAreaView } from 'react-native';

import styles from './styles';

const DestinationSearch = () => {

    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    useEffect(() => {
        if(originPlace && destinationPlace) {
            console.warn('Redirecionando seus resultados')
        }
    }, [originPlace, destinationPlace]);

  return(
      <SafeAreaView>
        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder='De Onde?'
                onPress={(data, details = null) => {
                    setOriginPlace({data, details});
                    console.log(data, details);
                }}
                styles={{
                    textInput: styles.textInput,
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyDggY6sCeUWt3gqkz-Mb0UBuoAM4KfqlIk',
                    language: 'en',
                }}
                />

            <GooglePlacesAutocomplete
                placeholder='Para Onde?'
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details});
                    console.log(data, details);
                }}
                styles={{
                    textInput: styles.textInput,
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyDggY6sCeUWt3gqkz-Mb0UBuoAM4KfqlIk',
                    language: 'en',
                }}
                />
        </View>
      </SafeAreaView>
     
  )
}

export default DestinationSearch;