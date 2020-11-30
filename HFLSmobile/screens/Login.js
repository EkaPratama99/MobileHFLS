import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,
} from 'react-native';


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
  login:{
    borderRadius: 20,
    backgroundColor:  "#a9eba9",
    height: 40,
    width: 80,
    alignItems: "center",
    justifyContent:"center",
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 172,

  },


});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerLogin = () => {
    navigation.navigate('BotTab');
  };

  return (

    <ScrollView style={styles.container}>
      <View style={{ paddingTop: 100
      
      }}>
      
      <Image source={require('./../screens/FONT.LOGO.jpeg')} style={{alignItems:"center", 
        width: 400, 
        height: 200, 
        marginLeft:10,
        marginTop:10}}/>
        <Text style={{marginBottom: 20, textAlign: "center", fontSize:20}}>Login</Text>
  
        <View>
          <TextInput style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            
            
          />
          <TextInput style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.login}
            onPress={handlerLogin}
          >
            <Text style={{ 
              color:"white",
               }}>Login</Text>
          </TouchableOpacity>

          <View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={{ color: "black", textAlign: "center"}}>Sign Up</Text>
          </TouchableOpacity>
      </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default LoginScreen;
