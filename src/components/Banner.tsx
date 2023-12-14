import { Box, Center, Container, Heading } from "@chakra-ui/react";
import React from "react";

const Banner: React.FC<{ title: string; bgImage: string; pos?: string }> = ({
  title,
  bgImage,
  pos = "center",
}) => {
  return (
    <Box
      as='section'
      bgImage={
        `linear-gradient(0deg, rgba(2, 2, 2, 0.8), rgba(2, 2, 2, 0.6)), url(${bgImage})`
      }
      bgSize={"cover"}
      bgPosition={["top", pos]}
      backgroundRepeat={"no-repeat"}
      h={["40vh", "50vh"]}
      color={"white"}
    >
      <Container maxW='7xl' centerContent h='full' w='full' position={"relative"}>
        <Center h='full'>
          <Heading>{title}</Heading>
        </Center>
      </Container>
    </Box>
  );
};

export default Banner;
