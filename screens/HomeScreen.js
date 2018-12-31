import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const win = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/nightsky.png')}
          style={styles.image}
          resizeMode={'cover'}
        >
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>
        </ImageBackground>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    height: win.height,
    width: win.width,
  },
  developmentModeText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    color: 'white',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  getStartedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: win.height,
    marginHorizontal: 50,
  },
});
