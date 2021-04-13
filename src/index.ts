class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const yong = new Human('yong', 23, 'male');

interface Human {
  name: string;
  age: number;
  gender: string;
}

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi(yong));

export {};
