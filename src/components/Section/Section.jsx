import { PropTypes } from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';
export function Section({ title, height, width = '300', children }) {
  return (
    <Box
      bg="white"
      p={8}
      rounded="md"
      w={width}
      h={height}
      mt="200px"
      textAlign="center"
    >
      <Heading as="h2" mb="20px">
        {title}
      </Heading>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
