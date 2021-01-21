import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../../Firebase';

export default function DetailsScreen({ navigation }) {
  const [listFire, setListFire] = useState(null);


  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            Nama: childItem.val().Nama,
            Alamat: childItem.val().Alamat,
            Kontak: childItem.val().Kontak,
            Ukuran: childItem.val().Ukuran,
            Jumlah: childItem.val().Jumlah
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.bd.ref('/users/' + key).remove()
  }

  function editFire(key, Nama, Alamat, Kontak, Ukuran, Jumlah) {
    navigation.navigate("Edit",{
      key: key,
      Nama: Nama,
      Alamat: Alamat,
      Kontak: Kontak,
      Ukuran: Ukuran,
      Jumlah: Jumlah
    });
  }


  return (
    <View style={styles.container}>
    

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
  
            <Text style={styles.text}>Nama: {item.Nama} </Text>
            <Text style={styles.text}> Alamat: {item.Alamat}</Text>
            <Text style={styles.text}> Kontak: {item.Kontak}</Text>
            <Text style={styles.text}> Ukuran: {item.Ukuran}</Text>
            <Text style={styles.text}> Jumlah: {item.Jumlah}</Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.Nama, item.Alamat, item.Kontak, item.Ukuran, item.Jumlah) }}>
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>

        } />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3e3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#d3e3d3',
    borderRadius: 10, 
    textAlign: 'center',
    marginTop: 5
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    width: 350,
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1
  },
  btnEnviar: {
    borderWidth: 1,
    borderColor: 'green',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  viewFlat: {
    maxHeight: 800,
  }
})