import React from 'react';
import { View, Button,Text,TextInput } from "react-native";


export default class  newgroup extends React.Component{
    constructor(){

        super();
        this.state={
            usertoken:'',
          //  dataUsers:['ExponentPushToken[x6YwDLK4Vjx8eru2fpyBxp]','ExponentPushToken[i8SoWnG_qnUcgHwd-QM6Xl]'],
            name:''
           
        };
    }


    leerListaDatos = e => {
        const { name, value } = e.target;
          this.setState({
              [name] : [this.state[name], e.target.value],
          })
      }


      leerDato = usertoken => {
        this.setState({
            usertoken
        });
    }

        Presionar=()=>{
            this.props.navigation.navigate('notificacions', { name: this.state.name, tokennotification:this.state.usertoken });
        }
        
        render(){
        
            return(
                <View><Text>Listaaa</Text>
                <TextInput style={{borderColor:'#111111'}} onChangeText={this.leerDato}
                            value={this.state.usertoken}></TextInput>
                <Text>{this.state.usertoken}</Text>
                <Button title='presionar' onPress={this.Presionar}></Button>
                </View>
            )

            }


}