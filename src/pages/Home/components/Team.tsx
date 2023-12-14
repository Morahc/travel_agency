import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Center,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const Team = () => {
  const team = [
    {
      name: 'Benjamin James Mitchell',
      role: 'Consultant',
      image: '/images/team/Benjamin James Mitchell.jpg',
    },
    {
      name: 'Sophia Elizabeth Carter',
      role: 'Consultant',
      image: '/images/team/Sophia Elizabeth Carter.jpg',
    },
    {
      name: 'Emily Grace Anderson',
      role: 'Consultant',
      image: '/images/team/Emily Grace Anderson.jpg',
    },
    {
      name: 'Ethan Alexander Reynolds',
      role: 'Consultant',
      image: '/images/team/Ethan Alexander Reynolds.jpg',
    },
  ];
  return (
    <Box as='section'>
      <Center>
        <Flex direction={'column'} w={['7xl']} p={[4]} gap={[8]}>
          <Stack spacing={[2]} textAlign={'center'}>
            <Text fontSize={['xs', 'sm']} fontWeight={'semibold'}>
              OUR TEAM
            </Text>
            <Heading size={['2xl']} fontWeight={'semibold'}>
              Meet Our Experts & Travel Consultants
            </Heading>
          </Stack>
          <Grid
            autoRows={'1fr'}
            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
            gap={[8]}
          >
            {team.map(({ image, role, name }, index) => (
              <GridItem key={index} border='1px' borderColor='gray.300'>
                <Box w='full' h='280px'>
                  <Image
                    src={image}
                    w={'100%'}
                    h='100%'
                    alt={name}
                    objectFit={'cover'}
                    objectPosition={'top'}
                  />
                </Box>
                <Flex align='center' justify='space-between' p={[2, 3]}>
                  <Stack spacing='1'>
                    <Heading size={['md']}>{role}</Heading>
                    <Text fontSize={['xs', 'sm']} color='gray.500'>
                      {name}
                    </Text>
                  </Stack>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Center>
    </Box>
  );
};

export default Team;
