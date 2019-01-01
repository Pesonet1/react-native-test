import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

const win = Dimensions.get('window');

const pois = [
  {
    lat: 60.171131,
    lng: 24.941798,
    title: 'Helsinki',
    description: 'Helsingin rautatieasema',
  },
  {
    lat: 61.497753,
    lng: 23.760954,
    title: 'Tampere',
    description: 'Tampereen keskusta',
  }
]


export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 65.354957,
        longitude: 25.748152,
        latitudeDelta: 5,
        longitudeDelta: 18
      }
    };
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  _renderMarkers = () => (
    pois.map((poi, idx) => {
      return (
        <MapView.Marker
          key={idx}
          coordinate={{latitude: poi.lat, longitude: poi.lng}}
          image={require('../assets/images/small_icon.png')}
          title={poi.title}
          description={poi.description}
        />
      );
    })
  )

  render () {
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
        {this._renderMarkers()}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>
            {'Kartan alapalkki'}
          </Text>
        </View>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: '80%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: win.width,
    backgroundColor: '#f7f8f9',
  },
  overlayText: {
    position: 'relative',
    fontSize: 18
  }
});
