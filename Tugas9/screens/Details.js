import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3e3d3",  
  },
});

const DetailsScreen = () => (
  <ScrollView>

  <View style={styles.container}>

      <View>

      <View style={{alignItems:"center", marginTop:100,}}>
        <Text> DETAILS</Text>
       
      </View>
      
      
      <View>
        <Image source={require('./../screens/TS.MONA.DPN.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:50
        }}/>
        <Image source={require('./../screens/TS.MONA.BLKNG.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:10
        }}/>
       <View style={{alignItems:"center", paddingTop: 10, }}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>T-Shirt Monalisa Navy</Text>
        <Text>Code : TS.MONALISA.NAVY</Text>
        <Text>Rp. 55.000,-</Text>
        <Text>Size : M, L, XL</Text>
        <Text>----------------------------------</Text>
        <Text> Online Order :</Text>
        <Text>WA : 085737029266</Text>
        <Text>Shopee : huflesssupply</Text>
        <Text>Instagram : Huflesssupply.co</Text>
        <Text>----------------------------------------------------------------------------------------------------------------------</Text>
        </View>
      </View>
      <View>
        <Image source={require('./../screens/SP.HFLS.FULL.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:50
        }}/>
        <Image source={require('./../screens/SP.HFLS.DETAIL.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:10
        }}/>
       <View style={{alignItems:"center", paddingTop: 10, }}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>Short Pant Dark Grey</Text>
        <Text>Code : HFLS.SP.DG</Text>
        <Text>Size : 28, 30, 32, 34, 36</Text>
        <Text>Price : Rp. 90.000,-</Text>
        <Text>----------------------------------</Text>
        <Text> Online Order :</Text>
        <Text>WA : 085737029266</Text>
        <Text>Shopee : huflesssupply</Text>
        <Text>Instagram : Huflesssupply.co</Text>
        <Text>----------------------------------------------------------------------------------------------------------------------</Text>
        </View>
      </View>
      <View>
        <Image source={require('./../screens/TS.JPN.DPN.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:50
        }}/>
        <Image source={require('./../screens/TS.JPN.BLKNG.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:10
        }}/>
       <View style={{alignItems:"center", paddingTop: 10, }}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>T-Shirt JPN Charcoal</Text>
        <Text>Code : TS.WFONT.CRCL</Text>
        <Text>Size : M, L, XL</Text>
        <Text>Price : Rp. 55.000,--</Text>
        <Text>----------------------------------</Text>
        <Text> Online Order :</Text>
        <Text>WA : 085737029266</Text>
        <Text>Shopee : huflesssupply</Text>
        <Text>Instagram : Huflesssupply.co</Text>
        <Text>----------------------------------------------------------------------------------------------------------------------</Text>
        </View>
      </View>
      


      <View>
        <Image source={require('./../screens/TKR.SKULL.FULL.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:50
        }}/>
        <Image source={require('./../screens/TKR.SKULL.DETAIL.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:10
        }}/>
       <View style={{alignItems:"center", paddingTop: 10, }}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>Topi Skull Hitam</Text>
        <Text>Code : TKR.SKULL.BLK</Text>
        <Text>Size : ALLSIZE</Text>
        <Text>Price : Rp.65.000,-</Text>
        <Text>----------------------------------</Text>
        <Text> Online Order :</Text>
        <Text>WA : 085737029266</Text>
        <Text>Shopee : huflesssupply</Text>
        <Text>Instagram : Huflesssupply.co</Text>
        <Text>----------------------------------------------------------------------------------------------------------------------</Text>
        </View>
        </View>
        <View>
        <Image source={require('./../screens/HOODIE.JPN.BLK.jpg')} style={{alignItems:"center", 
        width: 400, 
        height: 400, 
        marginLeft:10,
        marginTop:50
        }}/>
       <View style={{alignItems:"center", paddingTop: 10, }}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>Hoodie Hitam</Text>
        <Text>Code : HD.WFONT.BLK</Text>
        <Text>Size : M, L, XL</Text>
        <Text>Price : Rp.119.000,-</Text>
        <Text>----------------------------------</Text>
        <Text> Online Order :</Text>
        <Text>WA : 085737029266</Text>
        <Text>Shopee : huflesssupply</Text>
        <Text>Instagram : Huflesssupply.co</Text>
        <Text>----------------------------------------------------------------------------------------------------------------------</Text>
        </View>

        
        </View>
        </View>

      






    
  </View>
  </ScrollView>

);

export default DetailsScreen;
