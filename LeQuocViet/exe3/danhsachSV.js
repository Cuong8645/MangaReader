import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import SinhVien from './SinhVien';

var arraySinhVien = [];

var radio_props = [
  {label: 'Nam', value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCutyOAvcns6biGo5wXjBCgC0bH8Mkipm_BUovPAJ6rXxMAv_" },
  {label: 'Nu', value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7JTtoL8j5YpydYlX4x38CnXAzuV2xLwPHWulOy6YBb3uSj35" }
];

// class user {
//   constructor(name, phone){
//     this.name = name;
//     this.phone = phone;
//   }
// }
// class user {
//     constructor (name, phone)
//     {
//       this.name = name;
//       this.phone = phone;
//     }
//     setName (name){
//       this.name = name;
//     }
//     getName () {
//       return this.name;
//     }
//     setPhone (phone) {
//       this.phone = phone;
//     }
//     getPhone (){
//       return this.phone;
//     }
//   };

export default class DemoFlatlist extends Component {


  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.state = {phone: ""};
    this.state = {reload: null};
    
  }

  reloadFlat = (keyname) =>{
      this.setState((prevState) => {
          return {
            reload: keyname
          };
      });
  }
  varTest(text) {
    let x = ""
    if (x== text || text == null) {
        return true;
    }
    return false
}
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, marginLeft:130}}>Quản lý sinh viên</Text>

        <TextInput
          style={{height: 50, marginLeft: 20, marginRight: 20}}
          placeholder="Name"
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
        />
        <TextInput
          style={{height: 50, marginLeft: 20, marginRight: 20}}
          placeholder="Phone"
          onChangeText={(text) => this.setState({ phone: text })}
          value={this.state.phone}
        />



        <RadioForm
          radio_props={radio_props}
          initial={""}
          onPress={(value) => {this.setState({value:value})}}
        />




        
        <Button
          style={{height: 30, margin: 20}}
          title="Save"
          onPress={()=>{
              if(this.varTest(this.state.phone) == true || this.varTest(this.state.name) == true){
                  alert("Vui lòng điền đầy đủ thông tin");
                  return;
              }
              const newSV = {name: this.state.name , phone : this.state.phone,  gioitinh : this.state.value}
              arraySinhVien.push(newSV) 
             
              this.reloadFlat(this.state.name);
          }}
        />
        <Text style={{fontSize: 16, marginLeft:130}}>Danh sách sinh viên</Text>
        <FlatList
          data={arraySinhVien}
          renderItem={({item, index}) =>
          <SinhVien name = {item.name} phone= {item.phone} gioitinh= {item.gioitinh} parentFlatlist={this}></SinhVien>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
