import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SimpleLineIcons } from '@expo/vector-icons'
import Dashboard from '../screens/Dashboard'
import Treinos from '../screens/Treinos'

const TabNavigator = createBottomTabNavigator()

export default function TabNavigation() {
    return (
      <TabNavigator.Navigator screenOptions={{
        tabBarActiveTintColor: '#048ABF',
        tabBarInactiveTintColor: '#1B1A26',
        tabBarStyle: { backgroundColor: '#AED3F2' },
      }}>
        <TabNavigator.Screen name='Início' component={Dashboard} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name='home' size={size} color={color} />
        }} />
        <TabNavigator.Screen name='Fichas' component={Treinos} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name='drawer' size={size} color={color} />
        }} />
      </TabNavigator.Navigator>
    )
  }