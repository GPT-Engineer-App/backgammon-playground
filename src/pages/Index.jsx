import React from "react";
import { Box, Grid, GridItem, Button, Text, useToast, Center } from "@chakra-ui/react";
import { FaDice } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const rollDice = () => {
    // Placeholder function for rolling dice
    // This should be replaced with actual dice logic
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    toast({
      title: "Dice Roll",
      description: `You rolled ${dice1} and ${dice2}.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Center h="100vh" flexDirection="column">
      <Text fontSize="4xl" mb={4}>
        Backgammon Game
      </Text>
      <Box w="80%" h="500px" bg="gray.200" borderRadius="md" overflow="hidden">
        <Grid templateColumns="repeat(12, 1fr)" gap={1} w="100%" h="100%">
          {/* Placeholder points for Backgammon board */}
          {[...Array(24)].map((_, index) => (
            <GridItem key={index} w="100%" h="100%" bg={index % 2 === 0 ? "gray.400" : "gray.500"} />
          ))}
        </Grid>
      </Box>
      <Button leftIcon={<FaDice />} colorScheme="blue" mt={4} onClick={rollDice}>
        Roll Dice
      </Button>
    </Center>
  );
};

export default Index;
