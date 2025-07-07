import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebViewComponent} from './src';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <View style={styles.container}>
      <WebViewComponent />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
