import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Text from './components/ui/Text';
import Title from './components/ui/Title';

ReactDOM.render(
  <>
    <Title />
    <Text content="Bonjour coco" toto="toto" titi="tit" />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
