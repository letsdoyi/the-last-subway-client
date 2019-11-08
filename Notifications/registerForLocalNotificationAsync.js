//for noticifation
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

export default async function registerForLocalNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

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
    // alert('use phone');
    return;
  }
  console.log('registerForLocalNotificationsAsync ON');

  const localNotification = {
    title: 'title',
    body: 'body',
    data: 'data',
    android: {
      icon:
        'https://cdn0.iconfinder.com/data/icons/seo-and-development-16/200/32-512.png',
      link: 'https://www.google.co.kr',
    },
  };
  const schedulingOptions = {
    time: new Date().getTime() + 1000,
  };
  // Get the token that uniquely identifies this device
  return await Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );
}
