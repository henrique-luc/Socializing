import { Box, Center, Text } from "@chakra-ui/react";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import PostForm from "../../components/PostForm";

const Posts = () => {
  return (
    <Box w="60%" m="0 auto">
      <Header />
      <Center bg="white" h="100vh" flexDir="column">
        <Box border="1px solid #999999" p="20px 30px" w="90%">
          <Text fontSize="22px" fontWeight="700" mb="34px">
            What's on your mind?
          </Text>
          <PostForm />
        </Box>
        <Box>
          <CardPost />
        </Box>
      </Center>
    </Box>
  );
};

export default Posts;
