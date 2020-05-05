import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { style } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Welcome to React Native Template</Text>

                <TouchableOpacity
                    style={style.button}
                    onPress={() => this.props.navigation.navigate('Dummy')}>
                    <Text style={style.buttonText}>Click me to change page</Text>
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 10 }}>
                    <Text style={style.createdBy}>Created by Cenk İskit</Text>
                </View>
            </View>
        )
    }
};

export default HomePage;