//for noticifation
import * as Permissions from 'expo-permissions';
import noticifationConstants from '../Constants/notification';
import { Notifications } from 'expo';
import { Platform } from 'react-native';
import { minuteToStringHourMinite, minuteToMiliseconds } from '../Utils/utils';
import notification from '../Constants/notification';

export default async function registerForLocalNotificationsAsync(
  timerValueUnitMinute,
  departureTimeValueUnitMilisecond
) {
  console.log('registerForLocalNotificationsAsync ON');
  const {
    CHANNEL_ID,
    PRIORITY,
    TITLE,
    BODY,
    DATA,
    VIBRATE,
    SOUND_ON,
    ICON_URL,
    LINK_URL,
  } = noticifationConstants;

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
      sound: SOUND_ON,
      vibrate: VIBRATE,
    });
  }

  // Check if it is test mode or not
  let isTestMode = false;

  if (timerValueUnitMinute === '-1') {
    isTestMode = true;
  }

  async function _createNotificationAsync(options) {
    const notificationId = await Notifications.scheduleLocalNotificationAsync(
      options.notification,
      options.scheduling
    );
    return notificationId;
    // localNotificationIdsQueue.push(notificationId);
    // localNotificationIdsQueue.forEach(id => {
    //   Notifications.cancelScheduledNotificationAsync(id)
    // });
  }

  if (isTestMode) {
    const optionsForTest = {
      notification: {
        title: TITLE,
        body: `${BODY} [example] mins.`,
        data: DATA,
        android: {
          channelId: CHANNEL_ID,
          icon: ICON_URL,
          link: LINK_URL,
        },
      },
      scheduling: {
        time: new Date().getTime() + 10000,
      },
    };
    return await _createNotificationAsync(optionsForTest);
  } else {
    let hourMiniteString = minuteToStringHourMinite(timerValueUnitMinute);
    if (hourMiniteString === '0') {
      hourMiniteString = 'now';
    }
    const timerValueUnitMilisecond = minuteToMiliseconds(timerValueUnitMinute);
    // console.log('time');
    // console.log(typeof departureTimeValueUnitMilisecond)
    // console.log(typeof timerValueUnitMilisecond)
    const optionsForProduct = {
      notification: {
        title: TITLE,
        body: `${BODY} ${hourMiniteString}.`,
        data: DATA,
        android: {
          channelId: CHANNEL_ID,
          sound: SOUND_ON,
          icon: ICON_URL,
          link: LINK_URL,
        },
      },
      scheduling: {
        time: departureTimeValueUnitMilisecond + timerValueUnitMilisecond
      },
    };
    return await _createNotificationAsync(optionsForProduct);
  }
}
