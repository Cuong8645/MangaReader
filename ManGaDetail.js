import React, { Component } from 'react';
import {FlatList, StyleSheet, Text,ScrollView, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import Chapter from './itemChapter';
 




export default class MangaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            dataSource: {},
            
            };
        
      }
      componentDidMount(){
        return fetch('http://192.168.128.177:8080/webservice/Select_Manga.php')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              index: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
          
      }


      getCount(idManGa){
        fetch('http://192.168.128.177:8080/webservice/getCountManGa.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idManGa: idManGa,
         
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                  isLoading: false,
                  index: responseJson,
                }, function(){
        
                });
        
              })
              .catch((error) =>{
                console.error(error);
              });
              
      }


      
      getChapter(idManGa){
        fetch('http://192.168.128.177:8080/webservice/Select_Manga_Chapter.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idManGa: idManGa,
         
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                  isLoading: false,
                  arrayChapter: responseJson,
                }, function(){
        
                });
        
              })
              .catch((error) =>{
                console.error(error);
              });
        
          
      }
    render(){
        const{ navigation} = this.props;
        var idManGa = navigation.getParam('id');
        this.getChapter(idManGa);
        this.getCount(idManGa)
        return (
            <View style={styles.Container}>
                
                <View>
                    <Image style={styles.img} source={{uri: navigation.getParam('img')}} />
                </View>
                <Text style={styles.titleText}>
                {navigation.getParam('name')}
                </Text> 


                <ScrollView style={styles.scrollView}>
                   

                <Text style={styles.dec}>
                 {navigation.getParam('des')}
                </Text>    

              
                <FlatList style={styles.chaplist}
                    data={this.state.arrayChapter}
                    renderItem={({item, index}) =>(
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Manga',{
                            id_Manga:navigation.getParam('id'),
                            soChapter:item.soChapter,
                            id: item.id,
                            indexChap: this.state.index,
                        })}>
                        <Chapter Chapter = {item.soChapter}/>
                    </TouchableOpacity>)}
                     keyExtractor={item => item.id}
                />
       
        <View style={{height:140}} >

        </View>
            </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    Container:{
        justifyContent: 'center',
       
        
    },
    scrollView: {
        backgroundColor: '#caacfe',
      },
    titleText: {
        marginTop: -40,
        marginLeft: 10,
        marginRight:10,
        fontSize: 25,
        color:'#fe9d0b',
        fontWeight: 'bold',
    },
    img:{
        marginTop:0,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'black',
        width: '100%',
        resizeMode: 'contain',
        height:250, 
    },
    dec:{

        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
    },
    search:{

    },
    chaplist:{
        marginTop: 10,
        paddingBottom:10,
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