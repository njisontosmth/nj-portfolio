const projects = [
  {id:"nj-brain",title:"NJ Brain",category:["systems","data","ai"],label:"SYSTEMS · PRODUCTIVITY",status:"BUILDING",progress:68,color:"#9b7fd4",symbol:"⌘",summary:"A creator-and-career operating system designed to make ambitious, overwhelmed days feel clearer.",now:"Refining the Excel command centre and macro-assisted workflows.",learned:"Turning lived problems into product requirements; dashboard logic; compassionate UX.",tools:"Excel, formulas, VBA concepts, workflow design"},
  {id:"pretty-useful",title:"Pretty Useful Studio",category:["creative","systems"],label:"DIGITAL PRODUCT · BRAND",status:"LIVE + GROWING",progress:82,color:"#f2a6c4",symbol:"✦",summary:"A tiny design studio creating mood-led tools—starting with the Lavender Denim Planner.",now:"Building a repeatable content system and learning what makes a first product discoverable.",learned:"Brand systems, digital product launch, landing pages, social content and iteration.",tools:"Canva, Payhip, Netlify, CapCut",links:[{label:"Visit the studio",url:"https://pretty-useful-studio.netlify.app/"},{label:"View the planner",url:"https://payhip.com/b/EypKP"},{label:"See the Instagram",url:"https://www.instagram.com/pretty.useful.studio"}]},
  {id:"ugc",title:"Creator & UGC Lab",category:["creative","data"],label:"CONTENT · EXPERIMENT",status:"ONGOING",progress:64,color:"#e8af5b",symbol:"◉",summary:"A hands-on laboratory for short-form storytelling, beauty content, hooks and audience learning.",now:"Testing more intentional concepts, stronger openings and clearer creator positioning.",learned:"Scripting, filming, editing, visual pacing, SEO thinking and brand communication.",tools:"CapCut, Canva, DaVinci Resolve, Instagram, TikTok"},
  {id:"animation",title:"Audio-to-Animation Story",category:["creative","ai"],label:"ANIMATION · AI",status:"EXPLORING",progress:22,color:"#78a9c8",symbol:"♪",summary:"Exploring how a real conversation can become a warm, minimalist animated memory.",now:"Learning Blender foundations and testing manageable workflows for character-led scenes.",learned:"Tool evaluation, creative direction, story beats and the trade-off between automation and control.",tools:"Blender learning, generative video, CapCut"},
  {id:"editor",title:"NJ Studio Editor",category:["creative","systems","ai"],label:"PRODUCT CONCEPT",status:"CONCEPT",progress:28,color:"#7f93c8",symbol:"▶",summary:"A colourful, accessible video-editor concept for scroll-stopping creative work without tool overload.",now:"Defining the feature set, experience and a realistic first prototype.",learned:"Product scoping, user needs, feature prioritisation and interface direction.",tools:"Product thinking, UI concepts, prompting"},
  {id:"forecasting",title:"Forecasting with Python",category:["data"],label:"ANALYTICS · ACADEMIC",status:"CASE STUDY READY",progress:100,color:"#89a98e",symbol:"↗",summary:"MSc dissertation work using Python to explore forecasting—turning historical patterns into evidence-led expectations.",now:"Translating the academic work into a concise, visual portfolio case study.",learned:"Data preparation, forecasting logic, evaluation and communicating limitations.",tools:"Python, pandas, forecasting methods, data visualisation"},
  {id:"automation",title:"AI Appointment Booking Chatbot",category:["systems","ai"],label:"BUSINESS ANALYSIS · INTERNSHIP",status:"COMPLETED",progress:100,color:"#db8c9a",symbol:"⌁",summary:"An AI-assisted chatbot created during my internship to work with GoHighLevel CRM and guide users through booking an appointment.",now:"The internship deliverable is complete; the next step is documenting the workflow as a public case study without exposing company information.",learned:"Translating a business need into conversation logic, CRM actions and a testable automated workflow.",tools:"GoHighLevel CRM, Make, Zapier, OpenAI prompting, workflow mapping"},
  {id:"kaggriculture",title:"Kaggriculture — Autonomous AI Farming Agent",category:["data","ai","systems"],label:"KAGGLE · AGENTIC AI · STRATEGY",status:"IN PROGRESS",progress:72,color:"#baa57d",symbol:"✧",summary:"A live Kaggle simulation project: I designed and tested five Python farming agents, then adopted an attributed Apache-2.0 public strategy as a stronger benchmark for the final improvement sprint.",now:"Analysing match replays and testing targeted changes to expansion, production economics, opponent awareness and end-game profit. Benchmark snapshot on 23 September 2026: score 1,035.6 and rank 3,874, with ratings still moving.",learned:"AI-assisted agent development, decision systems, optimisation, replay-based debugging, experimental comparison and responsible open-source attribution.",tools:"Python, Kaggle, ChatGPT-assisted development, agent design, market simulation",links:[{label:"View my Kaggle profile",url:"https://www.kaggle.com/nj54425"},{label:"Open the competition",url:"https://www.kaggle.com/competitions/kaggriculture"}]}
];

