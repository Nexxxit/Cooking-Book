import CustomModal from "@/shared/ui/CustomModal";
import LoginForm from "./LoginForm";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    return (
        <CustomModal onClose={onClose} isOpen={isOpen} title="Войти в аккаунт">
            <LoginForm onClose={onClose} />
        </CustomModal>
    );
}