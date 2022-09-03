import { Notifier } from ".";
import { Client } from "../clients/index";

class EmailNotifier implements Notifier {
  client: Client;

  configure(...args: any[]): Notifier {
    // do your configuration stuff here for Email client like AWS SES

    return this;
  }

  sendNotification(message: string): boolean {
    return this.client.send(message);
  }
}

export default EmailNotifier;
