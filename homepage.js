import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,FlatList,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Button, ToolbarAndroid
} from 'react-native';
import Manga from './itemManga';
export default class homepage extends Component {
    // static navigationOptions = {
    //     header: null
    // };

    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            isLoading: true
        };
    }
    
    componentDidMount(){
        return fetch('http://10.0.3.2/Select_Manga.php')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }


    render() {
        return  (
            
            <View style={styles.container}>
                <Text style={{fontSize: 20, marginLeft:130}}>Manga Home</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    onChangeText={(text) => this.setState({ keyword: text })}
                    value={this.state.keyword}
                
                />
                <TouchableOpacity 
                  style = { styles.TouchableOpacityStyle } 
                  onPress={() => this.goSearch()}> 
                    <Text>Search</Text>
 
                </TouchableOpacity>

                
                <FlatList style={{marginTop:10}}
                data={this.state.dataSource}
                renderItem={({item}) => (<Manga tenMG={item.manga_name} desMG={item.manga_des} img={item.image} mangaid={item.manga_id}/>)}
                keyExtractor={item => item.id}
                />                
            </View>
        )
    }
    goSearch()
    {
        fetch('http://10.0.2.2:8080/exe4/Select_search.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                keyword: this.state.keyword,
         
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                  isLoading: false,
                  dataSource: responseJson,
                }, function(){
        
                });
        
              })
              .catch((error) =>{
                console.error(error);
              });
 
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    textInput:{
        height: 40,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10, 
        borderColor: '#009688',
        borderWidth: 1, 
        borderRadius: 20
    },
    TouchableOpacityStyle:
    {  
        marginLeft:310,
        marginTop:-40,
       width: '10%'
  
     },
})