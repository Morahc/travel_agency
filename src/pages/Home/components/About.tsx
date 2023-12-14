import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  Center,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Counter from "../../../components/Counter";

const About = () => {
  return (
    <Box as='section'>
      <Center>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} w={["7xl"]} p={[4]} gap={[14, 16]}>
          <GridItem position={"relative"} h={["sm", "xl"]}>
            <Image
              src='./images/about-one-img-1.jpg'
              position={["static", "absolute"]}
              right={0}
              zIndex={1}
              alt='About images'
            />
            <Image
              src='./images/about-one-img-2.jpg'
              position={"absolute"}
              bottom={0}
              display={["none", "block"]}
              alt='About images'
            />
            <Box
              p={[4, 6]}
              bgColor={"white"}
              shadow={"lg"}
              position={"absolute"}
              bottom={[0, 30]}
              right={[0, 30]}
              zIndex={1}
            >
              <Heading fontSize={["3xl", "5xl"]} fontWeight={"light"}>
                <Counter to={28} />
              </Heading>
              <Text fontSize={["sm", "lg"]}>Years of Experience</Text>
            </Box>
          </GridItem>
          <GridItem
            display={"flex"}
            flexDirection='column'
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={[6]}
          >
            <Stack spacing={[1]}>
              <Text fontSize={["xs", "sm"]} fontWeight={"semibold"}>
                GET TO KNOW ABOUT US
              </Text>
              <Heading size={["2xl"]} fontWeight={"semibold"}>
                Our Story
              </Heading>
            </Stack>
            <Text fontSize={["sm"]} color='gray.500'>
              Welcome to Odyssey Outings, where every journey is an adventure waiting to unfold. At
              Odyssey Outings, we believe that travel is not just about reaching a destination; it's
              about the transformative experiences, the captivating stories, and the indelible
              memories created along the way.
            </Text>
            <Flex direction={"column"} gap={[2]}>
              <Flex>
                <Stack spacing={1}>
                  <Heading size={"lg"} fontWeight={["semibold"]}>
                    Unforgetable Memories
                  </Heading>
                  <Text fontSize={["sm"]} color='gray.500'>
                    Embark on a voyage of discovery with Odyssey Outings, your trusted partner in
                    crafting unforgettable travel experiences. Whether you're yearning for the
                    thrill of exotic destinations, the serenity of secluded landscapes, or the rich
                    tapestry of cultural immersion, we curate tailor-made adventures to suit every
                    wanderlust.
                  </Text>
                </Stack>
              </Flex>
              <Flex>
                <Stack spacing={1}>
                  <Heading size={"lg"} fontWeight={["semibold"]}>
                    Seamless Process
                  </Heading>
                  <Text fontSize={["sm"]} color='gray.500'>
                    Our team of seasoned explorers and travel enthusiasts is dedicated to ensuring
                    that your odyssey is seamless, exhilarating, and uniquely yours. From pristine
                    beaches to bustling cityscapes, from awe-inspiring natural wonders to hidden
                    gems off the beaten path, Odyssey Outings opens the door to a world of
                    possibilities.
                  </Text>
                </Stack>
              </Flex>
            </Flex>
            <Button
              bgColor='#020202'
              size={"lg"}
              color='white'
              borderRadius={0}
              _hover={{ bgColor: "#08415C" }}
            >
              <Text fontSize={["sm", "md"]}>
                <Link to='about-us'>Discover More</Link>
              </Text>
            </Button>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default About;
