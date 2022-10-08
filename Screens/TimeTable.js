import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Subjects from '../Components/Subjects'

const TimeTable = ({ navigation }) => {
  return (
    <ScrollView style={{ marginTop: 12, backgroundColor: '#fff', flex: 1 }}>
      <TouchableOpacity onPress={() => { navigation.navigate("BBA") }}><Subjects Title={"BBA"} /></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("BCA") }}><Subjects Title={"BCA"} /></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("BSC") }}><Subjects Title={"B.SC"} /></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("MBA") }}><Subjects Title={"MBA"} /></TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("MCA") }}><Subjects Title={"MCA"} /></TouchableOpacity>
    </ScrollView>
  )
}

export default TimeTable

const styles = StyleSheet.create({})