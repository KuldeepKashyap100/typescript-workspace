import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);


class Plane {
  color: string = "red";

  @markFunction("secret...")
  fly(): void {
    console.log("flying...");
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  }
}

const secret = Reflect.getMetadata("secret", Plane.prototype, 'fly');
console.log(secret);