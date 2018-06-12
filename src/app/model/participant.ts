export class Participant {
    initials: string;
    name: string;
    address: string;
    preferredLanguage: string;

    constructor(
        initials: string,
        name: string,
        address: string,
        preferredLanguage: string
    ){
        this.initials = initials;
        this.name = name;
        this.address  = address;
        this.preferredLanguage  = preferredLanguage;
    }
}






