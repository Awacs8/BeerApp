# ZavrsniProjekat

IT Bootcamp
My Brewdog App predstavlja proizvode craft pivare.</br>
Prilikom ucitavanja aplikacije prikazuje se pocetna strana (komponenta Home.js)</br>
Na njoj se nalaze linkovi ka registracionoj i login formi. Ukoliko korisnik nema korisnicko ime, potrebno je da se registruje (SignUp).
U suprotnom, pristupa login formi (SignIn).</br>
Nakon registracije (komponenta Register.js) ili login-a (komponenta LogIn.js) korisnik moze pristupiti glavnoj stranici.</br>
NAPOMENA: u formi za registraciju input polja ne smeju biti prazna;</br>
unos u polja 'password' i 'confirm password' mora biti isti.

Na glavnoj stranici (komponenta Main.js), ispisuju se api podaci u vidu liste proizvoda (komponeta BeerList.js).
Za svako pivo se prikazuju naziv, tagline, abv, ibu i uparivanje sa hranom.</br>
Lista ima stranicenje i dodatne mogucnosti:</br>
-klikom na dugme '...more' prikazuju se dodatne informacije o proizvodu (opis i sastav)</br>
-oznacavanje degustiranh piva preko 'checkbox' inputa</br>
-dodavanje u listu zelja (klikom na dugme 'wishlist');</br>
-pretraga piva po nazivu (vrsi se tokom unosenja naziva piva) u posebnoj komponnti: Search.js </br>

Klikom na link "profile" (komponenta Profile.js) prikazuju se podaci o korisniku, oni koje je uneo prolikom registracije kao i podaci o svim korisnicima servera.

Na kraju se nalazi dugme LogOut koje vraca korisnika na Login stranu, brise token iz Locale Storage-a a da bi ponovo pristupio, korisnik treba da se uloguje.</br>

Komponente su podeljene u 2 grupe:</br>
Public - moze im pristupiti bilo ko.</br>
Private - moze im pristupiti samo ulogovani korisnik.</br>
NAPOMENA: Korisnik nema pristup Public komponentama ukoliko je ulogovan.

API: https://api.punkapi.com/v2/beers
