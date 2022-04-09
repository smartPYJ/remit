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

document.getElementById('Ai').innerText = "₦ " + format(localStorage["Ai"]);
document.getElementById('Aii').innerText = "₦ " + format(percent(localStorage["Ai"], 24));
document.getElementById('Aiii').innerText = "₦ " + format(percent(localStorage["Ai"], 4.5));
document.getElementById('Aiv').innerText = "₦ " + format(percent(localStorage["Ai"], 5));
document.getElementById('Av').innerText = "₦ " + format(percent(localStorage["Ai"], 54.5));
document.getElementById('Avi').innerText = "₦ " + format(percent(localStorage["Ai"], 5));
document.getElementById('Avii').innerText = "₦ " + format(percent(localStorage["Ai"], 3.5));
document.getElementById('Aviii').innerText = "₦ " + format(percent(localStorage["Ai"], 3.5));


document.getElementById('Bi').innerText = "₦ " + format(localStorage["Bi"]);
document.getElementById('Bii').innerText = "₦ " + format(percent(localStorage["Bi"], 62));
document.getElementById('Biii').innerText = "₦ " + format(percent(localStorage["Bi"], 11));
document.getElementById('Biv').innerText = "₦ " + format(percent(localStorage["Bi"], 24));
document.getElementById('Bv').innerText = "₦ " + format(percent(localStorage["Bi"], 3.0));


document.getElementById('Ci').innerText = "₦ " + format(localStorage["Ci"]);
document.getElementById('Cii').innerText = "₦ " + format(percent(localStorage["Ci"], 19));
document.getElementById('Ciii').innerText = "₦ " + format(percent(localStorage["Ci"], 5));
document.getElementById('Civ').innerText = "₦ " + format(percent(localStorage["Ci"], 5));
document.getElementById('Cv').innerText = "₦ " + format(percent(localStorage["Ci"], 70));
document.getElementById('Cvi').innerText = "₦ " + format(percent(localStorage["Ci"], 1));



document.getElementById('Di').innerText = "₦ " + format(localStorage["Di"]);
document.getElementById('Dii').innerText = "₦ " + format(percent(localStorage["Di"], 24));
document.getElementById('Diii').innerText = "₦ " + format(percent(localStorage["Di"], 4.5));
document.getElementById('Div').innerText = "₦ " + format(percent(localStorage["Di"], 5));
document.getElementById('Dv').innerText = "₦ " + format(localStorage["Dv"]);



document.getElementById('Ei').innerText = "₦ " + format(localStorage["Ei"]);
document.getElementById('Eii').innerText = "₦ " + format(percent(localStorage["Ei"], 10));
document.getElementById('Eiii').innerText = "₦ " + format(percent(localStorage["Ei"], 20));
document.getElementById('Eiv').innerText = "₦ " + format(percent(localStorage["Ei"], 30));
document.getElementById('Ev').innerText = "₦ " + format(percent(localStorage["Ei"], 40));



document.getElementById('Fi').innerText = "₦ " + format(localStorage["Fi"]);
document.getElementById('Fii').innerText = "₦ " + format(percent(localStorage["Fi"], 50));
document.getElementById('Fiii').innerText = "₦ " + format(percent(localStorage["Fi"], 20));
document.getElementById('Fiv').innerText = "₦ " + format(percent(localStorage["Fi"], 10));
document.getElementById('Fv').innerText = "₦ " + format(percent(localStorage["Fi"], 20));


document.getElementById('Gi').innerText = "₦ " + format(localStorage["Gi"]);
document.getElementById('Gii').innerText = "₦ " + format(percent(localStorage["Gi"], 50));
document.getElementById('Giii').innerText = "₦ " + format(percent(localStorage["Gi"], 20));
document.getElementById('Giv').innerText = "₦ " + format(percent(localStorage["Gi"], 20));
document.getElementById('Gv').innerText = "₦ " + format(percent(localStorage["Gi"], 10));


document.getElementById('Hi').innerText = "₦ " + format(localStorage["Hi"]);
document.getElementById('Hii').innerText = "₦ " + format(percent(localStorage["Hi"], 10));
document.getElementById('Hiii').innerText = "₦ " + format(percent(localStorage["Hi"], 20));
document.getElementById('Hiv').innerText = "₦ " + format(percent(localStorage["Hi"], 65));
document.getElementById('Hv').innerText = "₦ " + format(percent(localStorage["Hi"], 5));



document.getElementById('Ii').innerText = "₦ " + format(localStorage["Ii"]);
document.getElementById('Iii').innerText = "₦ " + format(percent(localStorage["Ii"], 25));
document.getElementById('Iiii').innerText = "₦ " + format(percent(localStorage["Ii"], 75));



