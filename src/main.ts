interface User {
    readonly id: number;
    readonly email: string;
    firstname: string;
    lastname: string;
}

const user1: User = {
    id: 1,
    email: "vc@gmail.com",
    firstname: "v",
    lastname: "c"
}

// user1["email"] = "" cannot do this because the property is read only
user1["firstname"] = "vaibhav"

interface Person  {
    id: number;
    firstname: string;
    lastname: string;
    age: number
}

// if we want to make all the properties as Readonly =>
const person1: Readonly<Person> = {
    id: 1,
    firstname: "",
    lastname: "",
    age: 10
}

type ReadOnlyCollection<T> = Readonly<T[]>

const numberCollection: ReadOnlyCollection<number> = [1,2,3,4,5];
// numberCollection.push(10) // using the readonly with array does not allow you to change the elements inside the collection


/*
    Record ->
    provides an cleaner syntax to define the structure of the objects. they are helpful when we does not has fixed keys, the keys can be string, number etc,

    Map ->
    JS concepts, it provides new syntax to create the key value pairs but can incorparate type with that

    Exclude ->
    Allow to exclude the values from the type that defines literal
*/

// without record
type FinalUser = {
    id: string,
    name: string
}

// this defines the user contains key as string and value as FinalUser
type Users = {
    [key: string]: FinalUser
}

const users: Users = {
    "random": {
        id: "random",
        name: "randomuser"
    }, 
    "random2": {
        id: "random2",
        name: "randomuser2"
    }
};


// using record
type UsersRecord = Record<string, FinalUser> // same as Users but with cleaner syntax for declaration, the key is string and value will be FianlUser

const finalUsers: UsersRecord = {
    "firstname": {
        id: "firstname",
        name: "firstname"
    }
}

// creating map with generic else it will be any, any
const endUsers = new Map<string, User>();

endUsers.set("random", {
    id: 1,
    email: "",
    firstname: "",
    lastname: ""
})

const result = endUsers.get("random");


// Record provides an cleaner syntax to define the structure of the object when we does not fixed key-value pairs rather we have keys as string and value as random type