import React from 'react';
import { 
    Image, 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';


class Card extends React.PureComponent {
    render() {
        // var dateCard = this.props.item.date;
         var months = ["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];
        
        const timestamp = this.props.item.date.seconds;
        console.log('Timestamp: ',timestamp);
        const dateaqui = new Date(timestamp * 1000);
        console.log('Date', dateaqui );
        var monthCard = months[dateaqui.getMonth()];
        console.log('Mes: ', monthCard);
        var dayCard = dateaqui.getDate();
        console.log('Numero Dia: ', dayCard);
        


        return (
                 <TouchableOpacity style={styles.card}>
                    <Image style={styles.cardImage} source={{uri: this.props.item.url}}/>
                    <View style={{
                        paddingLeft:10,
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
                                    fontSize:32,
                                    fontWeight:'bold',
                                    color:'red'
                                }}>{dayCard}</Text>
                                <Text style={{
                                    fontSize:16,
                                    fontWeight:'bold',
                                    color: 'gray'
                                }}>{monthCard}</Text>
                            </View>
                            <View style={{
                                paddingLeft:10,
                                flexDirection: 'column'
                            }}>
                                <View>
                                    <Text style={styles.cardTextTitle}>{this.props.item.edition} {this.props.item.title} {this.props.item.editionYear}</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        paddingLeft:10
                                    }}>{this.props.item.mapa.ubicacion.area}, {this.props.item.mapa.ubicacion.city}, {this.props.item.mapa.ubicacion.region}</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        paddingLeft:10,
                                        paddingBottom: 10,
                                    }}>Distancias: {this.props.item.distance} kms. Hora: {this.props.item.time}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                 </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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
    cardTextTitle:{
        paddingTop:10,
        paddingLeft:10,
        fontSize:16,
        fontWeight:'bold'
    }
})

export default Card;