import {Session} from './session';
import {Stanza} from 'node-xmpp-core';

/**
 * Created by marcneumann on 17.02.17.
 */
export declare class Client extends Session {
    options: any;
    availableSaslMechanisms: any;
    static Stanza: {
        new(name: string, attrs: any): Stanza;
    };

    constructor(options: Options);

    connect(): void;

    disconnect(): void;

    useFeatures(): void;

    doRegister(): void;

    getSaslMechanisms(): any;

    clearSaslMechanism(): void;

    registerSaslMechanism(method: any): void;

    registerSaslMechanism(method: any): void;
}

export declare interface Options {
    jid: string;
    password: string;
    host?: string;
    port?: number;
    reconnect?: boolean;
    autostart?: boolean; // if we start connecting to a given port
    register?: boolean; // register account before authentication
    legacySSL?: boolean; // connect to the legacy SSL port, requires at least the host to be specified
    credentials?: any; // Dictionary (optional) - TLS or SSL key and certificate credentials
    actAs?: string; // if admin user act on behalf of another user (just user)
    disallowTLS?: boolean; // prevent upgrading the connection to a secure one via TLS
    preferred?: string; // Preferred SASL mechanism to use
    websocket?: Websocket; // Absolutely necessary if using in a browser!!
    bosh?: Bosh;
}

interface Bosh {
    url?: string;
    prebind?: (error: any, data: any) => void;
}

interface Websocket {
    url?: string;
    prebind?: (error: any, data: any) => void;
}
