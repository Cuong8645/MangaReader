import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import Chapter from './itemChapter';
 


var arrayChapter = ["Chapter 1", "Chapter 2", "Chapter 1", "Chapter 2", "Chapter 2", "Chapter 1", "Chapter 2"]


export default class MangaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            dataSource: {}
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
          console.log('dataSource',this.state.dataSource)
      }
   
    render(){
        const{ navigation} = this.props;
        return (
            <View style={styles.Container}>
                <Text style={{fontSize: 20, marginLeft:130}}>Manga Detail</Text>
                <View style={styles.search}>
                
 
                </View>
                <Text >
                 {JSON.stringify(navigation.getParam('name'))}
                </Text>    
                <Text >
                 {JSON.stringify(navigation.getParam('id'))}
                </Text>                           

              
                <FlatList style={styles.chaplist}
                    data={arrayChapter}
                    renderItem={({item, index}) =>
                    <Chapter Chapter = {item}></Chapter>
          }
        />
            

            </View>
        );
    }
}
const styles = StyleSheet.create({
    Container:{
        justifyContent: 'center',
       
        
    },
    img:{
        marginTop:20,
        marginLeft: 50,
        width:300,
        height:300, 
    },
    dec:{
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
    },
    search:{

    },
    chaplist:{
        marginLeft: 60,
        marginTop: 10,
        marginRight: 50,
        marginBottom:10,
        borderWidth: 1, 
        borderColor: '#009688'
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