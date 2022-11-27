import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(porps) {
  const { children, bang, style } = porps;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {/* 以下のようにした理由は、改行しないといけないとルールがあるため、文字列と変数を結合されてスペースをつくるためにやった。 */}
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

Hello.prototype = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 40,
    backgroundColor: 'blue',
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
