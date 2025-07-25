type OptionalFields<T> = {
      [P in keyof T]?: T[P];
};

type User = {
  name: string;
  age: number;
};

type OptionalUser = OptionalFields<User>;

const user: OptionalUser = {
  name: "Hau"
};
console.log(user);