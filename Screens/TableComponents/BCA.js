import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Subjects from '../../Components/Subjects'


const BCA = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BCA1
            }))}>
                <Subjects Title={"BCA I Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BCA2
            }))}>
                <Subjects Title={"BCA II Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:BCA3
            }))}>
                <Subjects Title={"BCA III Year"} />
            </TouchableOpacity>
        </View>
    )
}

const BCA1=[
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
const BCA2=[
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
const BCA3=[
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

export default BCA

const styles = StyleSheet.create({})