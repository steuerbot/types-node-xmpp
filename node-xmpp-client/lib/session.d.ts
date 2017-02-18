/// <reference types="node" />
import {EventEmitter} from 'events';

/**
 * Created by marcneumann on 17.02.17.
 */
export declare class Session extends EventEmitter {
    constructor(opts: any);

    setOptions(opts: any): void;

    pause(): void;

    resume(): void;

    send(stanza: any): any;

    end(): void;

    onStanza(): void;
}