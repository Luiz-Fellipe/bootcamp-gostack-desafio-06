import Reactotron from 'reactotron-react-native';

// __DEV__ : Variável global do RN que retorna true se for ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
