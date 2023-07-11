import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useReducer, useState } from 'react'
import Styles from '../stylesheet'
import BottomNav from '../components/BottomNav'
import TodoContainer from '../components/TodoContainer'
import { ListContext } from '../context/TodoListContext'
import { TodoListAction, TodoListContextType, TodoListState } from '../types'

const styles = StyleSheet.create(Styles)

// function todoListReducer(state: TodoListState, action: TodoListAction) {
//   // console.log('current state', state)
//   // console.log('here', action)
//   switch (action.type) {
//     case 'add_item':
//       return [
//         ...state, action.payload
//       ];
  
//     default:
//       return state;
//   }
// }

const UseContextScreen = () => {
  const {list, setTodo} = useContext(ListContext)
  console.log('list', list)

  const array = [{item:'mop the floors', checked: true}]
  // const [state, dispatch] = useReducer(todoListReducer, list)

  const handleAdd = (item:string, checked:boolean) => {
    console.log('dispatch tak', item, checked)
    // dispatch({ type: 'add_item', payload: {item: item, checked: checked} })
  }
  return (
    <View style={{flex:1, paddingTop:30}}>
      <Text style={{...styles.heading}}><Text style={{fontStyle:'italic', backgroundColor:'#808080', color:'#fff'}}> useContext </Text> example</Text>

      <TodoContainer handleAdd={handleAdd} title="testing" />
      <BottomNav/>
    </View>
  )
}

export default UseContextScreen