import { Box, Stack } from '@chakra-ui/react';
import Team from './components/Team';
import Support from './components/Support';
import Locations from './components/Locations';
import About from './components/About';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';

export const Home = () => {
  return (
    <Box as='main'>
      <Stack spacing={[8, 16]} mb={[6, 12]}>
        <Hero />
        <About />
        <Locations />
        <Support />
        <Stats />
        <Team />
        <Partners />
      </Stack>
    </Box>
  );
};
