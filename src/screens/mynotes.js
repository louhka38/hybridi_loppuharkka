import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { listNotes } from '../utils/myfs';
import { useTranslation } from 'react-i18next';

export const MyNotes = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const [ notes, setNotes ] = React.useState([]);

    React.useEffect(() => {
        let isSubscribed = true;
        listNotes().then((_notes) => {
            console.log({_notes});
            if (isSubscribed) {
                setNotes(_notes)
            }
        });
        return () => isSubscribed = false;
    }, []);

    const openEditor = (note) => {
        console.log(`open note: ${note}`);
        navigation.navigate('note-editor', { filename: note });
    }

    return (<View style={styles.main}>
        <Text style={styles.txt}>{t("mynotes")}</Text>
        {
            notes.map((note, i) => (<View key={`note-${i}`}>
                <Button style={styles.btn} mode='contained' onPress={() => openEditor(note)}>{note}</Button>
            </View>))
        }
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
    },
    btn: {
        width: 300,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 8
    }
})

export default MyNotes;