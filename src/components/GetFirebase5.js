import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import {
    AppRegistry,
    Image,
    View,
    Text,
    StyleSheet,
    Fragment,
    ScrollView,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    ListItem
} from 'react-native';
import flatListData from "./FlatListData";
import { material } from 'react-native-typography';
import Card2 from './Card2';
import Card3 from './Card3';
import { Container } from 'native-base';
import { SearchBar } from 'react-native-elements';

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
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data2:[],
            error: null,
            query:"",
            fullData: [],
        };
    }

    _goBack = () => console.log('Went back');
    _onSearch = () => console.log('Searching');
    _onMore = () => console.log('Shown more');
    
    handleSearch = (text) => {
        console.log("Search text:", text);
        
        this.setState({ query: text });
    };

    renderHeader = () => {
        return <SearchBar placeholder="Busca carrera..." lightThem round onChangeText={this.handleSearch}/>;
    };

    render() {
        //const { partners, onPartnerDetails } = props;

        return (

            <Container style={styles.container}>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="Carreras Atléticas MX"
                    />
                    <Appbar.Action icon="search" onPress={this._onSearch} />
                    <Appbar.Action icon="more-vert" onPress={this._onMore} />
                </Appbar.Header>
                
                <FlatList
                    data={flatListData.sort((a, b) => String(a.date.seconds).localeCompare(String(b.date.seconds)))}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => item.destacado == "2" ?
                        <View>
                            <Card2 item={item} />
                        </View> :
                        <View>
                            <Card3 item={item} />
                        </View>
                    }
                    
                    ListHeaderComponent = {this.renderHeader}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#45425A'
    },
    card3: {
        marginBottom: 10
    }
})

//export const firestore = firebase.firestore()
export default GetFirebase5;

{/* <Container style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Title" subtitle="Subtitle" />
            </Appbar.Header>
                <FlatList
                    data={flatListData}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({ item }) => <Card3  item={item} />}
                />
            </Container> */}
                                {/* ListHeaderComponent={this.renderHeader} */}
                                // data={flatListData.sort((a, b) => a.title.localeCompare(b.title))}
                                // data={flatListData.sort((a, b) => String(a.date.seconds).localeCompare(String(b.date.seconds)))}

