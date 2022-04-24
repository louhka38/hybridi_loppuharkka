import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { writeNote, readNote } from '../utils/myfs';
import { useTranslation } from 'react-i18next';


export const NoteEditor = (props) => {
    const { t, i18n } = useTranslation();
    const _tin = { min: 1, max: 10, format: '.txt' };
    const [ title, titleChange ] = React.useState('');
    const [ content, contentChange ] = React.useState('');

    React.useEffect(() => {
        let isSubscribed = true;
        if (props.route.params.filename && typeof props.route.params.filename === 'string') {
            // readNote
            console.log(props.route.params.filename);
            readNote(props.route.params.filename)
                .then((_content) => {
                    if (isSubscribed) {
                        titleChange(props.route.params.filename);
                        contentChange(_content);
                    }
                })
        }
        return () => isSubscribed = false;
    }, []);

    const save = () => {
        if (_tin.min <= title.length <= _tin.max) {
            writeNote(title, content, _tin.format)
                .then(() => console.log('success write note'))
                .catch(() => console.log('failed write note'));
        } else {
            // handle bad topic
            console.log('bad topic');
            console.log({title, _tin});
        }
    };

    return (<View style={styles.main}>
        <Text style={styles.txt}>{t("editnote")}</Text>
        <TextInput
            style={styles.tinput}
            onChangeText={titleChange}
            value={title}
            placeholder={t("titlehere")}
        />
        <TextInput
            style={styles.tarea}
            onChangeText={contentChange}
            value={content}
            placeholder={t("contenthere")}
            multiline={true}
        />
        <Button style={styles.btn} mode='contained' onPress={() => save()}>{t("save")}</Button>
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
        width: 200,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    tarea: {
        height: 160,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    tinput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    } 
});

export default NoteEditor;