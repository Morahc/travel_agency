import { Box, Text, Flex, Heading, List, ListItem, Center, Stack, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as='footer' backgroundColor={"#020202"} color={"whiteAlpha.900"} pt={[6, 12]} pb={[4]}>
      <Center>
        <Flex direction={"column"} w={["7xl"]} gap={[2, 4]}>
          <Flex
            gap={[6, 0]}
            p={[4]}
            direction={["column", "row"]}
            justify={"space-between"}
            align={"center"}
            fontSize={["sm", "md"]}
          >
            <Flex direction={["column", "row"]} align={["center"]} gap={[2]}>
              <Text>Seamless Travel Starts Here – Get Your Visa for Unforgettable Journeys</Text>
            </Flex>
            <Flex>
              <Stack fontSize={"sm"}>
                <Text>Have Questions?</Text>
                <Text>Call us on +1 (157) 783-3900</Text>
              </Stack>
            </Flex>
          </Flex>
          <Flex gap={6} direction={["column", "row"]} p={[4]}>
            <Stack>
              <Flex gap={2} alignItems={"center"}>
                <Icon as={SiYourtraveldottv} boxSize={[6]} alt='Company logo' />
                <Text
                  fontFamily={"Sacramento"}
                  fontStyle={"italic"}
                  fontSize={["large", "xx-large"]}
                >
                  Odyssey Outings
                </Text>
              </Flex>
              <Text fontSize={["sm", "md"]}>
                Unlock Your Next Adventure – Visa Secured, Adventure Assured!
              </Text>
            </Stack>
            <Flex w={"full"} justify={"space-evenly"} direction={["column", "row"]} gap={[8, 12]}>
              <Box>
                <Heading size={["sm", "md"]} mb={[3, 4]}>
                  Explore
                </Heading>
                <List spacing={[2, 3]} fontSize={["sm"]} fontWeight={"hairline"}>
                  <ListItem>
                    <Link to='/'>Home</Link>
                  </ListItem>
                  <ListItem>
                    <Link to='/about-us'>About</Link>
                  </ListItem>
                  <ListItem>
                    <Link to='/faqs'>FAQ</Link>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Heading size={["md"]} mb={[3, 4]}>
                  Contact
                </Heading>
                <List spacing={[2, 3]} fontSize={["sm"]} fontWeight={"hairline"}>
                  <ListItem>info@odysseyoutings.com</ListItem>
                  <ListItem>500 4 Ave SW, AB II8 2P6, London</ListItem>
                  <ListItem>Mon - Fri 8.00 am - 6.00 pm</ListItem>
                  <ListItem>
                    <Flex gap={4}>
                      <a href='#' rel='noopener noreferrer'>
                        <Icon boxSize={5} as={FaTwitter} />
                      </a>
                      <a href='#' rel='noopener noreferrer'>
                        <Icon boxSize={5} as={FaFacebook} />
                      </a>
                      <a href='#' rel='noopener noreferrer'>
                        <Icon boxSize={5} as={FaInstagram} />
                      </a>
                    </Flex>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Flex>
          <Text fontSize={["xs", "small"]} fontWeight={"hairline"} textAlign={"center"}>
            @ All Copyright 2023
          </Text>
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;
