import React from 'react';
import { View, Text, ScrollView, StyleSheet, LogBox } from 'react-native';
import * as Sensors from 'react-native-sensors';
import { useTranslation } from 'react-i18next';

type SType = keyof typeof Sensors.SensorTypes;
const axis = [ "x", "y", "z" ];
const availableSensors = {
    accelerometer: axis,
    gyroscope: axis,
    magnetometer: axis,
    barometer: ["pressure"]
}

export type MyProps = {}
type MyState = {
    [key: string]: any;
    subscription?: any;
    count?: number|string|boolean|null|undefined|object;
    error?: any;
}

const Value: React.FC<{ name: string, value: number }> = ({ name, value }) => (
    <View>
        <Text>{name}:</Text>
        <Text>{new String(value).substr(0, 8)}</Text>
    </View>
)

const genericSensorView = (sensorType: SType, fields: string[]) => {
    const sensor$: any = Sensors[sensorType];
    return class SensorComp extends React.Component<MyProps,MyState,any> {
        constructor(props: any) {
            super(props);
            const initialValue = fields.reduce((carry, val) => ({ ...carry, [val]: 0 }), {});
            this.state = initialValue;
        }
        componentDidMount() {
            const subscription = sensor$.subscribe({
                next: (v: any) => this.setState({ ...v }),
                error: (e: any) => this.setState({ error: e }),
                complete: () => console.info('complete')
            });
            this.setState({ subscription });
        }
        componentDidUpdate() {
            // do something when component update
        }
        componentWillUnmount() {
            this.state.subscription.unsubscribe();
            this.setState({ subscription: null });
        }

        render() {
            return (<View>
                <Text>Values</Text>
                {fields.map((valueName) => (
                    <Value key={sensorType + valueName} name={valueName} value={this.state[valueName]} />
                ))}
            </View>);
        }
    }
}

const viewComponents = Object.entries(availableSensors).map(([name, values]: any) => genericSensorView(name, values));

export const Sensor: React.FC = () => {
    const { t, i18n } = useTranslation();
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
    const exampleList: string[] = [
        'eka',
        'toka',
        'kolmas'
    ];

    return (<View style={styles.main}>
        <Text style={styles.txt}>{t("HelloFromSensor")}</Text>
        <ScrollView>
            {/* exampleList.map((item) => <View key={"item-"+item}><Text>{item}</Text></View>) */}
            {viewComponents.map((Comp:any, index) => <Comp key={"sensor-"+index} />)}
        </ScrollView>
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
})
export default Sensor;