import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const Loading = () => {
    let componentState = -1;
    const [dot, setDot] = React.useState(0);

    React.useEffect(() => {
        componentState = setTimeout(() => {
            // if dot smaller than 3, add 1. Otherwise mark 1
            const _dot = dot < 3 ? (dot + 1) : 1;
            setDot(_dot);
        }, 1000);
        return () => clearTimeout(componentState);
    })

    return (
        <View style={styles.wrapper}>
            <View style={[styles.window, styles.wrapper]}>
                <ActivityIndicator size="large" color="#f1f1f1"/>
                <Text style={styles.content}>Loading{'.'.repeat(dot)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        justifyContent: 'center',
        flex: 1
    },
    window: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    content: {
        padding: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f1f1f1',
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default Loading;
