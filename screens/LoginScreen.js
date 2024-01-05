import {  Text, View , SafeAreaView, KeyboardAvoidingView, Image, Pressable, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Input } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [input , setInput] = useState('');
    const [password , setPassword] = useState('');
    const [loading , setLoading] = useState('');
   
    const navigation = useNavigation();

    useEffect(() => {
      setLoading(true);
  
        if(!input){
          setLoading(false);
        }
        if (input) {
          navigation.navigate("Profile");
        }
    
  
    }, []);
  return (
    <SafeAreaView 
        style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
      }}>
        
        <KeyboardAvoidingView>
        {
          loading?
          (<View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"black"}}>
            <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"500"}}>Loading</Text>
            <ActivityIndicator size="large" color={"red"}/>
          </View>):
          (
            <>
           <View style={{ alignItems: "center", justifyContent: "space-between" }}>
            <Image
               style={{ height: 50, width: 120, marginTop: 20 }}
               source={{
               uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
               }}
          />
            </View>

            <View style={{ width: 320, marginTop: 45 }}>
                <Input 
                value={input}
                onChangeText={(text) => setInput(text)}
                type="email"
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Email"
                placeholderTextColor={"white"}
                style={{
                  width: 330,
                  padding: 15,
                  borderRadius: 5,
                  color: "white",
                  backgroundColor: "gray",
            }}/>

            <Input 
                value={password}
                onChangeText={(text) => setPassword(text)}
                type="password"
                secureTextEntery={true}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Password"
                placeholderTextColor={"white"}
                style={{
                  width: 330,
                  padding: 15,
                  borderRadius: 5,
                  color: "white",
                  backgroundColor: "gray",
            }}/>
            </View>

            <Pressable onPress={()=>navigation.navigate('Register')}
               style={
                password.length > 4
                  ? {
                      width: 300,
                      backgroundColor: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 14,
                    }
                  : {
                      width: 300,
                      marginLeft: "auto",
                      marginRight: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "white",
                      borderWidth: 2,
                      padding: 14,
                    }
              }>
                <Text 
                    style={{
                    textAlign: "center",
                    fontSize: 19,
                    fontWeight: "700",
                    color: "white",
                    }}>Sign In</Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('Register')}>
                <Text style={{
                textAlign: "center",
                color: "white",
                fontSize: 19,
                fontWeight: "600",
                marginTop: 15,
            }}>New to Netflix? Sign up now</Text>
            </Pressable>
            </>
          )
        }
            
        </KeyboardAvoidingView>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  )
}

export default LoginScreen

//const styles = StyleSheet.create({})