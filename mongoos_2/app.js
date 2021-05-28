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
    Department: String,
    Contact: {
        contact_num: Number,
        contact_email: String
    }
})
const Employee = mongoose.model('Employee', employeeSchema);


const total_employees = []


const employee = new Employee({
    lName: 'Rashed',
    fName: "Rakan",
    hire_date: Date.now(),
    Salary: 23000,
    department: "Information Technology",
    Contact: {
        contact_num: '0302839344444',
        contact_email: 'Rao@gmail.com'
    }
})

// employee.save();


const employee_1 = new Employee({
    lName: 'Ali',
    fName: "Ahamd",
    hire_date: Date.now(),
    Salary: 15000,
    department: "Marketing",
    Contact: {
        contact_num: '0302839344444',
        contact_email: 'Ali@gmail.com'
    }
})
// employee_1.save();
const employee_2 = new Employee({
    lName: 'Khalifa',
    fName: "Reem",
    hire_date: Date.now(),
    Salary: 35000,
    department: "Human resources",
    Contact: {
        contact_num: '0302839344444',
        contact_email: 'Rkhalifa@abc.com'
    }
})
// employee_2.save();


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



// app.get('/', (req, res) => {
//     Employee.find({}, (err, foundEmployee) => {
//         if (err) {
//             res.send(err)
//         } else {
//             if (foundEmployee) {
//                 foundEmployee.forEach(user => {
//                     console.log(user.fName + " " + user.Contact.contact_num + "  " +                      user.Contact.contact_email);
//                 });
//             }
//         }
//     })
// })





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


// app.patch('/', (req, res) => {
//     Employee.updateOne({ lName: 'Raheem Khalifa' },
//         { $set: { Salary: 45000 } }, (err) => {
//             if (!err) {
//                 res.send('Seccesfully updated')
//             } else {
//                 res.send(err)
//             }
//         }
//     )
// })

// app.delete('/', (req, res) => {
//     Employee.deleteOne({ lName: 'Ali' }, (err) => {
//         if (!err) {
//             res.send('Ali Employee's Data removed Succesfully')
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