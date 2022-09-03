interface Notifier {
  configure(...args: any[]): Notifier;
  sendNotification(message: string): boolean;
}

export { Notifier };
