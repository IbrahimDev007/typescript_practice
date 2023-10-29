var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// basic types
var i = 4;
var j = "ibrahim";
var k = true;
var m = "true";
var n = [1, 2, 3, 4, 5, 6, 7];
//tuple of typescript
var even = [
    2,
    4,
    6,
    8,
    10,
    12,
    "string",
    14,
];
var odd;
odd = [
    ["1st ", 1],
    ["2nd ", 2],
];
//typescript union  veritable
var union = "99";
//enum in type script
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["right"] = 3] = "right";
    Direction[Direction["left"] = 4] = "left";
})(Direction || (Direction = {}));
console.log(Direction);
var obj = {
    id: 1334,
    name: "jhon",
};
//  assertation   ,changing type
var cid = "dude";
var customerId = cid;
//functon
function addNum(x, y) {
    return x + y;
}
//no return type
function msg() {
    console.log("this is typscript function");
}
//two declaration typscript type,interface
console.log(typeof "peacook", "peacook");
var MathExam = {
    cid: 133,
    acid: 235,
    name: "jony",
    msg: function () { return console.log("hellow math student"); },
};
var Mathematics = /** @class */ (function () {
    function Mathematics(cid, name, id) {
        this.cid = 134;
        this.acid = 2353;
        this.name = "random";
    }
    Mathematics.prototype.msg = function () {
        console.log("Hello math student");
    };
    Mathematics.prototype.randomSum = function () {
        return this.cid + this.acid;
    };
    Mathematics.prototype.randomMinus = function (cid, acid) {
        return acid - cid;
    };
    return Mathematics;
}());
var mathematician = /** @class */ (function (_super) {
    __extends(mathematician, _super);
    function mathematician(id, profile, acid, name) {
        var _this = _super.call(this, cid, name, acid) || this;
        _this.name = name;
        _this.profile = profile;
        return _this;
    }
    mathematician.prototype.msg = function () {
        console.log("msg:".concat(this.name, " is high profile at ").concat(this.profile));
    };
    return mathematician;
}(Mathematics));
var mathObject = new Mathematics(10, 'lily', 234);
var math = new mathematician(13, 'Ms.c', 13, "jasmine");
console.log(math.msg());
console.log(mathObject.cid); // Output: 134
console.log(mathObject.name); // Output: "random"
mathObject.msg(); // Output: "Hello math student"
mathObject.id = 10; // Assign a value to the id property
console.log(mathObject.randomSum()); // Output: 2363 (134 + 2353)
console.log(mathObject.randomMinus(23, 5));