const grid=document.querySelector("#projectGrid");
function renderProjects(filter="all"){
  grid.innerHTML=projects.map(p=>`<article class="project-card ${filter!=="all"&&!p.category.includes(filter)?"hidden":""}" data-id="${p.id}" tabindex="0" role="button" aria-label="Open ${p.title}">
    <div class="project-art" style="--accent:${p.color}" data-symbol="${p.symbol}"></div>
    <div class="project-meta"><span class="status">${p.status}</span><span class="category">${p.label}</span></div>
    <h3>${p.title}</h3><p>${p.summary}</p>
    <div class="progress-wrap"><div class="progress-label"><span>PROJECT PROGRESS</span><span>${p.progress}%</span></div><div class="progress-track"><i style="width:${p.progress}%;--accent:${p.color}"></i></div></div>
  </article>`).join("");
  document.querySelectorAll(".project-card").forEach(card=>{
    card.addEventListener("click",()=>openProject(card.dataset.id));
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openProject(card.dataset.id)}});
    const cardObserver=new IntersectionObserver(([entry],observer)=>{if(entry.isIntersecting){card.classList.add("card-visible");observer.disconnect()}},{threshold:.2});
    cardObserver.observe(card);
    if(window.matchMedia("(hover:hover) and (prefers-reduced-motion:no-preference)").matches){
      card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect();card.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*3+"deg");card.style.setProperty("--rx",((e.clientY-r.top)/r.height-.5)*-3+"deg")});
      card.addEventListener("pointerleave",()=>{card.style.setProperty("--rx","0deg");card.style.setProperty("--ry","0deg")});
    }
  });
}
renderProjects();

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderProjects(btn.dataset.filter)}));

const projectDialog=document.querySelector("#projectDialog");
function openProject(id){
  const p=projects.find(item=>item.id===id);
  const links=(p.links||[]).map(link=>`<a class="dialog-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span>↗</span></a>`).join("");
  document.querySelector("#dialogContent").innerHTML=`<div class="dialog-art" style="--accent:${p.color}">${p.symbol}</div><span class="dialog-status">${p.status} · ${p.progress}%</span><h2 class="dialog-title">${p.title}</h2><p class="dialog-description">${p.summary}</p><div class="dialog-columns"><div><h4>On the desk now</h4><p>${p.now}</p></div><div><h4>What it proves</h4><p>${p.learned}</p></div><div><h4>Tools & methods</h4><p>${p.tools}</p></div><div><h4>Progress note</h4><p>The percentage is a snapshot, not a performance score. It changes as the scope becomes clearer.</p></div></div>${links?`<div class="dialog-links">${links}</div>`:""}`;
  projectDialog.showModal();
}

document.querySelectorAll(".dialog-close").forEach(btn=>btn.addEventListener("click",()=>btn.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));
document.querySelector('[data-open="projects"]').addEventListener("click",()=>document.querySelector("#projects").scrollIntoView({behavior:"smooth"}));
document.querySelector('[data-open="about"]').addEventListener("click",()=>document.querySelector("#noteDialog").showModal());
const njCharacter=document.querySelector(".nj-character");
const openAbout=()=>document.querySelector("#about").scrollIntoView({behavior:"smooth"});
njCharacter.addEventListener("click",openAbout);
njCharacter.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openAbout()}});
const deskScene=document.querySelector(".desk-scene");
document.querySelector(".moon").addEventListener("click",()=>{
  deskScene.classList.remove("wish-made");
  void deskScene.offsetWidth;
  deskScene.classList.add("wish-made");
  window.setTimeout(()=>deskScene.classList.remove("wish-made"),2600);
});

const toggleEvening=()=>{document.body.classList.toggle("evening");localStorage.setItem("nj-evening",document.body.classList.contains("evening"))};
document.querySelector(".lamp-toggle").addEventListener("click",toggleEvening);document.querySelector(".desk-lamp").addEventListener("click",toggleEvening);
if(localStorage.getItem("nj-evening")==="true")document.body.classList.add("evening");

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelector("#year").textContent=new Date().getFullYear();
