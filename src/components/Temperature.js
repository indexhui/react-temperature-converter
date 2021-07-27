import { Box, Input } from '@chakra-ui/react';

const Temperature = ({ tem, handleChange, handleBlur, unit }) => {
  return (
    <Box>
      <Input
        display="inline"
        value={tem[unit]}
        type="number"
        w="48"
        h="auto"
        overflow="visible"
        textAlign="center"
        border="none"
        fontSize="5xl"
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Box>
  );
};

export default Temperature;
