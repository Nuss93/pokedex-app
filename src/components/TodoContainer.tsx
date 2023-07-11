import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import TodoContainerList from './TodoContainer.List'
// import { ListContext } from '../context/TodoListContext'

type Props = {
  title: string,
  handleAdd: (item:string, checked:boolean) => void,
}

const TodoContainer = (props: Props) => {
  // console.log('aaa', props)
  return (
    <View>
      <Text>TodoContainer</Text>
      <View style={{backgroundColor:'#BADA55'}}>
        <Text>Input field</Text>
        <Button title='test' onPress={() => props.handleAdd("mop floor", false)} />
      </View>
      <TodoContainerList/>
    </View>
  )
}

export default TodoContainer