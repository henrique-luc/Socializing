import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { removePost } from "../../actions/actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteModal = ({ postList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Post deleted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onClickFunction = () => {
    dispatch(removePost(postList));
    notify();
  };

  return (
    <>
      <IconButton
        aria-label="Delete post"
        icon={<DeleteIcon w={6} h={6} />}
        mr="20px"
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
          <ModalBody m="24px 0 20px" fontSize="18px" fontWeight="400">
            Are you sure you want to delete this item?
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              borderColor="black"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              borderColor="black"
              onClick={() => onClickFunction()}
            >
              Delete
            </Button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
