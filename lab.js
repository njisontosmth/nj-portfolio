const labProjects={
  kaggriculture:{kicker:"LIVE EXPERIMENT · KAGGLE",title:"Kaggriculture — Autonomous AI Farming Agent",status:"ACTIVE / ITERATING",copy:"A strategy agent for a competitive farming simulation. Each version tests better decisions around growth, profit, resources, production and opponent awareness.",doing:"Analysing replays and iterating strategy instead of treating one leaderboard score as the finish line.",proves:"Agentic thinking, Python experimentation, optimisation, debugging and evidence-led iteration.",links:[["Kaggle profile","https://www.kaggle.com/nj54425"],["Competition","https://www.kaggle.com/competitions/kaggriculture"]]},
  studio:{kicker:"LIVE PRODUCT · BRAND",title:"Pretty Useful Studio",status:"LIVE / LEARNING",copy:"A tiny design studio built around useful things with personality, starting with the Lavender Denim Planner.",doing:"Learning the harder half of product work: distribution, positioning, content and finding actual buyers.",proves:"Brand building, digital products, landing pages, content systems and commercial iteration.",links:[["Visit studio","https://pretty-useful-studio.netlify.app/"],["Planner","https://payhip.com/b/EypKP"]]},
  agent:{kicker:"NEXT BUILD · AGENTIC AI",title:"Career Agent",status:"PROTOTYPE / NEXT",copy:"An AI workflow concept that will read a job description, extract requirements, compare them with real candidate experience and turn the result into a structured application plan.",doing:"Scoping V1: job-description input → requirement extraction → evidence matching → gaps and next actions.",proves:"Workflow design, structured prompting, AI product thinking and eventually API/tool integration.",links:[]},
  hairlab:{kicker:"PRODUCT CONCEPT · BEAUTY TECH",title:"HairLab — Live Colour Try-On",status:"CONCEPT",copy:"A browser-based experience imagined for trying full colour, balayage, highlights or money pieces on your own hair before committing.",doing:"Defining the smallest useful prototype: camera/image input, shade choice and clear placement modes.",proves:"Product discovery, consumer UX thinking and translating a real-world uncertainty into an interactive tool.",links:[]},
  life:{kicker:"INTERACTIVE EXPERIMENT",title:"2027 Life Simulator",status:"CONCEPT / QUEUED",copy:"Part life game, part financial planning tool: make monthly choices, react to random events and watch savings, income, freedom and life milestones change.",doing:"Designing the rules so the playful layer sits on top of sensible financial calculations rather than fake motivation.",proves:"Simulation logic, interaction design, state management and behavioural-product thinking.",links:[]},
  brain:{kicker:"SYSTEMS · PERSONAL PRODUCTIVITY",title:"NJ Brain",status:"BUILDING",copy:"A creator-and-career operating system designed to turn too many open loops into something visible and actionable.",doing:"Refining the command-centre logic and deciding what deserves automation versus what should stay deliberately simple.",proves:"Systems thinking, dashboard logic, workflow design and designing from a lived user problem.",links:[]}
};
const modal=document.querySelector("#projectModal"),content=document.querySelector("#modalContent");
document.querySelectorAll("[data-project]").forEach(el=>el.addEventListener("click",()=>openLabProject(el.dataset.project)));
function openLabProject(id){
 const p=labProjects[id]; const links=p.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join("");
 content.innerHTML=`<p class="modal-kicker">${p.kicker}</p><span class="modal-status">${p.status}</span><h2 class="modal-title">${p.title}</h2><p class="modal-copy">${p.copy}</p><div class="modal-grid"><div><h4>On the desk</h4><p>${p.doing}</p></div><div><h4>What it demonstrates</h4><p>${p.proves}</p></div></div>${links?`<div class="modal-links">${links}</div>`:""}`;
 modal.showModal();
}
document.querySelector(".modal-close").addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
document.querySelector("#lightToggle").addEventListener("click",()=>{document.body.classList.toggle("daymode");document.querySelector(".room").classList.toggle("day")});
document.addEventListener("keydown",e=>{
 const keys=["1","2","3","4","5","6"]; const ids=["kaggriculture","studio","agent","hairlab","life","brain"];
 if(keys.includes(e.key)&&!modal.open)openLabProject(ids[keys.indexOf(e.key)]);
});
const guideExplore=document.querySelector("#guideExplore");
if(guideExplore){
  guideExplore.addEventListener("click",()=>{
    const room=document.querySelector(".room");
    if(!room)return;
    room.classList.remove("touring");
    void room.offsetWidth;
    room.classList.add("touring");
    const original=guideExplore.textContent;
    guideExplore.textContent="Those six things ✦";
    window.setTimeout(()=>{
      room.classList.remove("touring");
      guideExplore.textContent=original;
    },4700);
  });
}
