import React from 'react';
import {
  StyleSheet, View, Text, Image
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3e3d3",
  },

});

const ProfileScreen = () => (
  <View style={styles.container}>


      <View style={{  marginTop: 100}}>
        <Text style={{textAlign:"center",
          fontWeight:"bold",
          fontSize: 80,
          color:"white"
          }}>Profile</Text>

      </View>
      <View>
        <Image source={require('./../../screens/PROFIL.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:50,
        resizeMode:"contain"
        }}/>
      </View>
      <View>
        <Text style={{textAlign:"center", fontSize: 20, marginTop : 50, fontWeight:"900"}}>
          Nama : I Wayan Eka Suardi Pratama
        </Text>
        <Text style={{textAlign:"center", fontSize: 20, fontWeight:"900"}}>
          NIM : 1801010024
        </Text>
        <Text style={{textAlign:"center", fontSize: 20, fontWeight:"900"}}>
          Prodi : Sistem Informasi
        </Text>
        <Text style={{textAlign:"center", fontSize: 50, marginTop : 50,fontWeight:"bold"}}>
          STMIK Primakara
        </Text>
      </View>


  </View>
);

export default ProfileScreen;
