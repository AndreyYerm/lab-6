// gives sorted by alphabet text from input
function myClick(){
    const str = document.getElementById("textInput").value;

    const strArray = str.split(" ")

    let sorted = strArray.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
        }
        return 0;
        });
    
    return(sorted)
}
// gives sorted by alph or reverse alph text
document.getElementById("alphabet").onclick = alph;
function alph(){
    let perem = myClick()
    document.getElementById("textOut").textContent = perem.join(" ");
}
document.getElementById("alphabetRev").onclick = alphRev;
function alphRev(){
    let perem = myClick()
    perem.reverse()
    document.getElementById("textOut").textContent = perem.join(" ");
}






