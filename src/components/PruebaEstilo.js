import {colors, fonts, padding, dimensions} from '../styles/styles.js'
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
import { Right } from 'native-base';

export default class PruebaEstilo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Basic Header 2</Text>
        <Text style={styles.section}>Basic Section Text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: padding.sm,
      paddingVertical: padding.lg,
      width: dimensions.fullWidth
    },
    header: {
      fontSize: fonts.lg,
      fontFamily: fonts.primary,
      backgroundColor: "orange"
    },
    section: {
      paddingVertical: padding.lg,
      paddingHorizontal: padding.xl
    }
})
