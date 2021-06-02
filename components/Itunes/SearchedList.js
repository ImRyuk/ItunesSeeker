import React from 'react';
import {View, Text, FlatList, StyleSheet} from "react-native";
import {Avatar, ListItem} from "react-native-elements";
import {LinearGradient} from "expo-linear-gradient";

const style = StyleSheet.create({
    container: {
        paddingBottom: 20,
        backgroundColor: "#F8F8F8"
    },
    subtitle: {
        color: 'white'
    },
    title: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export function SearchedList (props) {
    const tracks = props.tracks;
    const navigation = props.navigation;
    const renderItem = ({ item, index }) => (
        <ListItem style={style.container} linearGradientProps={{
            colors: index %2 === 0 ? ['#7F7FD5', '#86A8E7', '#91EAE4'] : ['#fe8c00', '#f83600'],
            start: { x: 0, y: 1 },
            end: { x: 0.2, y: 0 },
        }}
                  ViewComponent={LinearGradient} >
            <Avatar source={{uri: item.artworkUrl100}} />
            <ListItem.Content>
                <ListItem.Title style={style.title}>{item.trackName}</ListItem.Title>
                <ListItem.Subtitle style={style.subtitle}>{item.artistName}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron onPress={() => {
                navigation.navigate('Track', {
                    track: item
                });
            }} color="white" />
        </ListItem>
    )

    return (
        <View className="movies">
            <FlatList
                data={tracks}
                keyExtractor={item => item.trackId.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}
export default SearchedList;