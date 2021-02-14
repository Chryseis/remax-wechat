import styles from './index.less';
import React, { useRef } from 'react';
import { useNativeEffect } from 'remax';
import { Canvas } from 'remax/wechat';
import F2 from '@antv/f2';

export default ({ onInit }) => {
  const canvasEl = useRef(null);

  const touchStart = e => {
    if (canvasEl.current) {
      canvasEl.current.dispatchEvent('touchstart', e);
    }
  };

  const touchMove = e => {
    if (canvasEl.current) {
      canvasEl.current.dispatchEvent('touchmove', e);
    }
  };

  const touchEnd = e => {
    if (canvasEl.current) {
      canvasEl.current.dispatchEvent('touchend', e);
    }
  };

  useNativeEffect(() => {
    const query = wx.createSelectorQuery();
    query
      .select('#f2')
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        const { node, width, height } = res[0];
        const context = node.getContext('2d');
        const pixelRatio = wx.getSystemInfoSync().pixelRatio;
        // 高清设置
        node.width = width * pixelRatio;
        node.height = height * pixelRatio;

        const config = { context, width, height, pixelRatio };
        const chart = onInit(F2, config);
        if (chart) {
          canvasEl.current = chart.get('el');
        }
      });
  }, []);

  return (
    <Canvas
      type='2d'
      id='f2'
      class={styles.f2_canvas}
      width={'100vw'}
      height={'100vh'}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    />
  );
};
