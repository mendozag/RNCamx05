import React, { Component } from 'react';
import { Surface, Divider, Appbar, DataTable } from 'react-native-paper';
import CarreraDetailData from "./CarreraDetailData";
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
    ListItem,
    Linking
} from 'react-native';
import { Container } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { black } from 'ansi-colors';
import MapView, { Marker } from 'react-native-maps'

class CarreraDetail extends Component {
    render() {
        //const { partners, onPartnerDetails } = props;
        var months = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];
        const timestamp = CarreraDetailData[0].date.seconds;
        console.log('Timestamp: ',timestamp);
        const dateaqui = new Date(timestamp * 1000);
        console.log('Date', dateaqui );
        var monthCard = months[dateaqui.getMonth()];
        console.log('Mes: ', monthCard);
        var dayCard = dateaqui.getDate();
        var yearCard = dateaqui.getUTCFullYear();
        console.log('Numero Dia: ', dayCard);
        

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

                <Image style={styles.detailsImage} source={{ uri: CarreraDetailData[0].url }} />
                <View style={{
                    paddingLeft: 10,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        //padding:10,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            paddingTop: 5,
                            flexDirection: 'column'
                        }}>
                            <Text style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: 'red'
                            }}>{dayCard}</Text>
                            <Text style={{
                                fontSize: 16,
                                marginTop: -8,
                                fontWeight: 'bold',
                                color: 'gray'
                            }}>{monthCard}</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                marginTop: -4,
                                color: 'black'
                            }}>{yearCard}</Text>
                        </View>
                        <View style={{
                            paddingLeft: 10,
                            flexDirection: 'column'
                        }}>
                            <View>
                                <Text style={styles.cardTextTitle}>{CarreraDetailData[0].edition} {CarreraDetailData[0].title} {CarreraDetailData[0].editionYear}</Text>
                            </View>
                            <View>
                                <Text style={{
                                    paddingLeft: 10
                                }}>{CarreraDetailData[0].mapa.ubicacion.city}, {CarreraDetailData[0].mapa.ubicacion.region}</Text>
                            </View>
                            <View>
                                <Text style={{
                                    paddingLeft: 10,
                                    paddingBottom: 10,
                                }}>Horario: {CarreraDetailData[0].time} </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View style={styles.celdaIzq}>
                            <Text style={styles.textoCeldaIzq}>Distancias:</Text>
                        </View>
                        <View style={styles.celdaDer}>
                            <View style={styles.viewTextCelDer}>
                                <Text style={styles.textoCeldaDer}>{CarreraDetailData[0].distance} kms.</Text>
                            </View>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View style={styles.celdaIzq}>
                            <Text style={styles.textoCeldaIzq}>Inscripciones:</Text>
                        </View>
                        <View style={styles.celdaDer}>
                            <View style={styles.viewTextCelDer}>
                                <Text style={styles.textoCeldaDer}>{CarreraDetailData[0].registerPlace}</Text>
                            </View>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    
                    
                    
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View style={styles.celdaIzq}>
                            <Text style={styles.textoCeldaIzq}>Salida en:</Text>
                        </View>
                        <View style={styles.celdaDer}>
                            <View style={styles.viewTextCelDer}>
                                <Text style={styles.textoCeldaDer}>{CarreraDetailData[0].mapa.ubicacion.address}</Text>
                            </View>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    {/* ##### INICIO MAPA ##### */}
                    <View style={styles.containerMap}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: CarreraDetailData[0].mapa.ubicacion.mapPosition.lat,
                                longitude: CarreraDetailData[0].mapa.ubicacion.mapPosition.lng,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005
                            }}
                        >
                            <Marker coordinate={{
                                latitude: CarreraDetailData[0].mapa.ubicacion.markerPosition.lat,
                                longitude: CarreraDetailData[0].mapa.ubicacion.markerPosition.lng 
                            }}>
                            </Marker>
                        </MapView>
                    </View>
                    {/* ##### FIN MAPA ##### */}
                    {/* ##### INICIA RENGLON DESCRIPCION ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View style={{}}>
                            <Text style={styles.textoCeldaIzq}>Más Información:</Text>
                            <View style={styles.viewTextCelDer}>
                                <Text style={{}}>{CarreraDetailData[0].description}</Text>
                            </View>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View style={styles.celdaIzq}>
                            <Text style={styles.textoCeldaIzq}>Más Información:</Text>
                        </View>
                        <View style={styles.celdaDer}>
                            <View style={styles.viewTextCelDer}>
                                
                            </View>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View >
                            <Text style={styles.viewTextLink} onPress={() => Linking.openURL(CarreraDetailData[0].registerUrl)}>Inscribirme en Línea</Text>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */} 
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View >
                            <Text style={styles.viewTextLink} onPress={() => Linking.openURL(CarreraDetailData[0].web)}>Abrir web del organizador</Text>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider />
                    <View style={styles.renglon1}>
                        <View >
                            <Text style={styles.viewTextLink} onPress={() => Linking.openURL(CarreraDetailData[0].facebook)}>Abrir facebook del organizador</Text>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    {/* ##### INICIA RENGLON ##### */} 
                    <Divider />
                    <View style={styles.renglon1}>
                        <View >
                            <Text style={styles.viewTextLink} onPress={() => Linking.openURL(CarreraDetailData[0].web)}>Abrir web del organizador</Text>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                </ScrollView>
            </Container>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF'
    },
    renglon1: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 15,
        flexDirection: 'row'
    },
    celdaIzq: {
        paddingTop: 5,
        flexDirection: 'column'
    },
    textoCeldaIzq: {
        color: 'red'
    },
    celdaDer: {
        paddingLeft: 10,
        paddingRight: 10,
        flexWrap: 'wrap',
        paddingTop: 5,
        flexDirection: 'column',
        flex: 1
    },
    viewTextCelDer: { flexDirection: 'row' },
    textoCeldaDer: {
        paddingLeft: 10
    },
    viewTextLink: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    textoCeldaDer: {
        paddingLeft: 10
    },
    card3: {
        marginBottom: 10
    },
    surfacePhoto: {
        flex: 1,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        backgroundColor: '#FF0'
    },
    cardTextTitle: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    detailsImage: {
        width: '100%',
        height: 140,
        resizeMode: 'cover'
    },
    containerMap: {
        height: 200
    },
    map: {
        height: 200
    },
})

export default CarreraDetail;

/* try {
    const response = await fetch('https://facebook.github.io/react-native/movies.json');
    response.json();
    console.log("response", response);
    console.log("response.json ", response.json);
    const responseJson = undefined;
    console.log("responseJson", responseJson);
}
catch (error) {
    console.error(error);
} */

/* birthyear: item.birthyear,
category: item.category,
seconds: item.date.seconds,
nanoseconds: item.date.nanoseconds,
description: item.description,
destacado: item.destacado,
distance: item.distance,
edition: item.edition,
editionYear: item.editionYear,
enable: item.enable,
facebook: item.facebook,
idMoneda: item.idMoneda,
idOrganization: item.idOrganization,
level: item.level,
address: item.mapa.ubicacion.address,
area: item.mapa.ubicacion.area,
city: item.mapa.ubicacion.city,
lat: item.mapa.ubicacion.markerPosition.lat,
lng: item.mapa.ubicacion.markerPosition.lng,
region: item.mapa.ubicacion.region,
price: item.price,
priceSpecial: item.priceSpecial,
ranking: item.ranking,
registerPlace: item.registerPlace,
registerUrl: item.registerUrl,
time: item.time,
url: item.url,
urlResized: item.urlResized,
web: item.web */