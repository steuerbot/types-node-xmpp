import {Element} from 'ltx';
/**
 * Created by marcneumann on 17.02.17.
 */

export declare class Stanza extends Element {
    from: string;
    to: string;
    id: string;
    type: string;

    constructor(name: string, attrs?: any);
}
