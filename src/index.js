import React from 'react';
import { StatusBar} from 'react-native';

import HomeScreen from './screens/HomeScreen'

const App = () => {
    return(
        <>
            <StatusBar barStyle="dark-content" />
            <HomeScreen />
        </>
    )
};

export default App;