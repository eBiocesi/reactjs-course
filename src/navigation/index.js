import React from 'react';
import Text from '../components/ui/Text';
import Title from '../components/ui/Title';
import Layout from '../components/containers/Layout';

const Navigation = () => {
  return (
    <Layout>
      <Title />
      <Text content="Bonjour coco" toto="toto" titi="tit" />
      <Text content="Bonjour coco" toto="toto" titi="tit" />
    </Layout>
  );
};

export default Navigation;
