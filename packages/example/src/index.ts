import core from "@miapi/core";
import Service from "@miapi/logger";

Service.enableAll();

const logger = Service.namespace("example");

const c = new core();
logger.info(c);
