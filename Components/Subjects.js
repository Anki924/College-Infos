import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subjects = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/707/707672.png'}}/>
      <Text style={styles.Text}>{props.Title}</Text>
    </View>
  )
}

export default Subjects

const styles = StyleSheet.create({
    container:{
        margin:15,
        // marginVertical:25,
        backgroundColor:'#cccddb',
        // padding: 20,
        borderRadius: 12,
        borderBottomWidth: 3,
        borderBottomColor: '#767dde',
    },
    Text:{
        alignSelf:'center',
        fontSize:23,
        padding:12,
        fontWeight:"bold"
    }
})