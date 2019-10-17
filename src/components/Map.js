import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

export class Map extends Component {
    render() {
        return (
            <View style={styles.containerMap}>
                <MapView 
                    style={styles.map} 
                    initialRegion={{
                        latitude:21.1251392, 
                        longitude:-101.66813619999999,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                        }}
                >
                        <Marker coordinate={{
                            latitude:21.1251392, 
                            longitude:-101.66813619999999,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}>
                        </Marker>
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerMap: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    map: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    },
})

export default Map
