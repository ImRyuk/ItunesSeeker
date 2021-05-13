import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native';
import {Search} from "./Search";
import {SearchedList} from "./SearchedList";
import axios from "axios";

const styles = StyleSheet.create({
    container: {
        height:'80%'
    },
    content: {
        alignItems: 'center'
    },
    item: {}
});

export const Itunes = ({navigation}) => {

    const [tracks, setTracks] = useState([]);

    const sendRequest = (title) => {
        axios.get('https://itunes.apple.com/search?term=' + title +'&entity=musicTrack')
            .then(function (response) {
                console.log(response.data.results)
                if(response.data.results.length === 0){
                    alert('aucun résultat!')
                } else {
                    const tracks = response.data.results;
                    setTracks(tracks);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <View style={styles.container} className="SearchComponent">
            <Search style={styles.content} handleSendRequest={sendRequest} />
            <SearchedList navigation={navigation} tracks={tracks}/>
        </View>
    )
}