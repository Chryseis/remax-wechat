/*
 * Created by Allen on 2021-02-02
 */
import React, { useState } from 'react';
import { View } from 'remax/wechat';

const CustomChild = ({ customTouch, count }) => {
  return (
    <View onClick={customTouch}>
      Child
      <View
        onClick={e => {
          e.stopPropagation();
          customTouch();
        }}
      >
        {`Son${count}`}
      </View>
    </View>
  );
};

function Custom() {
  const [count, setCount] = useState(1);

  const onClick = () => {
    setCount(2);
    console.log('father love child');
  };

  return (
    <View>
      Father
      <CustomChild customTouch={onClick} count={count} />
    </View>
  );
}

export default Custom;
