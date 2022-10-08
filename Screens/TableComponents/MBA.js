import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Subjects from '../../Components/Subjects'


const MBA = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:MBA1
            }))}>
                <Subjects Title={"MBA I Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:MBA2
            }))}>
                <Subjects Title={"MBA II Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:MBA3
            }))}>
                <Subjects Title={"MBA III Year"} />
            </TouchableOpacity>
        </View>
    )
}

const MBA1=[
    {
        id:'1',
        name:"Finance",
        time:"12:15PM"
    },
    {
        id:'2',
        name:"Finance",
        time:"12:15PM"
    },
    {
        id:'3',
        name:"Finance",
        time:"12:15PM"
    },
    {
        id:'4',
        name:"Finance",
        time:"12:15PM"
    },
    {
        id:'5',
        name:"Finance",
        time:"12:15PM"
    },
    {
        id:'6',
        name:"FT",
        time:"12:15PM"
    },
]
const MBA2=[
    {
        id:'1',
        name:"Finance",
        time:"10:00AM"
    },
    {
        id:'2',
        name:"Finance",
        time:"10:00AM"
    },
    {
        id:'3',
        name:"Finance",
        time:"10:00AM"
    },
    {
        id:'4',
        name:"Finance",
        time:"10:00AM"
    },
    {
        id:'5',
        name:"Finance",
        time:"10:00AM"
    },
    {
        id:'6',
        name:"FT",
        time:"10:00AM"
    },
]
const MBA3=[
    {
        id:'1',
        name:"Finance",
        time:"11:00AM"
    },
    {
        id:'2',
        name:"Finance",
        time:"11:00AM"
    },
    {
        id:'3',
        name:"Finance",
        time:"11:00AM"
    },
    {
        id:'4',
        name:"Finance",
        time:"11:00AM"
    },
    {
        id:'5',
        name:"Finance",
        time:"11:00AM"
    },
    {
        id:'6',
        name:"FT",
        time:"11:00AM"
    },
]

export default MBA

const styles = StyleSheet.create({})