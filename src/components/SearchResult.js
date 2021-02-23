import React from 'react'
import { FlatList, Text, TouchableWithoutFeedback, View } from 'react-native'

const Item = ({ item, select }) => (
    <TouchableWithoutFeedback onPress={() => select(item.woeid)}>
        <View style={{borderBottomWidth:1, borderBottomColor:"black", padding:10}}>
            <Text>
                {item.title}
            </Text>
        </View>
    </TouchableWithoutFeedback>
    
    );
export const SearchResult = (props) => {
    return (
        !!props.results && (
        <>
            <FlatList 
            keyExtractor={(item) => `${item.woeid}`}
            data={props.results}
            renderItem={( { item }) => ( <Item select={props.setSelected} item={item} /> 
            )}
            />
             {!props.results.length && !!props.searched && <Text>No Results</Text>}   
        </>
        )
    );
};
