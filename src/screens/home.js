import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { red500, white } from 'react-native-paper/lib/typescript/styles/colors';

import { screenkeys } from './_index';


const settingOpts = (opts={lang: 'EN'}) => {
    const _settings = {
        lang: opts.lang
    };
    return _settings;
}

export const Home = ({ navigation, dispatch, lang }) => {
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        AsyncStorage.getItem('settings')
            .then((settingsJSON) => {
                const _settings = settingOpts(JSON.parse(settingsJSON));
                console.log({ _settings, settingsJSON });
                i18n.changeLanguage(_settings.lang)
                dispatch({ type: _settings.lang });
            })
            .catch(() => {
                const _settings = settingOpts();
                console.log({ _settings, settingsJSON });
                i18n.changeLanguage(_settings.lang);
                dispatch({ type: _settings.lang });
            });
    }, []);

    return (<View style={styles.main}>
        <Text style={styles.txt}>{t("home")}</Text>
        { screenkeys.map((skey) => skey !== 'home' && skey !== 'note-editor' && <View style={styles.btn} key={"home-"+skey}>
                <Button style={styles.btn} mode='contained' compact='true' onPress={() => navigation.navigate(skey)}>{skey}</Button>
            </View>
        )}
    </View>);
};

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
    },
    btn: {
        width: 200,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 8
    }
})

export default Home;