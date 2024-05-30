import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../views/Home";
import Services from "../views/Services";
import Activity from "../views/Activity";
import Account from "../views/Account";

import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import { Text, View } from "react-native";

const bottom = createBottomTabNavigator()
const BottomNavigation = () => {
    return ( 
        
        <bottom.Navigator initialRouteName="home" screenOptions={
            {
                headerShown:false,               
                tabBarBackground:()=>(
                    <View className="bg-white z-10 absolute bottom-0 w-full top-0"></View>
                ),
            
               
                 
            }
            
        }>
           <bottom.Screen name="home" component={HomeScreen}  options={
                {
                    tabBarIcon:({focused})=>(
                        <Entypo name="home" size={26} color={ focused ? "#000" : "#757575"} />
                    ),  
                    tabBarLabel:({ focused,color })=>(<Text className="text-[13px]" style={{ color: focused ?  "#000" : "#757575"}}>Home</Text>)
                    
                }
            }/>
           <bottom.Screen name="services" component={Services}  options={
                {
                    tabBarIcon:({focused})=>(
                        <FontAwesome name="th-large" size={26} color={ focused ? "#000" : "#757575"} />
                    ),  
                    tabBarLabel:({ focused,color })=>(<Text className="text-[13px]" style={{ color: focused ?  "#000" : "#757575"}}>Services</Text>)
                }
            }/>
           <bottom.Screen name="activity" component={Activity}  options={
                {
                    tabBarIcon:({focused})=>(
                        <FontAwesome name="bookmark" size={26}  color={ focused ? "#000" : "#757575"} />
                    ),  
                    tabBarLabel:({ focused,color })=>(<Text className="text-[13px]" style={{ color: focused ?  "#000" : "#757575"}}>Activity</Text>)
                }
            }/>
           <bottom.Screen name="account" component={Account}  options={
                {
                    tabBarIcon:({focused})=>(
                        <Entypo name="user" size={26} color={ focused ? "#000" : "#757575"} />
                    ),  
                    tabBarLabel:({ focused,color })=>(<Text  className="text-[13px]" style={{ color: focused ?  "#000" : "#757575"}}>Account</Text>)
                }
            }/>
        </bottom.Navigator>
     );
}
 
export default BottomNavigation;