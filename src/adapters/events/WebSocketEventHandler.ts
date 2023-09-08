import WebSocketDataSource from "../../data/WebSocketDataSource";
import { webSocketEventMappings } from "./WebSocketEventMappings";

export default function webSocketEventHandler(webSocket: WebSocketDataSource, eventName: string, eventBody: any) {
  const eventHandler = webSocketEventMappings.get(eventName);

  if(!eventHandler)
    throw new Error("Event name does not exist.");

  return eventHandler(webSocket, eventBody);
};
