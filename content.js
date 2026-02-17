(function(){
"use strict";
if(document.getElementById("shiftzen-col"))return;

/* ═══════════════════════════════════════════
   CONSTANTS — Agent data & mappings
   ═══════════════════════════════════════════ */
const AG=[
{Agent:"Aamir Shabir",Shift:"4",bins:["Support_Liabilities","Support_ePrescription","Support_Marketing","Support_FrontDesk","Support_Admin","All","MyZen_Tips_Team"]},
{Agent:"Aarif Md",Shift:"4",bins:["Support_Liabilities","Fitness","Support_Digital_Forms","Support_Inventory","Support_Admin","All"]},
{Agent:"Akhila Upadrasta",Shift:"4",bins:["Support_Payments","Support_Digital_Forms","Support_Inventory","Support_Marketing","Support_Online_and_Apps","All"]},
{Agent:"Anchala Manaswini",Shift:"3",bins:["Support_Payroll","Support_Inventory","Support_Marketing","Support_Admin","All"]},
{Agent:"Anirudh Mukherjee",Shift:"4",bins:["Support_Liabilities","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Anjali Singh",Shift:"1",bins:["Support_Payments","Support_Liabilities","Fitness","Support_Payroll","Support_Digital_Forms","Support_ePrescription","Support_Online_and_Apps","Support_Admin","All","MyZen_Tips_Team"]},
{Agent:"Anshul Srivastava",Shift:"4",bins:["Support_Payments","Fitness","Support_Payroll","Support_Digital_Forms","All","MyZen_Tips_Team"]},
{Agent:"Anuhya Pendyala",Shift:"4",bins:["Support_Payments","Support_Digital_Forms","Support_Marketing","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Anvitha Talasila",Shift:"1",bins:["Support_Payments","Support_Liabilities","Support_Digital_Forms","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Arjun Bhatia",Shift:"5",bins:["Support_Liabilities","Fitness","Support_Digital_Forms","Support_Inventory","Support_Admin","All"]},
{Agent:"Ayush Das",Shift:"4",bins:["Support_Payments","Fitness","Support_Payroll","Support_Digital_Forms","All","MyZen_Tips_Team"]},
{Agent:"Ayush Verma",Shift:"2",bins:["Fitness","Support_Inventory","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Bharti Singh",Shift:"4",bins:["Support_FrontDesk","All","MyZen_Tips_Team"]},
{Agent:"Bhavana Mudunuri",Shift:"5",bins:["Support_Payments","Support_Liabilities","Support_Inventory","Support_Marketing","Support_Admin","All"]},
{Agent:"Bhavesh Rohera",Shift:"5",bins:["Support_Liabilities","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Chakraborty Ayush Aseem",Shift:"5",bins:["Support_Payments","Support_Hyper_Connect","Support_Liabilities","Fitness","All","MyZen_Tips_Team"]},
{Agent:"Debayan Bhattacharya",Shift:"2",bins:["Support_Hyper_Connect","Support_ePrescription","All"]},
{Agent:"Deepam Mishra",Shift:"3",bins:["Support_Hyper_Connect","All"]},
{Agent:"Devi Mattaparthi",Shift:"3",bins:["Support_Payments","Support_Liabilities","Support_Payroll","Support_Digital_Forms","Support_Online_and_Apps","All"]},
{Agent:"Fardin Karim",Shift:"1",bins:["Support_Payments","Support_Hyper_Connect","Support_Inventory","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Hamid",Shift:"3",bins:["All"]},
{Agent:"Harsh Kumar",Shift:"3",bins:["Support_Payments","Support_Hyper_Connect","Fitness","Support_Payroll","Support_Inventory","Support_Admin","All","MyZen_Tips_Team"]},
{Agent:"HarshaVardhan Jujjavarapu",Shift:"4",bins:["Support_Hyper_Connect","All"]},
{Agent:"Jai Katare",Shift:"5",bins:["Support_Liabilities","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Jaya Sravani Kolapati",Shift:"2",bins:["Support_Liabilities","Support_Digital_Forms","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Karan Singh",Shift:"5",bins:["Support_Hyper_Connect","All"]},
{Agent:"Kaviya K",Shift:"2",bins:["Support_Payments","Fitness","Support_Payroll","Support_Inventory","Support_Marketing","Support_FrontDesk","All"]},
{Agent:"Keerthi Sree Venigalla",Shift:"1",bins:["Support_Hyper_Connect","All"]},
{Agent:"Khushank Sharma",Shift:"4",bins:["Support_Liabilities","Support_Payroll","Support_Inventory","Support_Marketing","Support_Admin","All"]},
{Agent:"Kumar Amiya",Shift:"4",bins:["Support_Payments","Fitness","Support_Digital_Forms","Support_Online_and_Apps","Support_Admin","All"]},
{Agent:"Mithinti Durga Sai Rohan",Shift:"4",bins:["Support_Payments","Support_Payroll","Support_Inventory","All","MyZen_Tips_Team"]},
{Agent:"Mohd Siraj Mohiuddin",Shift:"3",bins:["Support_Marketing","Support_FrontDesk","Support_Admin","All","MyZen_Tips_Team"]},
{Agent:"Mohd. Nooruddin",Shift:"3",bins:["Support_Payments","Support_Hyper_Connect","Support_Liabilities","Support_Digital_Forms","Support_Inventory","All"]},
{Agent:"Nikita Gautam",Shift:"4",bins:["Support_Hyper_Connect","All"]},
{Agent:"Nishitha Yellanki",Shift:"4",bins:["Support_Payments","Support_Payroll","Support_Inventory","Support_Online_and_Apps","All"]},
{Agent:"Nithin Anil Kumar",Shift:"5",bins:["Support_Hyper_Connect","Support_Liabilities","Support_ePrescription","Support_Marketing","All"]},
{Agent:"Nithin Pillai",Shift:"2",bins:["Support_Hyper_Connect","Support_ePrescription","All"]},
{Agent:"Pooja Goud",Shift:"4",bins:["Support_Payments","Support_Liabilities","Support_Payroll","Support_Marketing","Support_Online_and_Apps","All"]},
{Agent:"Rahul Sharma",Shift:"4",bins:["Support_Hyper_Connect","All"]},
{Agent:"Rahul Singh",Shift:"4",bins:["Support_Payments","Support_Hyper_Connect","Support_Payroll","Support_FrontDesk","All"]},
{Agent:"Ravi Teja",Shift:"3",bins:["All"]},
{Agent:"Raza Razvi",Shift:"4",bins:["Support_Payments","Fitness","Support_Digital_Forms","Support_Online_and_Apps","Support_Admin","All"]},
{Agent:"Sachin Subramaniam",Shift:"4",bins:["Support_Payments","Support_Hyper_Connect","Support_Payroll","Support_ePrescription","All","MyZen_Tips_Team"]},
{Agent:"Sai Chander Vemulawada",Shift:"3",bins:["Support_Payments","Support_ePrescription","Support_Inventory","Support_Online_and_Apps","Support_FrontDesk","All"]},
{Agent:"Sai Kiran Guduru",Shift:"1",bins:["Support_Payments","Support_Payroll","Support_ePrescription","Support_Online_and_Apps","All"]},
{Agent:"Sailaja Dasari",Shift:"3",bins:["Support_Hyper_Connect","Support_ePrescription","All"]},
{Agent:"Sameera Tumuluri",Shift:"5",bins:["Support_Liabilities","Support_Inventory","Support_Marketing","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Sampath R Kowkutla",Shift:"3",bins:["Support_Hyper_Connect","All"]},
{Agent:"Sangeeth Mohan",Shift:"5",bins:["Support_Hyper_Connect","All"]},
{Agent:"Sankalp",Shift:"5",bins:["Support_Payments","Support_Liabilities","Support_Payroll","Support_Online_and_Apps","All","MyZen_Tips_Team"]},
{Agent:"Satvik Mittal",Shift:"5",bins:["Support_Payments","Support_Hyper_Connect","Support_Payroll","Support_Digital_Forms","All"]},
{Agent:"Saurav Sinha",Shift:"2",bins:["Support_Payments","Support_Digital_Forms","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Shantanu Bhatnagar",Shift:"4",bins:["Support_Hyper_Connect","All"]},
{Agent:"Shivam Kishore",Shift:"1",bins:["Support_Payments","Support_Liabilities","Support_Digital_Forms","Support_Inventory","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","All"]},
{Agent:"Soumyajyoti Das",Shift:"5",bins:["Support_Inventory","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Sreevani Dasari",Shift:"1",bins:["Support_Liabilities","Support_Inventory","Support_Marketing","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Sumanth Chandan Rayachur",Shift:"4",bins:["Support_Payments","Support_Liabilities","Support_Payroll","Support_Digital_Forms","Support_Marketing","All"]},
{Agent:"Swarna Mukhi Madduri",Shift:"2",bins:["Support_Payments","Support_Liabilities","Support_Payroll","Support_Digital_Forms","Support_FrontDesk","All"]},
{Agent:"Syed Zubair Ali",Shift:"4",bins:["Support_ePrescription","Support_Marketing","Support_FrontDesk","Support_Admin","All","MyZen_Tips_Team"]},
{Agent:"Tayyaba Taheruddin",Shift:"1",bins:["Support_Payments","Support_Liabilities","Fitness","Support_Inventory","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Tejas Thaker",Shift:"4",bins:["Support_Liabilities","Support_Marketing","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Tejaswi Koppuravuri",Shift:"4",bins:["Support_Payments","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","All","MyZen_Tips_Team"]},
{Agent:"Varsha Senapati",Shift:"4",bins:["Support_ePrescription","Support_Marketing","Support_FrontDesk","Support_Admin","All","MyZen_Tips_Team"]},
{Agent:"Vasista Vemuri",Shift:"5",bins:["Support_Hyper_Connect","Support_Liabilities","Support_Digital_Forms","Support_ePrescription","Support_Admin","All"]},
{Agent:"Vennela Marlapati",Shift:"2",bins:["Support_Digital_Forms","Support_Inventory","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Vikram PGC",Shift:"5",bins:["Support_Payments","Support_Liabilities","Support_Marketing","Support_FrontDesk","Support_Admin","All"]},
{Agent:"Vineela Bollina",Shift:"1",bins:["Support_Payments","Support_Liabilities","Support_Payroll","Support_Inventory","Support_Marketing","Support_Online_and_Apps","Support_FrontDesk","Support_Admin","All","MyZen_Tips_Team"]},
{Agent:"Zainab Haider",Shift:"5",bins:["Support_Liabilities","Support_Inventory","Support_Marketing","Support_FrontDesk","Support_Admin","All"]}
];
const ALL_BINS=[...new Set(AG.flatMap(a=>a.bins))].sort();
const IM={"Support Payments (SBR)":"Support_Payments","Support Liabilities (SBR)":"Support_Liabilities","Support Inventory (SBR)":"Support_Inventory","Support Online & Apps (SBR)":"Support_Online_and_Apps","Support Admin (SBR)":"Support_Admin","Support Digital Forms (SBR)":"Support_Digital_Forms","Support Hyper Connect (SBR)":"Support_Hyper_Connect","Support FrontDesk (SBR)":"Support_FrontDesk","Support ePrescription (SBR)":"Support_ePrescription","Support Marketing (SBR)":"Support_Marketing","Support Payroll (SBR)":"Support_Payroll","SGFTE - MyZen Tips Team":"MyZen_Tips_Team","Fitness":"Fitness","All":"All"};
const NM={"Aamir Shabir":"Aamir Shabir","Aarif Md":"Aarif Sultan Mohammed","Akhila Upadrasta":"Akhila Upadrasta","Anchala Manaswini":"Anchala Manaswini","Anirudh Mukherjee":"Anirudh Mukherjee","Anjali Singh":"Anjali Singh","Anshul Srivastava":"Anshul Srivastava","Anuhya Pendyala":"Anuhya Pendyala","Anvitha Talasila":"Anvitha Talasila","Arjun Bhatia":"Arjun Bhatia","Ayush Das":"Ayush Das","Ayush Verma":"Ayush Verma","Bharti Singh":"Bharti Singh","Bhavana Mudunuri":"Bhavana Mudunuri","Bhavesh Rohera":"Bhavesh Rohera","Chakraborty Ayush Aseem":"Chakraborty Ayush Aseem","Debayan Bhattacharya":"Debayan Bhattacharya","Deepam Mishra":"Deepam Mishra","Devi Mattaparthi":"Devi Mattaparthi","Fardin Karim":"Fardin Karim","Hamid":"Hamed Mohd","Harsh Kumar":"Harsh Kumar","HarshaVardhan Jujjavarapu":"Harsha Jujjavarapu","Jai Katare":"Jai Katare","Jaya Sravani Kolapati":"Jaya Sravani Kolapati","Karan Singh":"Karan Singh","Kaviya K":"Kaviya K","Keerthi Sree Venigalla":"Keerthi","Khushank Sharma":"Khushank Sharma","Kumar Amiya":"Kumar Amiya","Mithinti Durga Sai Rohan":"Mithinti Durga Sai Rohan","Mohd Siraj Mohiuddin":"Siraj Mohiuddin","Mohd. Nooruddin":"Mohammed Nooruddin","Nikita Gautam":"Nikita Gautam","Nishitha Yellanki":"Nishitha Yellanki","Nithin Anil Kumar":"Nithin Anil Kumar","Nithin Pillai":"Nithin Pillai","Pooja Goud":"Pooja Goud","Rahul Sharma":"Rahul Sharma","Rahul Singh":"Rahul Singh","Ravi Teja":"Raviteja Nunna","Raza Razvi":"Raza Razvi","Sachin Subramaniam":"Sachin Subramaniam","Sai Chander Vemulawada":"Sai Chander Vemulawada","Sai Kiran Guduru":"Sai Kiran Guduru","Sailaja Dasari":"Sailaja Dasari","Sameera Tumuluri":"Sameera Tumuluri","Sampath R Kowkutla":"Sampath R Kowkutla","Sangeeth Mohan":"Sangeeth Mohan","Sankalp":"Sankalp","Satvik Mittal":"Satvik Mittal","Saurav Sinha":"Saurav Sinha","Shantanu Bhatnagar":"Shantanu Bhatnagar","Shivam Kishore":"Shivam Kishore","Soumyajyoti Das":"Soumyajyoti Das","Sreevani Dasari":"Sreevani Dasari","Sumanth Chandan Rayachur":"Sumanth Chandan Rayachur","Swarna Mukhi Madduri":"Swarna mukhi Madduri","Syed Zubair Ali":"Syed Zubair","Tayyaba Taheruddin":"Tayyaba Taheruddin","Tejas Thaker":"Tejas Thaker","Tejaswi Koppuravuri":"Tejaswi Koppuravuri","Varsha Senapati":"Varsha Senapati","Vasista Vemuri":"Vasista Vemuri","Vennela Marlapati":"Vennela Marlapati","Vikram PGC":"Vikram PGC","Vineela Bollina":"Vineela Bollina","Zainab Haider":"Zainab Haider"};

const AI_TONES=["Professional & Direct","Friendly & Conversational","Empathetic & Reassuring","Authoritative & Firm","Urgent & Action-Oriented","Diplomatic","Enthusiastic","Consultative","Avoid DSAT rating","Short"];

let S={shifts:["1"],queue:AG.map(a=>a.Agent),counts:{},history:[],priority:[],skips:{},visible:true,tab:"triage",agents:JSON.parse(JSON.stringify(AG)),collapsedShifts:{},rosterSearch:"",
  ai:{apiKey:"",signOff:"Thanks,\nSupport Team",tone:"Professional & Direct",draft:"",result:"",loading:false,error:"",mode:"draft",chatHistory:[],chatInput:"",draftHistory:[]}
};
let sug=null,dInbox=null,dBin=null,showManual=false,editAg=null,showQueue=false;
let statusEl=null,showDraftHistory=false,toneCollapsed=true,noBinAlert=null;

const save=()=>chrome.storage.local.set({sz8:S});
const load=cb=>chrome.storage.local.get("sz8",r=>{if(r.sz8){S={...S,...r.sz8};if(!S.ai.mode)S.ai.mode="draft";if(!S.ai.chatHistory)S.ai.chatHistory=[];if(!S.ai.chatInput)S.ai.chatInput="";if(!S.ai.draftHistory)S.ai.draftHistory=[];}cb();});
const esc=s=>{if(!s)return"";const d=document.createElement('div');d.textContent=s;return d.innerHTML;};
const fm=s=>s.replace(/_/g,' ');
const gsh=()=>[...new Set(S.agents.map(a=>a.Shift))].sort();
const pool=()=>{const ss=new Set(S.shifts);return S.queue.map(n=>S.agents.find(a=>a.Agent===n)).filter(a=>a&&ss.has(a.Shift));};
const ranked=l=>[...l].sort((a,b)=>{const d=(S.counts[a.Agent]||0)-(S.counts[b.Agent]||0);return d!==0?d:l.indexOf(a)-l.indexOf(b);});
const getTicketInfo=()=>{const url=location.href;const m=url.match(/conversation\/(\d+)/);return{url,ticketId:m?m[1]:''};};
const findNext=bin=>{const p=pool();if(!p.length)return null;const pm=S.priority.find(n=>{const a=S.agents.find(z=>z.Agent===n);return p.find(z=>z.Agent===n)&&a&&a.bins.includes(bin);});if(pm)return{agent:S.agents.find(a=>a.Agent===pm),bin,isPriority:true};const el=p.filter(a=>a.bins.includes(bin));if(!el.length)return{agent:null,bin,noBin:true};const rk=ranked(el);let c=rk.filter(a=>(S.skips[a.Agent]||0)===0);if(!c.length)c=rk;let w=c[0];const last=S.history.length?S.history[0].agent:null;if(w.Agent===last&&c.length>1)w=c[1];return{agent:w,bin,isPriority:false};};
const findNextAny=()=>{const p=pool();if(!p.length)return null;const rk=ranked(p);let c=rk.filter(a=>(S.skips[a.Agent]||0)===0);if(!c.length)c=rk;let w=c[0];const last=S.history.length?S.history[0].agent:null;if(w.Agent===last&&c.length>1)w=c[1];return{agent:w,bin:'All (no bin match)',isPriority:false};};
function showStatus(type,msg){if(!statusEl)return;statusEl.className='show '+type;if(type==='working')statusEl.innerHTML='<span class="sz-spinner"></span> '+msg;else if(type==='success')statusEl.innerHTML='✓ '+msg;else statusEl.innerHTML='✕ '+msg;}
function hideStatus(){if(!statusEl)return;statusEl.className='';statusEl.innerHTML='';}
const wait=ms=>new Promise(r=>setTimeout(r,ms));

async function autoAssignInIntercom(shiftzenName){const intercomName=NM[shiftzenName];if(!intercomName||intercomName==='Not Found'){showStatus('error','No Intercom mapping for "'+shiftzenName+'"');await wait(3000);hideStatus();return false;}showStatus('working','Opening assignee picker...');try{const labels=document.querySelectorAll('p.inbox2__attribute__label');let assigneeOpener=null;for(const l of labels){if(l.textContent.trim()==='Assignee'){const row=l.closest('.flex.flex-row.items-center');if(row){assigneeOpener=row.querySelector('.popover__opener .cursor-pointer[role="button"]')||row.querySelector('.popover__opener div[role="button"]')||row.querySelector('.cursor-pointer');}break;}}if(!assigneeOpener){showStatus('error','Could not find Assignee field');await wait(3000);hideStatus();return false;}assigneeOpener.click();await wait(600);showStatus('working','Searching for "'+intercomName+'"...');let searchInput=null;for(let i=0;i<10;i++){searchInput=document.querySelector('input#cmd-k-input[name="cmd-k-input"]')||document.querySelector('.js-command-k-modal input[data-command-k-input]')||document.querySelector('input[placeholder="Assign to"]');if(searchInput)break;await wait(300);}if(!searchInput){showStatus('error','Could not find search input');await wait(3000);hideStatus();return false;}searchInput.focus();searchInput.value='';searchInput.dispatchEvent(new Event('input',{bubbles:true}));await wait(200);const searchQuery=intercomName.split(' ').slice(0,2).join(' ');for(const char of searchQuery){searchInput.value+=char;searchInput.dispatchEvent(new Event('input',{bubbles:true}));searchInput.dispatchEvent(new KeyboardEvent('keydown',{key:char,bubbles:true}));searchInput.dispatchEvent(new KeyboardEvent('keyup',{key:char,bubbles:true}));}await wait(800);showStatus('working','Selecting "'+intercomName+'"...');let found=false;for(let attempt=0;attempt<8;attempt++){const pane=document.querySelector('[data-command-k-assignment-pane]');const resultContainer=pane||document.querySelector('.js-command-k-modal');if(!resultContainer){await wait(300);continue;}const nameSpans=resultContainer.querySelectorAll('span.flex-grow.truncate');for(const span of nameSpans){const text=span.textContent.trim();if(text.toLowerCase()===intercomName.toLowerCase()||text.toLowerCase().includes(intercomName.toLowerCase())||intercomName.toLowerCase().includes(text.toLowerCase())){const clickTarget=span.closest('.rounded.px-3.py-3')||span.closest('[class*="rounded"]')||span.closest('div[class*="cursor-pointer"]')||span.parentElement;if(clickTarget){clickTarget.click();found=true;break;}}}if(!found){const rows=resultContainer.querySelectorAll('.rounded.px-3.py-3, div[class*="rounded"][class*="px-3"]');for(const row of rows){if(row.textContent.trim().toLowerCase().includes(intercomName.toLowerCase())){row.click();found=true;break;}}}if(found)break;await wait(400);}if(found){showStatus('success','Assigned to '+intercomName);await wait(2500);hideStatus();return true;}else{document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));showStatus('error','"'+intercomName+'" not found');await wait(3000);hideStatus();return false;}}catch(err){console.error('ShiftZen error:',err);showStatus('error','Assignment failed: '+err.message);await wait(3000);hideStatus();return false;}}

const assign=(ag,bin,isPri)=>{S.history.unshift({id:Date.now(),agent:ag.Agent,shift:ag.Shift,bin,time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),url:location.href});S.history=S.history.slice(0,200);S.counts[ag.Agent]=(S.counts[ag.Agent]||0)+1;if(isPri)S.priority=S.priority.filter(n=>n!==ag.Agent);if(S.skips[ag.Agent]>0)S.skips[ag.Agent]=0;const agentName=ag.Agent;sug=null;showManual=false;save();render();autoAssignInIntercom(agentName);};
const skip=()=>{if(!sug)return;const n=sug.agent.Agent;if(sug.isPriority)S.priority=[...S.priority.filter(z=>z!==n),n];else S.skips[n]=(S.skips[n]||0)+1;sug=null;save();render();};
const unassign=id=>{const it=S.history.find(h=>h.id===id);if(!it)return;S.history=S.history.filter(h=>h.id!==id);S.counts[it.agent]=Math.max(0,(S.counts[it.agent]||0)-1);if(!S.priority.includes(it.agent))S.priority.push(it.agent);save();render();};
const calcNextMap=pl=>{const map={};const bins=[...new Set(pl.flatMap(a=>a.bins))];const lastAg=S.history.length?S.history[0].agent:null;bins.forEach(bin=>{const pm=S.priority.find(n=>{const a=pl.find(z=>z.Agent===n);return a&&a.bins.includes(bin);});if(pm){if(!map[pm])map[pm]=[];map[pm].push(bin);return;}const el=pl.filter(a=>a.bins.includes(bin));const rk=ranked(el);let c=rk.filter(a=>(S.skips[a.Agent]||0)===0);if(!c.length)c=rk;let w=c[0];if(w&&w.Agent===lastAg&&c.length>1)w=c[1];if(w){if(!map[w.Agent])map[w.Agent]=[];map[w.Agent].push(bin);}});return map;};

const detect=()=>{const ls=document.querySelectorAll("p.inbox2__attribute__label");for(const l of ls){if(l.textContent.trim()==="Team Inbox"){const r=l.closest(".flex.flex-row.items-center");if(!r)continue;const sp=r.querySelector(".popover__opener span.ml-2");if(sp)return sp.textContent.trim();const td=r.querySelector(".truncate span");if(td)return td.textContent.trim();}}return null;};
const autoDetect=()=>{dInbox=detect();dBin=dInbox?IM[dInbox]||null:null;noBinAlert=null;
  if(dBin){
    const result=findNext(dBin);
    if(result&&result.noBin){
      sug=null;noBinAlert=dBin;render();
    } else {sug=result&&result.agent?result:null;render();}
  } else if(dInbox){sug=findNext('All');if(sug&&sug.noBin)sug=null;render();}
  else{sug=null;render();}
};
let lastUrl=location.href;
setInterval(()=>{if(location.href!==lastUrl){lastUrl=location.href;setTimeout(autoDetect,1500);}},800);
const mo=new MutationObserver(()=>{clearTimeout(mo._t);mo._t=setTimeout(()=>{const ni=detect();if(ni&&ni!==dInbox)autoDetect();},1000);});

/* AI */
function getConversationContext(){const parts=document.querySelectorAll('[data-intercom-target="conversation-stream-content-part"]');if(!parts.length){const blocks=document.querySelectorAll('.intercom-interblocks, .inbox2__message-content');return Array.from(blocks).map(b=>"Message: "+b.innerText.trim()).join('\n\n');}const messages=Array.from(parts).map(part=>{let role="Message";if(part.querySelector('.inbox2__admin-email-part')||part.querySelector('.inbox2__note-part'))role="Agent";else if(part.querySelector('.inbox2__user-email-part'))role="Customer";const cb=part.querySelector('.intercom-interblocks')||part;const text=cb.innerText.trim();if(!text)return null;return role+": "+text;}).filter(Boolean);return messages.slice(-15).join('\n\n');}

function buildSystemPrompt(mode){const context=getConversationContext();if(mode==="chat")return "You are a helpful AI assistant for a customer support agent. You have access to the current Intercom conversation context below. Answer questions, provide analysis, suggest approaches, or help with anything the agent asks. Be concise and actionable.\n\nConversation Context:\n"+(context||"No conversation context detected.");
return 'You are a helpful customer support agent using a "'+S.ai.tone+'" tone.\nConversation Context (Recent Messages):\n'+(context||"No context found.")+'\n\nInstructions:\n1. Answer the user\'s prompt based on the context above.\n2. If the prompt is "draft a reply", write a full reply to the customer.\n3. Sign off with: "'+S.ai.signOff+'"\n4. Do not include placeholders like [Customer Name] unless you see the name in context.';}

async function callZeenieAI(userInput,mode){if(!S.ai.apiKey)throw new Error("Missing API Key. Add it in Settings → Zeenie AI.");const systemPrompt=buildSystemPrompt(mode);let messages;if(mode==="chat"){messages=[{role:"user",content:systemPrompt+"\n\nAgent: "+(S.ai.chatHistory.length===0?userInput:S.ai.chatHistory[0].content)}];for(let i=1;i<S.ai.chatHistory.length;i++){const h=S.ai.chatHistory[i];messages.push({role:h.role==="user"?"user":"assistant",content:h.content});}if(S.ai.chatHistory.length>0)messages.push({role:"user",content:userInput});}else{messages=[{role:"user",content:systemPrompt+"\n\nUSER REQUEST: "+userInput}];}
const payload={model_name:"gpt-4",messages};const response=await fetch("https://zeenie-llm-api.zenotibeta.com/GenericLLM",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":S.ai.apiKey},body:JSON.stringify(payload)});if(!response.ok){const txt=await response.text();throw new Error("API Error: "+response.status+" "+txt);}const data=await response.json();return data?.response?.content||"No content returned.";}

function insertIntoEditor(text){const editor=document.querySelector('.ProseMirror[role="textbox"]');if(!editor){alert("Could not find the chat editor. Please make sure the reply box is open.");return;}editor.focus();const success=document.execCommand('insertText',false,text);if(!success){const p=document.createElement('p');p.textContent=text;editor.appendChild(p);editor.dispatchEvent(new Event('input',{bubbles:true}));}}

let panelEl=null,toggleBtn=null;
function injectPanel(){panelEl=document.createElement('div');panelEl.id='shiftzen-col';if(!S.visible)panelEl.classList.add('collapsed');statusEl=document.createElement('div');statusEl.id='sz-live-status';const convPage=document.querySelector('.inbox2__conversation-page');if(convPage&&convPage.parentElement){convPage.parentElement.appendChild(panelEl);}else{panelEl.style.position='fixed';panelEl.style.top='0';panelEl.style.right='0';panelEl.style.height='100vh';panelEl.style.zIndex='2147483647';document.body.appendChild(panelEl);}tryInjectButtonLoop();}
function tryInjectButtonLoop(){injectToggleButton();setTimeout(injectToggleButton,1000);setTimeout(injectToggleButton,3000);setTimeout(injectToggleButton,5000);const o=new MutationObserver(()=>{if(!toggleBtn||!document.contains(toggleBtn)){toggleBtn=null;injectToggleButton();}});o.observe(document.body,{childList:true,subtree:true});}
function injectToggleButton(){if(toggleBtn&&document.contains(toggleBtn))return;let target=document.querySelector('div.flex.gap-6.items-center.flex-1.h-16')||document.querySelector('[data-intercom-target="inbox-header"] .flex.flex-row.items-center')||document.querySelector('.inbox2__conversation-controls')||document.querySelector('[data-intercom-target="inbox-right-nav"] .sticky');if(target){toggleBtn=document.createElement('button');toggleBtn.className='sz-toggle-btn'+(S.visible?' active':'');toggleBtn.textContent='S';toggleBtn.title='Toggle ShiftZen';toggleBtn.style.marginLeft="8px";toggleBtn.addEventListener('click',()=>{S.visible=!S.visible;save();updateVisibility();});target.appendChild(toggleBtn);}}
function updateVisibility(){if(panelEl){if(S.visible)panelEl.classList.remove('collapsed');else panelEl.classList.add('collapsed');}if(toggleBtn){if(S.visible)toggleBtn.classList.add('active');else toggleBtn.classList.remove('active');}}

/* ═══ RENDER ═══ */
const render=()=>{
if(!panelEl)return;
const pl=pool();const wt=pl.filter(a=>(S.counts[a.Agent]||0)>0).sort((a,b)=>a.Agent.localeCompare(b.Agent));const shifts=gsh();const ac=S.queue.filter(n=>S.agents.find(a=>a.Agent===n)).length;
let h='';

h+='<div class="sz-hdr"><div class="sz-hdr-left"><div class="sz-hdr-logo">S</div><span class="sz-hdr-title">ShiftZen</span><span class="sz-hdr-ver">v9</span></div><div class="sz-hdr-right"><button class="sz-hdr-btn" id="sz-manual-btn" title="Manual Assign">✋</button><button class="sz-hdr-btn" id="sz-queue-btn" title="Queue Order">☰</button></div></div>';
h+='<div class="sz-tabs"><button class="sz-tab '+(S.tab==='triage'?'on':'')+'" data-tab="triage"><span class="sz-tab-icon">◎</span> Triage</button><button class="sz-tab '+(S.tab==='roster'?'on':'')+'" data-tab="roster"><span class="sz-tab-icon">☷</span> Roster</button><button class="sz-tab '+(S.tab==='ai'?'on':'')+'" data-tab="ai"><span class="sz-tab-icon">✦</span> AI</button><button class="sz-tab '+(S.tab==='settings'?'on':'')+'" data-tab="settings"><span class="sz-tab-icon">⚙</span> Settings</button></div>';
h+='<div class="sz-content">';

/* TRIAGE */
h+='<div class="sz-pg '+(S.tab==='triage'&&!editAg?'on':'')+'"><div class="sz-tri">';
h+='<div class="sz-det"><div class="sz-det-label">Detected Team Inbox</div><div class="sz-det-row">';
if(dInbox)h+='<div class="sz-det-val">'+esc(dInbox)+' <span class="sz-tag '+(dBin?'sz-tag-bk':'sz-tag-w')+'">'+(dBin?esc(fm(dBin)):'All (fallback)')+'</span></div>';
else h+='<div class="sz-det-empty">Open a ticket to detect</div>';
h+='<button class="sz-ref" id="sz-detect" title="Re-detect">↻</button></div></div>';
h+='<div class="sz-shifts"><span class="sz-shifts-label">Shifts</span>';
shifts.forEach(function(s){h+='<button class="sz-chip '+(S.shifts.includes(s)?'on':'')+'" data-shift="'+s+'">'+(S.shifts.includes(s)?'✓ ':'')+'S'+s+'</button>';});
h+='</div>';
h+='<div class="sz-startfrom"><span class="sz-startfrom-label">Start from</span><select class="sz-startfrom-sel" id="sz-startfrom"><option value="" disabled selected>Select agent</option>';
pl.forEach(function(a){h+='<option value="'+esc(a.Agent)+'">'+esc(a.Agent)+' (S'+a.Shift+')</option>';});
h+='</select></div>';
if(noBinAlert){
h+='<div class="sz-nobin-alert"><div class="sz-nobin-icon">⚠</div><div class="sz-nobin-body"><div class="sz-nobin-title">No agents available</div><div class="sz-nobin-msg">No agent is available in the <b>'+esc(fm(noBinAlert))+'</b> SBR Bin for the active shifts.</div><div class="sz-nobin-actions"><button class="sz-nobin-dismiss" id="sz-nobin-dismiss">Dismiss</button><button class="sz-nobin-assign" id="sz-nobin-assign">Assign from all agents</button></div></div></div>';
}
if(sug){var tc=S.counts[sug.agent.Agent]||0;
h+='<div class="sz-card"><div class="sz-sh"><div class="sz-sh-l">Recommended Agent</div><div class="sz-sh-n">'+esc(sug.agent.Agent)+'</div><div class="sz-sh-tags"><span class="sz-sh-tag">Shift '+sug.agent.Shift+'</span><span class="sz-sh-tag">'+tc+' Ticket'+(tc!==1?'s':'')+'</span></div></div><div class="sz-sbin"><div class="sz-sbin-l">Task</div><div class="sz-sbin-v">'+esc(fm(sug.bin))+'</div></div>'+(sug.isPriority?'<div class="sz-pri">⚡ <span><b>Priority:</b> Owed from unassignment.</span></div>':'')+'<div class="sz-sbtns"><button class="sz-btn sz-btn-g" id="sz-skip"><span class="sz-btn-i">⏭</span>Skip</button><button class="sz-btn sz-btn-b" id="sz-assign"><span class="sz-btn-i">✓</span>Assign</button></div><button class="sz-dis" id="sz-dismiss">Dismiss suggestion</button></div>';}
h+='<div class="sz-tbls"><div><div class="sz-th"><span class="sz-tt">Active Assignments</span><span class="sz-tag">'+wt.length+'</span></div><div class="sz-tw"><table class="sz-t"><thead><tr><th>Agent</th><th>Tickets</th></tr></thead><tbody>';
if(!wt.length)h+='<tr><td class="sz-t-empty" colspan="2">No active tickets</td></tr>';
else wt.forEach(function(a){h+='<tr><td style="font-weight:600;color:#333;">'+esc(a.Agent)+'</td><td><span class="sz-cnt">'+S.counts[a.Agent]+'</span></td></tr>';});
h+='</tbody></table></div></div><div><div class="sz-th"><span class="sz-tt">Assignment Log</span><span class="sz-tag">'+S.history.length+'</span></div><div class="sz-tw"><div class="sz-hs"><table class="sz-t"><thead><tr><th>Time</th><th>Agent</th><th>S</th><th>Bin</th><th>Ticket</th><th></th></tr></thead><tbody>';
if(!S.history.length)h+='<tr><td class="sz-t-empty" colspan="6">No history yet</td></tr>';
else S.history.slice(0,50).forEach(function(v){var tid=v.url?v.url.match(/conversation\/(\d+)/):null;tid=tid?tid[1]:'';h+='<tr><td class="sz-tm">'+v.time+'</td><td style="font-weight:600;color:#333;">'+esc(v.agent)+'</td><td><span class="sz-stag">S'+v.shift+'</span></td><td style="color:#777;">'+esc(fm(v.bin))+'</td><td>'+(v.url?'<a class="sz-link" href="'+esc(v.url)+'" target="_blank">#'+(tid||'link')+'</a>':'-')+'</td><td><button class="sz-undo" data-rv="'+v.id+'" title="Undo">↩</button></td></tr>';});
h+='</tbody></table></div></div></div></div></div></div>';

/* ROSTER */
h+='<div class="sz-pg '+(S.tab==='roster'&&!editAg?'on':'')+'"><div class="sz-ros">';
h+='<div class="sz-sw"><span class="sz-si">⌕</span><input class="sz-sinp" id="sz-search" placeholder="Search agents..." value="'+esc(S.rosterSearch)+'"></div>';
h+='<div class="sz-rstat"><span>'+ac+' of '+S.agents.length+' active</span><span class="sz-tag">'+S.shifts.map(function(s){return'S'+s;}).join(', ')+'</span></div>';
h+='<div class="sz-rlist">';
shifts.forEach(function(shift){var agents=S.agents.filter(function(a){return a.Shift===shift;}).sort(function(a,b){return a.Agent.localeCompare(b.Agent);});var filt=agents.filter(function(a){return a.Agent.toLowerCase().includes(S.rosterSearch.toLowerCase());});if(!filt.length&&S.rosterSearch)return;var col=S.collapsedShifts[shift];
h+='<div class="sz-sg"><div class="sz-sgd" data-sg="'+shift+'"><div class="sz-sgt"><span class="sz-sgc '+(col?'':'open')+'">▾</span>Shift '+shift+' <span class="sz-tag">'+filt.length+'</span></div><div class="sz-sga" onclick="event.stopPropagation()"><button class="aa" data-sga="'+shift+'">All</button><span class="as">·</span><button class="an" data-sgn="'+shift+'">None</button></div></div>';
if(!col){h+='<div class="sz-sgb">';filt.forEach(function(ag){var av=S.queue.includes(ag.Agent),pr=S.priority.includes(ag.Agent),tc2=S.counts[ag.Agent]||0;h+='<div class="sz-ar '+(av?'':'off')+'"><div class="sz-arl"><input type="checkbox" class="sz-acb" data-ar="'+esc(ag.Agent)+'" '+(av?'checked':'')+'><span class="sz-anm">'+esc(ag.Agent)+'</span></div><div class="sz-arr">'+(pr?'<div class="sz-apr">⚡</div>':'')+(tc2>0?'<span class="sz-atc">'+tc2+'</span>':'')+'</div></div>';});h+='</div>';}
h+='</div>';});
h+='</div></div></div>';

/* AI TAB */
h+='<div class="sz-pg '+(S.tab==='ai'?'on':'')+'"><div class="sz-ai">';
// Mode Toggle
h+='<div class="sz-ai-mode-toggle"><button class="sz-ai-mode-btn '+(S.ai.mode==='draft'?'active':'')+'" data-aimode="draft">📝 Draft Reply</button><button class="sz-ai-mode-btn '+(S.ai.mode==='chat'?'active':'')+'" data-aimode="chat">💬 Chatbot</button></div>';
// Tone
h+='<div class="sz-ai-tone-section"><button class="sz-ai-tone-hdr" id="sz-tone-toggle"><span class="sz-ai-label" style="margin-bottom:0">Tone</span><span class="sz-tone-cur">'+esc(S.ai.tone)+'</span><span class="sz-tone-arrow">'+(toneCollapsed?'▸':'▾')+'</span></button>';
if(!toneCollapsed){h+='<div class="sz-ai-tone-grid">';
AI_TONES.forEach(function(t){h+='<button class="sz-ai-tone-pill '+(S.ai.tone===t?'active':'')+'" data-tone="'+esc(t)+'">'+esc(t)+'</button>';});
h+='</div>';}
h+='</div>';

if(S.ai.mode==='draft'){
h+='<div class="sz-ai-draft-area"><textarea class="sz-ai-prompt" id="sz-ai-prompt" placeholder="Describe the reply you want...">'+esc(S.ai.draft)+'</textarea><div class="sz-ai-actions"><button class="sz-ai-magic-btn" id="sz-ai-gen" '+(S.ai.loading?'disabled':'')+'>'+(S.ai.loading?'<span class="sz-spinner"></span> Generating...':'✦ Generate Draft')+'</button></div>';
h+='<div class="sz-ai-err" style="'+(S.ai.error?'display:block':'')+'">'+esc(S.ai.error)+'</div>';
h+='<div class="sz-ai-result '+(S.ai.result?'visible':'')+'" id="sz-ai-res-text">'+esc(S.ai.result)+'</div>';
if(S.ai.result)h+='<div class="sz-ai-result-actions"><button class="sz-ai-insert-btn" id="sz-ai-insert">Insert into Chat ↵</button><button class="sz-ai-copy-btn" id="sz-ai-copy">Copy</button></div>';
h+='</div>';
// Draft History
h+='<div class="sz-ai-hist-toggle"><button class="sz-ai-hist-btn" id="sz-ai-hist-toggle">'+(showDraftHistory?'▾ Hide':'▸ Show')+' Draft History <span class="sz-tag">'+S.ai.draftHistory.length+'</span></button></div>';
if(showDraftHistory){h+='<div class="sz-ai-hist-list">';
if(!S.ai.draftHistory.length)h+='<div class="sz-ai-hist-empty">No drafts generated yet</div>';
else S.ai.draftHistory.forEach(function(d,i){h+='<div class="sz-ai-hist-item"><div class="sz-ai-hist-item-hd"><div class="sz-ai-hist-item-meta"><span class="sz-tm">'+esc(d.time)+'</span>'+(d.ticketId?'<a class="sz-link" href="'+esc(d.url)+'" target="_blank">#'+esc(d.ticketId)+'</a>':'<span style="color:#ccc">—</span>')+'</div><button class="sz-ai-hist-use" data-histidx="'+i+'" title="Insert this draft">↵</button></div><div class="sz-ai-hist-item-prompt">'+esc(d.prompt)+'</div><div class="sz-ai-hist-item-preview">'+esc(d.result.substring(0,120))+(d.result.length>120?'…':'')+'</div></div>';});
h+='</div>';}
} else {
// Chatbot Mode
h+='<div class="sz-ai-chat-area"><div class="sz-ai-chat-messages" id="sz-ai-chat-msgs">';
if(!S.ai.chatHistory.length)h+='<div class="sz-ai-chat-empty"><div class="sz-ai-chat-empty-icon">💬</div><div>Ask anything about this ticket — get context analysis, suggested approaches, or help troubleshooting.</div></div>';
else S.ai.chatHistory.forEach(function(msg){h+='<div class="sz-ai-chat-msg sz-ai-chat-'+msg.role+'"><div class="sz-ai-chat-msg-label">'+(msg.role==='user'?'You':'Zeenie AI')+'</div><div class="sz-ai-chat-msg-text">'+esc(msg.content)+'</div></div>';});
h+='</div><div class="sz-ai-chat-input-wrap"><textarea class="sz-ai-chat-input" id="sz-ai-chat-input" placeholder="Ask about this ticket..." rows="2">'+esc(S.ai.chatInput)+'</textarea><button class="sz-ai-chat-send" id="sz-ai-chat-send" '+(S.ai.loading?'disabled':'')+'>'+(S.ai.loading?'⏳':'➤')+'</button></div><button class="sz-ai-chat-clear" id="sz-ai-chat-clear">Clear conversation</button></div>';
}
h+='</div></div>';

/* SETTINGS */
h+='<div class="sz-pg '+(S.tab==='settings'&&!editAg?'on':'')+'"><div class="sz-stgs">';
// Zeenie AI settings
h+='<div class="sz-stgc"><div class="sz-stgc-i">✦</div><h3>Zeenie AI</h3><p>Configure API key and sign-off for AI-generated replies.</p><div class="sz-fg"><label class="sz-fl">API Key</label><div class="sz-ai-key-wrap"><input type="password" class="sz-ai-key" id="sz-ai-key" value="'+esc(S.ai.apiKey)+'" placeholder="Paste Zeenie API Key here..."><button class="sz-ai-save-btn" id="sz-ai-save">Save</button></div></div><div class="sz-fg" style="margin-top:12px"><label class="sz-fl">Sign-Off Signature</label><textarea class="sz-finp sz-signoff-ta" id="sz-ai-sign" placeholder="e.g. Thanks,&#10;Support Team" rows="3">'+esc(S.ai.signOff)+'</textarea><div class="sz-signoff-hint">Supports multiple lines. Used at the end of AI-drafted replies.</div></div></div>';
// Agent Roster
h+='<div class="sz-stgc"><div class="sz-stgc-i">☷</div><h3>Agent Roster</h3><p>Add, edit, or remove agents.</p><div class="sz-edw"><table class="sz-edt"><thead><tr><th>Name</th><th>Shift</th><th style="text-align:right">Actions</th></tr></thead><tbody>';
var sorted=[...S.agents].sort(function(a,b){return a.Agent.localeCompare(b.Agent);});
sorted.forEach(function(a){h+='<tr><td style="font-weight:600;color:#333">'+esc(a.Agent)+'</td><td><span class="sz-stag">S'+a.Shift+'</span></td><td class="sz-eda" style="text-align:right"><button data-edit="'+esc(a.Agent)+'" title="Edit">✎</button><button data-del="'+esc(a.Agent)+'" title="Delete">✕</button></td></tr>';});
h+='</tbody></table></div><button class="sz-stgb ol" id="sz-add">+ Add Agent</button></div>';
h+='<div class="sz-stgc"><div class="sz-stgc-i">↗</div><h3>Export</h3><p>Download agent roster as JSON.</p><button class="sz-stgb bk" id="sz-export">Download JSON</button></div>';
h+='<div class="sz-stgc"><div class="sz-stgc-i">↙</div><h3>Import</h3><p>Restore agents from a JSON backup.</p><input type="file" accept=".json" class="sz-fi-wrap" id="sz-ifile"><button class="sz-stgb ol" id="sz-import">Import</button></div>';
h+='<div class="sz-stgc dng"><div class="sz-stgc-i">⟳</div><h3>Reset Session</h3><p>Clear all counts, history, and queue state.</p><button class="sz-stgb dng" id="sz-reset">Clear & Reset</button></div>';
h+='</div></div>';

// Edit form
if(editAg){var isNew=editAg.Agent==='';
h+='<div class="sz-efp on"><div class="sz-efh"><h3>'+(isNew?'Add Agent':'Edit Agent')+'</h3><button class="sz-efbk" id="sz-efbk">← Back</button></div><div class="sz-fg"><label class="sz-fl">Name</label><input class="sz-finp" id="sz-efn" value="'+esc(editAg.Agent)+'" '+(!isNew?'readonly':'')+' placeholder="Agent full name"></div><div class="sz-fg"><label class="sz-fl">Shift</label><input class="sz-finp" id="sz-efs" type="number" min="1" max="9" value="'+esc(editAg.Shift)+'"></div><div class="sz-fg"><label class="sz-fl">Skill Bins</label><div class="sz-bng">';
ALL_BINS.forEach(function(bin){var sel=editAg.bins.includes(bin);h+='<label class="sz-bo '+(sel?'sel':'')+'"><input type="checkbox" data-ebin="'+esc(bin)+'" '+(sel?'checked':'')+'>'+esc(fm(bin))+'</label>';});
h+='</div></div><button class="sz-efsv" id="sz-efsv">Save</button></div>';}

h+='</div>'; // sz-content

// Queue
if(showQueue){var qp=pool();var nm=calcNextMap(qp);
h+='<div class="sz-qbg"><div class="sz-qmod-hd"><h3>☰ Queue Order</h3><button class="sz-qmod-cls" id="sz-qcls">✕</button></div><div class="sz-qmod-info">Drag to change <b>tie-breaker</b> order. Lowest tickets first.</div><div class="sz-qmod-list" id="sz-qlist">';
qp.forEach(function(ag,i){var nb=nm[ag.Agent]||[];var isN=nb.length>0;var tc3=S.counts[ag.Agent]||0;
h+='<div class="sz-qi '+(isN?'nxt':'')+'" draggable="true" data-qi="'+i+'"><div class="sz-qi-top"><div class="sz-qi-left"><span class="sz-qi-grip">⠿</span><div class="sz-qi-num">'+(i+1)+'</div><div class="sz-qi-info"><div class="sz-qi-name">'+esc(ag.Agent)+'</div><div class="sz-qi-meta"><span>Shift '+ag.Shift+'</span><span class="cnt">'+tc3+' Ticket'+(tc3!==1?'s':'')+'</span></div></div></div></div>'+(isN?'<div class="sz-qi-bins"><span class="sz-qi-next-label">→ Next</span>'+nb.map(function(b){return'<span class="sz-qi-bin-tag">'+esc(fm(b))+'</span>';}).join('')+'</div>':'')+'</div>';});
h+='</div><div class="sz-qmod-ft"><button class="sz-qmod-can" id="sz-qcan">Cancel</button><button class="sz-qmod-sav" id="sz-qsav">Save</button></div></div>';}

// Manual
if(showManual){h+='<div class="sz-ov" id="sz-ovbg"><div class="sz-ovc"><div class="sz-ovh"><div><h3>Manual Assign</h3><div class="sz-ovh-s">Override queue order</div></div><button class="sz-ovcls" id="sz-ovcls">✕</button></div><div class="sz-ovb"><select class="sz-sel" id="sz-ovsel"><option value="">— Select Agent —</option>';
pl.sort(function(a,b){return a.Agent.localeCompare(b.Agent);}).forEach(function(a){h+='<option value="'+esc(a.Agent)+'">'+esc(a.Agent)+' (S'+a.Shift+')</option>';});
h+='</select><button class="sz-ovgo" id="sz-ovgo" disabled>Confirm Assignment</button></div></div></div>';}

h+='<div class="sz-ftr">ShiftZen · '+S.history.length+' assignments · '+pl.length+' agents<br>Developed by KUMAR AMIYA</div>';

var contentEl=panelEl.querySelector('.sz-content');var scrollTop=contentEl?contentEl.scrollTop:0;
panelEl.innerHTML=h;
var newContentEl=panelEl.querySelector('.sz-content');if(newContentEl)newContentEl.scrollTop=scrollTop;
if(statusEl){var ftr=panelEl.querySelector('.sz-ftr');if(ftr)panelEl.insertBefore(statusEl,ftr);else panelEl.appendChild(statusEl);}
if(S.ai.mode==='chat'){var chatMsgs=panelEl.querySelector('#sz-ai-chat-msgs');if(chatMsgs)chatMsgs.scrollTop=chatMsgs.scrollHeight;}
bindAll();
};

/* ═══ BIND ═══ */
const bindAll=()=>{
const $=function(id){return panelEl.querySelector('#'+id);};
$('sz-manual-btn')?.addEventListener('click',function(){showManual=true;render();});
$('sz-queue-btn')?.addEventListener('click',function(){showQueue=true;render();});
panelEl.querySelectorAll('[data-tab]').forEach(function(t){t.addEventListener('click',function(){S.tab=t.dataset.tab;editAg=null;render();});});
// AI mode
panelEl.querySelectorAll('[data-aimode]').forEach(function(b){b.addEventListener('click',function(){S.ai.mode=b.dataset.aimode;save();render();});});
// AI tone
panelEl.querySelectorAll('[data-tone]').forEach(function(b){b.addEventListener('click',function(){S.ai.tone=b.dataset.tone;toneCollapsed=true;save();render();});});
$('sz-tone-toggle')?.addEventListener('click',function(){toneCollapsed=!toneCollapsed;render();});
// Draft
$('sz-ai-prompt')?.addEventListener('input',function(e){S.ai.draft=e.target.value;});
$('sz-ai-gen')?.addEventListener('click',async function(){var prompt=$('sz-ai-prompt').value.trim();if(!prompt)return alert("Please enter a prompt.");S.ai.loading=true;S.ai.error="";S.ai.result="";render();try{var result=await callZeenieAI(prompt,"draft");S.ai.result=result;var ti=getTicketInfo();S.ai.draftHistory.unshift({id:Date.now(),time:new Date().toLocaleString([],{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}),prompt:prompt,result:result,url:ti.url,ticketId:ti.ticketId});S.ai.draftHistory=S.ai.draftHistory.slice(0,100);}catch(e){S.ai.error=e.message;}finally{S.ai.loading=false;save();render();}});
$('sz-ai-insert')?.addEventListener('click',function(){if(S.ai.result)insertIntoEditor(S.ai.result);});
$('sz-ai-copy')?.addEventListener('click',function(){if(S.ai.result){navigator.clipboard.writeText(S.ai.result).then(function(){var b=$('sz-ai-copy');if(b){b.textContent='Copied!';setTimeout(function(){b.textContent='Copy';},1500);}});}});
$('sz-ai-hist-toggle')?.addEventListener('click',function(){showDraftHistory=!showDraftHistory;render();});
panelEl.querySelectorAll('[data-histidx]').forEach(function(b){b.addEventListener('click',function(){var idx=parseInt(b.dataset.histidx);var d=S.ai.draftHistory[idx];if(d)insertIntoEditor(d.result);});});
// Chat
$('sz-ai-chat-input')?.addEventListener('input',function(e){S.ai.chatInput=e.target.value;});
$('sz-ai-chat-input')?.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('sz-ai-chat-send')?.click();}});
$('sz-ai-chat-send')?.addEventListener('click',async function(){var input=$('sz-ai-chat-input')?.value.trim();if(!input)return;S.ai.chatHistory.push({role:'user',content:input});S.ai.chatInput="";S.ai.loading=true;S.ai.error="";render();try{var result=await callZeenieAI(input,"chat");S.ai.chatHistory.push({role:'assistant',content:result});}catch(e){S.ai.chatHistory.push({role:'assistant',content:'Error: '+e.message});}finally{S.ai.loading=false;save();render();}});
$('sz-ai-chat-clear')?.addEventListener('click',function(){S.ai.chatHistory=[];S.ai.chatInput="";save();render();});
// Settings AI
$('sz-ai-save')?.addEventListener('click',function(){var k=$('sz-ai-key').value.trim();if(k){S.ai.apiKey=k;save();var b=$('sz-ai-save');if(b){b.textContent='Saved!';setTimeout(function(){b.textContent='Save';},1500);}}});
$('sz-ai-sign')?.addEventListener('input',function(e){S.ai.signOff=e.target.value;save();});
// Triage
$('sz-detect')?.addEventListener('click',autoDetect);
panelEl.querySelectorAll('[data-shift]').forEach(function(b){b.addEventListener('click',function(){var s=b.dataset.shift;var i=S.shifts.indexOf(s);if(i>-1){if(S.shifts.length>1)S.shifts.splice(i,1);}else S.shifts.push(s);sug=null;save();render();});});
$('sz-startfrom')?.addEventListener('change',function(ev){var name=ev.target.value;if(!name)return;var idx=S.queue.indexOf(name);if(idx>-1){S.queue=[...S.queue.slice(idx),...S.queue.slice(0,idx)];sug=null;save();render();if(dBin||dInbox)autoDetect();}});
$('sz-assign')?.addEventListener('click',function(){if(sug)assign(sug.agent,sug.bin,sug.isPriority);});
$('sz-skip')?.addEventListener('click',skip);
$('sz-dismiss')?.addEventListener('click',function(){sug=null;render();});
$('sz-nobin-dismiss')?.addEventListener('click',function(){noBinAlert=null;render();});
$('sz-nobin-assign')?.addEventListener('click',function(){noBinAlert=null;sug=findNextAny();render();});
panelEl.querySelectorAll('[data-rv]').forEach(function(b){b.addEventListener('click',function(){if(confirm('Unassign?'))unassign(parseInt(b.dataset.rv));});});
// Roster
$('sz-search')?.addEventListener('input',function(ev){S.rosterSearch=ev.target.value;render();setTimeout(function(){var i=$('sz-search');if(i){i.focus();i.selectionStart=i.selectionEnd=i.value.length;}},0);});
panelEl.querySelectorAll('[data-sg]').forEach(function(el){el.addEventListener('click',function(){S.collapsedShifts[el.dataset.sg]=!S.collapsedShifts[el.dataset.sg];render();});});
panelEl.querySelectorAll('[data-ar]').forEach(function(cb){cb.addEventListener('change',function(){var n=cb.dataset.ar;if(S.queue.includes(n))S.queue=S.queue.filter(function(z){return z!==n;});else S.queue.push(n);save();render();});});
panelEl.querySelectorAll('[data-sga]').forEach(function(b){b.addEventListener('click',function(){S.agents.filter(function(a){return a.Shift===b.dataset.sga;}).forEach(function(a){if(!S.queue.includes(a.Agent))S.queue.push(a.Agent);});save();render();});});
panelEl.querySelectorAll('[data-sgn]').forEach(function(b){b.addEventListener('click',function(){var ns=S.agents.filter(function(a){return a.Shift===b.dataset.sgn;}).map(function(a){return a.Agent;});S.queue=S.queue.filter(function(n){return!ns.includes(n);});save();render();});});
// Settings
panelEl.querySelectorAll('[data-edit]').forEach(function(b){b.addEventListener('click',function(){var a=S.agents.find(function(z){return z.Agent===b.dataset.edit;});if(a){editAg=JSON.parse(JSON.stringify(a));render();}});});
panelEl.querySelectorAll('[data-del]').forEach(function(b){b.addEventListener('click',function(){if(confirm('Remove '+b.dataset.del+'?')){S.agents=S.agents.filter(function(a){return a.Agent!==b.dataset.del;});S.queue=S.queue.filter(function(n){return n!==b.dataset.del;});save();render();}});});
$('sz-add')?.addEventListener('click',function(){editAg={Agent:'',Shift:'1',bins:[]};render();});
$('sz-export')?.addEventListener('click',function(){var d="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(S.agents,null,2));var a=document.createElement('a');a.href=d;a.download="shiftzen_agents.json";a.click();a.remove();});
$('sz-import')?.addEventListener('click',function(){var f=$('sz-ifile')?.files?.[0];if(!f)return alert("Select a file.");if(!confirm("Overwrite?"))return;var r=new FileReader();r.onload=function(ev){try{var j=JSON.parse(ev.target.result);if(Array.isArray(j)){S.agents=j.map(function(a){return{Agent:a.Agent,Shift:String(a.Shift),bins:[...new Set(a.bins||a["SBR Bins"]||[])]};});S.queue=S.agents.map(function(a){return a.Agent;});save();render();}else alert("Invalid.");}catch(ex){alert("Error: "+ex.message);}};r.readAsText(f);});
$('sz-reset')?.addEventListener('click',function(){if(!confirm("Reset all session data?"))return;S.counts={};S.history=[];S.priority=[];S.skips={};S.queue=S.agents.map(function(a){return a.Agent;});sug=null;save();render();});
$('sz-efbk')?.addEventListener('click',function(){editAg=null;render();});
$('sz-efsv')?.addEventListener('click',function(){var name=$('sz-efn')?.value?.trim();var shift=$('sz-efs')?.value?.trim();if(!name)return alert("Name required.");var bins=[];panelEl.querySelectorAll('[data-ebin]:checked').forEach(function(cb){bins.push(cb.dataset.ebin);});S.agents=S.agents.filter(function(a){return a.Agent!==name;});S.agents.push({Agent:name,Shift:shift,bins:bins});if(!S.queue.includes(name))S.queue.push(name);editAg=null;save();render();});
$('sz-ovcls')?.addEventListener('click',function(){showManual=false;render();});
panelEl.querySelector('#sz-ovbg')?.addEventListener('click',function(ev){if(ev.target.id==='sz-ovbg'){showManual=false;render();}});
$('sz-ovsel')?.addEventListener('change',function(ev){var b=$('sz-ovgo');if(b)b.disabled=!ev.target.value;});
$('sz-ovgo')?.addEventListener('click',function(){var n=$('sz-ovsel')?.value;var a=S.agents.find(function(z){return z.Agent===n;});if(a)assign(a,"Manual Assignment",false);});
$('sz-qcls')?.addEventListener('click',function(){showQueue=false;render();});
$('sz-qcan')?.addEventListener('click',function(){showQueue=false;render();});
var qList=$('sz-qlist');
if(qList){var dragIdx=null;qList.querySelectorAll('[data-qi]').forEach(function(item){
item.addEventListener('dragstart',function(ev){dragIdx=parseInt(item.dataset.qi);ev.dataTransfer.effectAllowed='move';item.style.opacity='0.4';});
item.addEventListener('dragend',function(){item.style.opacity='1';dragIdx=null;});
item.addEventListener('dragover',function(ev){ev.preventDefault();ev.dataTransfer.dropEffect='move';});
item.addEventListener('drop',function(ev){ev.preventDefault();var dropIdx=parseInt(item.dataset.qi);if(dragIdx===null||dragIdx===dropIdx)return;var pl2=pool();var names=pl2.map(function(a){return a.Agent;});var dragged=names[dragIdx];names.splice(dragIdx,1);names.splice(dropIdx,0,dragged);var activeNames=pool().map(function(a){return a.Agent;});var others=S.queue.filter(function(n){return!activeNames.includes(n);});S.queue=[...names,...others];save();render();});
});}
$('sz-qsav')?.addEventListener('click',function(){showQueue=false;save();render();});
};

function waitForIntercom(){var convPage=document.querySelector('.inbox2__conversation-page');if(convPage){load(function(){injectPanel();render();setTimeout(autoDetect,2000);mo.observe(document.body,{childList:true,subtree:true,characterData:true});});}else{setTimeout(waitForIntercom,1500);}}
chrome.runtime.onMessage.addListener(function(msg){if(msg.action==='togglePanel'){S.visible=!S.visible;save();updateVisibility();}});
waitForIntercom();
})();
