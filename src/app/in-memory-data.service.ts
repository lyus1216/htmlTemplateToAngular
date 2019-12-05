import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 11,
        firstName: "hokia",
        lastName: "lyu",
        email: "hokia@gmail.com",
        password: "welcome"
      },
      {
        id: 12,
        firstName: "survivor",
        lastName: "lyu",
        email: "survivor@gmail.com",
        password: "welcome"
      }
    ];
    return { users };
  }

  constructor() {}
}
