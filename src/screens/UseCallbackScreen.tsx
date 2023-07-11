import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import Styles from '../stylesheet'
import BottomNav from '../components/BottomNav'
import CalculatorButtons from '../components/CalculatorButtons'

const styles = StyleSheet.create(Styles)
const calculatorButtons: Array<number> = [1,2,3,4,5,6,7,8,9,0]
const calculatorActions: Array<string> = ['+','-','x','/','=']
const UseCallbackScreen = () => {
    const [first, setFirst] = useState<number|null>(null)
    const [second, setSecond] = useState<number|null>(null)
    const [calc, setCalc] = useState<number|null>(null)
    const [operation, setOperation] = useState<string|null>('')
    const [age, setAge] = useState(0)
    const handleAction = useCallback(
      (button:number | string) => {
        // console.log('clicked', operation)
        switch (typeof button) {
            case 'number':
                console.log('current:', first, calc, operation)
                if(operation !== null){
                    console.log('1. operation')
                    let pressed = button
                    // let calculatedNumber = operation === '+' ? first + calc :
                    //                         operation === '-' ? first - calc : null
                    // console.log('result', calculatedNumber)
                    // setCalc(a => a = calculatedNumber)
                    // setFirst(a => a = null)
                } else if(operation === null) {
                    console.log('2. no operation yet')
                    let current = calc ? calc.toString() : '0'
                    let pressed = button.toString()
                    let update = Number(current + pressed)
                    // console.log('store into calc', update, operation)
                    // setFirst(a => a = update)
                    setCalc(a => a = update)
                }

                
                
                break;
            case 'string':
                console.log('string, start operation', first)
                setOperation(a => a = button)
                // setCalc(a => a = first)
                break;
        
            default:
                break;
        }
        // setAge(a => a=43)
      },
      [calc, first, operation],
    )
    // const previousOperand = () => {}
    // const currentOperand = () => {}
    // const operation = () => {
    //     switch (action) {
    //         case '+':
                
    //             break;
    //         case '-':
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }
    const reset = () => {
        console.log('Reset!')
        setFirst(a => a = null)
        setCalc(a => a = null)
        setOperation(a => a = null)
    }
    // console.log('heya', first, calc, operation)
    console.log('oi', calc)
    return (
        <View style={{...styles.container}}>
            <Text style={{...styles.heading}}><Text style={{fontStyle:'italic', backgroundColor:'#808080', color:'#fff'}}> useCallback </Text> example</Text>
            <Text style={{...styles.heading}}>{calc ? calc : 0}</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', paddingHorizontal:30}}>
                {calculatorButtons.map((data,index) => {
                    return(
                        <CalculatorButtons key={index} buttonName={data} handleAction={handleAction} />
                    )
                })}
            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>
                {calculatorActions.map((data,index) => {
                    return(
                        <CalculatorButtons key={index} buttonName={data} handleAction={handleAction} />
                    )
                })}
            </View>
            <Button color='green' title='Clear' onPress={() => {reset()}} />
            <BottomNav />
        </View>
    )
}

export default UseCallbackScreen