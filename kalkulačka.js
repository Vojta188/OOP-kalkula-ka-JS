const cislo1promena = parseInt (prompt("zadejte cislo1"));
const cislo2promena = parseInt (prompt("zadejte cislo2"));

const scitanipromena = scitani(cislo1promena,cislo2promena);

const odcitanipromena = odcitani(cislo1promena,cislo2promena);
const delenipromena = deleni(cislo1promena,cislo2promena);
const nasobenipromena = nasobeni(cislo1promena,cislo2promena);

function vysledek()
{
    document.getElementById('scitani').innerHTML = scitanipromena;
    document.getElementById('odcitani').innerHTML = odcitanipromena;
    document.getElementById('deleni').innerHTML = delenipromena;
    document.getElementById('nasobeni').innerHTML = nasobenipromena;

}
