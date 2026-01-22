import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalProps,
} from "@heroui/react";

export default function CustomModal({ children, isOpen, onClose, size, title }: ModalProps) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}