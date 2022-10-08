import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import FormButton from '../LoginComponents/FormButton'
import FormInpute from '../LoginComponents/FormInpute'
import { firebase } from '../config'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      alert(e.massage);
    }
  }


  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828503.png" }}
        style={styles.logo}
      />
      {/* <Text style={styles.text}>Solvers</Text> */}

      <FormInpute
        labelValue={email}
        onChangeText={(data) => { setEmail(data) }}
        placeholderText="Email"
        iconType="user"
        keyboardType="none"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInpute
        labelValue={password}
        onChangeText={(data) => { setPassword(data) }}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sing In"
        onPress={() => loginUser(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton}
      // onPress={() => { }}
      >
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* <SocialButton
        buttonTitle="Sing In With Faccebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
      // onPress={() => { }}
      />

      <SocialButton
        buttonTitle="Sing In With Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
      // onPress={() => { }}
      /> */}

      <TouchableOpacity style={styles.forgotButton}
        onPress={() => (navigation.navigate('SingupScreen'))}
      >
        <Text style={styles.navButtonText}>Don't have an account? Create here </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    marginTop: 30
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    marginBottom:28
  },
  // text: {
  //     fontFamily: 'CherryCreamSoda_400Regular',
  //   fontSize: 28,
  //   marginBottom: 10,
  //   color: '#051d5f',
  // },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
});