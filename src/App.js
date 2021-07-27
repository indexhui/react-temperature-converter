import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Text,
  Link,
  HStack,
  Flex,
  theme,
} from '@chakra-ui/react';

import UnitSwitcher from './components/UnitSwitcher';
import Temperature from './components/Temperature';

function App() {
  const [unit, setUnit] = useState('celsius');
  const [color, setColor] = useState('teal.300');
  const [tem, setTem] = useState({
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.15,
  });

  const handleClick = unit => {
    setUnit(unit);
  };

  const handleBlur = e => {
    const value = e.target.value;
    if (!value) {
      setTem({
        ...tem,
        [unit]: 0,
      });
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    const cToFahr = value => (value * 9) / 5 + 32;
    const cToKel = value => (value * 100 + 27315) / 100;
    const fToCel = value => Math.round((((value - 32) * 5) / 9) * 100) / 100;
    const fToKel = value => Math.round(((value * 100 + 45967) * 5) / 9) / 100;
    const kToCel = value => Math.round(value * 100 - 27315) / 100;
    const kToFahr = value => Math.round(((value * 9) / 5) * 100 - 45967) / 100;

    if (unit === 'celsius') {
      setTem({
        [unit]: value,
        fahrenheit: cToFahr(value),
        kelvin: cToKel(value),
      });
    } else if (unit === 'fahrenheit') {
      setTem({
        [unit]: value,
        celsius: fToCel(value),
        kelvin: fToKel(value),
      });
    } else {
      setTem({
        [unit]: value,
        celsius: kToCel(value),
        fahrenheit: kToFahr(value),
      });
    }
  };

  useEffect(() => {
    if (tem.celsius > 28) {
      setColor('red.300');
    } else if (tem.celsius < 28) {
    }
  }, [tem.celsius]);

  return (
    <ChakraProvider theme={theme}>
      <Flex
        w="100vw"
        h="100vh"
        bg={color}
        align="center"
        justify="center"
        direction="column"
      >
        <Flex
          w="96"
          h="80"
          bg="white"
          borderRadius="2xl"
          direction="column"
          justify="center"
          align="center"
        >
          <Text fontSize="2xl">Temperature coventer</Text>
          <UnitSwitcher unit={unit} handleClick={handleClick} />
          <Text fontSize="xl">
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </Text>
          <Temperature
            handleChange={handleChange}
            handleBlur={handleBlur}
            unit={unit}
            tem={tem}
          />
        </Flex>
        <Flex
          w="96"
          bg="white"
          borderRadius="xl"
          my="2"
          py="4"
          justify="center"
          color="gray.400"
        >
          <HStack spacing="24px">
            <Link
              href="https://github.com/indexhui/react-temperature-converter"
              isExternal
              _hover={{ color: 'gray.700', underline: 'none' }}
            >
              Github
            </Link>
            <Link
              href="https://indexhui.github.io/vue-temperature-converter/"
              isExternal
              _hover={{ color: 'gray.700', underline: 'none' }}
            >
              Vue
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
