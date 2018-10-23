let totalxp = [
    0,
    0,
    4000,
    8600,
    13800,
    19600,
    26000,
    33000,
    40600,
    48800,
    57600,
    67200,
    77600,
    88800,
    100800,
    113600,
    127200,
    141600,
    156800,
    172800,
    189600,
    207200,
    225600,
    244800,
    264800,
    285600,
    307200,
    329600,
    353800,
    376800,
    401600,
    427200,
    454000,
    482000,
    511200,
    541600,
    573200,
    606000,
    640000,
    675200,
    711600,
    749200,
    788000,
    828000,
    869200,
    911600,
    955200,
    1000000,
    1046000,
    1093200,
    1141600,
    1191200,
    1242000,
    1294000,
    1347200,
    1401600,
    1457200
]

let prestige = document.getElementById("inpPrestige");
let level = document.getElementById("inpLevel");
let table = document.getElementById("table");
let tp = document.getElementById("tp");
let tm = document.getElementById("tm");
let t1 = document.getElementById("t1");
let levelbarbg = document.getElementById("levelbarbg");
let levelbar = document.getElementById("levelbar");

function calculate(){
    //Prestige
    tp.innerHTML = (totalxp[level.value]/1457200*100).toFixed(1) + "%";
    //Master
    tm.innerHTML = ((prestige.value*1457200+totalxp[level.value])*100/14572000).toFixed(1) + "%";
    //Level 1000
    t1.innerHTML = ((prestige.value*1457200+totalxp[level.value])/(14572000+52486400)*100).toFixed(1) + "%";
    
    //Level bar prestige
    levelbar.style.width = tp.innerHTML;
    //Level bar master -coming soon-
    //Level bar 1000 -coming soon-
}
//master prestige to level 1000 = 52 486 400