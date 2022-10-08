import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Subjects from '../../Components/Subjects'


const BSC = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BSC1
            }))}>
                <Subjects Title={"BSC I Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BSC2
            }))}>
                <Subjects Title={"BSC II Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BSC3
            }))}>
                <Subjects Title={"BSC III Year"} />
            </TouchableOpacity>
        </View>
    )
}

const BSC1=[
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
const BSC2=[
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
const BSC3=[
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

export default BSC

const styles = StyleSheet.create({})