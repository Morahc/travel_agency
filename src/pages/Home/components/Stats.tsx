import { Box, Flex, Heading, Text, Stack, Center, Grid, GridItem } from '@chakra-ui/react';
import Counter from '../../../components/Counter';

const Stats = () => {
  return (
    <Box
      as='section'
      bgImage={`linear-gradient(0deg, rgba(8, 65, 92, 0.8), rgba(58, 169, 248, 0.7)), url('/images/services-two-shape-1.png')`}
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >
      <Center h={'100%'}>
        <Flex direction={'column'} w={['7xl']} p={[4]} gap={[8]}>
          <Grid templateColumns={['1fr', 'repeat(4, 1fr)']} gap={8} my={[8, 16]} color='white'>
            <GridItem p={6} border={'1px'}>
              <Stack>
                <Heading size={['2xl']}>
                <Counter from={0} to={89} suffix='+'/>
                </Heading>
                <Text fontSize={['xl']} fontWeight={['semibold']}>
                  Travel Location
                </Text>
              </Stack>
            </GridItem>
            <GridItem p={6} border={'1px'}>
              <Stack>
                <Heading size={['2xl']}>
                  <Counter from={0} to={618} suffix='k'/>
                </Heading>
                <Text fontSize={['xl']} fontWeight={['semibold']}>
                  Satisfied Customers
                </Text>
              </Stack>
            </GridItem>
            <GridItem p={6} border={'1px'}>
              <Stack>
                <Heading size={['2xl']}>
                <Counter from={0} to={99} suffix='%'/>
                </Heading>
                <Text fontSize={['xl']} fontWeight={['semibold']}>
                  Success Rate
                </Text>
              </Stack>
            </GridItem>
            <GridItem p={6} border={'1px'}>
              <Stack>
                <Heading size={['2xl']}>
                <Counter from={0} to={63} suffix='+'/>
                </Heading>
                <Text fontSize={['xl']} fontWeight={['semibold']}>
                  Pro Consultants
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Flex>
      </Center>
    </Box>
  );
};

export default Stats;
