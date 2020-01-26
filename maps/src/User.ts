import faker from "faker";
import { Mappable } from "./Mappable";

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  }

  markerContent() {
    return `User Name: ${this.name}`;
  }
}

export { User };
