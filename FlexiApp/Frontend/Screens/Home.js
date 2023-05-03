import React, { useEffect, useState } from "react";
import {View, Text, FlatList} from 'react-native';
  
export default function App(){
  const [users,setUsers] = useState([]);
  
  useEffect(()=>{
    fetchData()
  },[]);
    
  const fetchData = (props) => {
    fetch(`https://127.0.0.1:4001/users`)
      .then(response => response.json())
      .then(jsonResponse => setUsers(jsonResponse))
      .catch(error => console.log(error))
  };
  
  const renderUser = ({item}) => {
    return (
      <View style={{margin:10,borderWidth:0.5,padding:10}}>
        <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>
          User {item._id}
        </Text>
        <Text style={{color:"black"}}>Name : {item.name}</Text>
        <Text style={{color:"black"}}>Email : {item.email}</Text>
      </View>
    )
  }
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item,index) => index.toString()}
        />
    </View>
  )
}