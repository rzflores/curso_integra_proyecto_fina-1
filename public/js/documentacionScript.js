var floatArrow = document.querySelector("#floatArrow");
if(floatArrow != null){
  floatArrow.addEventListener("click",() => {
    floatArrow.style.display = "none";
  })  
}


var inputElement1 = document.getElementById("file_inDoc1");

if(inputElement1 !== null){
  inputElement1.addEventListener("change", handleFiles1, false);
}


var btnGuardarDoc1 = document.getElementById("btnGuardarDoc1");

function handleFiles1() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc1.click();
   }  
}
// -----------------------------------------------------------

var inputElement2 = document.getElementById("file_inDoc2");
if(inputElement2 !== null){
inputElement2.addEventListener("change", handleFiles2, false);
}
var btnGuardarDoc2 = document.getElementById("btnGuardarDoc2");

function handleFiles2() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc2.click();
   } 
}


// -----------------------------------------------------------

var inputElement3 = document.getElementById("file_inDoc3");
if(inputElement3 !== null){
inputElement3.addEventListener("change", handleFiles3, false);
}
var btnGuardarDoc3 = document.getElementById("btnGuardarDoc3");

function handleFiles3() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc3.click();
   } 
}
// -----------------------------------------------------------

var inputElement4 = document.getElementById("file_inDoc4");
if(inputElement4 !== null){
inputElement4.addEventListener("change", handleFiles4, false);
}
var btnGuardarDoc4 = document.getElementById("btnGuardarDoc4");

function handleFiles4() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc4.click();
   } 
}
// -----------------------------------------------------------

var inputElement5 = document.getElementById("file_inDoc5");
if(inputElement5 !== null){
inputElement5.addEventListener("change", handleFiles5, false);
}
var btnGuardarDoc5 = document.getElementById("btnGuardarDoc5");

function handleFiles5() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc5.click();
   } 
}
// -----------------------------------------------------------

var inputElement6 = document.getElementById("file_inDoc6");
if(inputElement6 !== null){
inputElement6.addEventListener("change", handleFiles6, false);
}
var btnGuardarDoc6 = document.getElementById("btnGuardarDoc6");

function handleFiles6() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc6.click();
   } 
}
// -----------------------------------------------------------


var inputElement7 = document.getElementById("file_inDoc7");
if(inputElement7 !== null){
inputElement7.addEventListener("change", handleFiles7, false);
}
var btnGuardarDoc7 = document.getElementById("btnGuardarDoc7");

function handleFiles7() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc7.click();
   } 
}
// -----------------------------------------------------------

var inputElement8 = document.getElementById("file_inDoc8");

var cargaTextDesc8 = document.getElementById("cargaTextDesc8");

if(inputElement8 !== null){
inputElement8.addEventListener("change", handleFiles8, false);
}
var btnGuardarDoc8 = document.getElementById("btnGuardarDoc8");

function handleFiles8() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc8.click();
    cargaTextDesc8.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------

var inputElement9 = document.getElementById("file_inDoc9");

var cargaTextDesc9 = document.getElementById("cargaTextDesc9");

if(inputElement9 !== null){
inputElement9.addEventListener("change", handleFiles9, false);
}
var btnGuardarDoc9 = document.getElementById("btnGuardarDoc9");

