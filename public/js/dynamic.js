function percent(num, per) {
    return (num / 100) * per;
}
const format = num => {
    const n = String(num),
        p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
};


const ConTithe = document.querySelector("#con_tithe");
ConTithe.addEventListener("click", data);
function data() {
    localStorage["Ai"] = document.getElementById('con100').value;


    let pa1 = document.getElementById('pAii').value;
    let pa2 = document.getElementById('pAiii').value;
    let pa3 = document.getElementById('pAiv').value;
    let pa4 = document.getElementById('pAv').value;
    let pa5 = document.getElementById('pAvi').value;
    let pa6 = document.getElementById('pAvii').value;
    let pa7 = document.getElementById('pAviii').value;



    document.getElementById('Ai').innerText = "₦ " + format(localStorage["Ai"]);
    document.getElementById('Aii').innerText = "₦ " + format(percent(localStorage["Ai"], pa1));
    document.getElementById('Aiii').innerText = "₦ " + format(percent(localStorage["Ai"], pa2));
    document.getElementById('Aiv').innerText = "₦ " + format(percent(localStorage["Ai"], pa3));
    document.getElementById('Av').innerText = "₦ " + format(percent(localStorage["Ai"], pa4));
    document.getElementById('Avi').innerText = "₦ " + format(percent(localStorage["Ai"], pa5));
    document.getElementById('Avii').innerText = "₦ " + format(percent(localStorage["Ai"], pa6));
    document.getElementById('Aviii').innerText = "₦ " + format(percent(localStorage["Ai"], pa7));
}


const MinTithe = document.querySelector("#min_tithe");
MinTithe.addEventListener("click", data);
function data() {
    localStorage["Bi"] = document.getElementById('min100').value;


    let pa1 = document.getElementById('pBii').value;
    let pa2 = document.getElementById('pBiii').value;
    let pa3 = document.getElementById('pBiv').value;
    let pa4 = document.getElementById('pBv').value;





    document.getElementById('Bi').innerText = "₦ " + format(localStorage["Bi"]);
    document.getElementById('Bii').innerText = "₦ " + format(percent(localStorage["Bi"], pa1));
    document.getElementById('Biii').innerText = "₦ " + format(percent(localStorage["Bi"], pa2));
    document.getElementById('Biv').innerText = "₦ " + format(percent(localStorage["Bi"], pa3));
    document.getElementById('Bv').innerText = "₦ " + format(percent(localStorage["Bi"], pa4));

}

const Thanks = document.querySelector("#thanks");
Thanks.addEventListener("click", data);
function data() {
    localStorage["Ci"] = document.getElementById('thanks100').value;


    let pa1 = document.getElementById('pCii').value;
    let pa2 = document.getElementById('pCiii').value;
    let pa3 = document.getElementById('pCiv').value;
    let pa4 = document.getElementById('pCv').value;
    let pa5 = document.getElementById('pCvi').value;



    document.getElementById('Ci').innerText = "₦ " + format(localStorage["Ci"]);
    document.getElementById('Cii').innerText = "₦ " + format(percent(localStorage["Ci"], pa1));
    document.getElementById('Ciii').innerText = "₦ " + format(percent(localStorage["Ci"], pa2));
    document.getElementById('Civ').innerText = "₦ " + format(percent(localStorage["Ci"], pa3));
    document.getElementById('Cv').innerText = "₦ " + format(percent(localStorage["Ci"], pa4));
    document.getElementById('Cvi').innerText = "₦ " + format(percent(localStorage["Ci"], pa5));
 

}
