import {EventEmitter} from 'events';
import {Element} from 'node-xmpp-core';

export declare class Component extends EventEmitter {
    constructor(opts: Options);

    onStreamStart(streamAttrs: any): void;

    onStanza(stanza: Element): void;

    send(stanza: Element): void;

    end(): void;
}

export declare interface Options {
    jid: string;
    password: string;
    host: string;
    port: number;
    reconnect?: boolean;
}