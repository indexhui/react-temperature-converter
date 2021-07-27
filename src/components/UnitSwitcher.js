import { Box, Button, HStack } from '@chakra-ui/react';

const UnitButton = props => {
  return (
    <Button
      w="12"
      h="12"
      bg={props.unit === props.name ? 'white' : 'none'}
      _focus={{ boxShadow: 'lg' }}
      boxShadow={props.unit === props.name ? 'lg' : 'none'}
      borderRadius="50"
      onClick={() => props.handleClick(props.name)}
    >
      {props.showName}
    </Button>
  );
};

const UnitSwitcher = ({ unit, handleClick }) => {
  return (
    <Box my="4">
      <HStack
        px="2"
        py="2"
        bg="gray.100"
        borderRadius="50"
        boxShadow="inner"
        spacing="24px"
      >
        <UnitButton
          handleClick={handleClick}
          unit={unit}
          showName="°C"
          name="celsius"
        />
        <UnitButton
          handleClick={handleClick}
          unit={unit}
          showName="°F"
          name="fahrenheit"
        />
        <UnitButton
          handleClick={handleClick}
          unit={unit}
          showName="K"
          name="kelvin"
        />
      </HStack>
    </Box>
  );
};

export default UnitSwitcher;
