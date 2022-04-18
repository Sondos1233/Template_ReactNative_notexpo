import {getProducts} from './action/action';
import {ProductsContext} from './Context/Context';
import {useContext, useEffect} from 'react';
import {Box, FlatList, VStack, Heading} from 'native-base';
import Products from './Products';
export function ViewProducts(props) {
  const {state, dispatch} = useContext(ProductsContext);
  console.log(state);
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getProducts());
    };
    resolveAction();
  }, []);
  return (
    <VStack>
      <Heading fontSize="xl" p="4" pb="3">
        PRODUCTS
      </Heading>
      <FlatList
        data={state.list}
        renderItem={({item}) => <Products item={item} {...props} />}
        ItemSeparatorComponent={() => (
          <Box
            style={{
              margin: 5,
            }}></Box>
        )}
      />
    </VStack>
  );
}
