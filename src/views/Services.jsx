
import React from "react";
import { Image, Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native";
import reserve from "../assets/calendar.png"
import car from "../assets/car.png"
import rent from "../assets/rent.png"
import train from "../assets/train.png"
import airplane from "../assets/airplane.png"
import valise from "../assets/valise.png"
import charter from "../assets/charter.png"
import biciclette from "../assets/biciclette.png"

const Services = () => {

    const services = [{
        id:0,
        name:"Reserve",
        image:reserve
    },
    {
        id:1,
        name:"Hourly",
        image:car
    },
    {
        id:2,
        name:"Rent",
        image:rent,

    },
    {
        id:3,
        name:"wheel",
        image:biciclette
    },
    {
        id:4,
        name:"Transit",
        image:train
    },
    {
        id:5,
        name:"Charter",
        image:charter
    },
    {
        id:6,
        name:"Explore",
        image:airplane
    },
    {
        id:7,
        name:"Travel",
        image:valise
    },
    
]
     
    return ( 
       
     <View className="flex-1 bg-slate-200 flex flex-col gap-4 w-full ">
        <StatusBar barStyle={"dark-content"} backgroundColor={"#FFF"}/>
        <View className="bg-white min-h-[470px] w-full px-2 flex flex-col space-y-3">
            <Text className="p-3 text-2xl font-bold text-black tracking-wide">Services</Text>
            <Text className="p-3  text-2xl font-bold text-black tracking-wide">Go anywhere</Text>
            <View className="w-full  py-2  flex justify-center  flex-row  flex-wrap gap-3">
                <Pressable className="w-[45%] h-24 rounded-xl bg-slate-200 flex flex-row justify-evenly p-4">
                     
                        <Text className="text-black text-lg font-semibold mt-8 mr-4">Ride</Text>
                        <Image source={require("../assets/car-white.png")} className="w-24 h-14 object-cover" />
                    
                </Pressable>
                <Pressable className="w-[45%] h-24 rounded-xl bg-slate-200 flex flex-row justify-evenly p-4">
                    
                     
                        <Text className="text-black text-lg font-semibold mt-8 mr-4">Package</Text>
                        <Image source={require("../assets/package.png")} className="w-16 h-14 object-cover" />
                    
                </Pressable>
              
            </View>

            <View className="w-full flex   flex-row justify-center  gap-2 flex-wrap">
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

        </View>
        <View className="bg-white flex-1 w-full">
        <Text className="p-3  text-2xl font-bold text-black tracking-wide">Get anything delivered</Text>
            <View className="w-full  py-2 px-2  flex justify-center  flex-row  flex-wrap gap-3">
                <Pressable className="w-[45%] h-24 rounded-xl bg-slate-200 flex flex-row justify-evenly p-4">
                     
                        <Text className="text-black text-sm font-semibold mt-8 mr-4">Restaurants</Text>
                        <Image source={require("../assets/food.png")} className="w-1/2 h-14 object-cover" />
                    
                </Pressable>
                <Pressable className="w-[45%] h-24 rounded-xl bg-slate-200 flex flex-row justify-evenly p-4">
                                         
                        <Text className="text-black text-sm font-semibold mt-8 mr-4">Grocery</Text>
                        <Image source={require("../assets/food2.png")} className="w-1/2 h-14 object-cover" />
                    
                </Pressable>
              
            </View>

        </View>
    
     </View>
     );
}
 
export default Services;