function setConfig(config) {
  global.config = config;
}

function getConfig() {
  return global.config;
}

export { setConfig, getConfig };
