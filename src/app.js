"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 5006;
app.get('/', function (req, res) {
    res.send('The sedulous hyena ate the antelope!');
});
app.post('/send-code', function (req, res) {
    var phone = req.body.phone;
});
app.listen(port, function () {
    return console.log("server is listening on " + port);
});
