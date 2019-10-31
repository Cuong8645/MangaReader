import React,{Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

var icon;
export default class Chapter extends Component{
    render(){
        return (
            <View style={styles.itemChap}>


                <View style={styles.containerContent}>
                    <Text> {this.props.Chapter} </Text>
                </View>       
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemChap: {
      justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: 'lightgreen',
      width:300,
      height: 40,
      marginBottom : 1
    },
  
    containerContent: {
      marginLeft: 100
    },
  });
  