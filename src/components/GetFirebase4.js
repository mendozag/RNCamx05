import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, StyleSheet, ActivityIndicator, FlatList, ListItem } from 'react-native';
import flatListData  from "./FlatListData";
import { material } from 'react-native-typography';

class FlatListItem extends Component{
    render() {
        console.log('URL => ', material.url);
        
        return(
            <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'gray' : 'white',
                flexDirection: 'column'
            }}>
                <View style={{
                    flex:3,
                    height:150,
                    padding:10
                }}>
                    <Image
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            }}
                        source={{uri: this.props.item.url}}
                    />
                </View>
                <View style={{
                    padding:10,
                    flexDirection: 'row'
                }}>
                <View style={{
                    padding:10,
                    flexDirection: 'row'
                }}>
                    <Text style={material.title}>{this.props.item.distance}</Text>
                </View>
                    <Text style={material.title}>{this.props.item.edition} {this.props.item.title} {this.props.item.editionYear}</Text>
                    <Text style={material.subheading}>{this.props.item.mapa.ubicacion.area},{this.props.item.mapa.ubicacion.city}</Text>
                </View>
            </View>
        );
    }
}

class GetFirebase4 extends Component {
    render() {
        return (
             <View style={styles.container}>
                <FlatList
                    data={flatListData}
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
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white',
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
export default GetFirebase4;