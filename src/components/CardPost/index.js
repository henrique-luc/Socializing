import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";

import moment from "moment";

const CardPost = ({ post, allPosts }) => {
  const { title, content, userId, id, time } = post;

  const allUsers = useSelector(({ allusers }) => allusers);

  const params = useParams();

  const idOfUser = allUsers
    .filter((user) => params.id === user.userName)
    .map((id) => {
      return id.userId;
    });

  const idToNumber = idOfUser[0];

  const postList = allPosts.filter((post) => post.id !== id);

  const postId = allPosts.filter((post) => post.id === id);

  const subtractedTime = moment(time, "h:mm a").fromNow();

  return (
    <Box w="100%" m="0 auto 45px" border="1px solid #999999">
      <Box bg="black" p="20px 0">
        <Flex
          color="white"
          justifyContent="space-between"
          align="center"
          w="90%"
          m="0 auto"
        >
          <Heading fontSize="22px" fontWeight="700" w="400px" overflow="hidden">
            {title}
          </Heading>
          {idToNumber === userId ? (
            <Flex>
              <DeleteModal postList={postList} />
              <EditModal postId={postId} />
            </Flex>
          ) : (
            ""
          )}
        </Flex>
      </Box>
      <Box w="90%" m="0 auto">
        <Flex justifyContent="space-between" m="23px 0 18px">
          {allUsers
            .filter((user) => user.userId === userId)
            .map((name, index) => (
              <Text
                fontSize="18px"
                fontWeight="700"
                color="#777777"
                key={index}
              >
                @{name.userName}
              </Text>
            ))}
          <Text fontSize="18px" fontWeight="700" color="#777777">
            {subtractedTime}
          </Text>
        </Flex>
        <Box>
          <Text textAlign="justify" fontSize="18px" fontWeight="400" mb="30px">
            {content}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CardPost;
