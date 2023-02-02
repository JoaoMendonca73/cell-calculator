/*
const btnPerc = document.querySelector('#btn-percent')
const btnDec = document.querySelector('.#btn-decimal')



const dspl = document.querySelector('#dspl')
*/

const nmbrBtns = document.querySelectorAll('.nmbr');
const operBtns = document.querySelectorAll('.oper');
const btnCancel = document.querySelector('#btn-cancel')
const btnPerc = document.querySelector('#btn-percent')
const btnDel = document.querySelector('#btn-del')
const btnEql = document.querySelector('#btn-eql')
const dspl = document.querySelector('#dspl')

nmbrBtns.forEach(itm=>{
  itm.addEventListener('click',(e)=>{
    dspl.value += e.target.innerHTML
  })
})

operBtns.forEach(itm=>{
  itm.addEventListener('click',(e)=>{
    if(dspl.value.length ===0){
      e.preventDefault()
    }else if(e.target.innerHTML==='X'){
      dspl.value += '*'
    }else{
      dspl.value += e.target.innerHTML
    }
  })
})

btnCancel.addEventListener('click', (e)=>{
  
  dspl.value = ''
})

btnDel.addEventListener('click',(e)=>{
  dspl.value = dspl.value.slice(0,-1);
})

btnPerc.addEventListener('click',(e)=>{
  if(dspl.value.length ===0){
    e.preventDefault()
  }else{
    dspl.value += e.target.innerHTML
  }
})

btnEql.addEventListener('click',(e)=>{
  let res = eval(dspl.value)
  dspl.value = res
})
