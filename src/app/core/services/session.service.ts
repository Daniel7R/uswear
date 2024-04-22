import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getCurrentSession(): Session| undefined | null {
    const sessionData = localStorage.getItem('user');
    if (sessionData) {
      return JSON.parse(sessionData) as Session;
    }
    return null;
  }
}
