import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute, useNavigation } from '@react-navigation/native'
import routes from '../routes'
import ACTIVE from '../images/navbar-active.png'
import INACTIVE from '../images/navbar-inactive.png'

const BottomNav = () => {
  const pathname = useRoute()
  const navigation = useNavigation<StackNavigationProp<any>>();
  
  const handleNavigation = (route: string) => {
    console.log('pergi sini', route)

    navigation.replace(route)
  }

  return (
    <View style={{
        position : 'absolute',
        bottom : 0,
        backgroundColor : '#DC0A2D',
        width : '100%',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        // padding : 10,
        // paddingVertical : 15,
        flexDirection : 'row',
        borderTopColor : '#242424',
        borderTopWidth : 1,
    }}>
      {
        routes.map((data,index) => {
          if(data.display && typeof data.display === "boolean") return (
            <TouchableOpacity key={index} style={{paddingHorizontal: 10, paddingVertical:15, flex:1, alignItems:'center'}}
              onPress={() => {handleNavigation(data.name)}}
            >
              <Image source={pathname.name === data.name ? ACTIVE : INACTIVE} />
              <Text style={{color : pathname.name === data.name ? '#fff' : '#000', textAlign:'center'}}>{data.name}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default BottomNav