import React from 'react';
import { AsyncStorage,StyleSheet, Text, View,Button,Vibration,Platform } from 'react-native';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions'


export default class notificacions extends React.Component {


    constructor(){
      super();
      this.state={
        notification: {},
        TokenDestinatario: '',
        TokenOrigen:'',
        tokens:''
      }
    }
  
   componentDidMount(){
     this.registrarNotificacion();
     this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }
    
  
    _handleNotification = notification => {
      Vibration.vibrate();
      console.log(notification);
    this.setState({ notification: notification });
  
    this.props.navigation.navigate('respuesta', { tokenGrupo:this.state.tokens });
    };
   
   registrarNotificacion=async()=>{
      
        const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus=status;
    
    try{
        if (status !== 'granted') {
    
        console.log("PERMISO DE NOTIFICACION DENEGADO")
        return;
        }else{
        
        console.log("PERMISO DE NOTIFICACION ENTREGADO")
        let token = await Notifications.getExpoPushTokenAsync();
        /*const tokenss=[
        'ExponentPushToken[x6YwDLK4Vjx8eru2fpyBxp]','ExponentPushToken[i8SoWnG_qnUcgHwd-QM6Xl]',
          ]*/
        this.setState({ tokens:this.props.navigation.state.params.tokennotification,TokenOrigen:'ExponentPushToken[x6YwDLK4Vjx8eru2fpyBxp]',TokenDestinatario: 'ExponentPushToken[i8SoWnG_qnUcgHwd-QM6Xl]' });
        console.log('ESTE ES MI TOKENNNNNNNNNNNNNN '+token);
        
        if (Platform.OS === 'android') {
          Notifications.createChannelAndroidAsync('default', {
            name: 'default',
            sound: true,
            priority: 'max',
            vibrate: [0, 250, 250, 250],
          });
        }
        }
    }catch(error){
        console.log('ERRORRR'+error);
    }
  }
navegar=()=>{
  
    this.props.navigation.navigate('grupo');
  
}
  sendPushNotification = async () => {
  const message = {
    to: this.state.tokens,
    sound: 'default',
    title: 'Unete a mi grupo',
    body: 'vamos al pub ...',
    data: { data: 'goes here' },
    _displayInForeground: true,
  };
  
  const response = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  this.props.navigation.navigate('respuesta', { tokenGrupo:this.state.tokens });
  
  };
   
   render(){

    return(
      <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
         
          <Button title={'Invitar'} onPress={() => this.sendPushNotification()} />
          <Button title={'Ver Grupos'} onPress={() => this.navegar()} />
        </View>
    )
   }
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  