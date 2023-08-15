import {Box, Flex, Heading, useBreakpointValue, Text, Icon} from "@chakra-ui/react";
import {ImQuotesRight} from "react-icons/im";

export default function Testimonials() {
  const TESTIMONIALS = [
    "After finding I was allergic to my previous hair color, and being newly pregnant, I was very happy to find Beauty Ecology Organic Salon's safe alternative! I'm so thankful that I no longer leave the salon with an itchy and burning scalp.",
    "I used to be in the hair industry, so you might guess that I’m a bit picky about who does my hair. Etiam quis lorem vel diam blandit porttitor. Aenean elementum pretium arcu eget convallis. Donec imperdiet purus vitae est viverra tincidunt. ",
    "I absolutely love the organic skin care and hair care products that she has developed with her chemists. Etiam quis lorem vel diam blandit porttitor. Aenean elementum pretium arcu eget convallis. Donec imperdiet purus vitae est viverra tincidunt.",
  ];

  return (
    <Flex
      direction="column"
      p="40px"
      alignItems="center"
    >
      <Heading size="3xl">What our customers say</Heading>
      <Flex
        direction={useBreakpointValue({base: "column", md: "row"})}
        marginTop="40px"
        w="80%"
        gap="30px"
      >
        {TESTIMONIALS.map((entry) => {
          return (
            <Box position="relative">
              <Text
                textAlign="center"
                zIndex="600"
                position="relative"
                p="30px"
              >
                {entry}
              </Text>
              <Icon
                as={ImQuotesRight}
                boxSize="20"
                position="absolute"
                color="#FBD2C0"
                zIndex="500"
                top="0"
                left="0"
              />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
