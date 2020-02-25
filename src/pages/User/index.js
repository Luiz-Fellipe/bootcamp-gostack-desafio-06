import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
// import { Container } from './styles';

export default class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setOptions: PropTypes.func,
    }).isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.shape({
          login: PropTypes.string,
          name: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { navigation, route } = this.props;

    const { user } = route.params;

    navigation.setOptions({ title: user.name });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    return <View />;
  }
}
