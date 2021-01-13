import React from 'react';
import { StatusBar} from 'react-native';

import SearchResults from './screens/SearchResults'
import HomeScreen from './screens/HomeScreen'

const App = () => {
    return(
        <>
            <StatusBar barStyle="dark-content" />
            <SearchResults />
        </>
    )
};

export default App;