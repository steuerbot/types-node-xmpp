/**
 * Created by marcneumann on 17.02.17.
 */

/**
 * Available methods for client-side authentication (Client)
 * @param  {Array} offeredMechs  methods offered by server
 * @param  {Array} preferredMech preferred methods by client
 * @param  {Array} availableMech available methods on client
 */
export declare function selectMechanism(offeredMechs: any[], preferredMech: any[], availableMech: any[]): any;

/**
 * Will detect the available mechanisms based on the given options
 * @param  {[type]} options client configuration
 * @param  availableMech availableMech available methods on client
 * @return {[type]}         available options
 */
export declare function detectMechanisms(options: any, availableMech: any[]): any;
