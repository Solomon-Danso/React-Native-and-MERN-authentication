import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from "axios" 


const SignIn = ({navigation}) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const handleSubmit = async ()=>{
   if (email==="" || password===""){
    alert("All fields are required")
    return;
   }
  
   try {
    await axios.post("http://127.0.0.1:4001/login",{email,password})
    alert("Login Successful")
    navigation.navigate("Home")
  } catch (error) {
    console.log(error)
    alert("Login Failed, Enter correct email and password")
  
  }
  
  }
  
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    <View style={{marginVertical:100}}>
    
     <View style={styles.imageContainer}>
      <Image source= {require("../assets/logo.jpeg")} style={styles.imageStyles}/>

     </View>

      <Text style={styles.signupText}> Sign In</Text>
     

      <View style={{marginHorizontal:24}}>
      <Text style={{fontSize:16, color:"#8ep3a1"}}>Email</Text>
      <TextInput style={styles.signupInput} value={email} onChangeText={text=>setEmail(text)} autoComplete='email' keyboardType='email-address'/>
      </View>

      <View style={{marginHorizontal:24}}>
      <Text style={{fontSize:16, color:"#8ep3a1"}}>Password</Text>
      <TextInput style={styles.signupInput} value={password} onChangeText={text=>setPassword(text)} secureTextEntry={true} autoComplete='password' />
      </View>
      
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
   
      <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} style={styles.buttonStyle2}>
        <Text style={styles.buttonText2}>Not yet registered? SignUp</Text>
      </TouchableOpacity>

    
    </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    signupText: {
        fontSize: 30,
        textAlign: 'center'
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 30,
    },
    buttonStyle: {
        backgroundColor: "#f06040",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
    },
    buttonStyle2:{
        backgroundColor:"lightskyblue",
        height:50,
        marginBottom:20,
        justifyContent:"center",
        marginHorizontal:15,
        borderRadius:15,
        marginTop:10
    },
    buttonText2:{
        fontSize:20,
        textAlign:'center',
        color:"grey",
        textTransform:"uppercase",
        fontWeight:'bold'},

    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    imageContainer: { justifyContent: "center", alignItems: "center" },
    imageStyles: { width: 100, height: 100, marginVertical: 20 }



})