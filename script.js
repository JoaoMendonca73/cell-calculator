const hdr = document.querySelector('.hdr');
const inpt = document.querySelector('#dspl');
const btnCntnr = document.querySelector('.btn-cntnr');
const sndDwnBtn = document.querySelector('.sndDwn-btn')
const pwrBtn = document.querySelector('.pwr-btn');
const cll = document.querySelector('.cll');
let trn = 1;
const hrsDspl = document.querySelector('.hrs')
const minDspl = document.querySelector('.min')
const date = new Date()
const hrs = date.getHours()
const min = date.getMinutes()


pwrBtn.addEventListener('click', trnDspl)

sndDwnBtn.addEventListener('click', chkTime)

function trnDspl() {
  if (trn === 0) {
    cll.style.backgroundColor = 'black'
    hdr.style.visibility = 'hidden';
    hdr.style.backgroundColor = 'black'
    inpt.style.visibility = 'hidden';
    inpt.style.backgroundColor = 'black'
    btnCntnr.style.visibility = 'hidden';
    trn++;
  } else if (trn === 1) {
    chkTime()
    cll.style.backgroundColor = 'rgb(20,20,20)'
    hdr.style.visibility = 'visible';
    hdr.style.backgroundColor = 'rgb(20,20,20)'
    inpt.style.visibility = 'visible';
    inpt.style.backgroundColor = 'rgb(20,20,20)'
    btnCntnr.style.visibility = 'visible';
    trn--;
  }

}

function chkTime() {
  if (hrs < 10) {
    hrsDspl.innerHTML = '0' + hrs
  } else {
    hrsDspl.innerHTML = hrs
  }
  if (min < 10) {
    minDspl.innerHTML = '0' + min
  } else {
    minDspl.innerHTML = min
  }
}