
const port = 8081;
const http = require('http');

class PersonalDetails{
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

const person = new PersonalDetails("Tunde Ajagbe", "tundeajagbea@gmail.com", 08106887783);

var serv = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.write(JSON.stringify(person));
    res.end();
});

serv.listen(port);
console.log(`listening on port ${port} ...`);


