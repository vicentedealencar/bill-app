import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import InAppBilling from 'react-native-billing';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button rounded onPress={onBuy} title="paaaay" />
      </View>
    );
  }
}

const onBuy = () => {
  console.log("paaaaaaaaaay")

  InAppBilling.open().
  then(() => InAppBilling.purchase('android.test.purchased'))
  .then((details) => {
    console.log({
      purchaseText: details.productId
    });
    return InAppBilling.getProductDetails('android.test.purchased');
  })
  .then((productDetails) => {
    console.log({
      productDetailsText: productDetails.title
    });
    return InAppBilling.close();
  })
  .catch((error) => {
    console.log({
      error: error
    });
  });

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
