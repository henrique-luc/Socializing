import { Box, Center, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardPost from "../../components/CardPost";
import Header from "../../components/Header";
import PostForm from "../../components/PostForm";

const Posts = () => {
  const allPosts = useSelector(({ allposts }) => allposts);

  const params = useParams();

  return (
    <Box w="60%" m="0 auto">
      <Header />
      <Center bg="white" flexDir="column" pb="200px">
        <Box border="1px solid #999999" p="20px 30px" w="90%" m="44px 0 35px">
          <Text fontSize="22px" fontWeight="700" mb="34px">
            What's on your mind {params.id}?
          </Text>
          <PostForm />
        </Box>
        <Box w="90%">
          {allPosts.map((post) => (
            <CardPost key={post.id} post={post} allPosts={allPosts} />
          ))}
        </Box>
      </Center>
    </Box>
  );
};

export default Posts;
