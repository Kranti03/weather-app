import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from './src/components/SearchBar';
import { SearchResult } from './src/components/SearchResult';
import { searchCity, cityWeather } from './src/services/Api';
import { WeekWeather } from './src/components/WeekWeather';


export default function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState(null);
  const [selected, setSelected] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
   !!city &&
   city.length >=3 &&
    searchCity(city)
    .then((r) => r.json())
    .then((r) => {
      setResults(r)
    });
  }, [city]);
  
  useEffect(() => {
    !!selected &&
     cityWeather(selected)
     .then((r) => r.json())
     .then((r) => {
      console.log(r);
      setWeather(r)
    });
   }, [selected]);

   const setCityAndDeleteSelectedweather = (val) => {
     setCity(val)
     !!weather && setWeather(null);
   }
   
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <SearchBar city={city} setCity={setCityAndDeleteSelectedweather} />
      {!weather && (<SearchResult searched={!!city} setSelected={setSelected} results={results} />)}
      
      {!!weather && <WeekWeather weather={weather} />}
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
