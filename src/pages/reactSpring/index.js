import React, { useState } from 'react';
import { View, Text } from 'remax/wechat';
import { Motion, spring } from 'react-motion';
import styles from './index.less';

export default () => {
  const [open, setOpen] = useState(false);

  const handleMouseDown = () => {
    setOpen(state => !state);
  };

  const handleTouchStart = () => {
    handleMouseDown();
  };

  return (
    <div>
      <button onClick={handleMouseDown} onTouchStart={handleTouchStart}>
        Toggle
      </button>

      <Motion style={{ x: spring(open ? 400 : 0) }}>
        {({ x }) => (
          // children is a callback which should accept the current value of
          // `style`
          <View className={styles.demo0}>
            <View
              className={styles.demo0_block}
              style={{
                transform: `translate3d(${x}rpx, 0, 0)`
              }}
            />
          </View>
        )}
      </Motion>
    </div>
  );
};
