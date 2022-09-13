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
} from "@chakra-ui/react";

import ButtonComponent from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { editOnePost } from "../../actions/actions";

const EditPostForm = ({ postId }) => {
  const { title, content, userId, id } = postId[0];

  const allUsers = useSelector(({ allusers }) => allusers);

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

  const onSubmitFunction = (data) => {
    setEditPost({
      title: data.title,
      content: data.content,
      userId: userId,
      id: id,
    });
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
        </Flex>
      </FormControl>
    </form>
  );
};

export default EditPostForm;
