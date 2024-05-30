import { Text, TextInput, View } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const Ride = () => {
    return ( 
        <View className="flex-1 bg-white">
           <View className="p-3 pt-5">
              <TextInput className=" bg-slate-200 rounded-full relative px-2 text-black placeholder:pl-14 placeholder:text-xl placeholder:font-bold "   placeholderTextColor={"#6b7280"} placeholder="where to ?"/>
              <Text className="absolute top-7 left-8"><AntDesign name="search1" size={26} color="black"/></Text>
           </View>

          <View className="px-2 space-y-2 flex flex-col ">
           <View className=" flex flex-row gap-3 px-3">
              <View className="w-14 h-14 rounded-full bg-slate-200 text-black flex justify-center items-center"><MaterialIcons name="work" size={26} color="black"/></View>
              <View className="w-full flex flex-col space-y-1">
                <Text className="text-black font-bold">Work</Text>
                <Text className="text-[#747474]">1455 Market</Text>
                <View className="h-1 bg-slate-200"></View>
              </View>
           </View>

           <View className=" flex flex-row gap-3 px-3">
              <View className="w-14 h-14 rounded-full bg-slate-200 text-black flex justify-center items-center"><Entypo name="home" size={26} color="black"/></View>
              <View className="w-full flex flex-col space-y-1">
                <Text className="text-black font-bold">Home</Text>
                <Text className="text-[#747474]">1455 Market</Text>
               
              </View>
           </View>
           </View>
        </View>
     );
}
 
export default Ride;