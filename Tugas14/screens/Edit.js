import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';
import firebase from './../Firebase';

export default function EditInput({ route, navigation }) {
  const [Nama, setNama] = useState(route.params.nama);
  const [Alamat, setAlamat] = useState(route.params.alamat);
  const [Kontak, setKontak] = useState(route.params.kontak);
  const [Ukuran, setUkuran] = useState(route.params.ukuran);
  const [Jumlah, setJumlah] = useState(route.params.jumlah);

  function upDateFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        Nama: Nama,
        Alamat: Alamat,
        Kontak: Kontak,
        Ukuran: Ukuran,
        Jumlah: Jumlah
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setNama('');
      setAlamat('');
      setKontak('');
      setUkuran('');
      setJumlah('');
      navigation.navigate("Buy")
    }
  }

  return (
    <View style={styles.all}>
        
      <ScrollView style={styles.bawah}>
          

        <Text style={styles.text}>Nama</Text>
        <TextInput style={styles.textInput} onChangeText={name => setNama(Nama)} value={Nama} />

        <Text style={styles.text}>Alamat</Text>
        <TextInput style={styles.textInput} onChangeText={title => setAlamat(Alamat)} value={Alamat} />

        <Text style={styles.text}>Kontak</Text>
        <TextInput style={styles.textInput} onChangeText={comment => setKontak(Kontak)} value={Kontak} />

        <Text style={styles.text}>Ukuran</Text>
        <TextInput style={styles.textInput} onChangeText={comment => setUkuran(Ukuran)} value={Ukuran} />

        <Text style={styles.text}>Jumlah</Text>
        <TextInput style={styles.textInput} onChangeText={comment => setJumlah(Jumlah)} value={Jumlah} />

        <TouchableOpacity style={styles.btn} onPress={() => { upDateFire() }}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Buy")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#d3e3d3',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  bawah:{
marginTop:200
  },
  text: {
    color: '#000',
    textAlign:"left"
  },
  btn: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: 150
    
},


  textInput: {
    borderColor: "pink",
    width: 350,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 10,
  },
});
