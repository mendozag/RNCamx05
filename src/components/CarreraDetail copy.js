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
    ListItem
} from 'react-native';
import { Container } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { black } from 'ansi-colors';

var data = [];



class CarreraDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data2: [],
            error: null,
            query: "",
            fullData: [],
        };

        data = CarreraDetailData.map(function (item) {
            return {
                birthyear: item.birthyear,
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
                web: item.web
            };
        });
        console.log("data", data.region);
    }

    async getData() {
        console.log("CarreraDetailData", CarreraDetailData);
        fullData = CarreraDetailData;
    }

    componentDidMount() {
        this.getData();
    }

    _goBack = () => console.log('Went back');
    _onSearch = () => console.log('Searching');
    _onMore = () => console.log('Shown more');


    handleSearch = (text) => {
        console.log("Search text:", text);
        this.setState({ query: text });
    };



    renderHeader = () => {
        return <SearchBar placeholder="Busca carrera..." lightThem round onChangeText={this.handleSearch} />;
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

                <Image style={styles.detailsImage} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/camx-f7ee7.appspot.com/o/imagenescarreras%2Fyuyin.jpg?alt=media&token=70cca63a-e268-495d-ace8-a8cbd2f10c37" }} />
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
                            }}>21</Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'gray'
                            }}>SEP</Text>
                        </View>
                        <View style={{
                            paddingLeft: 10,
                            flexDirection: 'column'
                        }}>
                            <View>
                                <Text style={styles.cardTextTitle}>X Carrera Yuyin 2019</Text>
                            </View>
                            <View>
                                <Text style={{
                                    paddingLeft: 10
                                }}>León, Guanajuato, México</Text>
                            </View>
                            <View>
                                <Text style={{
                                    paddingLeft: 10,
                                    paddingBottom: 10,
                                }}>Distancias: 10 kms. Hora: 7:30</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider style={{
                        color: black
                    }} />
                    <View style={{
                        paddingLeft: 10,
                        paddingTop: 10,
                        paddingBottom: 15,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            paddingTop: 5,
                            flexDirection: 'column'
                        }}>
                            <Text style={{
                                color: 'red'
                            }}>Horario:</Text>
                        </View>
                        <View style={{
                            paddingLeft: 10,
                            paddingTop: 5,
                            flexDirection: 'column'
                        }}>
                            <View>
                                <Text style={{
                                    paddingLeft: 10
                                }}>{data.url}</Text>
                            </View>
                        </View>
                    </View>
                    {/* ##### FIN RENGLON ##### */}
                    {/* ##### INICIA RENGLON ##### */}
                    <Divider style={{
                        color: black
                    }} />
                    <View style={{
                        paddingLeft: 10,
                        paddingTop: 10,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            paddingTop: 5,
                            flexDirection: 'column'
                        }}>
                            <Text style={{
                                color: 'red'
                            }}>Costo:</Text>
                        </View>
                        <View style={{
                            paddingLeft: 10,
                            paddingTop: 5,
                            flexDirection: 'column'
                        }}>
                            <View>
                                <Text style={{
                                    paddingLeft: 10
                                }}>$200.00</Text>
                            </View>
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
    }
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