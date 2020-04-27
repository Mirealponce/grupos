import React from 'react';
import { AsyncStorage,StyleSheet, Text, View,Button,Vibration } from 'react-native';

export default class respuesta extends React.Component {

constructor(){
  super();
}

componentDidMount(){
  this.rpta();
}
    EliminarProducto=async ()=>{
        try{
            AsyncStorage.removeItem('cart',async()=>{
               // this.setState({  })
                console.log("eliminado");
                this.setState({
                    dataCart: await AsyncStorage.getItem('cart'),
                    
                })

            })
            //this.props.navigation.navigate('');
        }catch(error ){
            console.log(error)

        }

    }


      

    rpta =  () => {
        var itemcart={
           
            tokendestino:this.props.navigation.state.params.tokenGrupo
        }
 
            this.carrito(itemcart);

            this.props.navigation.navigate('grupo');
        };
   
         carrito=(info)=>{
            AsyncStorage.getItem('cart').then((datacart)=>{
              if (datacart !== null) {
                // We have data!!
                const cart = JSON.parse(datacart)
                cart.push(info)
                AsyncStorage.setItem('cart',JSON.stringify(cart));
              }
              else{
                const cart  = []
                cart.push(info)
                AsyncStorage.setItem('cart',JSON.stringify(cart));
              }
              alert("Unido al grupo")
             // this.props.navigation.navigate('Home');
            })
            .catch((err)=>{
              alert(err)
            })
          }

    
   render(){
    return(
      <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
         
          <Button title={'Aceptar Invitación'} />
          
        </View>
    )
   }
    
  }