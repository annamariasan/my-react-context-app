import { NotificationProvider } from "./contexts/NotificationContext";
import Notification from "./components/Notification";
import NotificationButton from "./components/NotificationButton";

function App() {

  return (
    <NotificationProvider>
      <h1>💸 Transacción casi lista 💸</h1>
      <p>¿Estás seguro de que deseas completar esta transacción?</p>
      <NotificationButton />
      <Notification />
    </NotificationProvider>
  )
}

export default App
