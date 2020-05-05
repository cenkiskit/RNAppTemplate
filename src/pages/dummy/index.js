import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from '../homepage/style';

class DummyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={style.container}>
                <Text>Here's Dummy Page.</Text>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={style.buttonText}>Click me to change page</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default DummyPage;