document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".final"),t=document.querySelector(".check-final"),n=document.querySelectorAll(".quiz-submit"),o=document.querySelectorAll(".quiz-content"),r=document.querySelectorAll('input[type="radio"]'),i=document.querySelectorAll(".quiz-error"),a=document.querySelector("#first-email"),d=document.querySelector("#second-email"),u=document.querySelector(".quiz-email-error");let s;const c=()=>{const e=document.querySelectorAll("input"),t={};e.forEach(e=>{"submit"!==e.type&&("radio"===e.type?e.checked&&(t[e.name]=e.id.startsWith("Yes")):t[e.name]=e.value)}),fetch("./posts.php",{method:"POST",body:t})},l=(r.forEach(e=>{e.addEventListener("click",function(){s=e.getAttribute("value")})}),n.forEach((e,l)=>{e.addEventListener("click",function(){const e=o[l].querySelectorAll(".input-text"),t=o[l].querySelectorAll("input[type='radio']");var n=0!==e.length&&Array.from(e).every(e=>""!==e.value.trim());let r=!1;if(n||t.forEach(e=>{e.checked&&!r&&(r=!0)}),n||!e.length&&!t.length||r){if(null!=s&&null!=s){const c=document.getElementById(""+s);return o[l].classList.add("d-none"),c.classList.remove("d-none"),void(s=null)}o[l].classList.add("d-none"),o[l+1].classList.remove("d-none"),i.forEach(e=>{e.style.display="none"})}else e.forEach(e=>{var t;e.classList.add("error"),"email"===e.type&&(e=a.value.trim(),t=d.value.trim(),(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e||t)||""===e)&&""===t||(u.innerHTML="Invalid email"))}),i.forEach(e=>{e.style.display="block"})})}),e.addEventListener("click",()=>{c()}),[]);r.forEach(e=>{"isQuestions"===e.name&&l.push(e)}),t.addEventListener("click",()=>{l.forEach(e=>{e.checked&&!e.id.startsWith("Yes")&&c()})})});