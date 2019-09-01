import * as firebase from 'firebase';  
import React, { Component } from 'react';  
import { View, Text, StyleSheet, FlatList } from 'react-native';  
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';  
//import ListComponent from './ListComponent';
import "firebase/firestore"

/* class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'gray':'cyan'
            }}>
                <Text>Titulo</Text>
                <Text>Descripcion</Text>
            </View>
        )
    }
} */


class HelloFirebase extends Component {

    constructor(){  
        super();
        this.state = {
            isLoading: true,
            carreras: []
        };
    }
    render(){
        console.log('Entra después del constructor');
        var carreras = firebase.firestore().collection('carreras').get().then(function(querySnapshot) {
            const carreras = [];
            querySnapshot.forEach(function(doc) {
                const { title, description, editionYear} = doc.data();
                //console.log(doc.id, " => ", doc.data());
                carreras.push({
                    key: doc.id,
                    doc, 
                    title,
                    description,
                    editionYear
                });
                console.log('carreras',carreras);
            });
            console.log('carreras3',carreras);
            this.setState({
                carreras,
                isLoading: False
            })
            //console.log('Carreras en el State',this.state.carreras);
        });
        return(
            <View style={{
                flex:1,
                marginTop:30
            }}>
            <Text>Carreras Atléticas MX</Text>
                 

            </View>


        )
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});

//export const firestore = firebase.firestore()
export default HelloFirebase;

const firebaseConfig = {  
        apiKey: "AIzaSyAX-G1FkPKL8x0_h27OUFQnCQPKj8mVLz0",
        authDomain: "camx-f7ee7.firebaseapp.com",
        databaseURL: "https://camx-f7ee7.firebaseio.com",
        projectId: "camx-f7ee7",
        storageBucket: "camx-f7ee7.appspot.com",
        messagingSenderId: "95641955299",
        appId: "1:95641955299:web:5344faaa9b22ec90"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);