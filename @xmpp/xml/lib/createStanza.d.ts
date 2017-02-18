/**
 * Created by marcneumann on 17.02.17.
 */
import {Element} from 'ltx';

/**
 * JSX compatible API, use this function as pragma
 * https://facebook.github.io/jsx/
 * Returns a Stanza if name is presence, message or iq an ltx Element otherwise.
 *
 * @param  {string} name  name of the element
 * @param  {any} attrs attribute key/value pairs
 * @return {Element}      Stanza or Element
 */
export declare function createStanza(name: string, attrs?: any): Element;
