import React from 'react'
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Local = () => {
    return(
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Text>Local Component</Text>
        </SafeAreaView>
    )
}