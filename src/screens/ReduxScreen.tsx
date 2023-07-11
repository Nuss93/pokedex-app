import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Styles from '../stylesheet'
import BottomNav from '../components/BottomNav'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import { getPokemon, increment, incrementByTwo } from '../redux/features/pokemonSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { ListContext } from '../context/TodoListContext'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

const styles = StyleSheet.create(Styles)
const ReduxScreen = () => {
  // === Used if I did not define useDispatch and useSelector hooks in hooks.ts file ===
  // const { data, loading, value } = useSelector((state: RootState) => state.pokemon)
  // const dispatch: AppDispatch = useDispatch()

  const { data, loading, value } = useAppSelector((state) =>state.pokemon)
  const list = useContext(ListContext)
  const dispatch = useAppDispatch()

  const navigation = useNavigation<StackNavigationProp<any>>()

  useEffect(() => {
    dispatch(getPokemon())
    console.log(value)
    // return () => {
      
    // }
  }, [])
  
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <View
        style={{
          backgroundColor: '#DC0A2D',
          padding: 25,
          width: '100%',
          height: '35%',
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          justifyContent: 'center'
        }}
      >
        <Text style={{...styles.heading}}>Value : {value}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',flex:0.5}}>
          <View style={{flex:1, paddingRight:10}}><Button color='#7555da' title="Increment" onPress={() => dispatch(increment())} /></View>
          <View style={{flex:1, paddingLeft:10}}><Button color='#7555da' title="Increment by Two" onPress={() => dispatch(incrementByTwo(2))} /></View>
        </View>
        
      </View>
      <Button title='Tekan la' onPress={() => {navigation.navigate('WIP')}}/>
      <BottomNav />
    </View>
  )
}

export default ReduxScreen