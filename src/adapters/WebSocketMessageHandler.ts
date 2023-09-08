import WebSocketDataSource from "../data/WebSocketDataSource";
import webSocketEventHandler from "./events/WebSocketEventHandler";

export default async function webSocketMessageHandler(webSocket: WebSocketDataSource, message: string) {
  const payload = JSON.parse(message);

  if(typeof payload !== "object")
    throw new Error("Received payload is not an object.");

  if(!Array.isArray(payload))
    throw new Error("Received payload is not an array.");

  for(let event of payload) {
    const [ eventName, eventBody ] = event;

    console.log("Processing event: " + event);
    
    await webSocketEventHandler(webSocket, eventName, eventBody);
  }
};
