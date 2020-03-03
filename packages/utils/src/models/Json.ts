import Services from "@miapi/logger";

const logger = Services.namespace("utils", "json");

export default class {
  /**
   *
   * @param data this should be json data or string
   */
  constructor(private data: any) {
    logger.debug("create JSON object with data=%o", data);
  }

  /**
   *
   */
  public safe(): { [key: string]: any } {
    try {
      return JSON.parse(this.data);
    } catch (e) {
      logger.warn("safe parse json object failed: ", e);
      return {};
    }
  }
}
