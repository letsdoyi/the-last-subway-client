export default notificationConstants = {
  CHANNEL_ID: 'LAST SUBWAY ALARM',
  PRIORITY: { DEFAULT: 'default', NORMAL: 'normal', HIGH: 'high', MAX: 'max' },
  TITLE: 'TITLE',
  BODY: 'BODY',
  DATA: 'DATA',
  VIBRATE: [0, 250, 250, 250, 500],
  SOUND_ON: true,
  ICON_URL: 'https://cdn0.iconfinder.com/data/icons/seo-and-development-16/200/32-512.png',
  LINK_URL: 'www.google.co.kr',
  TIME: new Date().getTime() + 10000
};
