interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
}

type Person = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

type UpdatePerson = Pick<Person, "firstname">

function sumOfAge(user1: User, user2: User): number {
    return user1["age"] + user2["age"]
}


function random<T>(value: T[]) {
    return value[0];
}


type UpdateProps = Pick<User, 'age' | 'name' | 'password'>; // kind of created an new type that is based on the User Type and automatically updates when the User updates


const value1 = random<number>([1,2,3,4,5]);
const value2 = random<string>(["", "", ""]);

function updateUser(props: UpdateProps) {

}


type Vehicle = {
    id: number;
    brand: string;
    name: string;
    age: number
}

type PartialCar = Partial<Vehicle>;

interface Bike {
    id: number;
    brand: string;
    name: string;
    age: number
}

type PartialBike = Partial<Bike>

type UpdatedProps = Partial<Pick<User, 'age' | 'name' | 'password'>>



function updateUserDb(userInfo: UpdatedProps) {
    const age = userInfo.age;
    const name = userInfo.name;
    const password = userInfo.password;

    const payload: UpdatedProps = {};

    if(age) {
        payload["age"] = age;
    }

    if(name) {
        payload["name"] = name;
    }

    if(password) {
        payload["password"] = password;
    }

    // send the backend request
}

/*

    interface
    1. are only use to define the structure of the objects

    type lets you to define two things
    1. define the structure of the object just like interface
    2. provide new name to the already defined types with some alterations (alias)

    Pick -> 
    1. this is use to define new Type by getting the keys from the already defines interface / type. Helpful when we want to get the keys from the already defined interface / type. 
    2. Can be used with both interface and type (use to get the properties / keys from the already define interface and type)

    Partial ->
    it makes all the properties optional for an type and interface that defines the structure for the object

    Readonly ->
    Using this we can make the internal properties / values of the object and array does not change
*/


type UserEvents = 'mouse' | 'click' | 'submit';
type ExcludeEvensts = Exclude<UserEvents, 'mouse' | 'submit'>


type ExcludeUserKeys = Exclude<User, 'email'>

function randomFn(user: ExcludeEvensts) {
    console.log(user);
}


randomFn("click")