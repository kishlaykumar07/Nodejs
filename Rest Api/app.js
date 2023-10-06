const express = require('express');
const fs = require('fs');
const port = 3000;
const app = express();
const users = require('./MOCK_DATA.json');

//Middleware : whenever form data comes urlencoded helps in putting that to the body
app.use(express.urlencoded({ extended: false})); 

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path}\n`, (err, data) =>{
        next();
    });
});

//ROUTES
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join(' ')}
    </ul>
    `;
    res.send(html)
});

app.get('/api/users',(req, res) => {
        res.send(users)
});

app.post('/api/users', (req, res) => {
    //TODO: Create new USer
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", id: users.length });
    })
    
});

app.route('/api/users/:id')
    .get((req, res) => {
        // Access the 'id' parameter from req.params
        const id = Number(req.params.id);
        const user = users.find((user) => user.id ===id);
        
        // Here, we are just sending it as a response for demonstration purposes
        return res.json(user);
      })

    .patch((req, res) => {
        //TODO: Edit the user with id
        return res.json({status: "pending"});
    })

    .delete((req, res) => {
        //TODO: Delete user with id
        return res.json({Status: {"pending"}});
    });

// Define a dynamic route with a parameter named ':id'
// app.get('/api/users/:id', (req, res) => {
    // Access the 'id' parameter from req.params
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id ===id);
    
    // Here, we are just sending it as a response for demonstration purposes
//     return res.json(user);
//   });


// app.patch('/api/users/:id', (req, res) => {
//     //TODO: Edit the user with id
//     return res.json({status: "pending"});
// });

// app.delete('/api/users/:id', (req, res) => {
//     //TODO: Delete user with id
//     return res.json({Status: {"pending"}});
// });









app.listen(port, () => console.log(`COnnected to port ${port} successfully`))