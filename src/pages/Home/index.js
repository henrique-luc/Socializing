import { Box, Button, ButtonGroup, Center, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../components/Button";

const Home = () => {
  const history = useHistory();

  return (
    <Center bg="white" h="100vh" flexDir="column">
      <Box>
        <Image src="logo.svg" />
      </Box>
      <ButtonGroup>
        <ButtonComponent
          onClick={() => history.push("/signup")}
          hover={{ bg: "#383838" }}
        >
          Sign Up
        </ButtonComponent>
      </ButtonGroup>
    </Center>
  );
};

export default Home;
