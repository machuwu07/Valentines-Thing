const win = document.getElementById("window");

// Clock
function updateTime() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();

  if (m < 10) m = "0" + m;

  document.getElementById("time").textContent =
    h + ":" + m;
}

setInterval(updateTime, 1000);
updateTime();

function show(content) {
  win.style.display = "flex";
  win.innerHTML = `
    <div class="window-box">
      ${content}
      <br><br>
      <button onclick="closeWin()">Close</button>
    </div>
  `;
}

function closeWin() {
  win.style.display = "none";
}

/* Apps */

function openMail() {
  show(`
    <h3>📩 Mail</h3>
    <p>I am really happy we met and we get along so well and we still in each other lives after all this time. No matter what we go through i know we will always be there for each other and just know nobody will be more boyfriend coded for you :D <3 </p>
  `);
}

function openPhotos() {
  show(`
    <h3>📁 Photos</h3>
    <p>No Photos Found, Take More Immediately </p>
  `);
}

function openGame() {
  show(`
    <h3>🎮 Game</h3>
    <p>it was too hard to coded a mini game so just send me a pool request on imessage and ill cook you ez 🎱</p>
  `);
}

function openNote() {
  show(`
    <h3>📝 Note</h3>
    <p> well this was supposed to be me asking you to be my valentines but you already said yes (i kicked my feet and smiled when you said yes) so instead heres a poem:uhhh roses are red and blue and white and black, we might be friends but i think we could still crack.</p>
  `);
}

function openStart() {
  show(`
    <h3>🌸 Start Menu</h3>
    <p>Why you move fass and click this stupes, click something else eh</p>
  `);
}

