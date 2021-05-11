import React, {useState} from 'react';
import {TextInput, View, Button} from "react-native";

export const Search = (props) => {
    const [search, setSearch] = useState('');

    const handleSubmit = () => {
        props.handleSendRequest(search)
        setSearch(search)
    }

    return (
        <View className="search">
            <TextInput placeholder="Chercher un film" className="search-box" type="text" onChangeText={search => setSearch(search)} value={search}/>
            <Button className="button" type="submit" onPress={handleSubmit} title="Chercher"/>
        </View>
    )
}
export default Search;