

const accordionBtns = document.querySelectorAll('.nf-qa-btn');

function closeOpenAccords(item) {
    const accordionList = document.querySelectorAll(".nf-qa-answer[data-is-open]");

    for (const accordionDiv of accordionList) {
        const isOpen = accordionDiv.dataset.isOpen;

        // if accordion is open other then one already open then close it 
        if (isOpen === "true" && accordionDiv !== item) {
            accordionDiv.dataset.isOpen = "false"; 
            
        }
    }
}

accordionBtns.forEach((accordionBtn) => {
    accordionBtn.addEventListener('click', (event) => {
        const answerDiv = event.currentTarget.querySelector('.nf-qa-answer');
        
        closeOpenAccords(answerDiv);
        
        answerDiv.dataset.isOpen = answerDiv.dataset.isOpen === "true" ? "false" : "true";   
    })
});


// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
