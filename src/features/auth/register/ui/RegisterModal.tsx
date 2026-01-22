import CustomModal from "@/shared/ui/CustomModal";
import RegisterForm from "./RegisterForm";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    return (
        <CustomModal onClose={onClose} isOpen={isOpen} title="Создать аккаунт">
            <RegisterForm onClose={onClose} />
        </CustomModal>
    );
}