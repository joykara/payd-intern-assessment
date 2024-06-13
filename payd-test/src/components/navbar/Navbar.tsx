import React from 'react';
import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/react';

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'dark' ? 'gray.800' : 'brand.darkGreen'} color="white" py={4} px={4} mb={{ base: "4" }}>
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" color="brand.white">My Blog</Text>
        <Button
          size={'sm'} fontSize={'sm'} fontWeight={"normal"}
          ml={4}
          onClick={toggleColorMode}
          bg="brand.amber"
          color={colorMode === 'dark' ? 'gray.800' : 'brand.white'}
          _hover={{ bg: 'brand.white', color: "brand.darkGreen" }}
          borderRadius={20}
        >
          {colorMode === 'dark' ? 'Light' : 'Dark'}
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
