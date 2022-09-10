import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import ButtonComponent from "../Button";

const PostForm = () => {
  const [newPost, setNewPost] = useState({});
  const [inputValidation, setInputValidation] = useState("");
  const [textareaValidation, setTextareaValidation] = useState("");

  const validation = inputValidation && textareaValidation;

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    content: yup.string().required("Content is required"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    setNewPost([...newPost, data]);
  };

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
