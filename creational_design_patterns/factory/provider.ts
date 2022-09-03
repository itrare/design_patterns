import { NotificationFactory } from "./factory";
import { Notifier } from "./notifiers";

class NotificationServiceProvider {
  notifier: NotificationFactory;
  constructor() {
    this.notifier = new NotificationFactory();
  }

  async notificationEventCall(): Promise<any> {
    const message =
      "Hey! Welcome to design patterns, let create awesome project with them.";

    const getUserNotificationPreference = {
      SMS: true,
      Email: "true",
    };

    const channels = Object.keys(getUserNotificationPreference).filter(
      (key) => getUserNotificationPreference[key]
    );

    channels.forEach((key) => {
      const notifier = this.notifier.getNotifier(key);
      notifier.sendNotification(message);
    });
  }
}

export default NotificationServiceProvider;
