//object to json
let json = JSON.stringify(true);
console.log(json);

//json to object
json = JSON.stringify(["a", "b"]);
console.log(json);

const rabbit = {
  name: "me",
  size: null,
  jump: () => {
    console.log(`${name} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
