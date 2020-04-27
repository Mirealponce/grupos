import React from 'react';
import { View,Text,TextInput,FlatList } from "react-native";




export default class  Listusers extends React.Component{

    constructor(){

        super();
        this.state={
            usertoken:'',
           // dataTokens:this.props.navigation.state.params.listausers,
           
        };
    }


    leerListaDatos = e => {
        const { name, value } = e.target;
          this.setState({
              [name] : [this.state[name], e.target.value],
          })
      }
      leerDato = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    renderItem=(data)=>{
      
        return(
            <View>
            
            
        <Text style={{fontSize:10,textAlign:'auto',paddingTop:10,marginLeft:10,paddingLeft:10,color:'black',fontWeight:'bold',}} >{dataCarrito.item.tokenorigin}</Text>
        <Text style={{fontSize:10,textAlign:'auto',paddingTop:10,marginLeft:10,paddingLeft:10,color:'black',fontWeight:'bold',}} >{dataCarrito.item.tokendestino}</Text>
    
        
        
            </View>
        
        )
    }

   // const lista=dataTokens.map

render(){
   
    return(


        <View><Text>Listaaa</Text>
        <Text>{this.props.navigation.state.params.tokennotification}</Text>

        
        </View>
    )

    }


}