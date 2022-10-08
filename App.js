import firebase from './config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import SingupScreen from './Screens/SingupScreen'
import Login from './Screens/Login'
import Home from './Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import Events from "./Screens/Events"
import FacultyInfo from './Screens/FacultyInfo';
import Feedback from './Screens/Feedback'
import TimeTable from './Screens/TimeTable'

import BBA from './Screens/TableComponents/BBA'
import MBA from './Screens/TableComponents/MBA'
import BCA from './Screens/TableComponents/BCA'
import BSC from './Screens/TableComponents/BSC'
import MCA from './Screens/TableComponents/MCA'


const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing , setInitializing] = useState(true);
  const [user , setUser] = useState("");

  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() =>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  } ,[])

  if(initializing) return null;

  if(!user){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown : false }}/>
        <Stack.Screen name='SingupScreen' component={SingupScreen} options={{headerShown : false }}/>
      </Stack.Navigator>
    )
  }

  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown : false }}/>
      <Stack.Screen name='BBA' component={BBA}/>
      <Stack.Screen name='BCA' component={BCA}/>
      <Stack.Screen name='MCA' component={MCA}/>
      <Stack.Screen name='MBA' component={MBA}/>
      <Stack.Screen name='BSC' component={BSC}/>
    </Stack.Navigator>
  )
}


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login'>
//         <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />

//         <Stack.Screen name='SingupScreen' component={SingupScreen} options={{ headerShown: false }} />

//         <Stack.Screen name='Home' component={Home} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }