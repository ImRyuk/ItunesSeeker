import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Image} from "react-native-elements";
import {connect, useDispatch, useSelector} from 'react-redux';
import {addTrack, check, removeTrack} from "../../redux/actions";

const style = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    button: {
        padding: 10,
        color: 'white',
        borderRadius: 4,
        backgroundColor: "#E7414D",
        textAlign: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
    primaryText: {
        margin: 20,
        fontWeight: 'bold'
    },
    textItem:{
        margin: 20
    },
    logo: {
        width: 200,
        height: 200
    }
});

const TextItem = (props) => {
    return(
        <Text style={style.textItem}>{props.value}</Text>
    )
}

export const Track = (props) => {
    const tracks = useSelector(state => state.tracks.tracks)
    const dispatch = useDispatch();

    console.log(tracks);
    const add = () => {
        dispatch(addTrack(track));
    };

    const remove = () => {
        dispatch(removeTrack(track));
    };

    const ifExists = track => {
        if (tracks.filter(item => item.id === track.trackId).length > 0) {
            return remove();
        }
        return add();
    };

    const track = props.route.params.track;

    return(
        <View style={style.container}>
            <Image
                source={{ uri: track.artworkUrl100 }}
                style={style.logo}
            />
            <Text style={style.primaryText}>{track.trackName}</Text>
            <TextItem value={track.artistName}/>
            <TextItem value={track.releaseDate.slice(0,4)}/>
            <TextItem value={track.primaryGenreName}/>
            <TouchableOpacity
                style={style.button}
                onPress={() => ifExists(track)}
            >
                <Text style={style.buttonText}>Ajouter à la librairie</Text>
            </TouchableOpacity>
        </View>
    )
}
