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
        return fetch('http://192.168.128.177:8080/webservice/Select_Manga.php')
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
        const {navigation} = this.props;
        return  (
            
            <View style={styles.container}>
               
                



              

                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
              placeholder="Search"
              keyboardType="Search"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ keyword: text })}/><TouchableOpacity 

                  onPress={() => this.goSearch()}> 
              <Image style={styles.inputIcon} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoM6hSmnSJHrHN04idD8IWOXbGfg7MYBXuQwofa7vtPwIEvDtROg&s'}}/>
                

              
                    </TouchableOpacity>


        </View>

                
                
                <FlatList style={{marginTop:10}}
                data={this.state.dataSource}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',{
                        img: item.image,
                        des: item.manga_des,
                        name: item.manga_name,
                        id: item.manga_id
                    })}>
                <Manga tenMG={item.manga_name} desMG={item.theloai} img={item.image} mangaid={item.manga_id} />
                </TouchableOpacity>)}
                keyExtractor={item => item.id}
                
                />               
            </View>
        )
    }
    goSearch()
    {

        
        fetch('http://192.168.128.177:8080/webservice/Select_search.php', {
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
        padding: 0,
    },
   
    TouchableOpacityStyle:
    {  
        marginLeft:310,
        marginTop:-40,
       width: '10%'
  
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
      marginRight:25,
      justifyContent: 'center'
    },
    inputContainer: {
        borderBottomColor: '#c60000',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 2,
        width:'100%',
        height:50,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        marginTop:20,
    },
})