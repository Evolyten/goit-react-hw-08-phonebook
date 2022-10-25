import { PropTypes } from 'prop-types';
import { Box, Heading, useColorMode } from '@chakra-ui/react';

export function Section({ title, width = '350px', children }) {
  const { colorMode } = useColorMode();
  console.log(colorMode);

  return (
    <Box
      as="div"
      // bg={colorMode === 'dark' ? 'gray.50' : 'blue'}
      // p="10px"
      rounded="4px"
      w={width}
      m="0 auto"
      mt="50px"
      textAlign="center"
      color={colorMode === 'dark' ? 'gray.200' : 'black'}
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
