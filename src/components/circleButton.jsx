import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  // shapeはオブジェクトの形を定義します。
  // 空の場合、どんなオブジェクトでもOKになる。
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  // 初期値を設定
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#ECA859',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
    // IOS用のシャドウ設定
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // android 用のシャドウ、重なり・高さ順を指定。数字が大きければその分影ができる。↓
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});
