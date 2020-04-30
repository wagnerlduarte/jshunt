import React, {useEffect} from 'react';

import {WebView} from 'react-native-webview';

const Product = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({title: route.params.product.title});
  }, []);

  return <WebView source={{uri: route.params.product.url}} />;
};
export default Product;
