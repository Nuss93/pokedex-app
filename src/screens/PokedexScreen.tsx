import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Styles from "../stylesheet";
import { BackHeader } from "../components/Headers";
import BottomNav from "../components/BottomNav";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPokemon } from "../redux/features/pokemonSlice";
import { CardWithImage } from "../components/Card";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const styles = StyleSheet.create(Styles);
type Props = {}
const PokedexScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>()
    const [array, setArray] = useState<any>([])
    const dispatch = useAppDispatch()
    const { data, loading } = useAppSelector((state) => state.pokemon)
    useEffect(() => {
        dispatch(getPokemon())
    }, [])
    // console.log(loading, data?.results)

    const renderContent = () => {
        let display

        if(loading === 'pending') {
            display = <View style={{...styles.container}}>
                <Text style={{...styles.heading}}>Loading</Text>
            </View>
        }
        if(loading === 'fulfilled') {
            display =
            <ScrollView contentContainerStyle={{...styles.scrollViewStyle}}>
                <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', paddingHorizontal:15}}>
                    {data.results.map((item:any,index:number) => (
                        <TouchableOpacity key={index} style={{width:'48%'}} onPress={() => navigation.navigate('Pokemon Selected', {url : item.url, name : item.name})}>
                            <CardWithImage width={100} text={`#${index+1}`} heading={item.name} style={{marginBottom:15}} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        }

        return display;
    }

    
    
    return (
        <View style={{...styles.container}}>
            <BackHeader />

            {renderContent()}

            <BottomNav />
        </View>
    )
}

export default PokedexScreen