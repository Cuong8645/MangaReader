import React, { Component } from 'react';
import {FlatList, StyleSheet, Text,ScrollView, View, TextInput, Button, Alert, Image, TouchableOpacity, TouchableHighlight } from 'react-native';



export default class MangaItem extends Component {

    constructor(props) {
        super(props);
        this.state = {   
            idMangaChap:{}, 
            };
      }     

      getItem(idChap){
        fetch('http://192.168.128.177:8080/webservice/Select_Image.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idChap: idChap,
             
                }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                   
    
                    this.setState({
                      isLoading: false,
                      arrayMangaI: responseJson,
                    }, function(){
                    });
            
                  })
                  .catch((error) =>{
                    console.error(error);
                  });
      };
      goToPrevious(idManga,soChap, indexChap){
        //   if(soChap > 1){
        //       var numChap = soChap - 1;
        //       fetch('http://192.168.128.177:8080/webservice/Select_ImageNewChap.php', {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             numChap: numChap,
        //             idManga: idManga,
             
        //         }),
        //     })
        //         .then((response) => response.json())
        //         .then((responseJson) => {
                   
    
        //             this.setState({
        //               isLoading: false,
        //               idMangaChap: responseJson,
        //             }, function(){
        //             });
            
        //           })
        //           .catch((error) =>{
        //             console.error(error);
        //           });

        //   }

      }
      goToNext(idManga,soChap, indexChap){
        // var numChap = soChap + 1;
        //   if(soChap < indexChap){
        //     fetch('http://192.168.128.177:8080/webservice/Select_ImageNewChap.php', {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             numChap: numChap,
        //             idManga: idManga,
             
        //         }),
        //     })
        //         .then((response) => response.json())
        //         .then((responseJson) => {
                   
    
        //             this.setState({
        //               isLoading: false,
        //               arrayMangaI: responseJson,
        //             }, function(){
        //             });
            
        //           })
        //           .catch((error) =>{
        //             console.error(error);
        //           });


        //   }


      }
    render(){
        const{ navigation} = this.props;
        var idChap = navigation.getParam('id');
        var idManga = navigation.getParam('id_Manga')
        var soChap = navigation.getParam('soChapter')
        var indexChap = navigation.getParam('indexChap')
        this.getItem(idChap);

        return (
            
            <View style={styles.Container}>
                <Text style={styles.title}>Chapter: {navigation.getParam('soChapter')}</Text>
                
                <ScrollView>
                <FlatList style={styles.chaplist}
                    data={this.state.arrayMangaI}
                    renderItem={({item, index}) => 
                   
                    <Image style={styles.img} source={{uri: item.image}} />
                   
                   

                }
                keyExtractor={item => item.id}
                />


                <View style={{height:140}} >
                    <TouchableHighlight style={styles.buttonR} onPress={() => this.goToPrevious(idManga,soChap, indexChap)}>
                        <Text style={styles.textLink}>previous </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonR1} onPress={() => this.goToNext(idManga,soChap, indexChap)}>
                        <Text style={styles.textLink2}>next</Text>
                    </TouchableHighlight>
                </View>


                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chaplist:{
        marginTop: 10,
        paddingBottom:10,
        borderWidth: 1, 
        height:'100%',
        width:'100%',
        borderColor: '#009688'
    },
    textLink:{
        textAlign: 'center',
        color: '#222',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonR:{
        marginTop: 40,
        borderBottomColor:'green',
        borderBottomWidth: 5,
        width: '20%',
        marginLeft: 100
    },
    textLink2:{
        textAlign: 'center',
        color: '#222',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonR1:{
        marginTop: -25,
        borderBottomColor:'green',
        borderBottomWidth: 5,
        width: '20%',
        marginLeft: 250
    },
    img:{
        marginTop:0,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'black',
        width: '100%',
        resizeMode: 'contain',
        height:600, 
    },
    title:{
        fontSize: 20,
        color: 'green',
        marginLeft:130
    },
    Container:{
        justifyContent: 'center',
       
        
    },
});