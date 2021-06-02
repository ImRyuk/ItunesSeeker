import React, {Component, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AirbnbRating, Image} from "react-native-elements";
import { useDispatch, useSelector} from 'react-redux';
import {addTrack, removeTrack} from "../../redux/actions";

const style = StyleSheet.create({
    container: {
        flex:1
    },
    view: {
        alignContent: 'center',
        alignItems: 'center',
        margin: 30
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

export const LocalTrack = (props) => {
    const tracks = useSelector(state => state.tracks.tracks)
    const [track, setTrack] =  useState(props.route.params.track);
    const dispatch = useDispatch();

    const ifExists = (track) => {
        if (tracks.filter(item => item.id === track.trackId).length > 0) {
            return true;
        }
        return false;
    };


    const add = () => {
            dispatch(addTrack(track));
    };

    const remove = () => {
        dispatch(removeTrack(track));
    };

    const ratingCompleted = (rating) => {
        setTrack({...track,  rating: rating,
        });
    }

    return(
        <ScrollView style={style.container}>
            <View style={style.view}>
                <Image
                    source={{ uri: track.image }}
                    style={style.logo}
                />
                <Text style={style.primaryText}>{track.name}</Text>
                <TextItem value={track.artistName}/>
                <TextItem value={track.year}/>
                <TextItem value={track.genre}/>
                {ifExists(track)? null :
                    <AirbnbRating
                        onFinishRating={ratingCompleted}
                        count={10}
                        reviews={["Terrible", "Bad", "OK", "Not bad", "Good", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                        defaultRating={track.rating}
                        size={20}
                    />
                }
                <TouchableOpacity
                    style={{textAlign: "center",borderRadius: 4,color: 'white',padding: 10,backgroundColor: ifExists(track) ? '#2D3038' : '#E7414D'}}
                    onPress={() => ifExists(track) ? remove() : add()}
                >
                    <Text style={style.buttonText}>{ifExists(track)? 'Retirer' : 'Ajouter'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
