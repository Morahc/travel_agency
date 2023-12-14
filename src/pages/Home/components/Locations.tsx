import { Box, Flex, Heading, Text, Stack, Center, Grid, GridItem } from "@chakra-ui/react";

const Locations = () => {
  const visas = [
    {
      title: "Paris, France",
      text: 'Known as the "City of Love," Paris is a timeless destination filled with iconic landmarks like the Eiffel Tower.',
      image: "/images/locations/paris.jpg",
    },
    {
      title: "Bali, Indonesia",
      text: "A tropical paradise, Bali boasts stunning beaches, lush rice terraces, and vibrant cultural scenes. ",
      image: "/images/locations/bali.jpg",
    },
    {
      title: "New York City, USA",
      text: "The city that never sleeps, New York City is a melting pot of cultures and attractions.",
      image: "/images/locations/new-york.jpg",
    },
    {
      title: "Kyoto, Japan",
      text: "Steeped in history, Kyoto is a city of temples, traditional tea houses, and beautiful gardens.",
      image: "/images/locations/kyoto.jpg",
    },
    {
      title: "Santorini, Greece",
      text: "Famous for its white-washed buildings with blue-domed roofs overlooking the Aegean Sea.",
      image: "/images/locations/santorini.jpg",
    },
    {
      title: "Maui, Hawaii, USA",
      text: "Maui is a paradise for nature lovers.",
      image: "/images/locations/maui.jpg",
    },
    {
      title: "Rome, Italy",
      text: "The capital city of Italy, Rome is a living museum with its ancient ruins and vibrant street life.",
      image: "/images/locations/rome.jpg",
    },
    {
      title: "Cape Town, South Africa",
      text: "Nestled between mountains and the sea, Cape Town is a stunning destination.",
      image: "/images/locations/cape-town.jpg",
    },
  ];

  return (
    <Box as='section'>
      <Center>
        <Flex direction={"column"} w={["7xl"]} p={[4]} gap={[8]}>
          <Stack spacing={[2]} textAlign={"center"}>
            <Text fontSize={["xs", "sm"]} fontWeight={"semibold"}>
              OUR POPULAR LOCATIONS
            </Text>
            <Heading size={["2xl"]} fontWeight={"semibold"}>
              Adventure awaits, we'll make every moment count.
            </Heading>
          </Stack>
          <Grid
            autoRows={"1fr"}
            templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
            gap={[4, 6]}
          >
            {visas.map(({ title, text, image }, index) => (
              <GridItem
                border='1px'
                borderColor='gray.300'
                px={[2, 4]}
                as={Flex}
                direction={"column"}
                justifyContent={"flex-end"}
                align='center'
                key={index}
                bgImage={`linear-gradient(180deg, rgba(2, 2, 2, 0.1), rgba(2, 2, 2, 0.4)), url(${image})`}
                bgSize={"cover"}
                h='sm'
              >
                <Stack
                  mt={["2"]}
                  spacing='1'
                  p={3}
                  textAlign={["center"]}
                  align={["center"]}
                  color='white'
                >
                  <Heading size={["md"]} fontWeight={"medium"}>
                    {title}
                  </Heading>
                  <Text fontWeight={["medium"]} fontSize={["sm"]}>
                    {text}
                  </Text>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Center>
    </Box>
  );
};

export default Locations;
