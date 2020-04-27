import React from 'react'
import {AsyncStorage,View, Text,ScrollView, StyleSheet,Modal,TouchableHighlight, TouchableOpacity,Image, FlatList, Button} from 'react-native'

export default class  grupo extends React.Component{

    constructor(){

        super();
        this.state={
            dataCart:[],
            loaded:false,
        };
    }


    componentDidMount(){

       
        AsyncStorage.getItem('cart').then((cart)=>{
            if (cart !== null) {
              // We have data!!
              const cartproduct = JSON.parse(cart)
              this.setState({dataCart:cartproduct, loaded:true})
              
              
            }else{
                //alert('Carrito vacio');
            }
          })
          .catch((err)=>{
            alert(err)
          })

       
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
            this.props.navigation.navigate('notificacions');
        }catch(error ){
            console.log(error)

        }

    }




renderItem=(dataCarrito)=>{
      
    return(
        <View>
        
        
    
    <Text style={{fontSize:10,textAlign:'auto',paddingTop:10,marginLeft:10,paddingLeft:10,color:'black',fontWeight:'bold',}} >{dataCarrito.item.tokendestino}</Text>

    
    
        </View>
    
    )
}


render(){
   let mapeo;
   try{
       if(this.state.dataCart.length>0&&this.state.loaded==true){

        mapeo= this.state.dataCart.map((item) => {

            return(
                <View>
            <Text>{item.tokendestino}</Text>
           
            </View>
            )
        })



       }else{
        mapeo= <Text>Cargando..</Text>
       }

   }catch(error){
            if(mapeo==null){
                alert("No existe grupo");

            }
   }

   return(
    <View>{mapeo}
     <Button title='ELIMINAR GRUPO' onPress={()=>this.EliminarProducto()}></Button></View>

   )


}


}