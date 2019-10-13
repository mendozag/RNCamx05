import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";


class Card3 extends React.PureComponent {
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
        console.log('URL: ',this.props.item.url);
        var str = ""; 
        var titleCard = str.concat(this.props.item.edition," ",this.props.item.title," ",this.props.item.editionYear)

        return (
            <Card style={styles.card3}>
                <Card.Title title= {titleCard} titleStyle={styles.titleCard} subtitleStyle={styles.subtitleCard} subtitle="León, Guanajuato. Medio Maratón" 
                    left={(props) => <View><Text style={styles.numberDate}>{dayCard}</Text><Text style={styles.monthDate}>{monthCard}</Text></View>} />                
            </Card>
                 
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
        },
    },
    descriptionCard:{
        fontSize:11,
        lineHeight:11,
        marginTop:15
    },
    titleCard:{
        fontSize:14,
        marginBottom:-10,
        marginTop:-15
    },
    subtitleCard:{
        fontSize:10,
        marginBottom:-10
    },
    card3: {
        marginBottom:5,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5
    },
    numberDate: {
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        marginBottom:-5
    },
    monthDate: {
        fontSize:12,
        fontWeight:'bold',
        color:'darkgray'
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

export default Card3;