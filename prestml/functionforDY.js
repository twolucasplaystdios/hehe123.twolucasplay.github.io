var bwlist = [
    "fuck", 
    "shit", 
    "ass", 
    "bitch", 
    "cock"
];

function badWordDetect(word){
    console.log(bwlist.includes(word));
}

function badWordListAdd(badWord){
    bwlist.push(badWord);
}

badWordDetect("gay");