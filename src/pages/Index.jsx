import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "/images/smartphone.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "/images/laptop.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    image: "/images/headphones.jpg"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Flex as="nav" width="100%" justifyContent="space-between" mb={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/about">About Us</Link>
          <Link as={RouterLink} to="/contact">Contact Us</Link>
        </Flex>
        <Box as="section" textAlign="center" mb={10}>
          <Heading as="h1" size="2xl">Welcome to Electronics Store</Heading>
          <Text fontSize="xl">Find the best electronics at unbeatable prices</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontSize="xl" fontWeight="bold" mb={4}>{product.price}</Text>
                <Button colorScheme="teal">Add to Cart</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <Box as="footer" width="100%" textAlign="center" mt={10} py={5} borderTopWidth="1px">
          <Text>&copy; {new Date().getFullYear()} Electronics Store. All rights reserved.</Text>
          <Flex justifyContent="center" mt={2}>
            <Link mx={2} href="#">Terms of Service</Link>
            <Link mx={2} href="#">Privacy Policy</Link>
            <Link mx={2} href="#">Facebook</Link>
            <Link mx={2} href="#">Twitter</Link>
            <Link mx={2} href="#">Instagram</Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;