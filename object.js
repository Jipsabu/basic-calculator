const obj = {
  name: "Max",
  age: 20,
  gender: true,
  address: "abc",
  zipcode: 550000,
};

// How to access to an object
const arr = [0, 1, 2, 3, 4];
// console.log(arr[0]);
// console.log(obj["name"]);
// console.log(obj.name)

const { name, gender, ...theRest } = obj;
// console.log(name);
// console.log(age);
// console.log(gender);

const applicants = [
  {
    firstname: "Joe",
    lastname: "Smith",
    work: "freelance-developer",
    blogs: "54",
    websites: "32",
    hackathons: "6",
    location: "morocco",
    id: "0",
  },
  {
    firstname: "janet",
    lastname: "smith",
    hackathons: "8",
    location: "Mozambique",
    work: "fullstack-developer",
    blogs: "34",
    websites: "12",
    id: "1",
  },
];

const map = applicants.map(({ firstname, lastname, ...applicant }) => {
  return {
    fullname: `${firstname} ${lastname}`,
    ...applicant,
  };
});

console.log(map);
