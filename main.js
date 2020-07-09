const more = document.querySelector('#more')
const visible = document.querySelectorAll('.visible')
more.addEventListener('click', openclose)


function openclose()
{
    let text = more.innerHTML
    if(text == 'See more!')
    {
        more.innerHTML='See less!'
        visible.forEach(item=>{
            item.style.height='var(--cardHeight)'
            item.style.padding='0.5em'
        })
    }
    else{
        more.innerHTML='See more!'
        visible.forEach(item=>{
            item.style.height='0'
            item.style.padding='0em'            
        })
    }
}