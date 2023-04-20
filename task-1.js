import express from 'express';

const app = express();

const students = [
    {
        id: 200428,
        name: "ali ahmed hassan ibrahim",
        section: 9
    },

    {
        id: 200000,
        name: "ahmed yasser ahmed",
        section: 10
    },

    {
        id: 200001,
        name: "hassan mohsen farag",
        section: 4
    },

    {
        id: 200002,
        name: "ibrahim nader assem",
        section: 5
    }
]

app.get('/students', (req, res) =>
{
    let output = '<ol>';

    for(let i = 0; i<students.length; i++)
    {
        const student = students[i];
        output += "<li>" + student.id + "-" + student.name + "</li>";
    }
    output += '</ol>';


    res.send(output)
})

app.listen(5000);