import styles from './index.less';
import React, { useState } from 'react';
import { View, Text, Image } from 'remax/wechat';
import Calendar from '@vant/weapp/lib/calendar';
import Progress from '@vant/weapp/lib/progress';
import Switch from '@vant/weapp/lib/switch';

export default function Vant() {
  const [visible, setVisible] = useState(false);

  const [checked, setChecked] = useState(false);

  const onOpen = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onConfirm = () => {};

  const onChange = ({ detail }) => {
    setChecked(detail);
  };

  return (
    <View>
      <View onClick={onOpen}>开启</View>
      <View>
        <Progress pivotText={'橙色'} color={'#f2826a'} percentage={'25'} />
      </View>
      <View>
        <Switch checked={checked} bindchange={onChange} />
      </View>
      <Calendar show={visible} bindclose={onClose} bindconfirm={onConfirm} />
    </View>
  );
}
