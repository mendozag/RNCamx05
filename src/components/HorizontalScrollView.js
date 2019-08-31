import React, { Component } from 'react'
import { 
    Text, 
    View,
    AppRegistry,
    ScrollView,
    Dimensions
 } from 'react-native'

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                scrollIndicatorInsets={{top: 10, left:10, bottom: 20, right:10}} //ios
                onMomentumScrollBegin={()=>{
                    
                }}
                onMomentumScrollEnd={()=>{

                }}
                onScroll={()=>{

                }}
            >
                <View
                style={{
                    backgroundColor:'pink',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text 
                    style={{
                        fontSize:20,
                        padding: 15,
                        color: 'darkred',
                        textAlign: 'center'
                    }}>
                    Screen 1
                </Text>
                </View>

                <View
                style={{
                    backgroundColor:'navajowhite',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text 
                    style={{
                        fontSize:20,
                        padding: 15,
                        color: 'maroon',
                        textAlign: 'center'
                    }}>
                    Screen 2
                </Text>
                </View>

                <View
                style={{
                    backgroundColor:'cyan',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text 
                    style={{
                        fontSize:20,
                        padding: 15,
                        color: 'darkblue',
                        textAlign: 'center'
                    }}>
                    Screen 3
                </Text>
                </View>
            </ScrollView>
        )
    }
}
