function tryAddEl()
{
    try {	
        //.getElementById("formlist")
        let tex = document.getElementById("form").value
        let el = makeEl(tex)      
        document.getElementById("formlist").appendChild(el)
        //alert(el.innerHTML)
        dumpLines(document.getElementById("formlist"))
    }
    catch(err)
    {
        alert(err)
    }
    return false;
}

function del(obj)
{
    obj.parentNode.remove()
    dumpLines(document.getElementById("formlist"))
}
function moveup(obj)
{
    let p = obj.parentNode.parentNode
    let div = p.parentNode
    let prev = p.previousSibling
    if (prev)
    {
        div.insertBefore(p, prev)
        dumpLines(div)
    }
}
function movedown(obj)
{
    let p = obj.parentNode.parentNode
    let div = p.parentNode
    let next = p.nextSibling
    if (next)
    {
        let nextNext = next.nextSibling
        div.insertBefore(p, nextNext)
        dumpLines(div)
    }
}

function dumpLines(div)
{
    console.log(div)
    let lines = []
    let child = null;
    let ps = div.getElementsByClassName('formentry')
    for (let i = 0; i < ps.length; i++)
    {
        child = ps[i]
        lines.push(child.lastChild.innerText)
    }
    window.localStorage.setItem("loc", JSON.stringify(lines))
}

function makeEl(tex)
{
    let el = document.createElement('P')
    let p = document.createElement('P')
    p.appendChild(document.createTextNode(tex))
    let but = document.createElement('BUTTON')
    but.type='button'
    but.innerHTML='X'
    but.setAttribute("onclick", "del(this)")
    let up = document.createElement('BUTTON')
    up.type='button'
    up.innerHTML='&#8657'
    up.setAttribute("onclick", "moveup(this)")
    let down = document.createElement('BUTTON')
    down.type='button'
    down.innerHTML='&#8659'
    down.setAttribute("onclick", "movedown(this)")
    let div = document.createElement('DIV')
    div.appendChild(up)
    div.appendChild(down)
    el.appendChild(but)
    el.appendChild(div)
    el.appendChild(p)
    el.setAttribute('class', 'formentry')
    return el
}

function loadList()
{
        let div = document.getElementById("formlist")
        if (div)
        {
            let el = null 
            let list = JSON.parse(window.localStorage.getItem("loc"))
            for (let i = 0; i < list.length; i++) {
                el = makeEl(list[i])
                div.appendChild(el)
            }
        }
}

window.addEventListener("load", function(event) {
    loadList()
    document.addEventListener("submit", function(event) {tryAddEl()})
  });  
  
