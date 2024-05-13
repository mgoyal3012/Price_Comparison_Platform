import bcrypt from 'bcryptjs'
const users=[
    {
        name:"Aashi Nagpal",
        email:"aashinagpal2005@gmail.com",
        password:bcrypt.hashSync('12345',10),
        isAdmin:false
    },
    {
        name:"Jasmine Garg",
        email:"jasminegarg2016@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Aarushi Gupta",
        email:"aarushi16104@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
]
export default users