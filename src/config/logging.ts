const info = (namespace: string, message: string, object?: any) => {
  if (object) {
      console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
  } else {
      console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};
// give us a warning message
const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
      console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
  } else {
      console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};
// give us an error message
const error = (namespace: string, message: string, object?: any) => {
  if (object) {
      console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
  } else {
      console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};
// give us debug message
const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
      console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
  } else {
      console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};
// get the current date/time in a nice human readable format
const getTimeStamp = (): string => {
  return new Date().toISOString();
};

export default {
  info,
  warn,
  error,
  debug
};