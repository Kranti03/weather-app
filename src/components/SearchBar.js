import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export const SearchBar = (props) => {
    return (
    <TextInput
    style={styles.searchBar}
      value={props.city}
      placeholder="Search for something..."
      placeholderTextColor="black"
      onChangeText={(text) => props.setCity(text)}
    />
    )
}

const styles = StyleSheet.create({
    searchBar :{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor: 'black',
    },
})