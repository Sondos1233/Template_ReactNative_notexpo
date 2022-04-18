import {StyleSheet, Image, Text} from 'react-native';
import {
  Button,
  Box,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Stack,
  HStack,
  Heading,
} from 'native-base';

export default function Products({item, navigation}) {
  // console.log(navigation)
  if (item.id) {
    return (
      <NativeBaseProvider>
        <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                _dark={{
                  bg: 'violet.400',
                }}
                _text={{
                  color: 'warmGray.50',
                  fontWeight: '700',
                  fontSize: 'xs',
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5">
                PHOTO
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Text size="md" ml="-1">
                  <Heading>Title:</Heading> {item.title}
                </Text>
              </Stack>
              <Text fontWeight="400">
                <Heading>Price: </Heading> {item.price}$
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between">
                <HStack alignItems="center">
                  <Button
                    onPress={() => {
                      console.log('press');
                      navigation.navigate({
                        name: 'details',
                        params: {
                          id: item.id,
                        },
                      });
                    }}
                    bg="violet.500"
                    _dark={{
                      bg: 'violet.400',
                    }}
                    _text={{
                      color: 'warmGray.50',
                      fontWeight: '700',
                    }}>
                    Show Details
                  </Button>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  }
}
