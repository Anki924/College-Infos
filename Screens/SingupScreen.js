import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { firebase } from '../config'

import FormButton from '../LoginComponents/FormButton'
import FormInpute from '../LoginComponents/FormInpute'
import SocialButton from '../LoginComponents/SocialButton'

const SingupScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  registerUser = async (name , email, password,) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.sendEmailVerification({
          handleCodeInApp: true,
          url: 'solvers-d1a37.firebaseapp.com',
        })
          .then(() => {
            alert('Verification email sended');
          }).catch((e) => {
            alert(e.massage)
          })
          .then(() => {
            firebase.firestore().collection('users')
              .doc(firebase.auth().currentUser.uid)
              .set({
                name,
                email,
                password
              })
          }).catch((e) => {
            alert(e.massage)
          })
      }).catch((e) => {
        alert(e.massage)
      })
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Create new account</Text>

      <FormInpute
        labelValue={name}
        onChangeText={(data) => { setName(data) }}
        placeholderText="Your Name"
        iconType="staro"
      // secureTextEntry={true}
      />

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
        buttonTitle="Sing Up"
        onPress={() => registerUser(name , email , password)}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
        <TouchableOpacity>
          <Text style={[styles.textPrivate, { color: '#e88832' }]}>Terms and Condition</Text>
        </TouchableOpacity>
        <Text style={styles.textPrivate}> and </Text>
        <TouchableOpacity>
          <Text style={[styles.textPrivate, { color: '#e88832' }]}>Privacy and Policy</Text>
        </TouchableOpacity>
      </View>

      {/* <SocialButton
        buttonTitle="Sing Un With Faccebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
      // onPress={() => { }}
      />

      <SocialButton
        buttonTitle="Sing Un With Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
      // onPress={() => { }}
      /> */}

      <TouchableOpacity style={styles.navButton}
        onPress={() => (navigation.navigate('Login'))}
      >
        <Text style={styles.navButtonText}>have an account? Sing In </Text>
      </TouchableOpacity>

    </View>
  )
}

export default SingupScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});