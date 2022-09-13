import { EditIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import EditPostForm from "../EditPostForm";

const EditModal = ({ postId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Edit post"
        icon={<EditIcon w={6} h={6} />}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        onClick={onOpen}
      />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditPostForm postId={postId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
