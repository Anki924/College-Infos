import { FlatList, StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'


const data = [
    {
        id: '1',
        img: require("../assets/tranding/img1.jpg"),
    },
    {
        id: '2',
        img: require("../assets/tranding/img1.jpg"),
    },
    {
        id: '3',
        img: require("../assets/tranding/img1.jpg"),
    },
    {
        id: '4',
        img: require("../assets/tranding/img1.jpg"),
    },
    {
        id: '5',
        img: require("../assets/tranding/img1.jpg"),
    },
    {
        id: '6',
        img: require("../assets/tranding/img1.jpg"),
    },
];

const TopTranding = () => {
    return (
        <View>
            <View style={styles.TextContainer}>
                <Text style={styles.h1}>Top Tranding </Text>
                <Text style={styles.h2}>in your College</Text>
            </View>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={key => key.id}
            renderItem={({item}) =>(
                <View style={styles.container}>
                    <Image style={styles.img} source={item.img}/>
                </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    TextContainer:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:20
    },
    h1:{
        fontSize:22,
        fontWeight:'bold',
        color:"#666a70"
    },
    h2:{
        marginTop:14,
        // fontFamily:'italic'
    },
    container:{
        margin:10,
        marginBottom:10,
    },
    img:{
        height:220,
        width:355,
        borderRadius:18,
        borderWidth:2
    }
})
export default TopTranding
