import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Subjects from '../../Components/Subjects'


const BBA = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BBA1
            }))}>
                <Subjects Title={"BBA I Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BBA2
            }))}>
                <Subjects Title={"BBA II Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BBA3
            }))}>
                <Subjects Title={"BBA III Year"} />
            </TouchableOpacity>
        </View>
    )
}

const BBA1=[
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
const BBA2=[
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
const BBA3=[
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

export default BBA

const styles = StyleSheet.create({})