import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
  
      TouchableWithoutFeedback, StatusBar,
   SafeAreaView, Keyboard, TouchableOpacity,
      KeyboardAvoidingView,AsyncStorage,
  } from 'react-native';
export default class DetailPhim extends Component {

    constructor(props) {
        super(props);
      };

    getDetail(int ){
        alert(this.state.itemId);
    }
    render() {
        //const { navigation } = this.props;
        //const itemId = navigation.getParam('idPhim', "MMMM");
        return(
            <View>
                {/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.getDetail(itemId)}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight> */}
            </View>   
        );
    }
}

const styles = StyleSheet.create({
buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:20,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
});