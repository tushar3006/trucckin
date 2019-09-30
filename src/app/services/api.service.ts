import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { of, Observable } from 'rxjs';

@Injectable()
export class ApiService {
  private domainName = 'ria-food.yelo.red' || window.location.hostname;
  private countryPromise: Promise<any>;
  constructor(private http: HttpClient) {}

  post(url, data) {
    url = environment.API_ENDPOINT + url;
    let headers;
    if (localStorage.getItem('access_token')) {
      headers = {
        authorization: 'Bearer ' + localStorage.getItem('access_token')
      };
    }
    // data.body['marketplace_reference_id'] = this.config.marketplaceReferenceId;
    // if (!('language' in data.body)) {

    // }

    console.log(headers);
    return this.http.post(url, data, { headers });
  }

  private mapDataToUrl(data: any) {
    if (data.body) {
      const obj = {
        ...data.body
      };

      const params = [];
      Object.keys(obj).forEach(key => {
        params.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
        );
      });
      return params.join('&');
    } else {
      return '';
    }
  }

  public get(data) {
    let url = '';

    url = environment.API_ENDPOINT + data.url;

    const params = this.mapDataToUrl(data);
    url += '?' + params;
    return this.http
      .get(url, { params: data.params })
      .pipe(map(this.tookanResponse));
  }

  tookanResponse(res: any) {
    return res;
  }
}
