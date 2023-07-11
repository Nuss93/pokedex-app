import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../stylesheet'
import BottomNav from '../components/BottomNav'
import { BackHeader } from '../components/Headers'

const styles = StyleSheet.create(Styles)

const WIP = () => {
  return (
    <View style={{...styles.container}}>
      <BackHeader />
      <Text style={{...styles.heading}}>WIP</Text>
      <BottomNav />
    </View>
  )
}

export default WIP