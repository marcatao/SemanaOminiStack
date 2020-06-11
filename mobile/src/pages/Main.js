import React, { useState, useEffect } from  'react';
import { StyleSheet, Image, View, Text} from 'react-native'
import MapView, {Marker, Callout} from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
 
function Main(){

    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
      async function loadInitialPosition(){
        const { granted } = await requestPermissionsAsync();
        if(granted){
            const {coords} = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const { latitude, longitude } = coords;
            setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
            })
        }
      }  
      loadInitialPosition();
    },[]);

if(!currentRegion){
    return null
}
    return (
         <MapView  initialRegion={currentRegion} style={styles.map}>
             <Marker coordinate={{ latitude:-27.211164, longitude: -49.6374491 }}>
                <Image style={ styles.avatar} source={{ uri:'https://avatars2.githubusercontent.com/u/30732929?s=460&u=2e8082198f59a91f4bd01bfa938c357f93fe5480&v=4'}} />
                <Callout>
                    <View styte={styles.callout}>
                        <Text style={styles.devname}>Nome</Text>
                        <Text style={styles.devbio}>Bio</Text>
                        <Text style={styles.devtechs}>Techs</Text>
                    </View>
                </Callout>
             </Marker>
         </MapView>    
        );
}
const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar:{
        width:54,
        height:54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#F88',
    },

    callout:{
        width: 260,
    },
    devname:{
        fontWeight:'bold',
        fontSize:16,
    },
    devbio:{
        color:'#666',
    },
    devtechs:{
       marginTop:5,
    }
})
export default Main;

