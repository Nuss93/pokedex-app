import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../stylesheet'

type Props = {
    width: number,
    children?: React.ReactNode,
    image?: any,
    text?: string,
    heading?: string,
    style?: object,
}

const CardWithImage = ({width, text, image, heading, style}: Props) => {
    const WIDTH = Dimensions.get('window').width / 3
    // const WIDTH = 200
    return (
        <View style={{
            ...commonStyles.card,
            ...style,
            width: `${width}%`
        }}>
            <View style={{backgroundColor:'#242424', borderRadius:5, alignItems:'center', position:'relative', height:100}}>
                <Image style={{width:WIDTH, height:WIDTH, position:'absolute', top:0}} source={typeof image === "string" ? {uri:image} : image} />
            </View>
            <Text style={{...styles.heading, textAlign:'left', paddingTop:18}}>{heading}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const CardWithChildren = ({width, children, image, style}: Props) => {
    const WIDTH = Dimensions.get('window').width / 2
    return (
        <View style={{
            ...commonStyles.card,
            ...style,
            width: `${width}%`,
        }}>
            {children}
        </View>
    )
}

export { CardWithImage, CardWithChildren }

const styles = StyleSheet.create(Styles)
const commonStyles = StyleSheet.create({
    card: {
        minHeight:100,
        backgroundColor:'#DEDEDE',
        borderRadius: 7,
        padding: 18,
        shadowColor: "#242424",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    }
})