import Notification from './notifications';
import Request from './respuesta';
import Group from './grupo'
import NewGroup from './newgroup'
import ListUsers from './Listusers'
import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'


const navigator = createStackNavigator({
  newgroup:{screen:NewGroup},
 // Listusers:{screen:ListUsers},
  notificacions: { screen: Notification },
  respuesta: { screen: Request },
  grupo:{screen:Group}
  
});


export default createAppContainer(navigator);