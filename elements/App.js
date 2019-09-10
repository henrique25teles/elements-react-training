import React from 'react';
import SvgUri from 'react-native-svg-uri';
import loading from './src/images/loading.svg';

// import { Container } from './styles';

export default function App() {
  return <SvgUri width="200" height="200" svgXmlData={loading} />;
}
