// Type definitions for node-xmpp-client 3.1
// Project: https://github.com/node-xmpp/node-xmpp/tree/master/packages/node-xmpp-client/
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node-xmpp-core" />
import * as SASL from './lib/sasl';
import {Client} from 'node-xmpp-client/lib/Client';

export * from './lib/Client';
export {Client, Options} from './lib/Client';
export {SASL};