document.getElementById('Ji').innerText = "₦ " + format(localStorage["Ji"]);
document.getElementById('Jii').innerText = "₦ " + format(percent(localStorage["Ji"], 40));
document.getElementById('Jiii').innerText = "₦ " + format(percent(localStorage["Ji"], 20));
document.getElementById('Jiv').innerText = "₦ " + format(percent(localStorage["Ji"], 40));

document.getElementById('Ki').innerText = "₦ " + format(localStorage["Ki"]);

document.getElementById('L').innerText = "₦ " + format(localStorage["Li"]);
document.getElementById('O').innerText = "₦ " + format(localStorage["Oi"]);

var Ai = (localStorage["Ai"]);
var Aii = (percent(localStorage["Ai"], 24));
var Aiii = (percent(localStorage["Ai"], 4.5));
var Aiv = (percent(localStorage["Ai"], 5));
var Av = (percent(localStorage["Ai"], 54.5));
var Avi = (percent(localStorage["Ai"], 5));
var Avii = (percent(localStorage["Ai"], 3.5));
var Aviii = (percent(localStorage["Ai"], 3.5));

var Bi = (localStorage["Bi"]);
var Bii = (percent(localStorage["Bi"], 62));
var Biii = (percent(localStorage["Bi"], 11));
var Biv = (percent(localStorage["Bi"], 24));
var Bv = (percent(localStorage["Bi"], 3.0));

var Ci = (localStorage["Ci"]);
var Cii = (percent(localStorage["Ci"], 19));
var Ciii = (percent(localStorage["Ci"], 5));
var Civ = (percent(localStorage["Ci"], 5));
var Cv = (percent(localStorage["Ci"], 70));
var Cvi = (percent(localStorage["Ci"], 1));


var Di = (localStorage["Di"]);
var Dii = (percent(localStorage["Di"], 24));
var Diii = (percent(localStorage["Di"], 4.5));
var Div = (percent(localStorage["Di"], 5));
var Dv = (localStorage["Dv"]);

var Ei = (localStorage["Ei"]);
var Eii = (percent(localStorage["Ei"], 10));
var Eiii = (percent(localStorage["Ei"], 20));
var Eiv = (percent(localStorage["Ei"], 30));
var Ev = (percent(localStorage["Ei"], 40));

var Fi = (localStorage["Fi"]);
var Fii = (percent(localStorage["Fi"], 50));
var Fiii = (percent(localStorage["Fi"], 20));
var Fiv = (percent(localStorage["Fi"], 10));
var Fv = (percent(localStorage["Fi"], 20));


var Gi = (localStorage["Gi"]);
var Gii = (percent(localStorage["Gi"], 50));
var Giii = (percent(localStorage["Gi"], 20));
var Giv = (percent(localStorage["Gi"], 20));
var Gv = (percent(localStorage["Gi"], 10));


var Hi = (localStorage["Hi"]);
var Hii = (percent(localStorage["Hi"], 10));
var Hiii = (percent(localStorage["Hi"], 20));
var Hiv = (percent(localStorage["Hi"], 65));
var Hv = (percent(localStorage["Hi"], 5));

var Ii = (localStorage["Ii"]);
var Iii = (percent(localStorage["Ii"], 25));
var Iiii = (percent(localStorage["Ii"], 75));

var Ji = (localStorage["Ji"]);
var Jii = (percent(localStorage["Ji"], 40));
var Jiii = (percent(localStorage["Ji"], 20));
var Jiv = (percent(localStorage["Ji"], 40));

var K = Number(localStorage["Ki"]);
var L = Number (localStorage["Li"]);
var M = Number (Av + Bii + Cv +Cvi+ Dii + Eii + Fii + Gii + Hii + Iii + K);
var N = Number(Aiii +Aiv +Avi + Biii +Civ + Eiii  + Fiii +Giii+ Hiii +Jii +L);
var P = Number  (Avii + Bv + Gv + Hv);
var O = Number (localStorage["Oi"]);
var Z = Number (Aii +Biv);
var Zi = percent(Z, 30);
var S = Number (Ciii + Eiv + Fiv + Jiii);

var T = Number (Aii + Biv + Cii + Dii+ Div+ Ev + Fv + Giv + Hiv + Iiii + Jiv );



document.getElementById("M").innerText = "₦ " + format(M);

document.getElementById("N").innerText = "₦ " + format (N);

document.getElementById("P").innerText = "₦ " + format(P);

document.getElementById("Q").innerText = "₦ " + format (M+N+O+P);

document.getElementById("R").innerText = "₦ " + format(Aviii);

document.getElementById("S").innerText = "₦ " + format(S );

document.getElementById("T").innerText = "₦ " + format(T);

document.getElementById("AR").innerText = "₦ " + format(Zi);

document.getElementById("TOTAL").innerText = "₦ " + format(M +N+O+P + Aviii + Zi+ S);

