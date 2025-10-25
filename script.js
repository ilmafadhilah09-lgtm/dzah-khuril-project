// dzah-khuril.js
function goToQuiz(){ document.getElementById('intro').classList.add('hidden'); document.getElementById('quiz').classList.remove('hidden'); }
function finish(){
  document.getElementById('quiz').classList.add('hidden'); document.getElementById('final').classList.remove('hidden');

  const text = `Terima kasih banyak, Dzah Khuril 🌙
Kehadiran Ustadzah selalu memberi pencerahan dan ketenangan.
Setiap nasihat dan ilmu jadi bekal yang sangat berarti.
Semoga Ustadzah diberi kemudahan, barakah, dan sehat selalu.
💜 from your student`;

  const t = document.getElementById('final-text'), ts = document.getElementById('typing-sound'), bg = document.getElementById('bg-music');
  let i=0; t.innerHTML=''; bg.volume=0.32; bg.play();

  function typeWriter(){
    if(i < text.length){ t.textContent += text.charAt(i); ts.currentTime=0; ts.play(); i++; setTimeout(typeWriter,48); }
    else startConfetti();
  }
  typeWriter();
}

function startConfetti(){
  const duration = 6000, end = Date.now() + duration;
  (function frame(){
    confetti({ particleCount:6, spread:60, startVelocity:38, origin:{x:Math.random(), y:Math.random()*0.3}, colors:['#d9baff','#bfa6ff','#ffffff'] });
    if(Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* subtle star particles */
const canvas = document.getElementById('bgCanvas'), ctx = canvas.getContext('2d');
resize(); window.addEventListener('resize', resize);
let stars = Array.from({length:60}, ()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.6+0.6,alpha:Math.random()*0.7+0.2,vy:(Math.random()*0.15+0.05)}));
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s=>{
    ctx.beginPath(); ctx.fillStyle = `rgba(191,166,255,${s.alpha})`; ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
    s.y -= s.vy; if(s.y < -5){ s.y = canvas.height + 5; s.x = Math.random()*canvas.width; }
  });
  requestAnimationFrame(loop);
}
loop();