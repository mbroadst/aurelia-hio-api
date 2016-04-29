declare module 'aurelia-hio-api' {
  import 'isomorphic-fetch';
  import {
    HttpClient
  } from 'aurelia-fetch-client';
  import {
    inject
  } from 'aurelia-framework';
  
  // deployed
  import * as c from './constants';
  export function baseUrl(): any;
  export class ServiceBase {
    constructor();
  }
  export class CrudService extends ServiceBase {
    constructor(Model: any, options: any);
    read(identifier: any): any;
    list(options: any): any;
  }
  export class MetricsService extends ServiceBase {
    constructor(memory: any, cpu: any, sensors: any);
    read(fabric: any, start: any): any;
  }
  export class GuestService extends CrudService {
    constructor();
  }
  export class HostService extends CrudService {
    constructor();
    statistics(): any;
    overview(): any;
  }
  export class RealmService extends CrudService {
    constructor();
  }
  export function configure(aurelia: any): any;
  export {
    ServiceBase,
    CrudService,
    GuestService,
    HostService,
    MetricsService,
    RealmService
  };
}