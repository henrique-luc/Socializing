import { Box, Center, Text } from "@chakra-ui/react";
import SignupForm from "../../components/SignupForm";

const Signup = () => {
  return (
    <Center h="100vh">
      <Box bg="white" w="500px">
        <Text>Welcome to CodeLeap network!</Text>
        <SignupForm />
      </Box>
    </Center>
  );
};

export default Signup;
