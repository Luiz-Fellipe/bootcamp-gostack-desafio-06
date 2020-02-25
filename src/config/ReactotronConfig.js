import Reactotron from 'reactotron-react-native';

// __DEV__ : Variável global do RN que retorna true se for ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.9' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
