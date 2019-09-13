import React, { Component } from 'react';
import { 
    AppRegistry, 
    Image, 
    View, 
    Text, 
    StyleSheet, 
    ActivityIndicator, 
    FlatList,
    TouchableOpacity,
    ListItem 
} from 'react-native';
import flatListData  from "./FlatListData";
import { material } from 'react-native-typography';
import Card from './Card';

// class FlatListItem extends Component{
//     render() {
//         console.log('URL => ', material.url);
        
//         return(
//             <View style={{
//                 flex: 1,
//                 backgroundColor: this.props.index % 2 == 0 ? 'gray' : 'white',
//                 flexDirection: 'column'
//             }}>
//                 <View style={{
//                     flex:3,
//                     height:150,
//                     padding:10
//                 }}>
//                     <Image
//                         style={{
//                             position: 'absolute',
//                             top: 0,
//                             left: 0,
//                             bottom: 0,
//                             right: 0,
//                             }}
//                         source={{uri: this.props.item.url}}
//                     />
//                 </View>
//                 <View style={{
//                     padding:10,
//                     flexDirection: 'row'
//                 }}>
//                 <View style={{
//                     padding:10,
//                     flexDirection: 'row'
//                 }}>
//                     <Text style={material.title}>{this.props.item.distance}</Text>
//                 </View>
//                     <Text style={material.title}>{this.props.item.edition} {this.props.item.title} {this.props.item.editionYear}</Text>
//                     <Text style={material.subheading}>{this.props.item.mapa.ubicacion.area},{this.props.item.mapa.ubicacion.city}</Text>
//                 </View>
//             </View>
//         );
//     }
// }

{/* renderItem={({ item, index }) => {
                        console.log(`Item= ${JSON.stringify(item)}, index=${index}`);
                        return(
                            <FlatListItem item={item} index={index}>
                                
                            </FlatListItem>
                        );
        
                    }} */}

class GetFirebase5 extends Component {
    render() {
        return (
                <FlatList
                    style={styles.container}
                    data={flatListData}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({ item }) => <Card item={item} />}
                    //renderItem{({ item }) => <Card item={item}/>}
                />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF'
    }
})

//export const firestore = firebase.firestore()
export default GetFirebase5;