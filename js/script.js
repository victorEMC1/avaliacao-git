/*
const moveBtn = document.getElementById("moveBtn");


moveBtn.addEventListener("mouseover", function () {

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;


  const btnWidth = moveBtn.offsetWidth;
  const btnHeight = moveBtn.offsetHeight;

  const newLeft = Math.random() * (screenWidth - btnWidth);
  const newTop = Math.random() * (screenHeight - btnHeight);

  moveBtn.style.left = `${newLeft}px`;
  moveBtn.style.top = `${newTop}px`;
});

const addTextBtn = document.getElementById("addTextBtn");
const textContainer = document.getElementById("textContainer");
let messageCount = 0; 

addTextBtn.addEventListener("click", function () {
  messageCount++; 

  const newParagraph = document.createElement("p");

  
  newParagraph.classList.add("new-text");

  
  newParagraph.textContent = `Mensagem #${messageCount}: O JavaScript adicionou este texto!`;

  
  textContainer.appendChild(newParagraph);
});

 */

// Seleciona o botão e o contêiner de texto pelos seus IDs
const addTextBtn = document.getElementById("addTextBtn");
const textContainer = document.getElementById("textContainer");
let messageCount = 0; // Um contador para numerar as mensagens

// Função para adicionar várias mensagens de uma vez usando estrutura de repetição
function adicionarVariasMensagens() {
  for (let i = 0; i < 5; i++) {
    messageCount++;
    const newParagraph = document.createElement("p");
    newParagraph.classList.add("new-text");
    newParagraph.textContent = `Mensagem #${messageCount}: O JavaScript adicionou esta mensagem em um loop!`;
    textContainer.appendChild(newParagraph);
  }
}

// Adiciona o evento ao botão
addTextBtn.addEventListener("click", adicionarVariasMensagens);
