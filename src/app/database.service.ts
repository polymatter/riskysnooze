import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/**
 * I highly prefer to use the REST api rather than the native library
 * 1. REST API is transferable experience
 * 2. Less dependency on library changes
 * 3. Smaller download footprint which should lead to better responsiveness
 *  and smaller bandwidth costs
 * 4. The methods to send REST requests are much simpler
 */
@Injectable()
export class DatabaseService {

  constructor(private http : Http) { }

  getRiskEntries() {
    return this.http.get('https://riskysnooze.firebaseio.com/risks.json')
  }

}
