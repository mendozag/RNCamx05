import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, ActivityIndicator, FlatList, ListItem } from 'react-native';
import flatListData  from "./FlatListData";

class FlatListItem extends Component{
    render() {
        return(
            <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'whitesmoke' : 'white',
                padding:10
            }}>
                <Text>{this.props.item.title}</Text>
                <Text>{this.props.item.birthyear}</Text>
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