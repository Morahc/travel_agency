import { Box, Flex, Heading, Text, Stack, Container, Icon } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Support = () => {
  return (
    <Box
      as='section'
      bgImage={`linear-gradient(0deg, rgba(255, 255, 255), rgba(255, 255, 255, 0.6)), url(/images/contact-two-bg.png)`}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >
      <Container maxW={["7xl"]}>
        <Flex gap={[8, 16]} direction={["column", "row"]} align={"center"}>
          <Box border={"1px"} borderColor={"gray.300"} p={[2, 4]} bgColor={"white"}>
            <Stack
              spacing={[4, 8]}
              border={"1px"}
              borderColor={"gray.400"}
              p={[6, 10]}
              borderStyle={"dashed"}
            >
              <Stack spacing={[2]}>
                <Text fontSize={["xs", "sm"]} fontWeight={"semibold"}>
                  GET OUR SUPPORT
                </Text>
                <Heading size={["lg", "2xl"]} fontWeight={"semibold"}>
                  A Trusted & Well Known Travel Agency
                </Heading>
              </Stack>
              <Stack spacing={[4, 6]}>
                <Flex align={"center"} p={[3, 4]} gap={4} border={"1px"} borderColor={"gray.200"}>
                  <Icon as={FaCheck} color='#020202' />
                  <Text fontSize={["small", "lg"]} fontWeight={"thin"}>
                    Fast Visa Process
                  </Text>
                </Flex>
                <Flex align={"center"} p={[3, 4]} gap={4} border={"1px"} borderColor={"gray.200"}>
                  <Icon as={FaCheck} color='#020202' />
                  <Text fontSize={["small", "lg"]} fontWeight={"thin"}>
                    Transparent Process
                  </Text>
                </Flex>
                <Flex align={"center"} p={[3, 4]} gap={4} border={"1px"} borderColor={"gray.200"}>
                  <Icon as={FaCheck} color='#020202' />
                  <Text fontSize={["small", "lg"]} fontWeight={"thin"}>
                    Help in Documentation
                  </Text>
                </Flex>
              </Stack>
            </Stack>
          </Box>
          <Box justifySelf={"flex-end"}>
            <Heading size={["lg", "xl"]} textAlign={["center", "left"]}>
              Thousands of travelers from all over the world have benefited from our assistance in
              their travel plans.
            </Heading>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Support;
