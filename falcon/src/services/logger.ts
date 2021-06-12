// tslint:disable:no-console

class ConsoleLogger {
  public log(...args: any) {
    console.log(args);
  }
  public debug(...args: any) {
    console.debug(args);
  }
  public warn(...args: any) {
    console.log(args);
  }
  public error(...args: any) {
    console.log(args);
  }
}

export const logger = new ConsoleLogger();
