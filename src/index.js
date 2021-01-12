import React from 'react';
import { StatusBar} from 'react-native';

import DestinationSearch from './screens/DestinationSearch'

const App = () => {
    return(
        <>
            <StatusBar barStyle="dark-content" />
            <DestinationSearch />
        </>
    )
};

export default App;