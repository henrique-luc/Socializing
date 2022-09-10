import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const SignupForm = () => {
  const { userData, setUserData } = useState();

  const schema = yup.object().shape({
    user: yup.string().required("Username is not valid"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    setUserData([...userData, data]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <FormControl>
        <FormLabel htmlFor="username">Please enter your username</FormLabel>
        <Input
          id="user"
          type="text"
          placeholder="John Doe"
          {...register("user")}
        />
        {errors.user && (
          <FormHelperText color="red">{errors.user.message}</FormHelperText>
        )}
        <Button type="submit">Enter</Button>
      </FormControl>
    </form>
  );
};

export default SignupForm;

//Na hr de colocar cor no botao fazer uma validação pra ver se tem algo no userData
