import React, { Component } from 'react'
import { 
    Text, 
    View,
    AppRegistry,
    ScrollView,
    ViewPagerAndroid,
    StyleSheet
 } from 'react-native'

export default class HorizontalScrollView extends Component {
    render() {
        //let screenWidth = Dimensions.get('window').width;
        //let screenHeight = Dimensions.get('window').height;
        return (
            <ViewPagerAndroid
            style={{flex:1}}
            initialPage={0}>
                <View
                    style={{
                        backgroundColor:'pink'
                    }}>
                    <Text>
                        Screen 1
                    </Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}
