interface IName {
  name: string
}
type IPerson = IName & {
  age: number;
};
let person: IPerson = {
  name: '123', 
  age: 123
}
