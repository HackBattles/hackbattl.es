import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class GoogleStaticMap extends Component {
  constructor(props) {
    super(props);
    const { address, width, height } = props;
    const encodedAddress = encodeURIComponent(address);
    this.state = {
      mapUri: `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&size=${width}x${height}&markers=color:red|label:S|${encodedAddress}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      complete: false,
      error: false,
      encodedAddress,
    };
  }
  componentWillMount() {
    const { mapUri } = this.state;
    axios.get(mapUri)
      .then(() => this.setState({ complete: true }))
      .catch(error => this.setState({ complete: true, error }));
  }
  render() {
    const { address, width, height } = this.props;
    const { mapUri, complete, error, encodedAddress } = this.state;
    if (!complete) {
      return (
        <div
          className="google-static-map google-static-map--loading"
          width={width}
          height={height}
        >
          Loading...
        </div>
      );
    } else if (complete && error) {
      return (
        <div
          className="google-static-map google-static-map--error"
          width={width}
          height={height}
        >
          Error: {error.message}
        </div>
      );
    }
    return (
      <a
        href={`http://maps.google.com/?q=${encodedAddress}`}
        className="google-static-map"
      >
        <img
          src={mapUri}
          alt={address}
          width={width}
          height={height}
          className="google-static-map-image google-static-map--complete"
        />
      </a>
    );
  }
}

GoogleStaticMap.propTypes = {
  address: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

GoogleStaticMap.defaultProps = {
  width: 200,
  height: 200,
};

export default GoogleStaticMap;
