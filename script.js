//Task 1

function stipendiyaHesabla(ortalamaBal) {
    function sertiYoxla() {
        if (ortalamaBal >= 80) {
            return "Stipendiya qazanır";
        } else {
            return "Qazana bilmir";
        }
    }
    return sertiYoxla();
}
let bal=prompt("Bal daxil edin:")
alert(stipendiyaHesabla(bal))

//Task 2

function maasVergisiz(maas){
    function vergi(){
        maas=maas-maas*13/100
        return maas
    }
    return vergi()
}
let pul=prompt("Maasi daxil edin:")
alert (maasVergisiz(pul))

//Task 3

function endirim(mebleg){
    function yoxla(){
        if (mebleg>100){
            mebleg=mebleg-mebleg*10/100
        }
        else if (mebleg>200){
            mebleg=mebleg-mebleg*20/100
        }
        return mebleg
    }
    return yoxla()
}
let qiymet=prompt("Meblegi daxil edin:")
alert(endirim(qiymet))
