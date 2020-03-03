import core from "@miapi/core";

import Service from "@miapi/logger";
import { Json } from "@miapi/utils";

Service.enableAll();

const logger = Service.namespace("example");

const c = new core();
logger.info(c);

const json1 = new Json("json");
logger.info(json1.safe());

const json2 = new Json('{"hello": "world"}');
logger.info(json2.safe().hello);
