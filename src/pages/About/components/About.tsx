import { Container, Image, Text, Heading, Stack, Grid, GridItem } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW={"7xl"} my={[4, 8]}>
      <Stack spacing={[4, 10]} w='full'>
        <Grid
          my={[0, 10]}
          templateColumns={["1fr", "repeat(2, 1fr)"]}
          alignItems={"center"}
          gap={[4, 8]}
        >
          <GridItem
            display={"flex"}
            flexDirection='column'
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={[2, 4]}
          >
            <Heading fontSize={["xl", "2xl"]} fontWeight={"bold"}>
              EVERYTHING ABOUT US
            </Heading>
            <Text fontSize={["xs", "sm"]} color='gray.500'>
              Welcome to Odyssey Outings, where we believe that every journey is a story waiting to
              be told. As avid explorers ourselves, we understand the profound impact that travel
              can have on individuals and the memories it creates. That's why we founded Odyssey
              Outings - to be your trusted companion on the path to extraordinary adventures.
            </Text>
            <Text fontSize={["xs", "sm"]} color='gray.500'>
              At Odyssey Outings, we don't just offer vacations; we craft experiences that linger in
              your heart long after the journey concludes. Our mission is to inspire and facilitate
              exploration, creating bespoke travel itineraries that reflect the unique desires and
              interests of each traveler.
            </Text>
            <Text fontSize={["xs", "sm"]} color='gray.500'>
              From the bustling streets of exotic cities to the tranquility of hidden paradises,
              we've scoured the globe to bring you a portfolio of handpicked destinations. Whether
              you seek cultural immersion, thrilling adventures, or simply a serene escape, Odyssey
              Outings is your gateway to a world of possibilities.
            </Text>
          </GridItem>
          <GridItem>
            <Image
              src='./images/about-team.jpg'
              alt='about images'
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </GridItem>
        </Grid>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={[4, 8]} alignItems={"center"}>
          <GridItem p={4} display={["none", "block"]}>
            <Image
              src='./images/why us.jpg'
              alt='about images'
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </GridItem>
          <GridItem
            display={"flex"}
            flexDirection='column'
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={[2, 4]}
          >
            <Heading fontSize={["xl", "2xl"]} fontWeight={"bold"}>
              WHY CHOOSE US
            </Heading>
            <Text fontSize={["xs", "sm"]} color='gray.500'>
              Why choose Odyssey Outings? We're more than just travel enthusiasts; we're
              storytellers. We believe in the transformative power of travel, the joy of discovery,
              and the connections made along the way. Our team is dedicated to curating seamless,
              personalized, and unforgettable journeys to the world's most captivating destinations.
            </Text>
            <Text fontSize={["xs", "sm"]} color='gray.500'>
              Our commitment goes beyond crafting itineraries; it's about building relationships. We
              strive to understand your travel dreams, preferences, and aspirations, ensuring that
              every trip with us is a reflection of your unique style and desires. Your journey
              begins from the moment you envision it, and we're here to turn those dreams into
              reality.
            </Text>
            <Text fontSize={["xs", "sm"]} color='gray.500'>
              Join us at Odyssey Outings and embark on a journey where each step is a moment to
              cherish. Let's explore, discover, and create memories together. Because at Odyssey
              Outings , we believe that the world is meant to be experienced, and the best stories
              are written through the joy of travel.
            </Text>
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
};

export default About;
