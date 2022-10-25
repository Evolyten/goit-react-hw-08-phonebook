import { Container } from '@chakra-ui/react';
const { Section } = require('components/Section/Section');

const HomePage = () => {
  return (
    <Container as="section">
      <Section title="Main page" />
    </Container>
  );
};

export default HomePage;
