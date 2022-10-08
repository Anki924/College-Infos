import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Table = ({ route, navigation }) => {
  const data = route?.params?.data
  return (
    <View >
      <View style={styles.Header}>
        <Text style={styles.HName}>Lacture Name</Text>
        <Text style={styles.HTime}>Time</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={key => key.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.Container}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>)
        }}
      />
    </View>
  )
}

export default Table

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    backgroundColor: '#f0bab6',
    flexDirection: 'row',
    marginTop: 10,
  },
  Header: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: '#ff9991',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  HName: {
    fontSize: 18,
    padding: 8,
    fontWeight: '700',
    paddingLeft: 25,
    borderRightWidth: 3,
    paddingRight: '25%'
  },
  HTime: {
    fontSize: 18,
    padding: 8,
    fontWeight: '700',
    paddingRight: 25,
    borderLeftWidth: 3,
    paddingLeft: '20%'
  },
  name:{
    fontSize:16,
    fontWeight:'600',
    padding:8,
    paddingLeft:25,
    color:'#182a3d',
  },
  time:{
    fontSize:18,
    fontWeight:'600',
    padding:8,
    color:'#0f83ff',
    position:'absolute',
    top:0,
    right:0,
  }
})