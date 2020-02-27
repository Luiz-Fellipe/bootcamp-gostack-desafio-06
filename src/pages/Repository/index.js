import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Repository({ route, navigation }) {
  const { repository } = route.params;

  navigation.setOptions({ title: repository.name });

  return <WebView source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.shape({
        name: PropTypes.string,
        html_url: PropTypes.string,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
};
