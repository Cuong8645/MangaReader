import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import DescriptionBox from 'react-description-box';
import Chapter from './itemChapter';
 


var arrayChapter = ["Chapter 1", "Chapter 2", "Chapter 1", "Chapter 2", "Chapter 2", "Chapter 1", "Chapter 2"]


export default class MangaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ""};
        this.state = {content: "aatbaergbjmhgpfQWgkap[zegsddfndnxdjsrtjmdtjsjsrxtfjyftjmdftjmdftgmdcftjvmdfthndxjgsrxftkgmxrtxfgjmcgyvkdmtfjgdftjgdnftjgmcftgjnctfgjccygjbcfjghtcfgkftygkhdmcdtmtdjdsrjdrhdjdtdmsedrmsejrtjBzrt[jgjFNWE'4[HOBW[490HPWo#i4HSOOS4NXBOSE;WZONCOXDREXFIBSXTF;RHLGD;VOXLFLCT;HFGV]]]]"};
        
      }
      goSearch(){

      }
   
    render(){
        return (
            <View style={styles.Container}>
                <Text style={{fontSize: 20, marginLeft:130}}>Manga Detail</Text>
                <View style={styles.search}>
                
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    onChangeText={(text) => this.setState({ search: text })}
                    value={this.state.search}
                
                />
                <TouchableOpacity 
                  style = { styles.TouchableOpacityStyle } 
                  onPress={() => this.goSearch()}>
                    <Text>Search</Text>
 
                </TouchableOpacity>
                </View>
                    
        
                <Image style={styles.img} source={{uri:"http://st.nettruyen.com/data/comics/28/a-story-about-wanting-to-commit-suicide-3445.jpg"}}/>
            

                <View style={styles.dec}>
                    <Text>{this.state.content}</Text>
                   
                </View>

              
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