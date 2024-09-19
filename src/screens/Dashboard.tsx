import { SafeAreaView, Text } from "react-native";
import LogoutBtn from "../components/LogoutBtn";

export default function Dashboard(){
    return(
        <SafeAreaView>
            <Text>Dashboard</Text>
            <LogoutBtn/>
        </SafeAreaView>
    )
}