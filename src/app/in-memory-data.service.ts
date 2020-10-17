import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const form = {
    name:	"scooby",
    email:	"s@c.n",
    feedback:	"Great",
    comments:	"This field can be empty :)"
    }
    return { form };
  }
}
