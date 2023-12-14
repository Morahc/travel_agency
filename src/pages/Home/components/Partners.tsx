import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Partners = () => {
  return (
    <Box as='section'>
      <Container maxW={"7xl"} centerContent>
        <Text fontSize={["xs", "sm"]} fontWeight={["semibold"]} mb={4}>
          OUR PARTNERS & SUPPOTERS
        </Text>
        <Grid templateColumns={["1fr", "repeat(5, 1fr)"]} gap={[4]} filter='grayscale(100%)'>
          <GridItem>
            <Image alt='Alberta' src='/images/partners/Alberta.jpeg' />
          </GridItem>
          <GridItem>
            <Image alt='BC' src='/images/partners/BC.jpeg' />
          </GridItem>
          <GridItem>
            <Image alt='maintoba' src='/images/partners/manitoba.jpeg' />
          </GridItem>
          <GridItem>
            <Image alt='newfound' src='/images/partners/newfound.jpeg' />
          </GridItem>
          <GridItem>
            <Image alt='yukon' src='/images/partners/yukon.jpeg' />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Partners;
