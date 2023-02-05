import express from 'express'; // imp ex.
//  use uuid from uuid package
import { v4 as uuidv4 } from 'uuid';
const router = express.Router(); // express Router

//   Arrya
let users = [];

//  router method || All the routes are Starting with /users bu deafult
router.get('/', function (res,req)  {

    req.send(users)
})
//  onother get function method with /:id 
router.get('/:id', (req, res)  => {
   
    const { id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
})
// router delete method
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    //  fileter function 
    users = users.filter((user) => user.id  !== id);
    //  send 
    res.send(`User with the id ${id} deleted successfully`);
});
//  router patch method 
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, age}  = req.body;
    const user = users.find((user) => user.id === id);
    //  if else 
    if(firstName){
        user.firstName = firstName;
    }
    //  lastName
    if(lastName){
        user.lastName = lastName;
    }
    //  age
    if(age) {
        user.age = age;
    }
    //  res send 
    res.send(`user with the id ${id} has been upadted `);

})
//  router post method 
router.post("/",function(req, res){
    const user = req.body;
    
    //  user withId method 
    users.push({...user, id:  uuidv4()});
    res.send(`user with the name ${user.firstName} added to the database!`)
});

export default router;