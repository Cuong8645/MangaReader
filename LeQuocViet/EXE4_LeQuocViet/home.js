import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,FlatList,Picker,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Button, ToolbarAndroid
} from 'react-native';
import ItemPhim from './itemPhim';


export default class homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            theloai: "All",
            keyword: "",
            dataSource: null
        };
    }

    componentDidMount(){
        return fetch('http://10.0.2.2:8080/exe4/Select_Phim.php')
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

      getTheLoai(){
        fetch('http://10.0.2.2:8080/exe4/Select_theLoai.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                theloai: this.state.theloai,
         
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












      goSearch(){

        
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


      render() {
        return  (
            <View style={styles.container}>




            <Picker 
                selectedValue={this.state.theloai}
                style={{height: 50, width: 370}}
                onValueChange={(itemValue, itemIndex) =>{
                this.setState({theloai: itemValue,});
            
                }
            }>
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Kinh di" value="kinh di" />
                <Picker.Item label="Khoa học viễn tưởng" value="khoa hoc vien tuong" />
                <Picker.Item label="Anime" value="anime" />
            </Picker>

            <TouchableOpacity 
                  style = { styles.TouchableOpacityStyle } 
                  onPress={() => this.getTheLoai()}> 
                    <Text>Search</Text>
 
                </TouchableOpacity>





                <Text style={{fontSize: 20, marginLeft:130}}>Home Page</Text>














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
                renderItem={({item}) => <ItemPhim tenphim={item.Ten} ngayKC={item.ngaykhoichieu} img={item.hinh} gia={item.gia} idP={item.id} mota={item.mota} theloai={item.theloai}/>}
         
                /> 






            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    TouchableOpacityStyle:
    {  
        marginLeft:310,
        marginTop:-40,
       width: '10%'
  
     },
     textInput:{
      height: 40,
      marginLeft: 5,
      marginRight: 5,
      paddingStart:20,
      marginTop: 10, 
      borderColor: '#009688',
      borderWidth: 1, 
      borderRadius: 20,
  },

})