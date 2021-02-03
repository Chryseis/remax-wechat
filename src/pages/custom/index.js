/*
 * Created by Allen on 2021-02-02
 */
import React from 'react';
import { View } from 'remax/wechat';

const CustomChild = ({ customTouch }) => (
  <View onClick={customTouch}>
    Child
    <View
      onClick={e => {
        e.stopPropagation();
        customTouch();
      }}
    >
      Son
    </View>
  </View>
);

function Custom() {
  const onClick = () => console.log('father love child');

  return (
    <View>
      Father
      <CustomChild customTouch={onClick} />
    </View>
  );
}

export default Custom;
