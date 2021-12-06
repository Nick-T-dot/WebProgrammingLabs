window.addEventListener("load", function(event) {
    var load = Math.floor(Math.random() * 2);
    var nam = `images/load${load.toString()}.gif`;
    document.getElementById('loader').setAttribute("src",nam);
    var id = Math.floor(Math.random() * 100);
    var lin = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    console.log(lin)
    var prom = fetch(lin);
    prom.then(
        response => response.json(),
        error => reject()
        ).then(json => resolve(json));
  });  
  
function resolve(response)
{
    console.log(response)
    var el = null;
    var comm = null;
    document.getElementById('loader').hidden = "hidden";
    let div = document.getElementById("commlist")
    let len = response.length
    for (var i = 0; i < len; i++)
    {
        comm = response[i]
        el = document.getElementById('comment').content.cloneNode(true).childNodes[1]
        el.getElementsByTagName('P')[0].textContent += comm.name
        el.getElementsByTagName('P')[1].textContent += comm.email
        el.getElementsByTagName('P')[2].textContent += comm.body
        div.appendChild(el)
    }
    div.hidden = null;
}

function reject()
{
    document.getElementById('loader').hidden= "hidden";
    document.getElementById('fuckup').hidden = null;
}