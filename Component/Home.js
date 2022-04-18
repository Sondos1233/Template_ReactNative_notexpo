import {StyleSheet, Image} from 'react-native';
import {Text, Button, Box, NativeBaseProvider} from 'native-base';

export default function Home(props) {
  console.log(props);
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Image
          source={require('../assets/shoping.png')}
          style={{width: 300, height: 200}}
        />
        <Text style={styles.text}>Welcom to our store...</Text>
        <Button
          onPress={() => props.navigation.navigate({name: 'ViewProducts'})}
          style={{marginTop: 80, backgroundColor: '#b06cba'}}>
          Start having fun...
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 800,
  },
  text: {
    color: 'gray',
    fontSize: 20,
    marginTop: 30,
  },
});
