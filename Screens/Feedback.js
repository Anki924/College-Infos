import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Feedback = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>Give Your Feedback</Text>
            </View>
            <View style={styles.Inputcontainer}>
                <TextInput style={styles.yourname} placeholder='Your name' multiline={true} />
            </View>

            <View style={styles.Inputcontainer}>
                <TextInput
                    multiline={true}
                    style={styles.TextContainer}
                    placeholder='Write Your Feedback here !'
                />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Feedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#afc0db',
        marginBottom: 25,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15
    },
    h1: {
        marginTop: 55,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    TextContainer: {
        height: 250,
        fontSize: 16,
        padding: 8,
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 25,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: 'blue'

    },
    Inputcontainer: {
        marginHorizontal: '10%'
    },
    yourname: {
        height: 40,
        fontSize: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 25
    },
    btn: {
        backgroundColor: "blue",
        height: 35,
        width: 80,
        alignSelf: 'center',
        borderRadius: 8
    },
    submit: {
        marginTop: 6,
        alignSelf: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '600'

    }
})