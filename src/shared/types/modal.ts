export type OnCloseProps = {
    onClose: () => void;
}

export type ModalProps = {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
} & OnCloseProps