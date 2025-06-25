
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import SplashScreen from "./screens/SplashScreen";
import HotelBookingSlider from "./screens/slider";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginPage from "./screens/loginpage";
import SignUpPage from "./screens/signUp";
import CreatePasswordScreen from "./screens/createpasswordscreen";
import OTPVerificationScreen from "./screens/otpverification";
import HomeScreen from "./screens/homeScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import detailsScreen from "./screens/detailsScreen";
import PaymentScreen from "./screens/paymentScreen";
import PaymentSuccessScreen from "./screens/paymentSuccess";
import FavCards from "./components/favCards";
import NotificationScreen from "./screens/Notfication";
import ExploreScreen from "./screens/ExploreScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          backgroundColor: "#fff",
          borderRadius: 20,
          height: 60,
          elevation: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "search";
          } else if (route.name === "Favorite") {
            iconName = "heart";
          } else if (route.name === "Chat") {
            iconName = "message-circle";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return <Icon name={iconName} size={25} color={focused ? "#2B74FF" : "#aaa"} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{
        tabBarBadge: 3,
        tabBarBadgeStyle: {backgroundColor: "#2B74FF", color: "#fff", fontSize: 10, fontWeight: "bold"}
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// 🔵 Stack Navigator (Wrapping Bottom Tabs)
function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Slider" component={HotelBookingSlider} />
      <Stack.Screen name="onBoarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
      <Stack.Screen name="OTP" component={OTPVerificationScreen} />
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="details" component={detailsScreen}/>
      <Stack.Screen name="payment" component={PaymentScreen}/>
      <Stack.Screen name="paymentsuccess" component={PaymentSuccessScreen}/>
      <Stack.Screen name="Favcard" component={FavCards}/>
      <Stack.Screen name="Notification" component={NotificationScreen}/>
    
    </Stack.Navigator>
  );
}

// 🚀 Final App
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
