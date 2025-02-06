let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let randomQuote = Math.round(Math.random()*29)+1;
    let data = fetch("https://dummyjson.com/quotes").then(res =>{
    return res.json()
    }).then(data => {
        let h2 = document.getElementById("h2");
        let p = document.getElementById("p");
        h2.innerHTML = data.quotes[randomQuote].author;
        p.innerHTML = data.quotes[randomQuote].quote;
});
h2.innerHTML = "";
p.innerHTML = "";
});
function getData(){
    let sec = document.getElementById("section");
    sec.style.visibility = "visible";
}