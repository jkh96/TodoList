(()=>{"use strict";function e(){let e=document.getElementById("content");document.querySelector(".nav-DT").classList.add("active");const t=document.createElement("main"),d=document.createElement("div");d.classList.add("container-fluid"),e.appendChild(t),t.appendChild(d);const n=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h1"),l=document.createElement("hr");n.classList.add("row","mb-4"),a.classList.add("col","col-12","DT-div","text-light"),c.innerText="Daily Task",d.appendChild(n),n.appendChild(a),a.appendChild(c),a.appendChild(l);const i=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div"),p=document.createElement("div"),u=document.createElement("p"),h=document.createElement("hr"),E=document.createElement("div"),v=document.createElement("p"),L=document.createElement("p"),C=document.createElement("div"),y=document.createElement("i");i.classList.add("row"),s.classList.add("col-6","d-flex","flex-row","flex-wrap","daily-task-container"),o.classList.add("col-6"),r.classList.add("card","rct-info"),m.classList.add("card-body"),p.classList.add("card-title"),E.classList.add("card-text"),C.classList.add("bc-info","position-absolute","bottom-0","end-0","pe-5","pb-2"),y.classList.add("bi","bi-plus-circle-fill","btn-add"),y.setAttribute("data-bs-toggle","modal"),y.setAttribute("data-bs-target","#staticBackdrop"),y.style.fontSize="3rem",u.innerText="Daily Task Description",v.innerText="Daily Task are a list of things that you need to take care of through out your day. \n    You can set up those task here and view them to make sure you are keeping track of your task.",L.innerText="In order to make sure you are keeping up with daily task, please make sure you mark them with\n    the current day.",d.appendChild(i),i.appendChild(s),i.appendChild(o),o.appendChild(r),r.appendChild(m),m.appendChild(p),p.appendChild(u),p.appendChild(h),m.appendChild(E),E.appendChild(v),E.appendChild(L),o.appendChild(C),C.appendChild(y)}function t(){const e=document.querySelector("#Task-name").value,t=document.querySelector("#Description").value,d=document.querySelector("#Date-picked").value,n=document.querySelector("#priority").value;""===e||""===t||""===d||"selection"===n?alert("please fill in all fields"):(alert("task created"),function(e,t,d,n){const a=document.querySelector(".daily-task-container"),c=document.createElement("div"),l=document.createElement("div"),i=document.createElement("div"),s=document.createElement("p"),o=document.createElement("hr"),r=document.createElement("div"),m=document.createElement("p"),p=document.createElement("p"),u=document.createElement("p");c.classList.add("card","col-3","rct","mb-3"),l.classList.add("card-body"),i.classList.add("card-title","text-center"),r.classList.add("card-text"),s.innerText=e,m.innerText=t,p.innerText=d,u.innerText=n,a.appendChild(c),c.appendChild(l),l.append(i),i.append(s),i.append(o),l.appendChild(r),r.appendChild(m),r.appendChild(p),r.appendChild(u)}(e,t,d,n),document.querySelector("#Task-name").value="",document.querySelector("#Description").value="",document.querySelector("#Date-picked").value="",document.querySelector("#priority").value="")}!function(){let e=document.getElementById("content");const t=document.createElement("header"),d=document.createElement("h1"),n=document.createElement("i"),a=document.createElement("i"),c=document.createElement("i");t.classList.add("rct"),n.classList.add("fas","fa-bell","fa-2x"),a.classList.add("fas","fa-user","fa-2x"),c.classList.add("fas","fa-cog","fa-2x"),d.innerText="Todo List",e.appendChild(t),t.appendChild(d),t.appendChild(n),t.appendChild(a),t.appendChild(c);const l=document.createElement("aside"),i=document.createElement("ul"),s=document.createElement("li"),o=document.createElement("i"),r=document.createElement("p"),m=document.createElement("li"),p=document.createElement("i"),u=document.createElement("p"),h=document.createElement("li"),E=document.createElement("i"),v=document.createElement("p"),L=document.createElement("li"),C=document.createElement("i"),y=document.createElement("p"),f=document.createElement("li"),x=document.createElement("i"),T=document.createElement("p"),b=document.createElement("hr"),k=document.createElement("hr"),S=document.createElement("hr"),g=document.createElement("hr");l.classList.add("rct"),s.classList.add("d-flex","flex-column","nav-Home","nav-icon"),o.classList.add("bi","bi-house"),m.classList.add("d-flex","flex-column","nav-DT","nav-icon"),p.classList.add("bi","bi-calendar-event"),h.classList.add("d-flex","flex-column","nav-WT","nav-icon"),E.classList.add("bi","bi-calendar2-week"),L.classList.add("d-flex","flex-column","nav-Fav","nav-icon"),C.classList.add("bi","bi-star"),f.classList.add("d-flex","flex-column","nav-Projects","nav-icon"),x.classList.add("bi","bi-folder"),o.style.fontSize="2rem",p.style.fontSize="2rem",E.style.fontSize="2rem",C.style.fontSize="2rem",x.style.fontSize="2rem",r.textContent="Home",u.innerText="Daily Task",v.innerText="Weekly Task",y.innerText="Favorites",T.innerText="Projects",e.appendChild(l),l.appendChild(i),i.appendChild(s),s.appendChild(o),s.appendChild(r),i.appendChild(b),i.appendChild(m),m.appendChild(p),m.appendChild(u),i.appendChild(k),i.appendChild(h),h.appendChild(E),h.appendChild(v),i.appendChild(S),i.appendChild(L),L.appendChild(C),L.appendChild(y),i.appendChild(g),i.appendChild(f),f.appendChild(x),f.appendChild(T)}(),e(),function(){const d=document.querySelector(".nav-DT"),n=document.querySelector(".nav-Home");function a(){document.querySelector("main").remove(),n.classList.remove("active"),d.classList.remove("active")}d.addEventListener("click",(function(){a(),e()})),n.addEventListener("click",(function(){a(),function(){let e=document.getElementById("content");document.querySelector(".nav-Home").classList.add("active");const t=document.createElement("main"),d=document.createElement("div");d.classList.add("container-fluid"),e.appendChild(t),t.appendChild(d);const n=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h1"),l=document.createElement("hr");n.classList.add("row","mb-4"),a.classList.add("col","col-12","welcome-div","text-light"),c.innerText="Welcome User!",d.appendChild(n),n.appendChild(a),a.appendChild(c),a.appendChild(l);const i=document.createElement("div");i.classList.add("row"),d.appendChild(i);const s=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),m=document.createElement("p"),p=document.createElement("hr"),u=document.createElement("div"),h=document.createElement("p"),E=document.createElement("li"),v=document.createElement("li"),L=document.createElement("li"),C=document.createElement("li");s.classList.add("card","col-5","me-4","mb-3","rct-info"),o.classList.add("card-body"),r.classList.add("card-title","text-center"),u.classList.add("card-text"),m.innerText="DashBoard",h.innerText="Welcome To your DashBoard! On This Page you can see all of your importanted items such as:",E.innerText="Recently completed Task",v.innerText="Daily Task",L.innerText="Weekly Task",C.innerText="Projects",i.appendChild(s),s.appendChild(o),o.append(r),r.append(m),r.append(p),o.appendChild(u),u.appendChild(h),u.appendChild(E),u.appendChild(v),u.appendChild(L),u.appendChild(C);const y=document.createElement("div");y.classList.add("col-5","mb-3","me-3","d-flex","justify-content-between","p-0"),i.appendChild(y);const f=document.createElement("div"),x=document.createElement("div"),T=document.createElement("div"),b=document.createElement("p"),k=document.createElement("hr"),S=document.createElement("div"),g=document.createElement("ul"),q=document.createElement("li"),D=document.createElement("li"),w=document.createElement("li"),W=document.createElement("li");f.classList.add("card","col-3","rct","mb-3"),x.classList.add("card-body"),T.classList.add("card-title","text-center"),S.classList.add("card-text"),b.innerText="Recently Completed Task",q.innerText="Go on a run",D.innerText="Vacuum the floor",w.innerText="Do the dishes",W.innerText="Wash my car",y.appendChild(f),f.appendChild(x),x.append(T),T.append(b),T.append(k),x.appendChild(S),S.appendChild(g),g.appendChild(q),g.appendChild(D),g.appendChild(w),g.appendChild(W);const z=document.createElement("div"),B=document.createElement("div"),j=document.createElement("div"),P=document.createElement("p"),H=document.createElement("hr");z.classList.add("card","col-3","rct","mb-3"),B.classList.add("card-body"),j.classList.add("card-title","text-center"),P.innerText="Daily Task",y.appendChild(z),z.appendChild(B),B.append(j),j.append(P),j.append(H);const I=document.createElement("div"),A=document.createElement("div"),F=document.createElement("div"),R=document.createElement("p"),G=document.createElement("hr");I.classList.add("card","col-3","rct","mb-3"),A.classList.add("card-body"),F.classList.add("card-title","text-center"),R.innerText="Weekly Task",y.appendChild(I),I.appendChild(A),A.append(F),F.append(R),F.append(G);const O=document.createElement("div"),U=document.createElement("div"),V=document.createElement("div"),Y=document.createElement("p"),J=document.createElement("hr");O.classList.add("card","col-5","rct","me-4"),U.classList.add("card-body"),V.classList.add("card-title","text-center"),Y.innerText="Projects",i.appendChild(O),O.appendChild(U),U.append(V),V.append(Y),V.append(J)}()})),document.querySelector(".create-task").addEventListener("click",t)}(),function(){const e=document.querySelector(".settings"),t=document.querySelector(".fa-cog");function d(){e.classList.contains("hidden")&&e.classList.remove("hidden"),e.classList.contains("hide-temp")&&e.classList.remove("hide-temp"),a.classList.contains("theme-visible-ontop")&&a.classList.remove("theme-visible-ontop"),a.classList.contains("theme-visible")&&a.classList.remove("theme-visible"),e.classList.add("shown"),t.removeEventListener("click",d),t.addEventListener("click",n)}function n(){e.classList.contains("hide-temp")&&e.classList.remove("hide-temp"),a.classList.contains("theme-visible")&&a.classList.add("theme-visible-ontop"),e.classList.remove("shown"),e.classList.add("hidden"),t.removeEventListener("click",n),t.addEventListener("click",d)}t.addEventListener("click",d);const a=document.querySelector(".themes-color");document.querySelector(".themes").addEventListener("click",(function(){a.classList.add("theme-visible"),e.classList.add("hide-temp")})),document.querySelector(".bi-arrow-left-circle-fill").addEventListener("click",(function(){a.classList.remove("theme-visible"),e.classList.remove("hide-temp")})),window.addEventListener("click",(function(e){e.target.closest(".settings")||e.target.closest(".fa-cog")||e.target.closest(".themes-color")||n()}))}()})();