import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView,TouchableHighlight,AsyncStorage,
} from 'react-native';
export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: "",

        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#1c313a" />
                <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
                    <TouchableWithoutFeedback style={styles.container}
                        onPress={Keyboard.dismiss}>

                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={{ uri: 'https://lh3.googleusercontent.com/bVG8fpwWkK9Or7ji54jvAY_RJhtkMoil1TZbFHoIc7ut5u8wuPwbNvhbif_dWTxbEOo' }}>
                                </Image>
                                <Text style={styles.title}>Manga Reader</Text>
                            </View>


                            



                            <View style={styles.infoContainer}>
                            <View style={styles.inputContainer}>
                            <Image style={styles.inputIcon} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLfl81YKHb9AEy61r4qRbJ66WZI7Z3ghKZ_phuBEk7rS1Ugec&s'}}/>
                            <TextInput style={styles.inputs}
                                placeholder="User account"
                                keyboardType="email-address"
                                underlineColorAndroid='transparent'
                                onChangeText={(username) => this.setState({username})}/>
                            </View>
                                {/* <TextInput style={styles.input}
                                    value={this.state.username}
                                    onChangeText={username => this.setState({ username })}
                                    placeholder="Enter username/email"
                                    placeholderTextColor='#455a64'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                /> */}
                                <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Enter password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({password})}/>
      </View>

                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login() } >
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>

                                <TouchableHighlight style={styles.buttonR} onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Text style={styles.textLink}>Register</Text>
                                </TouchableHighlight>
                                
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }
    login() {

        fetch('http://192.168.128.177:8080/webservice/login.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson == "true") {
                  
                    this.props.navigation.navigate('Home');
                    
                } else {
                    alert("Login Failed");
                    return (false);
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgb(32, 53, 70)', 
        backgroundColor: "#0869ff",
        flexDirection: 'column',

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 10,
        flex: 1,
        backgroundColor: '#0869ff'
    },
    logo: {
        width: 130,
        height: 120,

    },
    title: {
        color: '#ffeb3b',
        fontSize: 35,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
        fontWeight: 'bold',
        marginBottom: 150
    },
    infoContainer: {
        marginBottom: 200,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
    
        // backgroundColor: 'red'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:'100%',
        height:50,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:50,
        marginLeft:20,
        marginRight:20,
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
        backgroundColor: '#6193ab',
        paddingVertical: 15,
        borderRadius: 30,
        height: 50,
        marginBottom: 20


    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15
    },
    textLink:{
        textAlign: 'center',
        color: '#222',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonR:{
        marginTop: 70,
        borderBottomColor:'green',
        borderBottomWidth: 5,
        width: '40%',
        marginLeft: 100
    },

})
