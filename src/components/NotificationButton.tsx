import useNotification from "../hooks/useNotification";

const NotificationButton: React.FC = () => {
    const {showNotification} = useNotification();
    return (
        <button onClick={() => showNotification("Transacción completada con éxito!")}>
            Confirmar transacción
            <span role="img" aria-label="checkmark">✅</span>
        </button>
    )
}

export default NotificationButton;