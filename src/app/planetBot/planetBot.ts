import {
    TeamsActivityHandler,
    TurnContext,
    MessageFactory
  } from "botbuilder";
  
  import * as Util from "util";
  const TextEncoder = Util.TextEncoder;
  
  import * as debug from "debug";
  const log = debug("msteams");
  
  export class PlanetBot extends TeamsActivityHandler {
    constructor() {
      super();
    }
  }