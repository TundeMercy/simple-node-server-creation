
module.exports = class PersonalDetails{
    constructor(name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    get personNme(){
        return this.name;
    }

    set personName(name){
        this.name = name;
    }

    get personEmail(){
        return this.email;
    }

    set personEmail(email){
        this.email = email;
    }

    get personPhone(){
        return this.phone;
    }

    set personPhone(phone){
        this.phone = phone;
    }

}