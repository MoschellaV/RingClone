import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

// context
// import theme from "./context/theme";

// pages
import AuthUser from "./utils/AuthUser";

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <SafeAreaProvider>
                    <AuthUser />
                </SafeAreaProvider>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
