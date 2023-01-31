var kullanicilar = [
    {email:"burgokmen@gmail.com", sifre:12345},
    {email:"bgokmen@gmail.com", sifre:12345}
]

var tivitler = [
    {email:"burgokmen@gmail.com", tivit: "bugun hava cok soguk"},
    {email:"bgokmen@gmail.com", tivit: "bugun hava cok soguk 2"},
    {email:"bg@gmail.com", tivit: "Kapiyi ben acicam"},
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email, sifre){
    console.log(email);
    console.log(sifre);
    for (i=0; i< kullanicilar.length; i++){
        if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre){
            return true;
        }
    }
    return false;
   
}

function giris(){
    
}