function handleFiles9() {
  var fileList = this.files;
   if(fileList.length > 0){
     btnGuardarDoc9.click();    
    cargaTextDesc9.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------

var inputElement10 = document.getElementById("file_inDoc10");

var cargaTextDesc10 = document.getElementById("cargaTextDesc10");

if(inputElement10 !== null){
inputElement10.addEventListener("change", handleFiles10, false);
}
var btnGuardarDoc10 = document.getElementById("btnGuardarDoc10");
function handleFiles10() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc10.click();
    cargaTextDesc10.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------
var inputElement11 = document.getElementById("file_inDoc11");

var cargaTextDesc11 = document.getElementById("cargaTextDesc11");

if(inputElement11 !== null){
inputElement11.addEventListener("change", handleFiles11, false);
}
var btnGuardarDoc11 = document.getElementById("btnGuardarDoc11");

function handleFiles11() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc11.click();
    cargaTextDesc11.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------

var inputElement12 = document.getElementById("file_inDoc12");

var cargaTextDesc12 = document.getElementById("cargaTextDesc12");

if(inputElement12 !== null){
inputElement12.addEventListener("change", handleFiles12, false);
}
var btnGuardarDoc12 = document.getElementById("btnGuardarDoc12");
function handleFiles12() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc12.click();
    cargaTextDesc12.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------

var inputElement13 = document.getElementById("file_inDoc13");

var cargaTextDesc13 = document.getElementById("cargaTextDesc13");

if(inputElement13 !== null){
inputElement13.addEventListener("change", handleFiles13, false);
}
var btnGuardarDoc13 = document.getElementById("btnGuardarDoc13");

function handleFiles13() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc13.click();
    cargaTextDesc13.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------

var inputElement14 = document.getElementById("file_inDoc14");

var cargaTextDesc14 = document.getElementById("cargaTextDesc14");

if(inputElement14 !== null){
inputElement14.addEventListener("change", handleFiles14, false);
}
var btnGuardarDoc14 = document.getElementById("btnGuardarDoc14");

function handleFiles14() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc14.click();
    cargaTextDesc14.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------

var inputElement15 = document.getElementById("file_inDoc15");

var cargaTextDesc15 = document.getElementById("cargaTextDesc15");

if(inputElement15 !== null){
inputElement15.addEventListener("change", handleFiles15, false);
}
var btnGuardarDoc15 = document.getElementById("btnGuardarDoc15");

function handleFiles15() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc15.click();
    cargaTextDesc15.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------

var inputElement16 = document.getElementById("file_inDoc16");

var cargaTextDesc16 = document.getElementById("cargaTextDesc16");

if(inputElement16 !== null){
inputElement16.addEventListener("change", handleFiles16, false);
}
var btnGuardarDoc16 = document.getElementById("btnGuardarDoc16");

function handleFiles16() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc16.click();
    cargaTextDesc16.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------
// -----------------------------------------------------------

var inputElement17 = document.getElementById("file_inDoc17");

var cargaTextDesc17 = document.getElementById("cargaTextDesc17");

if(inputElement17 !== null && cargaTextDesc17 !== null){
inputElement17.addEventListener("change", handleFiles17, false);
}
var btnGuardarDoc17 = document.getElementById("btnGuardarDoc17");

function handleFiles17() {
  var fileList = this.files;
   if(fileList.length > 0){
    btnGuardarDoc17.click();
    cargaTextDesc17.textContent = fileList[0].name;
   } 
}
// -----------------------------------------------------------



let loading = document.querySelector("#loading");

let form1 = document.querySelector("#form1");
let form2 = document.querySelector("#form2");
let form3 = document.querySelector("#form3");
let form4 = document.querySelector("#form4");
let form5 = document.querySelector("#form5");
let form6 = document.querySelector("#form6");
let form7 = document.querySelector("#form7");
let form8 = document.querySelector("#form8");
let form9 = document.querySelector("#form9");
let form10 = document.querySelector("#form10");
let form11 = document.querySelector("#form11");
let form12 = document.querySelector("#form12");
let form13 = document.querySelector("#form13");
let form14 = document.querySelector("#form14");
let form15 = document.querySelector("#form15");
let form16 = document.querySelector("#form16");
let form17 = document.querySelector("#form17");


if(form1 != null){
  form1.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}

if(form2 != null){
  form2.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form3 != null){
  form3.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form4 != null){
  form4.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}

if(form5 != null){
  form5.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form6 != null){
  form6.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form7 != null){
  form7.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form8 != null){
  form8.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form9 != null){
  form9.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form10 != null){
  form10.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form11 != null){
  form11.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form12 != null){
  form12.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form13 != null){
  form13.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form13 != null){
  form13.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form14 != null){
  form14.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form15 != null){
  form15.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}
if(form16 != null){
  form16.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}

if(form17 != null){
  form17.addEventListener('submit',()=>{
    loading.classList.remove('d-none')
    }
  )
}



handleFiles1()
handleFiles2()
handleFiles3()
handleFiles4()
handleFiles5()
handleFiles6()
handleFiles7()
handleFiles8()
handleFiles9()
handleFiles10()
handleFiles11()
handleFiles12()
handleFiles13()
handleFiles14()
handleFiles15()
handleFiles16()
handleFiles17()


