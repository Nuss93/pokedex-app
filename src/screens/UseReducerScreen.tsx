import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import BottomNav from '../components/BottomNav'
import Styles from '../stylesheet'
import { CountAction, CountState } from '../types'
import { reducerFunction } from '../reducers/CounterReducer'
import { BackHeader } from '../components/Headers'

type Props = {}

const UseReducerScreen = (props: Props) => {
    const [state, dispatch] = useReducer(reducerFunction, { count: 0 })
    
    return (
        <View style={{...styles.container}}>
            <BackHeader />
            <Text style={{...styles.heading}}><Text style={{fontStyle:'italic', backgroundColor:'#808080', color:'#fff'}}> useReducer </Text> example</Text>
            <Text style={{fontSize:24, fontWeight:'bold', marginBottom:35}}>{state.count}</Text>
            <View style={{flexDirection:'row'}}>
                <Button title='Increment' onPress={() => {dispatch({ type: 'increment', payload: 1})}} />
                <View style={{marginRight:15}}></View>
                <Button title='Decrement' onPress={() => {dispatch({ type: 'decrement', payload: 1})}} />
            </View>
            <BottomNav />
        </View>
    )
}

export default UseReducerScreen

const styles = StyleSheet.create(Styles)