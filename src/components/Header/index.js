import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const Signout = () => {
    history.push("/");
  };

  return (
    <Box bg="black" padding="23px" w="100%">
      <Flex justifyContent="space-between" w="95%" m="0 auto">
        <Box>
          <Heading color="white" fontSize="22px" fontWeight="700">
            CodeLeap Network
          </Heading>
        </Box>
        <Box>
          <Button
            variant="outline"
            color="white"
            fontSize="12px"
            onClick={() => Signout()}
          >
            Sign Out
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
