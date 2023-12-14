import { Stack } from '@chakra-ui/react';
import Banner from '../../components/Banner';
import { default as AboutSection} from './components/About';
import Team from '../Home/components/Team';

export const About = () => {
  return (
    <Stack spacing={[6, 12]}>
      <Banner title='About us' bgImage='/images/about_banner.jpg' />
      <AboutSection />
      <Team/>
    </Stack>
  );
};