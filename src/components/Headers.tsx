import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Styles from '../stylesheet'
import BUTTON from '../images/header-led.png'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  header? : string,
}

const BackHeader = ({header}: Props) => {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const pathname = useRoute()
  return (
    <View
      style={{
        backgroundColor:'#DC0A2D',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0,
        position: 'absolute',
        zIndex: 5,
      }}
    >
      <View style={{
        borderBottomColor:'#242424',
        borderBottomWidth:1,
        flex: 2
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={BUTTON}
            style={{width:58, height:58, margin:20, marginHorizontal:25}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderRightWidth: 30,
          borderTopWidth: 30,
          borderRightColor: "transparent",
          borderTopColor: "#242424",
          marginTop: 70,
          position:'relative',
          zIndex:1
        }}
      >
        <View style={{
          width:'100%', height:'100%', position:'absolute', zIndex:2, bottom:2,
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderRightWidth: 30,
          borderTopWidth: 30,
          borderRightColor: "transparent",
          borderTopColor: "#DC0A2D",
        }} />
      </View>
      <View
        style={{
          borderBottomColor:'#242424',
          borderBottomWidth:1,
          flex:4,
        }}
      >
        <Text style={{...styles.textWhite, paddingRight:25, paddingLeft:20, fontSize:24, fontWeight:'bold', paddingBottom: 10, textAlign:'right'}}>{header? header : pathname.name}</Text>
      </View>
      
      
    </View>
  )
}

export { BackHeader }

const styles = StyleSheet.create(Styles)