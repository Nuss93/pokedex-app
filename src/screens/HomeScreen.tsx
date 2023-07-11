import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Styles from '../stylesheet'
import BottomNav from '../components/BottomNav'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import routes from '../routes'
import { BackHeader } from '../components/Headers'
import { CardWithChildren, CardWithImage } from '../components/Card'
import TEST from '../images/1.png'

const styles = StyleSheet.create(Styles)
type Props = NativeStackScreenProps<any, 'Home'>;
const HomeScreen = ({ navigation }: Props) => {
  // const navigation = useNavigation<StackNavigationProp<any>>()
  return (
    <View>
      <BackHeader />
      
      <ScrollView contentContainerStyle={{...styles.scrollViewStyle, height:'100%'}}>
        <CardWithImage width={90} image={TEST} text='This bulbuous seed plant crawls among us.' heading='Bulbasaur' />
        <View style={{width:'100%', paddingHorizontal:20, marginTop:15}}>
          <TouchableOpacity style={{backgroundColor:'#DEDEDE', borderRadius:5, padding:15, justifyContent:'center', alignItems:'center'}} onPress={() => {navigation.navigate('Pokedex')}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>Pokedex</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          // flex:1, 
          flexDirection:'row', 
          flexWrap:'wrap', 
          justifyContent:'space-around', 
          paddingHorizontal: 10, 
          alignItems: 'center',
          marginTop: 10,
        }}>
          {routes.map((data,index) => {
            if(!data.display) return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate(data.name)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#DEDEDE',
                  padding: 10,
                  marginBottom: 15,
                  marginHorizontal:5,
                  borderRadius: 8,
                  width:'45%',

                  shadowColor: "#242424",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity:  0.17,
                  shadowRadius: 2.54,
                  elevation: 3

                }}
              >
                <Text style={{fontSize:18, color:'#242424'}}>{data.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        
        {/* <CardWithChildren width={90} style={{marginTop:10}}>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
          <Text>I can see you</Text>
        </CardWithChildren> */}
      </ScrollView>
      
      <BottomNav />
    </View>
  )
}

export default HomeScreen