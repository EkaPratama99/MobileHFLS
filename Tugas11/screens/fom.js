import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import firebase from '../Firebase'

const fom = ({navigation}) => {
const [state, setState] = useState ({
    Nama: "",
    Alamat: "",
    Kontak: "",
    Ukuran: "",
    Jumlah: ""
})

const handleChangeText = (Nama, value) => {
    setState ({ ...state, [Nama]: value})
}

const fomorder = async () => {
    if (state.Nama === '') {
        alert ('Please provide a name')
    }
    else {
        await firebase.db.collection('users').add({
            Nama: state.Nama,
            Alamat: state.Alamat,
            Kontak: state.Kontak,
            Ukuran: state.Ukuran,
            Jumlah: state.Jumlah
        })
        alert('Pesanan Dalam Proses!')
    }
}

    return (
        <ScrollView style={styles.container}>

            <View style={{marginTop:100, }}>
                <Text style={{fontSize:30, textAlign:"center"}}>Form Order</Text>
            </View>
            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15, }}
                placeholder= "Nama Pembeli"
                onChangeText= {(value) => handleChangeText ("Nama", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Alamat Tujuan"
                onChangeText= {(value) => handleChangeText ("Alamat", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Nomor Telepon"
                onChangeText= {(value) => handleChangeText ("Kontak", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Size"
                onChangeText= {(value) => handleChangeText ("Ukuran", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Jumlah Barang"
                onChangeText= {(value) => handleChangeText ("Jumlah", value)}
                />
            </View>

            <TouchableOpacity onPress={() => fomorder ()} style={{width: 125, backgroundColor: '#d3e3d3', padding: 10,  borderRadius: 40, alignSelf: 'center', marginTop: 20}}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>Send</Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}

export default fom

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        marginTop: 25
    },

    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 10
    },
    username: {
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    postHeader: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputgrup: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#d3e3d3',
        borderRadius: 20,
        marginHorizontal: 30
    }
})