import WebSocketDataSource from "../../../data/WebSocketDataSource";
import PingEvent from "../../../data/interfaces/events/communication/PingEvent";
import PingResponseEvent from "../../../data/interfaces/events/communication/PingResponseEvent";

export default async function pingEventHandler(webSocket: WebSocketDataSource, event: PingEvent) {
  // Received ping after Date.now() - event.timestamp

  webSocket.send(new PingResponseEvent(Date.now()));
};
