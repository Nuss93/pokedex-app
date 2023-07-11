import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BottomNav from '../components/BottomNav'
import Styles from '../stylesheet'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<any, 'useRef'>
const UseRefScreen = ({ navigation }: Props) => {
    const [start, setStart] = useState<number | null>(null)
    const [count, setCount] = useState<number | null>(null)
    const timerRef = useRef(0)

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    function handleStart() {
        setStart(new Date().getTime())
        console.log('stat')
        // starts the timer and saves the timer id in the reference
        // the reference was used to store the infrastructure data — the active timer id.
        timerRef.current = setInterval(() => {
            setCount(new Date().getTime())
        }, 1000)
    }
    function handleStop() {
        // accesses the timer id from the reference and stops the timer
        clearInterval(timerRef.current)
    }
    function handleReset() {
        setStart(null)
        setCount(null)
    }

    const timeBetween = () => {
        // console.log('now', count)
        // console.log('start', start)
        let interval = 0
        if(start !== null && count !== null){
            interval = (count - start) / 1000
        }
        
        return interval.toFixed(3);
    }
    
    return (
        <View style={{...styles.container}}>
            <Text style={{...styles.heading}}><Text style={{fontStyle:'italic', backgroundColor:'#808080', color:'#fff'}}> useRef </Text> example</Text>
            <Text style={{...styles.heading}}>Stopwatch : {timeBetween()}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:200}}>
                <Button title='Start' onPress={handleStart} />
                <Button title='Stop' onPress={handleStop} />
                <Button title='Reset' onPress={handleReset} />
            </View>
            <BottomNav />
        </View>
    )
}

export default UseRefScreen

const styles = StyleSheet.create(Styles)