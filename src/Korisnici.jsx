const Korisnici = ({korisnici}) => {
return(
    <div>
        {
        korisnici.map((korisnik) => {
            return(
                <div>
                    <h1>Ime: {korisnik.ime}</h1>
                    <h1>Prezime: {korisnik.prezime}</h1>
                    <h1>Dob: {korisnik.dob}</h1>
                </div>
        
            );
        })
        }
       

    </div>
)
}

export default Korisnici;