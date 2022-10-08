import { StyleSheet, TabBarIOSItem, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '../config'
import Options from '../Home Components/Options'
import TopTranding from '../Home Components/TopTranding'

const Home = ({navigation}) => {
  
  //getting data from firebase
  const [data, setData] = useState("");

  useEffect(() => {
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setData(snapshot.data())
        }
        else {
          console.log("User Does not exist");
        }
      })
  }, []);

  return (
    <View style={{ backgroundColor: '#fff' , flex:1 }}>
      {/*Header */}
      <View style={styles.Container}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png" }} style={styles.ProfileImg} />
        <View style={styles.TextContainer}>
          <Text style={styles.WB}>Welcome back</Text>
          <Text style={styles.name}>{data.email}</Text>
        </View>
      </View>
      
      {/*mid components*/}
      <Options navigation={navigation}/>
      <TopTranding />
    </View>
  )
}

const styles = StyleSheet.create({
// a@gmail.com
  Container:{
    // margin:8,
    backgroundColor:"#cccddb",
    flexDirection:'row',
    alignItems:'center',
    paddingTop:65,
    // justifyContent:'center',
    paddingLeft:25,
    paddingBottom:15,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15

},
  ProfileImg:{
      height:30,
      width:30,
      // padding:15
  },
  TextContainer:{
      marginLeft:30
  },
  WB:{
    fontWeight:"700"
  },
  name:{
    fontWeight:"900"
  }
})
export default Home
