//for noticifation
import * as Permissions from 'expo-permissions';
import noticifationConstants from '../Constants/notification';
import { Notifications } from 'expo';
import { Platform } from 'react-native';
import { max } from 'moment';

export default async function registerForLocalNotificationsAsync() {
  console.log('registerForLocalNotificationsAsync ON');
  console.log('noticifationConstants:', noticifationConstants);
  const { CHANNEL_ID, PRIORITY, TITLE, BODY, DATA, VIBRATE, SOUND_ON, ICON_URL, LINK_URL, TIME } = noticifationConstants;
  const localNotificationIdsQueue = [];

  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  const finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    // alert('use phone!');
    return;
  }

  if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync(CHANNEL_ID, {
      name: CHANNEL_ID,
      priority: PRIORITY.MAX,
      vibrate: VIBRATE,
    });
  }

  async function _createNotificationAsync() {
    const notificationId = await Notifications.scheduleLocalNotificationAsync(
      {
        title: TITLE,
        body: BODY,
        data: DATA,
        android: {
          channelId: CHANNEL_ID,
          sound: SOUND_ON,
          icon: ICON_URL,
          link: LINK_URL
        },
      },
      {
        time: TIME,
      }
    );

    return notificationId;
    // localNotificationIdsQueue.push(notificationId);
    // localNotificationIdsQueue.forEach(id => {
    //   Notifications.cancelScheduledNotificationAsync(id)
    // });
  }

  return await _createNotificationAsync();
}
