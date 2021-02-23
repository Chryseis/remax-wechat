module.exports = {
  pages: ['pages/index/index', 'pages/f2/index', 'pages/vant/index', 'pages/custom/index', 'pages/f2-remax/index'],
  subPackages: [
    {
      root: 'package',
      pages: ['pages/subPage/index']
    }
  ],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34'
  }
};
