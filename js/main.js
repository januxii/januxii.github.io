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
let barp = document.getElementById("barp");
let barm = document.getElementById("barm");
let bar1 = document.getElementById("bar1");

barp.innerHTML = "0%";
barm.innerHTML = "0%";
bar1.innerHTML = "0%";

function calculate(){
    if(prestige.value == ""){
        prestige.value = 0;
    }
    if(level.value == ""){
        level.value = 1;
    }
    else if(level.value > 55){
        prestige.value = 10;
        barp.innerHTML = "100%";
        barm.innerHTML = "100%";
        bar1.innerHTML = ((16029200+(level.value - 56)*55600)/685156).toFixed(1) + "%";
    }
    else{
        //Prestige
        barp.innerHTML = (totalxp[level.value]/14572).toFixed(1) + "%";

        //Master
        barm.innerHTML = ((prestige.value*1457200+totalxp[level.value])/160292).toFixed(1) + "%";

        //Level 1000
        bar1.innerHTML = ((prestige.value*1457200+totalxp[level.value])/685156).toFixed(1) + "%";
    }
    barp.style.width = barp.innerHTML;
    barm.style.width = barm.innerHTML;
    bar1.style.width = bar1.innerHTML;
}
//Level 1-56 = 1 457 200
//Level 1-Master = 16 029 200
//Level Master-1000 = 52 486 400
//Levl 1-Master-1000 = 68 515 600