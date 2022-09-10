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
} from "@chakra-ui/react";

import ButtonComponent from "../Button";

const SignupForm = () => {
  const [userData, setUserData] = useState([]);
  const [inputValidation, setInputValidation] = useState("");

  const schema = yup.object().shape({
    user: yup.string().required("Username is not valid"),
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
    setUserData([...userData, data]);
    history.push("/posts");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <FormControl>
        <FormLabel
          htmlFor="username"
          fontWeight="400"
          fontSize="16px"
          mb="13px"
        >
          Please enter your username
        </FormLabel>
        <Input
          id="user"
          type="text"
          placeholder="John Doe"
          {...register("user")}
          value={inputValidation}
          onChange={(e) => setInputValidation(e.target.value)}
          borderColor="#777777"
          focusBorderColor="black"
          mb="20px"
        />
        {errors.user && (
          <FormHelperText mb="10px" color="red">
            {errors.user.message}
          </FormHelperText>
        )}
        <Flex flexDir="column" align="flex-end">
          <ButtonComponent
            bg={!inputValidation ? "darkgrey" : "black"}
            hover={{ cursor: !inputValidation ? "not-allowed" : "pointer" }}
            type="submit"
            w="fit-content"
          >
            ENTER
          </ButtonComponent>
        </Flex>
      </FormControl>
    </form>
  );
};

export default SignupForm;

//Na hr de colocar cor no botao fazer uma validação pra ver se tem algo no userData
