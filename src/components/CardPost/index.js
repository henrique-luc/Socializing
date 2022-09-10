import { Box, Heading } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const CardPost = () => {
  return (
    <Box>
      <Box bg="black" color="white">
        <Heading>My First Post at CodeLeap Network!</Heading>
        <DeleteIcon />
        <EditIcon />
      </Box>
    </Box>
  );
};

export default CardPost;
