import {
  Flex,
  Heading,
  Stack,
  Text,
  Icon,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Grid,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";

type FormValues = {
  name: string;
  email: string;
  date: string;
  phone: string;
};

const Header = () => {
  const { isOpen: drawerIsOpen, onOpen: drawerOnOpen, onClose: drawerOnClose } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const toast = useToast();
  const id = "test-toast";

  const onSubmit: SubmitHandler<FormValues> = async () => {
    setError("");
    setLoading(true);

    try {
      setLoading(false);
      if (!toast.isActive(id)) {
        toast({
          id,
          title: "Appointment reserved.",
          description: "We will reach out to you shortly",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      reset();
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.message === "Network Error") {
        toast({
          title: "An Error occured",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

      setLoading(false);
      setError("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={["lg", "xl"]}
        scrollBehavior={"inside"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent p={[0, 4]} borderRadius={0}>
          <ModalHeader textAlign='center'>
            <Heading>Book an appointment</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={6} color='gray' as='form' onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl isInvalid={errors.name ? true : false}>
                  <Input
                    fontSize={["xs", "sm"]}
                    type='name'
                    borderRadius={0}
                    placeholder='Name & Surname'
                    size={["lg"]}
                    {...register("name", { required: "This field is required" })}
                  />
                  {errors.name && (
                    <FormErrorMessage>
                      <Text fontSize={"smaller"}>{errors.name.message}</Text>
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.email ? true : false}>
                  <Input
                    fontSize={["xs", "sm"]}
                    type='email'
                    borderRadius={0}
                    placeholder='Email address'
                    size={["lg"]}
                    {...register("email", { required: "This field is required" })}
                  />
                  {errors.email && (
                    <FormErrorMessage>
                      <Text fontSize={"smaller"}>{errors.email.message}</Text>
                    </FormErrorMessage>
                  )}
                  {error && (
                    <Text py={1} color='red' fontSize={"smaller"}>
                      {error}
                    </Text>
                  )}
                </FormControl>
                <Grid gap={[4]} templateColumns={["1fr", "repeat(2, 1fr)"]}>
                  <FormControl isInvalid={errors.phone ? true : false}>
                    <Input
                      fontSize={["xs", "sm"]}
                      borderRadius={0}
                      type='tel'
                      placeholder='Phone Number'
                      size={["lg"]}
                      {...register("phone", { required: "This field is required" })}
                    />
                    {errors.phone && (
                      <FormErrorMessage>
                        <Text fontSize={"smaller"}>{errors.phone.message}</Text>
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={errors.phone ? true : false}>
                    <Input
                      fontSize={["xs", "sm"]}
                      borderRadius={0}
                      type='date'
                      size={["lg"]}
                      {...register("date", { required: "This field is required" })}
                    />
                    {errors.phone && (
                      <FormErrorMessage>
                        <Text fontSize={"smaller"}>{errors.date?.message}</Text>
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Grid>
              </Stack>
              <Button bgColor='#020202' color='white' type='submit' isLoading={loading}>
                <Text fontSize={["xs", "small"]}>Submit</Text>
              </Button>
              <Text fontSize={["xs", "small"]} fontWeight='thin'>
                All personal information submitted to ths website is kept highly secure. We operate
                secure servers and data is never divulged to a third party.
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Drawer isOpen={drawerIsOpen} placement='left' onClose={drawerOnClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex gap={2} alignItems={"center"}>
              <Icon as={SiYourtraveldottv} boxSize={6} alt='Company logo' />
              <Text fontFamily={"Sacramento"} fontStyle={"italic"} fontSize={["large", "xx-large"]}>
                Odyssey Outings
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"} align={"center"} justify={"space-between"} p={[2]} h='full'>
              <Stack spacing={6} fontSize={"lg"} fontWeight={"light"} textAlign={"center"}>
                <NavLink to='/' onClick={drawerOnClose}>
                  Home
                </NavLink>
                <NavLink to='/about-us' onClick={drawerOnClose}>
                  About
                </NavLink>
                <NavLink to='/faqs' onClick={drawerOnClose}>
                  Faqs
                </NavLink>
                <Button
                  bgColor={"#020202"}
                  color={"white"}
                  size={["md"]}
                  borderRadius={0}
                  onClick={() => {
                    onOpen();
                    drawerOnClose();
                  }}
                  _hover={{ bgColor: "#020202" }}
                >
                  <Text fontSize={["sm"]}>Get Started</Text>
                </Button>
              </Stack>
              <Stack spacing={4} textAlign='center' fontSize={"sm"}>
                <Text>info@odysseyoutings.com</Text>
                <Text>+1 (157) 783-3900</Text>
                <Flex justify={"center"} gap={6}>
                  <a href='#' rel='noopener noreferrer'>
                    <Icon boxSize={5} as={FaTwitter} />
                  </a>
                  <a href='#' rel='noopener noreferrer'>
                    <Icon boxSize={5} as={FaFacebook} />
                  </a>
                  <a href='#' rel='noopener noreferrer'>
                    <Icon boxSize={5} as={FaInstagram} />
                  </a>
                </Flex>
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex as='header' direction={"column"} px={[2, 10]} py={[4]} bgColor={"#FCFBFB"}>
        <Flex justify={"space-between"} align={"center"}>
          <Flex gap={[1, 2]} alignItems={"center"}>
            <Icon as={SiYourtraveldottv} boxSize={[8, 10]} alt='Company logo' />
            <Text fontFamily={"Sacramento"} fontStyle={"italic"} fontSize={["x-large", "xx-large"]}>
              Odyssey Outings
            </Text>
          </Flex>
          <Flex gap={[10]} align='center' fontSize={["md"]} display={["none", "flex"]}>
            <NavLink to='/' onClick={drawerOnClose}>
              Home
            </NavLink>
            <NavLink to='/about-us' onClick={drawerOnClose}>
              About
            </NavLink>
            <NavLink to='/faqs' onClick={drawerOnClose}>
              Faqs
            </NavLink>
            <Button
              bgColor={"#020202"}
              color={"white"}
              size={["md", "lg"]}
              borderRadius={0}
              onClick={onOpen}
              _hover={{ bgColor: "#020202" }}
            >
              <Text fontSize={["sm", "md"]}>Get Started</Text>
            </Button>
          </Flex>
          <Box display={["block", "none"]}>
            <Button onClick={drawerOnOpen} bgColor='white' _hover={{ bgColor: "transparent" }}>
              <Icon as={AiOutlineMenu} />
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
