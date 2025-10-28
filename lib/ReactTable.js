"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _TableRow = _interopRequireDefault(require("./components/TableRow"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var data = [{
  id: 1,
  name: 'John Doe',
  age: 30,
  city: 'New York'
}, {
  id: 2,
  name: 'Jane Smith',
  age: 25,
  city: 'Los Angeles'
}, {
  id: 3,
  name: 'Peter Jones',
  age: 40,
  city: 'Chicago'
}];
function ReactTable() {
  var headerColumns = Object.keys(data[0]); // Get column names from the first object

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "table"
  }, /*#__PURE__*/_react["default"].createElement("li", {
    className: "table-header"
  }, headerColumns.map(function (header) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "header-item",
      key: header
    }, header);
  })), data.map(function (row) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: row.id,
      rowData: row,
      headerColumns: headerColumns
    });
  })));
}
var _default = exports["default"] = ReactTable;