import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions
} from "angular-in-memory-web-api";
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

  getToken(user) {
    return "this is a token!";
  }

  post(reqInfo: RequestInfo) {
    if (reqInfo.id === "login") {
      console.log(reqInfo.id);
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(usr => {
          return (
            reqInfo.req["body"].email === usr.email &&
            reqInfo.req["body"].password === usr.password
          );
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody
          ? {
              body: dataEncapsulation ? { responseBody } : responseBody,
              status: 200
            }
          : {
              body: {
                error: `'User' with email = '${reqInfo.req["body"].email}' not found`
              },
              status: 404
            };

        options.statusText = options.status === 200 ? "ok" : "not found";
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;

        return options;
      });
    } else if (reqInfo.id === "signup") {
      reqInfo.id = "";
      console.log("from signup");
    }
  }

  constructor() {}
}
