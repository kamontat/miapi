import debug from "debug";

export enum LoggerLevel {
  all = "*",
  debug = "debug",
  info = "info",
  warn = "warn",
  error = "error"
}

export class Logger {
  public static get ROOT_NAMESPACE() {
    return "miapi";
  }

  public static get NAMESPACE_SEPERATOR() {
    return ":";
  }

  public static getLevelNamespace(level: LoggerLevel) {
    const name = Logger.ROOT_NAMESPACE;
    const sep = Logger.NAMESPACE_SEPERATOR;
    const all = LoggerLevel.all.toString();

    if (level === LoggerLevel.all) {
      return `${name}${sep}${level.toString()}`;
    } else {
      return `${name}${sep}${all}${sep}${level.toString()}`;
    }
  }

  private namespace: string;

  private _debug?: debug.Debugger;
  private _info?: debug.Debugger;
  private _warn?: debug.Debugger;
  private _error?: debug.Debugger;

  constructor(...namespaces: string[]) {
    this.namespace = [Logger.ROOT_NAMESPACE].concat(...namespaces).join(Logger.NAMESPACE_SEPERATOR);
  }

  debug(format: any, ...msg: any[]) {
    if (!this._debug) {
      this._debug = debug(this.namespace.concat(Logger.NAMESPACE_SEPERATOR, LoggerLevel.debug.toString()));
      this._debug.log = console.debug.bind(console);
    }

    this._debug(format, ...msg);
  }

  info(format: any, ...msg: any[]) {
    if (!this._info) {
      this._info = debug(this.namespace.concat(Logger.NAMESPACE_SEPERATOR, LoggerLevel.info.toString()));
      this._info.log = console.info.bind(console);
    }

    this._info(format, ...msg);
  }

  warn(format: any, ...msg: any[]) {
    if (!this._warn) {
      this._warn = debug(this.namespace.concat(Logger.NAMESPACE_SEPERATOR, LoggerLevel.warn.toString()));
      this._warn.log = console.warn.bind(console);
    }

    this._warn(format, ...msg);
  }

  error(format: any, ...msg: any[]) {
    if (!this._error) {
      this._error = debug(this.namespace.concat(Logger.NAMESPACE_SEPERATOR, LoggerLevel.error.toString()));
      this._error.log = console.error.bind(console);
    }

    this._error(format, ...msg);
  }
}
