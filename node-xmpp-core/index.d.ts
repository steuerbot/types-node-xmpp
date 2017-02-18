// Type definitions for node-xmpp-core 5.0
// Project: github.com/node-xmpp/node-xmpp/
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="@xmpp/jid" />
/// <reference types="ltx" />
import * as xml from '@xmpp/xml';

export {SRV} from './lib/SRV'
export {Connection} from './lib/Connection'
export {JID} from '@xmpp/jid'
export {Stanza, createStanza, IQ, Presence, Message, Parser, parse} from '@xmpp/xml';

declare module 'stanza' {
    export = xml;
}

// fixme: not ideal
export {createElement, Element, escapeXML, escapeXMLText} from 'ltx';

