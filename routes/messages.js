var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /messages

// GET /messages/:id
router.get('/:id', function (req, res, next) {
    // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
    var messageId = req.params.id;
    Models.Message().findOne(messageId).then(function (message) {
        res.json(message)
    });
});

// POST /messages/:id/reply
router.post('/:id/reply', function (req, res, next) {
    // Lisää tällä id:llä varustettuun viestiin...
    var messageId = req.params.id;
    // ...tämä vastaus (Vinkki: lisää ensin replyToAdd-objektiin kenttä MessageId, jonka arvo on messageId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
    var replyToAdd = req.body;
    // Palauta vastauksena lisätty vastaus
    Models.Message.create({title: replyToAdd.title, content: replyToAdd.content}).then(function (message) {
        res.json(message);
    });
});

module.exports = router;
