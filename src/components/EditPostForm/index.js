import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import ButtonComponent from "../Button";
import { useDispatch } from "react-redux";
import { editOnePost } from "../../actions/actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPostForm = ({ postId }) => {
  const { title, content, userId, id } = postId[0];

  const [editPost, setEditPost] = useState({
    title: title,
    content: content,
    userId: userId,
    id: id,
  });

  const schema = yup.object().shape({
    title: yup.string(),
    content: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const notify = () =>
    toast.success("Post edited successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onSubmitFunction = (data) => {
    setEditPost({
      title: data.title,
      content: data.content,
      userId: userId,
      id: id,
    });
    notify();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (editPost.title !== title || editPost.content !== content) {
      dispatch(editOnePost(editPost));
    }
  }, [content, dispatch, editPost, title]);

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          id="title"
          type="text"
          {...register("title")}
          borderColor="#777777"
          focusBorderColor="black"
          mb="20px"
          value={editPost.title}
          onChange={(e) => setEditPost(e.target.value)}
        />
        <FormLabel>Content</FormLabel>
        <Textarea
          resize="none"
          id="content"
          type="text"
          {...register("content")}
          borderColor="#777777"
          focusBorderColor="black"
          mb="20px"
          value={editPost.content}
          onChange={(e) => setEditPost(e.target.value)}
        />
        <Flex flexDir="column" align="flex-end">
          <ButtonComponent variant="outline" borderColor="black" type="submit">
            Save
          </ButtonComponent>
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
        </Flex>
      </FormControl>
    </form>
  );
};

export default EditPostForm;
