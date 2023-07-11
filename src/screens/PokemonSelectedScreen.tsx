import { View, Text, StyleSheet } from 'react-native'
import React, { Component, useEffect } from 'react'
import { BackHeader } from '../components/Headers'
import BottomNav from '../components/BottomNav'
import Styles from '../stylesheet'
import { rootURL } from '../config'

const styles = StyleSheet.create(Styles)
type Props = {
    route : any
}
const PokemonSelectedScreen = (props: Props) => {
    const { params } = props.route
    useEffect(() => {
        console.log(params)
    //   fetch(`${rootURL}`)
    
      return () => {
        
      }
    }, [])
    
    return (
        <View>
            <BackHeader header={params.name.charAt(0).toUpperCase() + params.name.slice(1)} />
            <Text>PokemonSelectedScreen</Text>
            <BottomNav />
        </View>
    )
}

export default PokemonSelectedScreen