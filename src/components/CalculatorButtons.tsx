import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../stylesheet'

type Props = {
  handleAction: (button:number|string) => void | null,
  buttonName: number | string
}

const CalculatorButtons = ({buttonName, handleAction}: Props) => {
  // console.log('contoh re-render', buttonName)
  return (
    <TouchableOpacity
      style={{...styles.calculatorButtons, backgroundColor: typeof buttonName === 'string' ? 'red' : '#BADA55', width: typeof buttonName === 'string' ? '15%' : '30%'}}
      onPress={() => {handleAction(buttonName)}}
    >
      <View><Text style={{fontSize:16, fontWeight:'bold', textAlign:'center'}}>{buttonName}</Text></View>
    </TouchableOpacity>
  )
}

export default React.memo(CalculatorButtons)

const styles = StyleSheet.create(Styles)