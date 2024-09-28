document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span"),n=e.querySelector("ul");t.textContent=e.firstChild.textContent,e.firstChild.replaceWith(t),n&&t.addEventListener("click",function(){n.style.display="none"===n.style.display?"block":"none"})});
//# sourceMappingURL=index.daa2bbbf.js.map
