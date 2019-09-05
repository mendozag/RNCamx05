import React, { Component } from 'react';
import { View, Text, AppRegistry, FlatList, StyleSheet } from 'react-native';
import flatListData  from "./FlatListData";
import * as Firebase from "firebase"

let firebaseConfig ={    
        apiKey: "AIzaSyAX-G1FkPKL8x0_h27OUFQnCQPKj8mVLz0",
        authDomain: "camx-f7ee7.firebaseapp.com",
        databaseURL: "https://camx-f7ee7.firebaseio.com",
        projectId: "camx-f7ee7",
        storageBucket: "camx-f7ee7.appspot.com",
        messagingSenderId: "95641955299",
        appId: "1:95641955299:web:5344faaa9b22ec90"
    };

class FlatListenItem extends Component {
    constructor(props) {
      super(props)
      this.state = {
         
      };
    };
    
    
    //componentWillMount() {
    //    Firebase.initializeApp(firebaseConfig);
    //}
    //var carreras = Firebase.database().ref('/carreras');
    render(){
        console.log("firebaseConfig:",firebaseConfig);
        console.log("length",Firebase.apps.length);
        
        if (!Firebase.apps.length) {
            Firebase.initializeApp(firebaseConfig);
        }
        //var database = firebaseConfig.database();
        var carreras = Firebase.database().ref('/carreras');
        console.log("carreras: ",Firebase.database().ref('/carreras'));
        console.log(carreras.title);
        

        return(
            <Text>"Hola Firebase"</Text>
        )

            /* return this.state.carreras.map((data) => {
              return (
                <View><Text>{data.time}</Text></View>
              )
            }) */
        
        
    }
}

export default class BasicFlatList extends Component {
  render() {
    return (
      <View
        style={{
            flex:1,
            marginTop: 22
        }}>
        <FlatList
            data={flatListData}
            renderItem={({item,index})=>{
                return (
                    <FlatListenItem item={item} index={index}>
                        </FlatListenItem>);
            }}
        >

        </FlatList>
      </View>
    );
  }
}
