import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  constructor() {}

  get(key) {
    if (localStorage.getItem(key)) {
      JSON.parse(localStorage.getItem(key));
    }

    return null;
  }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
