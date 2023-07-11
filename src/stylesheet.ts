const Styles: any = {
    container : {
        flex:1, justifyContent:'center', alignItems:'center',
        // margin : 10,
        // backgroundColor : 'red',
    },
    heading : {
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center',
        marginBottom : 16,
    },

    calculatorButtons : {
        backgroundColor:'#BADA55',
        padding:15,
        marginRight:10,
        marginTop:5,
        // width:'25%',
        borderRadius:5
    },

    textWhite : {color: 'white'},
    scrollViewStyle : {position:'relative', alignItems:'center', paddingTop: 120, paddingBottom:120, width:'100%'},
    boxShadow : {
        shadowColor: "#242424",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 2.54,
        elevation: 3
    }
}
export default Styles;