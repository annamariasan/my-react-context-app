import { useContext } from "react"
import { NotificationContext } from "../contexts/NotificationContext";

const useNotification = () => {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error("useNotification debe ser usado dentro de un NotificationProvider");
    }
    return context;
};

export default useNotification;