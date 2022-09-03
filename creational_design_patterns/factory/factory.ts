/**
 * Factory Design Pattern:
 *
 * The factory pattern is used when we have a superclass with multiple sub-classes and based on input
 * we need to return one of the subclass.
 *
 * Problem Description:
 *
 */

import { Notifier } from "./notifiers";

export class NotificationFactory {
  notifiers: Record<string, Notifier>;
  constructor() {}

  registerNotifier(name: string, notifier: Notifier, ...args) {
    this.notifiers[name] = notifier.configure(...args);
  }

  getNotifier(name: string): Notifier {
    const notifier = this.notifiers[name];
    if (notifier === undefined) {
      throw new Error("unknown notifier specified: " + name);
    }

    return notifier;
  }
}
