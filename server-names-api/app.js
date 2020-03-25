const mongoose = require('mongoose');
const Person = require('./person');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/namesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    Person.find({}).lean().exec((err, data) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'Internal Error'
            });
        }
        return res.status(200).json(data);
    });
});

app.get('/:text', (req, res) => {

    let text = req.params.text;
    var query = {
        $or: [

            { firstName: { $regex: text, $options: 'i' } },
            { lastName: { $regex: text, $options: 'i' } },
            { country: { $regex: text, $options: 'i' } },
            { email: { $regex: text, $options: 'i' } },
            { city: { $regex: text, $options: 'i' } },

        ]
    };

    Person.find(query).lean().exec((err, data) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'Internal Error'
            });
        }
       setTimeout(() => {return res.status(200).json(data)}, 2000);
    });
});





app.use(function (req, res, next) {
    res.status(404).send('Página não encontrada');
});

app.listen(8080);
