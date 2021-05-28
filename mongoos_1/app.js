const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

const connectDB = require('./db')
connectDB();

const employeeSchema = new mongoose.Schema({
    lName: String,
    fName: String,
    hire_date: Date,
    Salary: Number,
    department: String
})
const Employee = mongoose.model('Employee', employeeSchema);


const total_employees = []


const employee = new Employee({
    lName: 'Rashed',
    fName: "Rakan",
    hire_date: Date.now(),
    Salary: 23000,
    department: "Information Technology"
})

// employee.save();
const employee_1 = new Employee({
    lName: 'muhas',
    fName: "Munir",
    hire_date: Date.now(),
    Salary: 21000,
    department: "computer science"
})
// employee_1.save();
const employee_2 = new Employee({
    lName: 'Adeel',
    fName: "Rao",
    hire_date: Date.now(),
    Salary: 30000,
    department: "cyber scurity"
})
// employee_2.save();
const employee_3 = new Employee({
    lName: 'Saim',
    fName: "Ahmad",
    hire_date: Date.now(),
    Salary: 25000,
    department: "data bases"
})
// employee_3.save();


//                                         A                                          //
// app.get('/', (req, res) => {
//     Employee.find({ "Salary": { $gt: 20000 } }, (err, foundEmployee) => {
//         if (err) {
//             res.send(err)
//         } else {
//             if (foundEmployee) {

//                 res.send(foundEmployee)

//             }
//         }
//     })
// })

//                                         B                                          //

// app.get('/', (req, res) => {
//     const char = 'M'
//     Employee.find({ 'lName': { $regex: '^' + char, $options: 'i' } }, (err, foundEmployee) => {
//         if (err) {
//             res.send(err)
//         } else {
//             if (foundEmployee) {
//                 res.send(foundEmployee)
//             }
//         }
//     })
// })

//                                         C                                         //

// app.post('/', (req, res) => {

//     const newEmployee = new Employee({
//         lName: req.body.lastname,
//         fName: req.body.firstname,
//         hire_date: req.body.date,
//         Salary: req.body.salary,
//         department: req.body.department
//     })

//     newEmployee.save((err) => {
//         if (err) {
//             console.log(err);
//         }
//         total_employees.push(newEmployee)
//         console.log(newEmployee);
//     });
//     res.redirect('/')
// })



//                                         D                                          //

// app.patch('/', (req, res) => {
//     Employee.updateOne({ lName: 'Raheem Khalifa' },
//         { $set: { Salary: 35000 } }, (err) => {
//             if (!err) {
//                 res.send('Seccesfully updated')
//             } else {
//                 res.send(err)
//             }
//         }
//     )
// })


//                                         G                                          //

// app.delete('/', (req, res) => {
//     Employee.deleteOne({ lName: 'Omar' }, (err) => {
//         if (!err) {
//             res.send('succesfully deleted')
//         } else {
//             res.send(err)
//         }
//     })
// })




//                                         G                                          //


// Employee.find().count(function (err, count) {
//     console.log("Number of docs: ", count);
// });



app.listen(PORT, () => {
    console.log(`Server is Listening at Port ${PORT}`);
})