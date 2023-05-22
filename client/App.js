import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

// contexts
// import theme from "./context/theme";
import { UserProvider } from "./context/UserContext";
import { UserDataProvider } from "./context/UserDataContext";

// pages
import AuthUser from "./utils/AuthUser";

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <SafeAreaProvider>
                    <UserProvider>
                        <UserDataProvider>
                            <AuthUser />
                        </UserDataProvider>
                    </UserProvider>
                </SafeAreaProvider>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
