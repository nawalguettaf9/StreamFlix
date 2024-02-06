import React, { useState, useEffect } from 'react'
import { View, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import Header from '../components/Header';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    useFonts,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
} from "@expo-google-fonts/montserrat";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Container = styled.ScrollView`
	flex: 1;
    background-color: #000;
`

const SearchBox = styled.View`
    width: 100%;
    height: 50px;
    background-color: #333333;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-left: 0px;
    padding-right: 7px;
    margin: 20px;
    margin-left: 5px;
    margin-top: 10px;

`

const SearchInput = styled.TextInput`
    color: #fff;
    font-size: 16px;
    margin: 5px;

`

const SearchBoxWrapper = styled.View`
width: 100%;
justify-content: center;
margin-top: 5px;
`

const TopResultsText = styled.Text`
    color: white;
    font-size: 28px;
    margin: 20px;
    margin-top: 10px;
    margin-left: 25px;
    font-family: "Montserrat_600SemiBold";
    font-weight: 600;
`

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 29.5) / 100)}px;
	height: 200px;
`

const MovieCard = styled.View`
	padding-right: 9px;
`

const ResultsWrapper = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;
`
const Logo = styled.Image`
	width: 70px;
	height: 45px;
	margin-top: 50px;

`

const SearchScreen = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    

    let [fontsLoaded] = useFonts({
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold
    });

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false, // Masque la barre de navigation
        });
      }, [navigation]);
   

  

    return fontsLoaded && (
        <>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Container>
            <Logo resizeMode='contain' source={require('../assets/logo.png')} />
                <SearchBoxWrapper>
                    <SearchBox>
                        <MaterialIcons name="search" size={30} color="#B1B1B1" style={{ margin: 10 }} />
                        <SearchInput value={search} onChangeText={(text) => setSearch(text)} placeholderTextColor="#7f7f7f" placeholder="Search for a show, movie, genre etc." />
                        <TouchableOpacity activeOpacity={0.5}>
                            <MaterialCommunityIcons name="microphone" size={30} color="#b1b1b1" style={{ margin: 10, }} />
                        </TouchableOpacity>
                    </SearchBox>
                </SearchBoxWrapper>
                
            </Container>
            </GestureHandlerRootView>
            
        </>
    )
}

export default SearchScreen