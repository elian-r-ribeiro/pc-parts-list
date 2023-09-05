export class Part {
    private _type: string;
    private _brand: string;
    private _model: string;
    private _definitions: string;
    private _power: string;

    constructor(type : string, brand : string, model : string, definitions : string, power: string){
        this._type = type;
        this._brand = brand;
        this._model = model;
        this._definitions = definitions;
        this._power = power;
    }

    public get type(): string {
        return this._type;
    }
    public set type(type: string) {
        this._type = type;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(brand: string) {
        this._brand = brand;
    }

    public get model(): string {
        return this._model;
    }
    public set model(model: string) {
        this._model = model;
    }

    public get definitions(): string {
        return this._definitions;
    }
    public set definitions(definitions: string) {
        this._definitions = definitions;
    }

    public get power(): string {
        return this._power;
    }
    public set power(power: string) {
        this._power = power;
    }
}
