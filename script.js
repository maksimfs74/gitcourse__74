var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.getElementById('add__btn').addEventListener('click', ()=>{
   document.getElementById('add__block').style.display = 'flex';
})
document.getElementById('delete__btn').addEventListener('click', ()=>{
   document.getElementById('all-cards').innerHTML = '';
   localStorage.clear();
   contentArray = [];
})
document.getElementById('save__btn').addEventListener('click', ()=> addFlashcard())
document.getElementById('close__btn').addEventListener('click', ()=>{
   document.getElementById('add__block').style.display = 'none';
})


flashcardMaker = (text, delThisIndex) => {
   const flashcard = document.createElement("div");
   const question = document.createElement('h2');
   const answer = document.createElement('h2');
   const del = document.createElement('button');
 
   flashcard.className = 'flashcard';
 
  //  question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
   question.textContent = text.my_question;
  question.className = 'question__list'
   answer.setAttribute("style", "text-align:center; display:none; color:#379683");
   answer.textContent = text.my_answer;
   del.innerHTML = 'delete'
   del.className = "button-17";
   del.addEventListener("click", () => {
     contentArray.splice(delThisIndex, 1);
     localStorage.setItem('items', JSON.stringify(contentArray));
     window.location.reload();
   })
   flashcard.appendChild(del);
   flashcard.appendChild(question);
   flashcard.appendChild(answer);
   
   
 
   flashcard.addEventListener("click", () => {
     if(answer.style.display == "none")
       answer.style.display = "block";
     else
       answer.style.display = "none";
   })
 
   document.querySelector("#all-cards").appendChild(flashcard);
 }
 
 contentArray.forEach(flashcardMaker);




const addFlashcard = () => {
   const question = document.querySelector("#question");
   const answer = document.querySelector("#answer");
 
   let flashcard_info = {
     'my_question' : question.value,
     'my_answer'  : answer.value
   }
 
   contentArray.push(flashcard_info);
   localStorage.setItem('items', JSON.stringify(contentArray));
   flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
   question.value = "";
   answer.value = "";
 }

 console.log('second commit');