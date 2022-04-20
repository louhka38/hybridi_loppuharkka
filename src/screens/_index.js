import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';
import Dev from './dev';
import Loading from './loading';
import TriggerLoading from './trigger-loading';
import Settings from './settings';
import Sensor from './sensor';

export const screenkeys = [
    'home',
    'mynotes',
    'note-editor',
    'create-note',
    'dev',
    'loading',
    'trigger-loading',
    'sensor',
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
    Settings
];

export default screenkeys.map((skey, i) => {
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})