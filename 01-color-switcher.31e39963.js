let e=null;document.querySelector("[data-start]").addEventListener("click",(()=>{e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=e}),1e3),document.querySelector("[data-start]").disabled=!0,document.querySelector("[data-stop]").disabled=!1})),document.querySelector("[data-stop]").addEventListener("click",(()=>{clearInterval(e),document.querySelector("[data-start]").disabled=!1,document.querySelector("[data-stop]").disabled=!0}));
//# sourceMappingURL=01-color-switcher.31e39963.js.map
