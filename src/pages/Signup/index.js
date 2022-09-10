import { Box, Center, Text } from "@chakra-ui/react";
import SignupForm from "../../components/SignupForm";

const Signup = () => {
  return (
    <Center h="100vh">
      <Box bg="white" w="500px" p="30px">
        <Text fontWeight="700" fontSize="22px" mb="30px">
          Welcome to CodeLeap network!
        </Text>
        <SignupForm />
      </Box>
    </Center>
  );
};

export default Signup;
