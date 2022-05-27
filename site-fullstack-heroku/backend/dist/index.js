"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var routes = _express["default"].Router();

var port = 4000;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use("/posts", routes);

require("./routes")(routes);

var public_path = _path["default"].join(__dirname, '../build');

app.use(_express["default"]["static"](public_path));
app.get("*", function (_, res) {
  res.sendFile(_path["default"].join(public_path, 'index.html'));
});
app.listen(port, function () {
  console.log("serveur démarré avec succès sur le port 4000");
});