import { PhoneType } from "../shared/PhoneType.model";

export class Contact{
    public name: string;
    public description: string;
    public imagePath: string;
    public phoneTypes: PhoneType[];
    constructor(name:string, desc:string, image:string, phTy: PhoneType[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.phoneTypes = phTy;
    }
}