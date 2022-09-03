import { Notifier } from ".";
import { Client } from '../clients/index';

class SmsNotifier implements Notifier {
  client: Client;

  configure(...args: any[]): Notifier {
    // do your configuration stuff here for SMS client like AWS SNS

    return this;
  }

  sendNotification(message: string): boolean {
    return this.client.send(message);
  }
}

export default SmsNotifier;
