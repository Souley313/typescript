class Sejour {

    constructor(private _nom: string, private _prix: number) {
        this._nom = _nom;
        this._prix = _prix;
    }

    getNom() : string {
        return this._nom;
    }

    getPrix() : number {
        return this._prix;
    }

    toString(): string {
        return `${this._nom} - ${this._prix}`
    }

}

class SejourService {
    private _sejours: Sejour[] = [];

    constructor() {
        this._sejours.push(new Sejour("Paris", 600));
        this._sejours.push(new Sejour("Nantes", 450));
        this._sejours.push(new Sejour("Le Havre", 300));
    }

}
