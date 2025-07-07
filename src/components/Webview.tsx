import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

const WebViewComponent = (): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const webViewRef = useRef(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://www.pastcast.ai'}}
        style={[styles.container]}
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        allowsBackForwardNavigationGestures={false}
        startInLoadingState={false}
        scrollEnabled={Platform.OS !== 'android'}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        renderToHardwareTextureAndroid
        pullToRefreshEnabled={false}
        scalesPageToFit={Platform.OS === 'android'}
        onShouldStartLoadWithRequest={() => true}
        onLoadEnd={() => setIsLoading(false)}
        injectedJavaScript={`
          document.body.style.userSelect = 'none';
          document.body.style.webkitUserSelect = 'none';
          document.body.style.msUserSelect = 'none';
          document.body.style.webkitTouchCallout = 'none';
          document.body.style.margin = '0';
          document.body.style.padding = '0';
          document.documentElement.style.overflowX = 'hidden';
          true;
        `}
        userAgent={
          Platform.OS === 'ios'
            ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile Safari/604.1'
            : 'Mozilla/5.0 (Linux; Android 11; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36'
        }
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo={false}
      />

      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1D4ED8',
  },
  container: {
    backgroundColor: '#1D4ED8',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1D4ED8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {WebViewComponent};
