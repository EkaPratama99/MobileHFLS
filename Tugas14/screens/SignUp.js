import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput,  TouchableOpacity, Alert
} from 'react-native';
import Constants from 'expo-constants';
import { block } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: "white"
  },

  input:{

    width: "90%",
    backgroundColor:"pink",
    borderRadius:50,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding: 15,
    marginRight:10,
    marginLeft:20,
    },

    SignUp:{
      width: "90%",
      borderRadius: 40,
      backgroundColor:  "white",
      height: 40,
      width: 80,
      alignItems: "center",
      justifyContent:"center",
      marginTop: 40,
      marginBottom: 10,
      marginLeft: 172
  
    },
    

});


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');

  const AuthSignup = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMQCUfrtCbFtm4npYEL-E-hq68tdgVwTg", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    const resData = await response.json()
    if (response.ok){
      await navigation.navigate('Login')
  } else {
      Alert.alert ('ERROR!!!', resData.error.message, [{
          text: 'Ok'
      }])
  }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingTop:100}} >

          <Text style={{textAlign:"center", marginBottom:50, fontSize:35}}>Create Account</Text>
       
        <View >
        <TextInput style={styles.input}
            value={email}
            onChangeText= {(text) => {setEmail(text)}}
            placeholder="Email"
            
          />
          <TextInput style={styles.input}
            value={password}
            onChangeText= {(text) => {setPassword(text)}}
            placeholder="Password"
          
            secureTextEntry
          />
          <TextInput style={styles.input}
            value={confirmpassword}
            onChangeText= {(text) => {setConfirmPassword(text)}}
            placeholder="Confirm Your Password"
          
            secureTextEntry
          />

          <TouchableOpacity 
          style={styles.SignUp}
          onPress={AuthSignup}
          >
          

            <Text style={{ 
              color:"black",
               }}>Sign Up</Text>

            
          </TouchableOpacity>
        </View>

      </View>
      <View>
<Image source={require('./../screens/FONT.LOGO.2.jpeg')} style={{alignItems:"center", 
        width: 400, 
        height: 200, 
        marginLeft:10,
        marginTop:10}}/>
</View>
    </ScrollView>

    
  );
};

export default SignupScreen;
