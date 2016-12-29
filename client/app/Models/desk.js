"use strict";
var Desk = (function () {
    function Desk(deskId, status, type, isactive, pos, name, shopId, sorted, categoryId) {
        this.deskId = deskId;
        this.status = status;
        this.type = type;
        this.isactive = isactive;
        this.pos = pos;
        this.name = name;
        this.shopId = shopId;
        this.sorted = sorted;
        this.categoryId = categoryId;
    }
    return Desk;
}());
exports.Desk = Desk;
//# sourceMappingURL=desk.js.map