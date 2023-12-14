import {
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Text,
  Flex,
  Heading,
  Stack,
  Circle,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";
import Banner from "../../components/Banner";

const faqs = [
  {
    question: "What services does your travel agency provide?",
    answer:
      "We offer a wide range of travel services, including vacation packages, flight bookings, hotel reservations, cruise bookings, and customized travel itineraries tailored to your preferences.",
  },
  {
    question: "How can I contact your travel agency?",
    answer:
      "You can reach us through our website's contact form, email us at support@odysseyoutings.com, or call our customer service hotline. We're here to assist you!",
  },
  {
    question: "Are your travel packages customizable?",
    answer:
      "Absolutely! We understand that every traveler has unique preferences. Our team can tailor any package to meet your specific needs, ensuring a personalized and memorable experience.",
  },
  {
    question: "How do I make a reservation?",
    answer:
      "You can make reservations through our website, contact our customer service team, or visit our office in person. Our booking process is designed to be convenient and user-friendly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit cards, bank transfers, and other secure online payment options. Details will be provided during the booking process.",
  },
  {
    question: "Can your agency help with visa applications and travel documentation?",
    answer:
      "Yes, we can provide guidance on visa requirements and assist with the application process. However, please note that obtaining a visa is ultimately the responsibility of the traveler.",
  },
];

export const Faqs = () => {
  return (
    <Box>
      <Banner title='Faqs' bgImage='/images/faq_banner.png' />
      <Container maxW={"7xl"} my={[4, 8]}>
        <Box w='full'>
          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={[4, 8]}>
            <GridItem
              as={Stack}
              p={[6, 10]}
              color={"white"}
              bgColor={"#020202"}
              spacing={[2, 4]}
              w='100%'
            >
              <Heading fontWeight={"semibold"} size={["md", "lg"]}>
                Still have Questions?
              </Heading>
              <Heading fontWeight={"semibold"} size={["md", "lg"]}>
                Call Now!
              </Heading>
              <Flex align={"center"} gap={[2, 4]}>
                <Circle bgColor={"black"} p={[2, 3]}>
                  <FaPhone />
                </Circle>
                <Text fontSize={["sm", "lg"]} fontWeight={"light"}>
                  +1 (157) 783-3900
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              as={Accordion}
              border={"1px"}
              borderColor={"gray.200"}
              colSpan={2}
              allowToggle
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} p={[1, 4]}>
                  <AccordionButton _hover={{ bg: "none" }} as={Flex}>
                    <Box as='span' flex='1' textAlign='left'>
                      <Text fontSize={["small", "lg"]}>{faq.question}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Box fontSize={["small", "md"]}>{faq.answer}</Box>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
