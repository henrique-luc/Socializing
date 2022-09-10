import { Box } from "@chakra-ui/react";

const ButtonComponent = ({
  children,
  onClick,
  bg = "black",
  hover,
  w,
  ...rest
}) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      bg={bg}
      color="white"
      p="5px 25px"
      borderRadius={8}
      _hover={hover}
      w={w}
    >
      {children}
    </Box>
  );
};

export default ButtonComponent;
