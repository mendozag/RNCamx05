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

class GetFirebase5 extends Component {
    render() {
        return (
             <View style={styles.container}>
                 <TouchableOpacity style={styles.card}>
                     <Image style={styles.cardImage} source={{uri:'https://firebasestorage.googleapis.com/v0/b/camx-f7ee7.appspot.com/o/imagenescarreras%2Fyuyin.jpg?alt=media&token=70cca63a-e268-495d-ace8-a8cbd2f10c37'}}/>
                     <Text style={styles.cardText}>Card Title</Text>
                 </TouchableOpacity>
                {/* <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        console.log(`Item= ${JSON.stringify(item)}, index=${index}`);
                        return(
                            <FlatListItem item={item} index={index}>
                                
                            </FlatListItem>
                        );
        
                    }}
                />   */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF'
    },
    card: {
        backgroundColor: '#FFF',
        marginBottom:10,
        marginLeft: '2%',
        width: '96%',
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
            width:3,
            height:3
        }
    },
    cardImage:{
        width:'100%',
        height:140,
        resizeMode:'cover'
    },
    cardText:{
        padding:10,
        fontSize:16
    }
})

//export const firestore = firebase.firestore()
export default GetFirebase5;