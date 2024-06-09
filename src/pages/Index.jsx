import { Container, Box, Text, VStack, Image, SimpleGrid, Heading } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with high-end specs",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "Powerful laptop for professionals",
    price: "$1299",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$199",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$299",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Electronics Store
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronic devices
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold" mt={2}>{product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;