import { Center, Spinner, Stack, Text } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Center w='100vw' h='100vh' zIndex={999} bgColor='white'>
      <Stack direction={'row'} spacing={2}>
        <Spinner /> <Text>Loading..</Text>
      </Stack>
    </Center>
  );
};
