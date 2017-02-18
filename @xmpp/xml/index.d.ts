// Type definitions for @xmpp/xml 0.1
// Project: github.com/node-xmpp/node-xmpp/
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import * as ltx from 'ltx';

declare function xml(): any;

// exports.Stanza = require('./lib/Stanza')
export {Stanza} from './lib/Stanza';

// exports.createStanza = require('./lib/createStanza')
export {createStanza} from './lib/createStanza';

// exports.IQ = require('./lib/IQ')
export {IQ} from './lib/IQ';

// exports.Message = require('./lib/Message')
export {Message} from './lib/Message';

// exports.Presence = require('./lib/Presence')
export {Presence} from './lib/Presence';

// exports.parse = require('./lib/parse')
export {parse} from './lib/parse';

// exports.Parser = require('./lib/Parser')
export {Parser} from './lib/Parser';

// exports.tag = require('./lib/tag')
export {tag} from './lib/tag';

// exports.ltx = ltx
export {ltx};
