"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function TableRow(_ref) {
  var rowData = _ref.rowData,
    headerColumns = _ref.headerColumns;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "table-row"
  }, headerColumns.map(function (header) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "table-cell",
      key: header
    }, rowData[header]);
  }));
}
var _default = exports["default"] = TableRow;