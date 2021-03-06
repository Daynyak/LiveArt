/**
 * Find and Play
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { Event, EventCertain, museum, museumCertain } from '../models';
export interface EventRequest {
    event: string;
}
export interface museumRequest {
    museum: string;
}
/**
 *
 */
export declare class DefaultApi extends runtime.BaseAPI {
    /**
     * Returns description of sport event
     */
    eventRaw(requestParameters: EventRequest): Promise<runtime.ApiResponse<Array<EventCertain>>>;
    /**
     * Returns description of sport event
     */
    event(requestParameters: EventRequest): Promise<Array<EventCertain>>;
    /**
     * Returns list of sport events
     */
    eventsRaw(): Promise<runtime.ApiResponse<Array<Event>>>;
    /**
     * Returns list of sport events
     */
    events(): Promise<Array<Event>>;
    /**
     * Returns description of museum
     */
    museumRaw(requestParameters: museumRequest): Promise<runtime.ApiResponse<Array<museumCertain>>>;
    /**
     * Returns description of museum
     */
    museum(requestParameters: museumRequest): Promise<Array<museumCertain>>;
    /**
     * Returns list of museums
     */
    museumsRaw(): Promise<runtime.ApiResponse<Array<museum>>>;
    /**
     * Returns list of museums
     */
    museums(): Promise<Array<museum>>;
}
