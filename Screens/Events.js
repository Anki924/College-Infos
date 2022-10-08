import { FlatList, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const data = [
  {
    id:'1',
    img:{uri:'https://www.eventbrite.com/blog/wp-content/uploads/2022/04/GP-socialdistancing-04_Blog-Header-2.png'},
    title:'Event title',
    discription:'Searching for that perfect color has never been easier, use our HTML color picker to browse millions of colors and color harmonies.'
  },
  {
    id:'2',
    img:{uri:'https://www.eventbrite.com/blog/wp-content/uploads/2022/04/GP-socialdistancing-04_Blog-Header-2.png'},
    title:'Event title',
    discription:'Searching for that perfect color has never been easier, use our HTML color picker to browse millions of colors and color harmonies.'
  },
  {
    id:'3',
    img:{uri:'https://www.eventbrite.com/blog/wp-content/uploads/2022/04/GP-socialdistancing-04_Blog-Header-2.png'},
    title:'Event title',
    discription:'Searching for that perfect color has never been easier, use our HTML color picker to browse millions of colors and color harmonies.'
  },
  {
    id:'4',
    img:{uri:'https://www.eventbrite.com/blog/wp-content/uploads/2022/04/GP-socialdistancing-04_Blog-Header-2.png'},
    title:'Event title',
    discription:'Searching for that perfect color has never been easier, use our HTML color picker to browse millions of colors and color harmonies.'
  },
]

const Events = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item}) =>{return(
        <View style={styles.card}>
          <Image source={item.img} style={styles.cardImg}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.dis}>{item.discription}</Text>
        </View>
      )}}
      />
    </View>
  )
}

export default Events

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,
  },
  card:{
    margin:12,
    borderRadius:9,
    backgroundColor:'#bfcbde',
    padding:15
  },
  cardImg:{
    padding:12,
    borderRadius:8,
    height:180,
    width:'100%'
  },
  title:{
    alignSelf:'center',
    fontSize:20,
    fontWeight:'700',
    marginTop:10,
    color:'#276bd9'
  },
  dis:{
    alignSelf:'center',
    paddingHorizontal:15,
    marginTop:10,
    fontSize:15
  }
})