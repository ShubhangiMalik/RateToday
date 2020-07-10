let image = document.querySelectorAll(".image")
let titles = document.querySelectorAll(".titles")
let finance = document.querySelector("#finance")
let more = document.querySelectorAll(".more")
let by = document.querySelectorAll(".by")
let time = document.querySelectorAll(".time")
var i;


async function fetchingData(){
    const res= await fetch("https://content.guardianapis.com/search?q=banking%20AND%20investment%20AND%20funds%20AND%20estate%20AND%20bonds&api-key=4975a27a-c959-4e42-a2ea-359f7455f98d")
    const data = await res.json()
    for(i=0; i<data.response.results.length; i++){
        titles[i].textContent = data.response.results[i].webTitle
        more[i].href = data.response.results[i].webUrl
        time[i].textContent = data.response.results[i].webPublicationDate
    } 
    console.log(data.response.results)
}

fetchingData()
