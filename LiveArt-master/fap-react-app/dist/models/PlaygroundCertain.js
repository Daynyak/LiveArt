"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
var runtime_1 = require("../runtime");
function museumCertainFromJSON(json) {
    return museumCertainFromJSONTyped(json, false);
}
exports.museumCertainFromJSON = museumCertainFromJSON;
function museumCertainFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'image': !runtime_1.exists(json, 'image') ? undefined : json['image'],
        'name': !runtime_1.exists(json, 'name') ? undefined : json['name'],
        'address': !runtime_1.exists(json, 'address') ? undefined : json['address'],
        'sport': !runtime_1.exists(json, 'sport') ? undefined : json['sport'],
        'size': !runtime_1.exists(json, 'size') ? undefined : json['size'],
        'capacity': !runtime_1.exists(json, 'capacity') ? undefined : json['capacity'],
        'surface': !runtime_1.exists(json, 'surface') ? undefined : json['surface'],
    };
}
exports.museumCertainFromJSONTyped = museumCertainFromJSONTyped;
function museumCertainToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'image': value.image,
        'name': value.name,
        'address': value.address,
        'sport': value.sport,
        'size': value.size,
        'capacity': value.capacity,
        'surface': value.surface,
    };
}
exports.museumCertainToJSON = museumCertainToJSON;