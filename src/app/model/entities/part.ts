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
    public set type(value: string) {
        this._type = value;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }

    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        this._model = value;
    }

    public get definitions(): string {
        return this._definitions;
    }
    public set definitions(value: string) {
        this._definitions = value;
    }

    public get power(): string {
        return this._power;
    }
    public set power(value: string) {
        this._power = value;
    }
}
