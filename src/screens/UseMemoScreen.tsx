import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import Styles from '../stylesheet'
import BottomNav from '../components/BottomNav'

type Props = {}
const styles = StyleSheet.create(Styles)
function factorialOf(number:number) {
  let value = number
  let result = number
  
  while (value > 1) {
    result = result * (value - 1)
    value = value - 1
  }
  console.log('factorialOf called! Result = ', result)
  return result;
}

const UseMemoScreen = (props: Props) => {
  const [state, setState] = useState<boolean>(true)
  const [memoState, setMemoState] = useState<number>(0)
  const memo = useMemo(() => factorialOf(memoState), [memoState])

  function handleChange(event:string) {
    // console.log(event, typeof event)
    let value = Number(event)
    // console.log(value, typeof value)
    setMemoState(memoState => value)
  }

  return (
    <View style={{...styles.container}}>
      <Text style={{...styles.heading}}><Text style={{fontStyle:'italic', backgroundColor:'#808080', color:'#fff'}}> useMemo </Text> example</Text>
      <Text style={{...styles.heading}}>Factorial of {memoState} is {memo}</Text>
      
      <TextInput
        style={{backgroundColor:'#BADA55', width:'50%', borderRadius:10, borderBottomColor:'grey', borderBottomWidth:2}}
        // value={memoState}
        onChangeText={text => handleChange(text)}
      />

      <Text style={{marginTop:24, fontWeight:'bold', fontSize:24}}>{state ? 'TRUE' : 'FALSE'}</Text>
      <TouchableOpacity
        style={{padding:10, backgroundColor:'#DC0A2D', borderRadius:10, marginTop:10}}
        onPress={() => {setState(!state)}}
      >
        <View><Text>Does not bother memoized state</Text></View>
      </TouchableOpacity>
      <BottomNav />
    </View>
  )
}

export default UseMemoScreen
