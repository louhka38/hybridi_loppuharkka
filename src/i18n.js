import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    EN: {
        translation: {
            Finnish: "Finnish",
            English: "English",
            Swedish: "Swedish",
            home: "Home",
            mynotes: "My Notes",
            createnote: "Create Note",
            editnote: "Edit Note",
            loading: "Loading",
            triggerloading: "Start loading",
            sensor: "Sensor",
            settings: "Settings",
            save: "Save",
            titlehere: "Title",
            contenthere: "Content",
            HelloFromSettings: "Hello from Settings",
            HelloFromSensor: "Hello from Sensor!",
            Increment: "Increment",
            Decrement: "Decrement",
            Count: "Count",
            Values: "Values"
        }
    },
    FI: {
        translation: {
            Finnish: "Suomi",
            English: "Englanti",
            Swedish: "Ruotsi",
            home: "Koti",
            mynotes: "Muistioni",
            createnote: "Luo muistio",
            editnote: "Muokkaa muistiota",
            loading: "Lataa",
            triggerloading: "Laukaise lataus",
            sensor: "Sensori",
            settings: "Asetukset",
            save: "Tallenna",
            titlehere: "Nimi",
            contenthere: "Sisältö",
            HelloFromSettings: "Asetustervehdys!",
            HelloFromSensor: "Tervetuloa sensorinäkymään!",
            Increment: "Lisäys",
            Decrement: "Vähennys",
            Count: "Määrä",
            Values: "Arvot"
        }
    },
    SW: {
        translation: {
            Finnish: "Finska",
            English: "English",
            Swedish: "Svenska",
            home: "Home",
            mynotes: "Mina anteckningar",
            createnote: "Skapa anteckning",
            editnote: "Ändra anteckning",
            loading: "Laddar",
            triggerloading: "Utlös laddning",
            sensor: "Sensor",
            settings: "Inställningar",
            save: "Spara",
            titlehere: "Namn",
            contenthere: "Innehåll",
            HelloFromSettings: "Hejsan från inställningar!",
            HelloFromSensor: "Sensorhälsningar!",
            Increment: "Ökning",
            Decrement: "Minskning",
            Count: "Sammanräkning",
            Values: "Värden"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: "EN",
        interpolation: {
            escapeValue: false
        }
    });
