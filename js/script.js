const body=document.body;
document.getElementById("themeBtn").addEventListener("click",()=>{body.classList.toggle("dark");localStorage.setItem("studyTheme",body.classList.contains("dark")?"dark":"light")});
if(localStorage.getItem("studyTheme")==="dark")body.classList.add("dark");

const menuBtn=document.getElementById("menuBtn"), nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("show"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("show")));

const add=document.getElementById("addTask"), input=document.getElementById("taskInput"), priority=document.getElementById("priority"), list=document.getElementById("taskList");
function bindTick(btn){btn.addEventListener("click",()=>{const item=btn.closest(".plan-item");item.classList.toggle("done");btn.textContent=item.classList.contains("done")?"✓":"○";});}
document.querySelectorAll(".tick").forEach(bindTick);
add.addEventListener("click",()=>{
  const value=input.value.trim(); if(!value){input.focus();return}
  const item=document.createElement("div"); item.className="plan-item";
  item.innerHTML=`<button class="tick">○</button><div><b>${value.replace(/[<>&"]/g,"")}</b><small>${priority.value}</small></div>`;
  list.appendChild(item); bindTick(item.querySelector(".tick")); input.value="";
});
input.addEventListener("keydown",e=>{if(e.key==="Enter")add.click()});

document.querySelectorAll(".faq-item").forEach(item=>item.addEventListener("click",()=>item.classList.toggle("open")));
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault(); document.getElementById("formMsg").textContent="Thanks! Your message has been received in this demo.";
 e.target.reset();
});
