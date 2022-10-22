import { PropTypes } from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';
export function Section({ title, height, width = '350px', children }) {
  return (
    <Box
      bg="white"
      p="15px"
      rounded="md"
      w={width}
      h={height}
      mt="50px"
      textAlign="center"
    >
      <Heading as="h2" mb="15px">
        {title}
      </Heading>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
