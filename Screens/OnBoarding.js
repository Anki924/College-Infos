import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';



const OnBoardingScreens = ({navigation}) => {
    return (
        <Onboarding
        onDone={() => navigation.navigate("Login")}
        onSkip={() => navigation.navigate("Login")}
        pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/6857/6857448.png"}} style={{height:350,width:'100%'}}/>,
                    title: 'ERROR ?',
                    subtitle: 'Get solution of your ERROR',
                    titleStyles : {fontWeight:'900' , fontSize:32},
                    subTitleStyles:{fontWeight:'600' , color:'grey'}
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/6684/6684503.png"}} style={{height:350,width:'100%'}}/>,
                    title: 'Solve Others ERRORS',
                    subtitle: 'Boost your skills by solving others problem',
                    titleStyles : {fontWeight:'900' , fontSize:32},
                    subTitleStyles:{fontWeight:'600' , color:'grey'}
                },
                {
                    backgroundColor: '#eba0d3',
                    image: <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/4481/4481259.png"}} style={{height:350,width:'100%'}}/>,
                    title: 'Best Platform',
                    subtitle: 'Chat with others',
                    titleStyles : {fontWeight:'900' , fontSize:32},
                    subTitleStyles:{fontWeight:'600' , color:'grey'}
                },
            ]}
        />
    )
}

export default OnBoardingScreens

const styles = StyleSheet.create({})