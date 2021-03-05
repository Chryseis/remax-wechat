import React, { useState } from 'react';
import { View, Text } from 'remax/wechat';
import Highlight, { defaultProps } from 'prism-react-renderer';

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

export default () => {
  return (
    <View>
      <Highlight {...defaultProps} code={exampleCode} language='jsx'>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <View className={className} style={style}>
            {tokens.map((line, i) => (
              <View {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <Text {...getTokenProps({ token, key })} />
                ))}
              </View>
            ))}
          </View>
        )}
      </Highlight>
    </View>
  );
};
