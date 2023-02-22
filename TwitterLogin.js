import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Dimensions, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    Image,
    Text,
    TextInput, 
    TouchableOpacity} from 'react-native'

import TwitterImage from "../twitter/assets/dila.jpg";

const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / 100) * 30;// Image ratio is 75X46
export default function TwitterLogin() {
  return (
   <>
   <StatusBar style='light' />
    <Image source={TwitterImage}  style={styles.banner}    />

    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style ={styles.hiText}>HOŞGELDİNİZ</Text>
        <TextInput 
                style={[styles.input, styles.inputUsername]}
                placeholder="Telefon numarası veya e-posta"
                placeholderTextColor="#cdcdcf"
            />
            <TextInput 
                style={[styles.input, styles.inputPassword]}
                placeholder="Parola"
                placeholderTextColor="#cdcdcf"
            />
            <TouchableOpacity style={styles.button}> 
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}>Geri dön</Text>
            </TouchableOpacity>
        </View>


        <View style={styles.footer}>
            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.footerText}>VEYA</Text>
                <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity style={[styles.button, styles.buttonRegister]} >
                <Text style={[styles.buttonText, styles.buttonRegisterText]}>
                    Yeni bir hesap oluştur
                </Text>
            </TouchableOpacity>

        </View>

    </SafeAreaView>
   </>
  )
}


const styles = StyleSheet.create({

    banner:{
        resizeMode: "contain",
        width:"100%",
        height: bannerHeight,
    },
    container:{
        flex: 1,
        justifyContent: "space-between",
    },
    localStoragecontent:{
        padding:65,
    },
    input:{
        borderWidth:1,
        borderColor: "#cdcdcf",
        color:"#333333",
        fontSize: 16,
        height: 44,
        paddingHorizontal: 15,
    },
    inputUsername:{
        borderBottomWidth: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    inputPassword:{
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
    button:{
        height: 42,
        borderRadius:10,
        backgroundColor:"#1977f3",
        justifyContent: 'center',
        marginVertical: 80,
    },
    buttonText:{
        color:"#b4cafb",
        textAlign:"center",
        fontSize: 16,
    },
    link:{
        paddingVertical:2,
    },
    linkText:{
        color:"#1c6ede",
        textAlign:"center",
        fontSize:16,
        fontWeight:"500",
    },
    footer:{
        alignItems:"center",
        padding:2,
        paddingBottom: 0,
    },
    divider:{
        flexDirection:"row",
        alignItems:"center",
        width:"70%",
        marginBottom: 10,
    },
    dividerLine:{
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#cbccd0",
    },
    footerText:{
        width: 100,
        textAlign:"center",
    },
    buttonRegister:{
        width:"50%",
        backgroundColor:"#e7f3ff",
    },
    buttonRegisterText:{
        color:"#1077f7",
    },
});
