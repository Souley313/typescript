"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour("Paris", 600));
        this._sejours.push(new Sejour("Nantes", 450));
        this._sejours.push(new Sejour("Le Havre", 300));
    }
    return SejourService;
}());
