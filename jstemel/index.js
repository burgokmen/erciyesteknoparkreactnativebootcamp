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

function giris(){
    if((email== kullanicilar[0].email && kullanicilar[0].sifre) || 
    (email== kullanicilar[1].email && kullanicilar[1].sifre) ){
        console.log(tivitler)
    }else{
        console.log("Kullanici adi ve sifresi hatali")
    }

}

giris(email, sifre)