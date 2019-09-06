import * as firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ActivityIndicator, FlatList, ListItem } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';
//import ListComponent from './ListComponent';
import "firebase/firestore"

class FlatListItem extends Component{
    render() {
        return(
            <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
            }}>
                <Text>{this.props.item.title}</Text>
                <Text>{this.props.item.birthyear}</Text>
            </View>
        );
    }
}

class GetFirebase3 extends Component {
    constructor() {
        super();
        //const carreraList = document.querySelector('#carreras-list');
        this.state = {
            isLoading: true,
            prueba: 'CAMX State',
            carreras: []
        };
    }

    //renderItem = ({ item }) => {
        // return (
        //     <View>
        //         <Text>{item.title}</Text>
        //         {/* <Image source={{ uri: }}/> */}
        //     </View>
        // )
    //}

    componentDidMount = (querySnapshot) => {
        console.log('firebaseApp: ', firebaseApp);

        //setup the firestore
        db = firebase.firestore();
        console.log('db:', db);

        //var carrerasFb = db.collection('carreras').get().then(function(querySnapshot) {
        db.collection('carreras').get().then((snapshot) => {
            console.log('Entró al GET');
            console.log('SnapShot => ', snapshot.docs);
            //    console.log('Carreras Inicializarla: ',carreras);
            //    var count = 0;
            //    console.log('count',count);
            var carrerasArray = [];
            
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
                carrerasArray.push(doc.data())
               // console.log(JSON.parse(doc.data().toString()));
                //const { title, description, editionYear} = doc.data();
                //console.log('Title: ', title);
                //console.log('Description: ', description);
                //console.log('editionYear: ', editionYear);
            });
            console.log('Carreras Array ',carrerasArray);
            
            this.setState({
                isLoading: false,
                carreras: carrerasArray
            });
        });
    }

    render() {
        console.log('State Dentro IF: ', this.state);
        if (this.state.isLoading) {
            console.log('En el if State');
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }
        return (
             <View style={styles.container}>
                {/* <FlatList
                    data={[{ key: 'primera linea' }, { key: 'segunda linea' }]}
                    renderItem={({ item }) => <Text style={{ color: 'black' }}>{item.key}</Text>}
                /> */}
                <FlatList
                    data={this.state.carreras}
                    renderItem={({ item, index }) => {
                        console.log(`Item= ${JSON.stringify(item)}, index=${index}`);
                        return(
                            <FlatListItem item={item} index={index}>
                                
                            </FlatListItem>
                        );
        
                    }}
                />  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingBottom: 22,
        paddingTop: 100,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

//export const firestore = firebase.firestore()
export default GetFirebase3;

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