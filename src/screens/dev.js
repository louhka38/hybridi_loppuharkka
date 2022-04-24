import React from 'react';
import { View, Text, Button, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import { } from '../utils/myfs';
import { useTranslation } from 'react-i18next';

export const Dev  = ({ count }) => {
    const { t, i18n } = useTranslation();

    return (<View style={styles.main}>
        <Text style={styles.txt}>dev</Text>
        <Text style={styles.txt}>{t("Count")}: {count}</Text>
    </View>);
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "aqua",
        height: 900
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "teal",
        marginTop: 10,
        marginBottom: 15
    }
})

export default Dev;