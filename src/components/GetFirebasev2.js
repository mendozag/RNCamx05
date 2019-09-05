import * as firebase from 'firebase';  
import React, { Component } from 'react';  
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';  
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';  
//import ListComponent from './ListComponent';
import "firebase/firestore"

class GetFirebasev2 extends Component {

    constructor(){
        console.log('entra al constructor');
        super();
        this.state = {
            //isLoading: true,
            //prueba: 'CAMX State',
            //allCarreras: []
            speed: 10
        };
        //console.log('State',this.state);
    }

 /*    componentDidMount() {
        console.log('ComponentDidMount');
        db=firebase.firestore(firebaseApp);
        console.log('db esta',db.collection('carreras'));
        db.collection('carreras').onSnapshot(function(doc){
            console.log("Current Data: ", doc);
            this.unsubscribe = doc;
        })
      } */

    componentDidMount =()=>{
        this.setState({
            speed: 25
        });

        db=firebase.firestore(firebaseApp);
        console.log('db => ',db);
        db.collection('carreras').get().then((snapshot) => {
            console.log('docs => ',snapshot.docs);
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            })
        })

        //console.log('carrerasFb => ',carrerasFb);
        
        //carrerasFb.on('value', function(snapshot){
        //     console.log("Est´adentro del on"); 
        //});
        
        //this.setState({
        //    speed: 35
        //});
    }


    // componentDidMount = (querySnapshot) => {
    //     //console.log('State 2',this.state);
    //     //console.log('Entra onCollectionUpdate');
    //     db=firebase.firestore(firebaseApp);
    //     //console.log('State 4',this.state);
    //     var carreras = db.collection('carreras').get().then(function(querySnapshot) {
    //         const carreras = [];
    //         querySnapshot.forEach(function(doc) {
    //             const { title, description, editionYear} = doc.data();
    //             //console.log(doc.id, " => ", doc.data());
    //             carreras.push({
    //                 key: doc.id,
    //                 doc, 
    //                 title,
    //                 description,
    //                 editionYear
    //             });
    //             //console.log('carreras',carreras);
    //         });
    //         //console.log('carreras3',carreras);
    //     });
    //     //console.log('State 11',this.state);
    //     this.setState({
    //         allCarreras: carreras,
    //         prueba: 'CAMX DOS State',
    //         isLoading: false
    //     });
    //     //console.log('State 12',this.state);
    // }

    render(){
        // //console.log('State 9',this.state);
        // if(this.state.isLoading){
        //     //console.log('State 10',this.state);
        //     //console.log('En el if State');
        //     return(
        //       <View style={styles.activity}>
        //         <ActivityIndicator size="large" color="#0000ff"/>
        //       </View>
        //     )
        //   }
        return(
            <View style={{
                flex:1,
                marginTop:30
            }}>
            <Text>{this.state.speed}</Text>
                 

            </View>


        )
    }
}

/* const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
}); */

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingBottom: 22
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
export default GetFirebasev2;

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