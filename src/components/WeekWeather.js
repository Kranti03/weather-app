import React from 'react'
import { FlatList, Text, View, Image } from 'react-native'

const Item = ({item}) => (  
<View style={{ borderBottomColor:"black", borderBottomWidth: 1, padding: 10, flexDirection: "row" }}>
    <View style={{ alignItems: "center", marginRight: 10}}>
    <Image style={{ width: 50, height: 50}}
    source={{uri: `https://www.metaweather.com/static/img/weather/png/64/${item.weather_state_abbr}.png`}}/>
    <Text>{item.weather_state_name}</Text>
    </View>
    <View style={{justifyContent: "center"}}>
        <Text style={{ fontWeight: "bold"}}>{item.applicable_date}</Text>
        <Text>Max: {parseInt(item.max_temp)} degrees</Text>
        <Text>Min: {parseInt(item.min_temp)} degrees</Text>
    </View>
</View>
);
export const WeekWeather = ({ weather }) => {
    return (
       <View>
           <View style={{ borderBottomWidth: 1, borderBottomColor:"black" }}>
           <Text style={{ fontSize: 18, fontWeight: "bold", paddingHorizontal:10 }}>
               {weather.title}
            </Text>
            </View>
           <FlatList data={weather.consolidated_weather} 
           renderItem={({item}) => <Item item={item} />}
           />
       </View>
    )
}
