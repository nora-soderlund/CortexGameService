import pingEventHandler from "./communication/PingHandler";

export const webSocketEventMappings = new Map([
  [ "Ping", pingEventHandler ]
]);
