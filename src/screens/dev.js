import React from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import { } from '../utils/myfs';

export const Dev  = ({ count }) => {
    return (<View>
        <Text>dev</Text>
        <Text>Count: {count}</Text>
    </View>);
}
export default Dev;