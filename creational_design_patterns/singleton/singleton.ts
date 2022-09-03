abstract class Singleton {
  static instance(): any {}
}

interface DbClient {
  fetch(query: string): any[];
}

class PostgresDB implements DbClient {
  private _conn: any;
  constructor(...arg) {
    this._conn = arg;
  }

  fetch(query: string): any[] {
    return this._conn.fetch(query);
  }
}

class SingletonDBClass implements Singleton {
  private static _instance: SingletonDBClass;
  db: DbClient;
  private constructor(...arg: any[]) {
    this.db = new PostgresDB(...arg);
  }

  static instance(...arg: any[]): SingletonDBClass {
    if (!SingletonDBClass._instance) {
      SingletonDBClass._instance = new SingletonDBClass(arg);
    }
    return SingletonDBClass._instance;
  }
}

class Driver {
  constructor() {
    const client = SingletonDBClass.instance();
    const client2 = SingletonDBClass.instance();
    console.log(client2 === client);

    const res = client.db.fetch("SELECT * FROM patterns");

    console.log(res);
  }
}
