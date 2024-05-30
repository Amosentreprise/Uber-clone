import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ride from './Ride';
import Delivery from './Delivery';

import train from "../assets/train.png"
import airplane from "../assets/airplane.png"
import valise from "../assets/valise.png"
import charter from "../assets/charter.png"




const Tab = createMaterialTopTabNavigator();
const Home = () => {
    //states
    const navigation = useNavigation();
    const services = [
    {
        id:1,
        name:"Transit",
        image:train
    },
    {
        id:2,
        name:"Charter",
        image:charter
    },
    {
        id:3,
        name:"Explore",
        image:airplane
    },
    {
        id:4,
        name:"Travel",
        image:valise
    },
    
]

    return ( 
        <View className="flex-1 flex flex-col bg-slate-200">
            <View className="flex-1 bg-white">
                <Tab.Navigator initialRouteName='Rides' screenOptions={{ tabBarStyle:{
                     borderBottomColor:"#000",
                     margin:"auto"
                }}} >
                  <Tab.Screen name="Rides" component={Ride} options={{tabBarLabel:({ focused, color })=> ( <View className="flex flex-row gap-1 items-center">
                    <Image source={require("../assets/car-white.png")} className="w-10 h-10 "/>
                    <Text className=" text-xl font-bold" style={{color:focused ? "black" : "#747474"}}>Rides</Text>
                  </View>)
                  }}/>

                  <Tab.Screen name="Delivery" component={Delivery} options={{tabBarLabel:({ focused , color })=> ( <View className="flex flex-row gap-1 items-center">
                    <Image source={require("../assets/food2.png")} className="w-8 h-8"/>
                    <Text className=" text-xl font-bold" style={{color:focused ? "black" : "#747474"}}>Delivery</Text>
                  </View>)
                  }}/>
                  
                    
                </Tab.Navigator>
                
            </View>
            <View className="flex-1 mt-2 bg-white">
                <View className="p-3">
                    <View className=" flex flex-row justify-between">
                        <Text className="text-black text-xl font-bold">Suggestions</Text>
                        <Text className="text-[#747474] text-xl" onPress={()=>navigation.navigate("services")}>See all</Text>
                </View>
                    <View className="w-full flex pt-6 flex-row justify-center  gap-2 flex-wrap">
                        {
                            services.map((service)=>(
                                <Pressable className="w-[22%] " key={service.id} >
                                    <View className="h-14 w-full bg-slate-200 rounded-lg p-3">
                                        <Image source={service.image} className="w-full h-full"/>
                                    </View>
                                    <Text className=" text-black text-center font-bold">{service.name}</Text>

                                </Pressable>
                            ))
                        }
                    </View>

                    <Text className="text-xl text-black pt-2 font-bold">Ways to plan Uber</Text>

                    <ScrollView contentContainerStyle={{flexGrow:1}} horizontal={true}>
                        <View className="flex-1 flex flex-row gap-3 py-3">
                            <Pressable className="w-40 h-32 rounded-lg bg-slate-400">
                                <Image source={require("../assets/calendar-background.jpg")} className="w-full h-full rounded-lg"/>
                                <Text className="text-black">Plan</Text>
                            </Pressable>
                            <Pressable className="w-40 h-32 rounded-lg bg-slate-400">
                                <Image source={require("../assets/taxi-winnipeg.jpg")} className="w-full h-full rounded-lg"/>
                                <Text className="text-black">Reserve</Text>
                            </Pressable>
                            <Pressable className="w-40 h-32 rounded-lg bg-slate-400">
                                <Image source={require("../assets/rent.jpg")} className="w-full h-full rounded-lg"/>
                                <Text className="text-black">Rent</Text>
                            </Pressable>
                        </View>

                    </ScrollView>

                </View>

            </View>
            
           
        </View>
     );
}
 
export default Home;