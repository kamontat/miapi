import debug from "debug";
import { Logger, LoggerLevel } from "./models/Logger";

export default class LoggerService {
  public static namespace(...name: string[]) {
    return new Logger(...name);
  }

  public static enableAll() {
    debug.enable(`${Logger.getLevelNamespace(LoggerLevel.all)}`);
  }

  public static enableOnly(level: LoggerLevel) {
    debug.enable(`${Logger.getLevelNamespace(level)}`);
  }

  public static enableExcept(level: LoggerLevel) {
    debug.enable(`${Logger.getLevelNamespace(LoggerLevel.all)},-${Logger.getLevelNamespace(level)}`);
  }
}

export { Logger, LoggerLevel };
