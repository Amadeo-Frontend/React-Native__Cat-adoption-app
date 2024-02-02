import AppNavigation from "./src/routes/Navigation.routes";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <AppNavigation />
      <Toast />
    </>
  );
}
