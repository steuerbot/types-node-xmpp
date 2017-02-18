import {Stanza} from './lib/Stanza';
import {Presence} from './lib/Presence';

let s = new Stanza('foobar');
let iq = new Stanza('iq');
let message = new Stanza('message');
let p = new Presence();
