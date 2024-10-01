interface User {
    name : string,
    email : string
}

type UserKey = keyof User;

//valid
const keyName : UserKey = "name";
//tidak vlaid
//@ts-expect-error
//akan error karena 'password bukan bagian dari interface User'
//Type '"password"' is not assignable to type 'keyof User
const keyPassword :  UserKey = "password";