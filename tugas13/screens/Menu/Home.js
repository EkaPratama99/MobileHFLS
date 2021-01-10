import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3e3d3",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:50,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>

<ScrollView>
      <View>
      
        <Text style={{ fontWeight:"bold",

          color: "black",
          marginTop:100,
          marginBottom:20,
          textAlign: "center",
          fontSize: 50
          

          }}>
         Hufless Supply.co

        </Text>
        <Text style={{

        color: "black",
        marginTop:10,
        textAlign: "center",

        }}>
      Store : Jalan Pahlawan, No.27, Singaraja, Bali
        </Text>
        <Text style={{

        color: "black",
        marginBottom:10,
        textAlign: "center",

        }}>
      Office : Jalan Akasia XVI, Gang Salak, No. 9, Denpasar, Bali
        </Text>
      </View>
       <View>
        <Image source={require ('./../HFLSinput.jpg') }  style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:50
        }}/>
       </View>

       <View>
        <Image source={require ('./../HFLSinput2.jpg') }  style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:10
        }}/>
       </View>

    <View >
          <View style={{ 
            alignItems: 'center',
             }}>
            <MaterialCommunityIcons
            
            />
            <Text style={{ 
              borderRadius: 40,
              height: 30,
              width: 150,
              backgroundColor: "white",
              marginTop: 50,
              marginBottom: 5,
              color: "black",
              fontSize: 15,
              textAlign: "center",
              padding: 5
          
            }}  
              onPress={() => navigation.navigate('Details')}> Detail Barang
             </Text>
          </View>
        
        </View>

            
        <View style={{ 
            alignItems: 'center',
             }}>
            <MaterialCommunityIcons
            
            />
            <Text style={{ 
              borderRadius: 40,
              height: 30,
              width: 150,
              backgroundColor: "white",
              marginTop: 5,
              marginBottom: 50,
              color: "black",
              fontSize: 15,
              textAlign: "center",
              padding: 5
          
            }}  
              onPress={() => navigation.navigate('Buy')}> Detail Pembeli
             </Text>
          </View>
        
        
        </ScrollView>
  </View>

  
);

export default HomeScreen;
