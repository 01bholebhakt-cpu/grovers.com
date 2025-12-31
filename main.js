// simple fade-in animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1
      e.target.style.transform='translateY(0)'
    }
  })
},{threshold:.1})

document.querySelectorAll('.fade').forEach(el=>{
  el.style.opacity=0
  el.style.transform='translateY(40px)'
  el.style.transition='all .8s ease'
  observer.observe(el)
})
