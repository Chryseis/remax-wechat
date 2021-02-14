/*
 * Created by Allen on 2021-02-02
 */
import React, { useState } from 'react';
import { View } from 'remax/wechat';

const CustomChild = ({ customTouch, count }) => {
  customTouch();

  return (
    <View onClick={customTouch}>
      Child
      <View
        onClick={e => {
          e.stopPropagation();
          customTouch();
        }}
        count={count}
      >
        Son
      </View>
    </View>
  );
};

function Custom() {
  const onClick = () => console.log('father love child');
  const [count, setCount] = useState(1);

  return (
    <View>
      Father
      <CustomChild customTouch={onClick} count={count} />
    </View>
  );
}

export default Custom;
