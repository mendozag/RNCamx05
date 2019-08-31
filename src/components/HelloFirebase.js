import * as firebase from 'firebase';  
import React, { Component } from 'react';  
import { View, Text, StyleSheet } from 'react-native';  
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';  
import ListComponent from './ListComponent';
import "firebase/firestore"

class HelloFirebase extends Component {

    constructor(){  
        super();

        this.state = {
            nuevo: '',
            lista: [
                        {
                            id: 1,
                            name: 'pollo',
                            done: false
                        },
                        {
                            id: 2,
                            name: 'sopa',
                            done: false
                        },
                        {
                            id: 3,
                            name: 'ropa',
                            done: false
                        }
                    ]
        }

    }

    changeDone = (item) => {
        console.log(item);
        this.state.lista = this.state.lista.filter(i => i !== item);
        this.state.lista.push(item);
        this.setState({lista: this.state.lista});
    }

    agregarItem = () => {
        let nuevo = this.state.nuevo
        nuevo = {id:nuevo,name:nuevo,done:false};
        //firebase.database().ref('items').push(nuevo);
        //firebase.firestore.collection(items).add(nuevo);
        var addYourDoc = firebase.firestore().collection('items').add(
            nuevo
          ).then(ref => {
            console.log('document ID: ', ref.name);
          });
        this.state.lista.push(nuevo);
        this.setState({lista: this.state.lista});
        console.log(nuevo);


    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                <Content>

                    <Input
                        value={this.state.nuevo}
                        placeholder='Que otra cosa necesitas?'
                        onChangeText={nuevo=>this.setState({nuevo})}
                        />


                    <View style={styles.container}>
                    <ListComponent
                        lista={this.state.lista}
                        changeDone={this.changeDone}
                        borrar={this.borrar}
                        />
                    </View>
                </Content>
                    <View style={styles.container}>
                        <ListComponent
                            lista={this.state.lista}
                            changeDone={this.changeDone}
                            />
                    </View>
                </Content>
                <Footer>  
                    <FooterTab>
                        <Button 
                            full
                            onPress={this.agregarItem}
                        >
                            <Text>Agregar</Text>
                                </Button>
                    </FooterTab>
                </Footer> 
            </Container>
        );
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