import React, { useState } from 'react';
import { View, Text, Image, Button } from 'remax/wechat';
import Wx2Canvas from 'wxml-to-canvas/src/index';
import { wxml, style } from './demo';

export default () => {
  const render = () => {
    wx.selectComponent('.widget').renderToCanvas({ wxml, style });
  };

  return (
    <View>
      <Wx2Canvas className='widget' />
      <Button onClick={render}>渲染</Button>
    </View>
  );
};
