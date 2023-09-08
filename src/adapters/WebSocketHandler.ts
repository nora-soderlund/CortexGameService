import WebSocketDataSource from "../data/WebSocketDataSource";
import webSocketMessageHandler from "./WebSocketMessageHandler";

export default function webSocketHandler(webSocket: WebSocket) {
  //@ts-expect-error
  webSocket.accept();

  const webSocketDataSource = new WebSocketDataSource(webSocket);

  webSocket.addEventListener("message", (event: MessageEvent) => {
    // TODO: block additional messages while processing previous ones, maybe?
    
    webSocketMessageHandler(webSocketDataSource, event.data);
  });
  
  webSocket.addEventListener("close", (event) => {
    console.log("Closed");
  });
};
