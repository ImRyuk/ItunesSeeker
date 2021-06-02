import React from 'react'
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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

export const Local = (props) => {

    const navigation = props.navigation;
    const tracks = useSelector(state => state.tracks.tracks);
    console.log(useSelector(state => state));
    const dispatch = useDispatch();

    const renderItem = ({ item, index }) => (
        <ListItem style={style.container} linearGradientProps={{
            colors: index %2 === 0 ? ['#7F7FD5', '#86A8E7', '#91EAE4'] : ['#fe8c00', '#f83600'],
            start: { x: 0, y: 1 },
            end: { x: 0.2, y: 0 },
        }}
                  ViewComponent={LinearGradient} >
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
                <ListItem.Title style={style.title}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={style.subtitle}>{item.artistName}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron onPress={() => {
                navigation.navigate('LocalTrack', {
                    track: item
                });
            }} color="white" />
        </ListItem>
    )

    return (
        <View className="movies">
            <Text h2>Ma liste de musiques</Text>
            <FlatList
                data={tracks}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}
export default Local;