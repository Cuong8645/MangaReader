import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
  } from 'react-native';
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        state = {
            username: '',
            password: '',
        }
      }
      onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
      }
    render() {
      return (
          <View style={styles.container}>
          <View style={styles.box}>
            
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri:'https://image.flaticon.com/icons/svg/1828/1828453'}}/>
          <TextInput style={styles.inputs}
              placeholder="User account"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Enter password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}/>
      </View>
	  
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.register()}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>


        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableHighlight>



      </View>
      </View>
      );
    }


    register= () => {
        {
            fetch('http://10.0.2.2:8080/exe4/SignUp.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  username : this.state.username,
 
                  password : this.state.password,
 
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
 
            }).catch((error) =>
            {
                console.error(error);
            });
        }
    }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff9d9d',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:300,
        height:50,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:50,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
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
    loginText: {
      color: 'white',
    },
    box:{
      paddingTop: 20,
      marginTop: -100,
      height:300,
      width:350,
      paddingLeft: 20,
      backgroundColor: "#d952ff",
      borderRadius: 20,
    }
  });