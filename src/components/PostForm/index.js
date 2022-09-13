import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import ButtonComponent from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../actions/actions";
import { v4 as uuid } from "uuid";

const PostForm = () => {
  const id = uuid();

  const allUsers = useSelector(({ allusers }) => allusers);

  const params = useParams();

  const [newPost, setNewPost] = useState();

  const [inputValidation, setInputValidation] = useState("");
  const [textareaValidation, setTextareaValidation] = useState("");

  const dispatch = useDispatch();

  const validation = inputValidation && textareaValidation;

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    content: yup.string().required("Content is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const idOfUser = allUsers
    .filter((user) => params.id === user.userName)
    .map((id) => {
      return id.userId;
    });

  const idToNumber = idOfUser[0];

  const onSubmitFunction = (data) => {
    setNewPost({
      title: data.title,
      content: data.content,
      userId: idToNumber,
      id: id,
    });
  };

  useEffect(() => {
    if (newPost !== undefined) {
      dispatch(addPost(newPost));
    }
  }, [dispatch, newPost]);

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          id="title"
          type="text"
          placeholder="Hello World"
          {...register("title")}
          borderColor="#777777"
          focusBorderColor="black"
          mb="20px"
          value={inputValidation}
          onChange={(e) => setInputValidation(e.target.value)}
        />
        {errors.title && (
          <FormHelperText mb="10px" color="red">
            {errors.title.message}
          </FormHelperText>
        )}
        <FormLabel>Content</FormLabel>
        <Textarea
          resize="none"
          id="content"
          type="text"
          placeholder="Content here"
          {...register("content")}
          borderColor="#777777"
          focusBorderColor="black"
          mb="20px"
          value={textareaValidation}
          onChange={(e) => setTextareaValidation(e.target.value)}
        />
        {errors.content && (
          <FormHelperText mb="10px" color="red">
            {errors.content.message}
          </FormHelperText>
        )}
        <Flex flexDir="column" align="flex-end">
          <ButtonComponent
            bg={!validation ? "darkgrey" : "black"}
            hover={{
              cursor: !validation ? "not-allowed" : "pointer",
            }}
            type="submit"
            w="fit-content"
          >
            CREATE
          </ButtonComponent>
        </Flex>
      </FormControl>
    </form>
  );
};

export default PostForm;
