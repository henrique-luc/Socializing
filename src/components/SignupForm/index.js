import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import ButtonComponent from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/actions";

const SignupForm = () => {
  const allUsers = useSelector(({ allusers }) => allusers);

  const id = allUsers.length + 1;

  const [userData, setUserData] = useState();

  const [inputValidation, setInputValidation] = useState("");

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    userName: yup.string().required("Username is not valid"),
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
    setUserData({ userName: data.userName, userId: id });
  };

  const nameOfUsers = allUsers.map((name) => {
    return name.userName;
  });

  useEffect(() => {
    if (userData !== undefined) {
      const existUsername = nameOfUsers.find(
        (name) => name === userData.userName
      );
      if (existUsername === undefined) {
        dispatch(addUser(userData));
        history.push(`/posts/${userData.userName}`);
      } else {
        history.push(`/posts/${userData.userName}`);
      }
    }
  }, [dispatch, history, nameOfUsers, userData]);

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
          id="userName"
          type="text"
          placeholder="John Doe"
          {...register("userName")}
          value={inputValidation}
          onChange={(e) => setInputValidation(e.target.value)}
          borderColor="#777777"
          focusBorderColor="black"
          mb="20px"
        />
        {errors.userName && (
          <FormHelperText mb="10px" color="red">
            {errors.userName.message}
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
