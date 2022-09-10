import { Box, Button, ButtonGroup, Center, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <Center bg="white" h="100vh" flexDir="column">
      <Box>
        <Image src="logo.svg" />
      </Box>
      <ButtonGroup>
        <Button onClick={() => history.push("/signup")}>Sign Up</Button>
      </ButtonGroup>
    </Center>
  );
};

export default Home;
