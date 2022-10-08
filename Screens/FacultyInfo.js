import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data=[
  {
    id:'1',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'2',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'3',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'4',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'5',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'6',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'7',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'8',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
  {
    id:'9',
    name:'Full Name Sir',
    cantact : '999xxxx999',
    email:'example@gmail.com'
  },
]
const FacultyInfo = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff' , marginTop:15}}>
      <FlatList
      data={data}
      keyExtractor={key => key.id}
      renderItem={({item}) =>{return(
        <View style={styles.card}>
          <Text style={styles.name}>Name : {item.name}</Text>
          <Text style={styles.cantact}>Cantact : {item.cantact}</Text>
          <Text style={styles.cantact}>Email : {item.email}</Text>
        </View>
      )}}
      />
    </View>
  )
}

export default FacultyInfo

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#c3dbca',
    margin:10,
    padding:12,
    borderRadius:5
  },
  name:{
    fontSize:18,
    fontWeight:'700',
    marginLeft:15
  },
  cantact:{
    fontSize:16,
    fontWeight:'600',
    marginLeft:18
  }
})