import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewModal = ({onMessage = () => {}}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <WebView
        scalesPageToFit={false}
        mixedContentMode="compatibility"
        onMessage={onMessage}
        style={{flex: 1}}
        cacheEnabled={false}
        allowsLinkPreview={false}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        source={{
          html: ` 
          <html>
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body style="
              display: flex;
              justify-content: center;
              align-items: center;
            ">
            <button
            onclick="sendDataToReactNativeApp()"
              style="
                padding: 5;
                width: 100;
                font-size: 12;
                color: white;
                background-color: #01B99F;
                border-radius: 20px;
              "
            >
              Click Me
            </button>
            <script>
              const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
            </script>
          </body>
        </html>        
`,
        }}
      />
    </View>
  );
};

export default WebViewModal;
