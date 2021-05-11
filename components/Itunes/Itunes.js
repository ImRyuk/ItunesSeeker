import React, {useState} from 'react'
import {View, Text} from 'react-native';
import {Search} from "./Search";
import {SearchedList} from "./SearchedList";
import axios from "axios";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Itunes = () => {

    const [tracks, setTracks] = useState([]);

    const sendRequest = (title) => {
        axios.get('https://itunes.apple.com/search?term=' + title +'&entity=musicTrack')
            .then(function (response) {
                const tracks = response.data.results;
                setTracks(tracks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <View className="SearchComponent">
            <Search handleSendRequest={sendRequest} />
            <SearchedList tracks={tracks}/>
        </View>
    )
}