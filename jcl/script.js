let listid = [
    146389669, // top 1
    135508073,// top 3
    131795033, // top 4 thats whats after 3 right
    118569868,
    147228962,
    138366945,
    139888264,
    120248964,
    138140131,
    131382424,
    138366378, // uhh  i cant count ngl
    127703473,
    139892579,
    128901970,
    139606632,
    128558405,
    124239176,
    127839547,
    106404344,
    122569794,
    131333565,
    129173891,
    138754769,
    133291696,
    118522981,
    116817855,
    128906930,
    128901940,
    120118084,
    120247535,
    122716472,
    120181605,
    116750701,
    116817614,
    116851719,
    105320834,
    103698559,
    120122557,
    103404823,
    126849983,
    117242561,
    126383322,
    135939161,
    116290356,
    109187138,
    109188376,
    126608300
]

let levels = {
    "146389669": {
        "name": "15 6in 1080p144 IPS",
        "tags": ["wave"]
    },
    "135508073": {
        "name": "We",
        "tags": ["wave"]
    },
    "131795033": {
        "name": "Bucla Rapida",
        "tags": ["ship", "memory"]
    },
    "118569868": {
        "name": "a litre of water",
        "tags": ["cube", "ball"]
    },
    "147228962": {
        "name": "mrblur challenge",
        "tags": ["wave"]
    },
    "138366945": {
        "name": "RupThure",
        "tags": ["wave"]
    },
    "139888264": {
        "name": "AMD Ryzen 7 7435HS",
        "tags": ["robot"]
    },
    "120248964": {
        "name": "calin77 challenge",
        "tags": ["cube"]
    },
    "138140131": {
        "name": "Unnamed 67 wd 40",
        "tags": ["wave"]
    },
    "131382424": {
        "name": "ers b",
        "tags": ["cube", "memory"]
    },
    "138366378": {
        "name": "experiment 305",
        "tags": ["wave"]
    },
    "127703473": {
        "name": "Moderate Education",
        "tags": ["ship", "robot"]
    },
    "139892579": {
        "name": "NVIDIA RTX 4050",
        "tags": ["ufo"]
    },
    "128901970": {
        "name": "must phobok",
        "tags": ["wave"]
    },
    "139606632": {
        "name": "paracetamol exe",
        "tags": ["wave", "memory"]
    },
    "128558405": {
        "name": "jerryn16 challenge",
        "tags": ["cube"]
    },
    "124239176": {
        "name": "experiment 222",
        "tags": ["wave"]
    },
    "127839547": {
        "name": "e 11 noaptea",
        "tags": ["cube", "wave"]
    },
    "106404344": {
        "name": "laf challenge 4",
        "tags": ["cube"]
    },
    "122569794": {
        "name": "saxo phone",
        "tags": ["wave"]
    },
    "131333565": {
        "name": "26",
        "tags": ["ship", "wave"]
    },
    "129173891": {
        "name": "e 12 noaptea",
        "tags": ["cube", "ship", "ball"]
    },
    "138754769": {
        "name": "in the chair",
        "tags": ["wave"]
    },
    "133291696": {
        "name": "lol 3",
        "tags": ["ship"]
    },
    "118522981": {
        "name": "wave wabe",
        "tags": ["wave"]
    },
    "116817855": {
        "name": "NVEG last cube",
        "tags": ["cube", "memory"]
    },
    "128906930": {
        "name": "in the light unnerf",
        "tags": ["ship"]
    },
    "128901940": {
        "name": "Slappy Bord",
        "tags": ["ufo"]
    },
    "120118084": {
        "name": "in the light",
        "tags": ["ship"]
    },
    "120247535": {
        "name": "in the grass",
        "tags": ["cube", "ship"]
    },
    "122716472": {
        "name": "2147483647",
        "tags": ["ship"]
    },
    "120181605": {
        "name": "in the moon",
        "tags": ["ufo"]
    },
    "116750701": {
        "name": "ough la la",
        "tags": ["wave"]
    },
    "116817614": {
        "name": "NVEG Ship",
        "tags": ["ship"]
    },
    "116851719": {
        "name": "calin77 not approve",
        "tags": ["ship"]
    },
    "105320834": {
        "name": "inkes",
        "tags": ["wave"]
    },
    "103698559": {
        "name": "dll file",
        "tags": ["ship", "ufo"]
    },
    "120122557": {
        "name": "in the dark",
        "tags": ["ball"]
    },
    "103404823": {
        "name": "l",
        "tags": []
    },
    "126849983": {
        "name": "unnamed alt f4",
        "tags": ["wave"]
    },
    "117242561": {
        "name": "spam challenge hard",
        "tags": []
    },
    "126383322": {
        "name": "shiddin and doodlin",
        "tags": []
    },
    "135939161": {
        "name": "Grwfic",
        "tags": ["ball"]
    },
    "116290356": {
        "name": "ak47 challenge",
        "tags": []
    },
    "109187138": {
        "name": "i am bored"
    },
    "109188376": {
        "name": "colored silly straw"
    },
    "126608300": {
        "name": "robot timing thing"
    }
}
// my coding is good
let list = document.getElementById("list")
for (i in listid) {
    let level = levels[listid[i]];
    let out = `<div class='con level'><b>${parseInt(i)+1}. ${level?level.name:listid[i]}</b>`;
    if(level) out+=`<a href="./thumbs/${level.name.toLowerCase()}.png"><img src="./thumbs/${level.name.toLowerCase()}.png" 
    class="thumb" alt="no thumbnail available..."/></a>  `;
    if (level && level.tags) for (tag in level.tags) {
        out+= `<span class="tag">${level.tags[tag]}</span>`
    }
    if (level && level.name) out+=`<br>ID: ${listid[i]}`;
    out +=`</div>`;
    list.innerHTML += out;
}
