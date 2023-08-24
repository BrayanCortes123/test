const openChatButton = document.getElementById('openChat');
const closeChatButton = document.getElementById('closeChat');
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessage');
const chatContent = document.getElementById('chatContent');
let Search = document.getElementById("Search");
let seekerCellID = document.getElementById("seekerCellID");
let Salid = document.getElementById("Salid");
let slides = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;

Search.addEventListener("click",function(){
    seekerCellID.classList.add("seekerCell-hidden");
    seekerCellID.classList.remove("seeker-cell");
})

Salid.addEventListener("click",function(){
    seekerCellID.classList.remove("seekerCell-hidden");
    seekerCellID.classList.add("seeker-cell");
})


openChatButton.addEventListener('click', () => {
    chatContainer.style.display = 'block';
});

closeChatButton.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

sendMessageButton.addEventListener('click', () => {
    const userMessage = messageInput.value;
    if (userMessage.trim() === '') return;

    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = userMessage;
    chatContent.appendChild(userMessageDiv);

    setTimeout(() => {
        const assistantMessageDiv = document.createElement('div');
        assistantMessageDiv.classList.add('message', 'assistant-message');
        assistantMessageDiv.textContent = 'Gracias por tu mensaje. ¿Puedo ayudarte con algo más?';
        chatContent.appendChild(assistantMessageDiv);
        
        chatContent.scrollTop = chatContent.scrollHeight;
    }, 1000);

    messageInput.value = '';
});


function showSlide(n) {
 slides[index].classList.remove("active");
 index = (n + slides.length) % slides.length;
 slides[index].classList.add("active");
}

function prevSlide() {
 showSlide(index -1);
}

function nextSlide() {
 showSlide(index +1);
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
