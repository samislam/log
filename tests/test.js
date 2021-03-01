const log = require("../index");

log.info("here is an information message");
log.warn("here is an warning message");
log.error("here is an error message");
log.success("here is an success message");
log.default("here is a default message");

log.error(log.label, "Could Not Connect To Database");
