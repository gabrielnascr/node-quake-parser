import { EventHandler } from "./EventHandlers";

import { InitGameHandler } from "./handlers/InitGameHandler";
import { KillHandler } from "./handlers/KillGameHandler";
import { ShutdownGameHandler } from "./handlers/ShutdownGameHandler";

const eventMapper: { [key: string]: EventHandler } = {
  InitGame: new InitGameHandler(),
  ShutdownGame: new ShutdownGameHandler(),
  Kill: new KillHandler(),
};

export const getEventHandler = (line: string): EventHandler | null => {
  for (const key in eventMapper) {
    if (line.includes(key)) {
      return eventMapper[key];
    }
  }
  return null;
};
