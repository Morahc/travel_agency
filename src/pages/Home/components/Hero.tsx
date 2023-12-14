import { Box, Stack, Heading, Button, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box height={"90vh"} width={"full"} overflow={"hidden"}>
      <Box
        height='90vh'
        backgroundPosition={["center"]}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundImage={"url('/images/hero.jpg')"}
      >
        <Center height='100%' p={4}>
          <Box w={"7xl"}>
            <Stack color={"white"} spacing={0}>
              <Heading as='h1' fontSize={{ base: "4xl", lg: "7xl" }}>
                Creating Memories
              </Heading>
              <Heading as='h1' fontSize={{ base: "4xl", lg: "7xl" }}>
                One Trip at a Time
              </Heading>
            </Stack>
            <Link to='about-us'>
              <Button
                bgColor={"#020202"}
                color={"white"}
                size={["md", "lg"]}
                borderRadius={0}
                mt={[6]}
                _hover={{ bgColor: "#020202" }}
              >
                <Text fontSize={["sm", "md"]}>Discover More</Text>
              </Button>
            </Link>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};
export default Hero;
