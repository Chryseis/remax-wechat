import styles from './index.less';
import React, { useState } from 'react';
import { View, Text, Image } from 'remax/wechat';
import Calendar from '@vant/weapp/lib/calendar';

export default function Vant() {
  const [visible, setVisible] = useState(false);

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onConfirm = () => {};

  return (
    <View>
      <View onClick={onOpen}>开启</View>
      <Calendar show={visible} bindclose={onClose} bindconfirm={onConfirm} />
    </View>
  );
}
