window.addEventListener("load", function(event) {
    var load = Math.floor(Math.random() * 2);
    var nam = "images/load" + load.toString() + ".gif";
    document.getElementById('loader').setAttribute("src",nam);
    var prom = fetch('https://jsonplaceholder.typicode.com/comments');
    prom.then(
        response => response.json(),
        error => reject()
        ).then(json => resolve(json));
  });  
  
function resolve(response)
{
    var id = 0;
    var el = null;
    var comm = null;
    document.getElementById('loader').hidden = "hidden";
    let div = document.getElementById("commlist")
    for (var i = 0; i < 10; i++)
    {
        id = Math.floor(Math.random() * 200)
        comm = response[id]
        console.log(comm);
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