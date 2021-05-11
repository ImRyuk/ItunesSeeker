import React from 'react';
import {View, Text, FlatList} from "react-native";
import {Avatar, ListItem} from "react-native-elements";

export function SearchedList (props) {
    const tracks = props.tracks;
    //const navigation = props.navigation;
    console.log(tracks);

    const renderItem = ({ item, i }) => (
        <ListItem key={i} bottomDivider>
            <Avatar source={{uri: item.artworkUrl100}} />
            <ListItem.Content>
                <ListItem.Title>{item.trackName}</ListItem.Title>
                <ListItem.Subtitle>{item.artistName}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>

    )

    return (
        <View className="movies">
            <Text h2>Ma liste de musiques</Text>
            <FlatList
                data={tracks}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
export default SearchedList;