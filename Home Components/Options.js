import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


function Common(props) {
    return (
        <View style={styles.container} >
            <Image source={props.img} style={styles.img} />
            <Text style={styles.Text}>{props.Title}</Text>
        </View>
    )
}
const Options = ({ navigation }) => {
    let img1 = require("../assets/time.png")
    let img2 = require("../assets/event.png")
    let img3 = require("../assets/info.png")
    let img4 = require("../assets/feedback.png")
    return (
        <View style={styles.main}>
            <View style={styles.container2} >
                <TouchableOpacity onPressIn={() => { navigation.navigate("TimeTable") }}><Common img={img1} Title={"Time Table"} /></TouchableOpacity>
                <TouchableOpacity onPressIn={() => { navigation.navigate("Events") }}><Common img={img2} Title={"Events"} /></TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity onPressIn={() => { navigation.navigate("FacultyInfo") }}><Common img={img3} Title={"Faculty info"} /></TouchableOpacity>
                <TouchableOpacity onPressIn={() => { navigation.navigate("Feedback") }}><Common img={img4} Title={"feedback"} /></TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        margin: 12,
        backgroundColor: "#cccddb",
        padding: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderBottomColor: '#767dde',
        marginHorizontal: 25
    },
    img: {
        height: 80,
        width: 80
    },
    Text: {
        fontSize: 13,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 8,
        color: '#646573'
    },
    container2: {
        flexDirection: 'row',

    }
})
export default Options
