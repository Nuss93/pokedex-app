import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ListContext } from '../context/TodoListContext'


type Props = {}

const TodoContainerList = (props: Props) => {
    const { list } = useContext(ListContext)
    // console.log('here', TodoList)
    return (
        <View>
            <Text>TodoContainerList</Text>
            {/* <Text>{JSON.stringify(TodoList)}</Text> */}
            {list.map((data,index) => {
                return <Text>{data.item} : {data.checked ? 'TRUE' : 'FALSE'}</Text>
            })}
        </View>
    )
}

export default TodoContainerList