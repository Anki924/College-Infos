import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Subjects from '../../Components/Subjects'


const MCA = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:MCA1
            }))}>
                <Subjects Title={"MCA I Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:MCA2
            }))}>
                <Subjects Title={"MCA II Year"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>(navigation.navigate("Table" , {
                data:MCA3
            }))}>
                <Subjects Title={"MCA III Year"} />
            </TouchableOpacity>
        </View>
    )
}

const MCA1=[
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
const MCA2=[
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
const MCA3=[
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

export default MCA

const styles = StyleSheet.create({})