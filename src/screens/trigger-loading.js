import React from 'react';
import { ActivityIndicator, View, Text, Button, StyleSheet } from 'react-native';

export class TriggerLoading extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        
        
    }
    
    startLoading() {
        if (this.state.isLoading) { // still loading something
            console.log('still loading');
        } else { // its not loading, can be triggered
            this.setState({isLoading: true});
            setTimeout(() => {
                this.setState({isLoading: false});
            }, 3000);
            // some async/promise operation
            // after completed, do something about it
            // response msg
            // actions based on response
            // finally set isLoading state to false
        }
    }
    stopLoading() {
        if (!this.state.isLoading) { // still loading something
            console.log('not loading');
        } else { // its not loading, can be triggered
            this.setState({isLoading: false});
        }
    }

    render() {
        return (<View style={styles.main}>
            <Text/>
            <Text/>
            <ActivityIndicator 
                size='large' 
                color='white' 
                animating={this.state.isLoading}
                hidesWhenStopped='true'
                />
            <Text/>
            <Button
                style={styles.btn}
                disabled={this.state.isLoading}
                title="Trigger Loading"
                onPress={() => this.startLoading()}
            />
            <Text/>
            <Button
                style={styles.btn}
                disabled={!this.state.isLoading}
                title="Stop Loading"
                onPress={() => this.stopLoading()}
            />
        </View>);
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "aqua",
        height: 900
    },
    btn: {
        width: 200,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 8
    }
})

export default TriggerLoading;