import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';
import Dev from './dev';
import Loading from './loading';
import TriggerLoading from './trigger-loading';
import Settings from './settings';
import Sensor from './sensor';
import Cube from './cube';
import { StackRouter } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


export const screenkeys = [
    'home',
    'mynotes',
    'note-editor',
    'create-note',
    'dev',
    'loading',
    'trigger-loading',
    'sensor',
    'cube',
    'settings'
];


export const screencomponents = [
    Home,
    MyNotes,
    NoteEditor,
    CreateNote,
    Dev,
    Loading,
    TriggerLoading,
    Sensor,
    Cube,
    Settings
];

export default screenkeys.map((skey, i) => {
    /*const { t, i18n } = useTranslation();
    if (skey == 'home') {
        skey = `${t("home")}`
    }
    if (skey == 'mynotes') {
        skey = `${t("mynotes")}`
    }
    if (skey == 'create-note') {
        skey = `${t("createnote")}`
    }
    if (skey == 'loading') {
        skey = `${t("loading")}`
    }
    if (skey == 'trigger-loading') {
        skey = `${t("triggerloading")}`
    }
    if (skey == 'sensor') {
        skey = `${t("sensor")}`
    }
    if (skey == 'settings') {
        skey = `${t("settings")}`
    }*/
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})