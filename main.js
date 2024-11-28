// https://raw.githubusercontent.com/petardjorovic/my_quiz/refs/heads/main/new_data.json

(async function(){

    let quiz = new Quiz(await API.getAllData());
    

    let main = document.querySelector('main');
    let headerH3 = document.querySelector('header h3');
    let options = document.querySelectorAll('.option');
    let footer = document.querySelector('footer');
    let footerH5 = document.querySelector('footer h5');
    let category = document.querySelector('select');
    let points = document.querySelector('#points');
    let correctA = document.querySelector('#correct-answer');
    let questions = document.querySelector('.questions');
    category.addEventListener('change', filterCategory);
    
    function filterCategory(){
        quiz.filter(category.value)
        displayQuestion()
    }

    function displayQuestion(){
        let currentQuestion = quiz.getQuestion();
        footer.innerHTML = `Question ${quiz.questionIndex+1}/${quiz.filteredQuestions.length}`;
        points.innerHTML = "Question points: " + currentQuestion.points;  
        correctA.innerHTML = "Correct answers: " + quiz.correctAnswersSum; 
        headerH3.innerHTML = currentQuestion.text;
        options.forEach((opt,index) => {
            opt.innerHTML = currentQuestion.options[index];
            opt.onclick = userAnswer;
        }) 
    }

    function userAnswer(){
        let answer = this.innerHTML;
        this.classList.add('both');
        let footerHtml = `
            <span>Is that your final answer? &nbsp</span>
            <button id="da">YES</button><span></span>&nbsp &nbsp<button id="ne">NO</button>
        `.trim();
        footer.innerHTML = footerHtml;
        options.forEach(opt => {
            opt.onclick = null;
        })
        let daBtn = document.querySelector('#da');      
        let neBtn = document.querySelector('#ne');
        daBtn.addEventListener('click', function(){
            options.forEach(opt => {
                opt.classList.remove('both');
            }) 
            quiz.questionAnswered(answer);
            if(quiz.isEnd()){
                main.innerHTML = `End of Quiz.You've got ${quiz.correctAnswersSum} correct answers and your
                                score is ${quiz.score} out of a possible ${quiz.totalPointsByCategory}.`;
                headerH3.innerHTML = "";
                correctA.innerHTML = "";
                points.innerHTML = "";
                footer.innerHTML = "";
                displayBtnQuestions();  

            }else{
                displayQuestion(); 
            }
        });
        
        neBtn.addEventListener('click', function(){
            options.forEach(opt => {
                opt.classList.remove('both');
                opt.onclick = userAnswer;
            })
            footer.innerHTML = `Pitanje ${quiz.questionIndex+1}/${quiz.filteredQuestions.length}`;
        }); 
            
    }

    function confirmAnswer(){
        let footerHtml = `
            <span>Da li je to vas konacan odgovor? &nbsp</span>
            <button id="da">Da</button><span></span>&nbsp &nbsp<button id="ne">Ne</button>
        `.trim();
        footer.innerHTML = footerHtml;
        options.forEach(opt => {
            opt.onclick = null;
        })
        let daBtn = document.querySelector('#da');      
        let neBtn = document.querySelector('#ne');
        daBtn.addEventListener('click', function(){
            
        });
        
        neBtn.addEventListener('click', function(){

        });            
    }

    function displayBtnQuestions(){
        let html = "";
        for(let i = 0; i < quiz.questionIndex; i++){
            html += `
                <button data-index="${i}">Question ${i+1}</button>
            `.trim();
        }        
        questions.innerHTML = html;
        let allBtns = document.querySelectorAll('button');
        
        
        allBtns.forEach((btn,i) => btn.addEventListener('click', function(){
            let questions = quiz.getAllQuestions();
            headerH3.innerHTML = questions[i].text;
            main.innerHTML = "";
            options.forEach((opt,index) => {
                opt.innerHTML = questions[i].options[index];
                opt.className = "deactive";
                opt.onclick = null;
                if(questions[i].options[index] === questions[i].correctAnswer){
                    opt.classList.add("correct")
                }
                if(questions[i].options[index] === questions[i].userAnswer){
                    opt.classList.add('both')
                }
                main.appendChild(opt);
            })                    
            
        }))
    }

})()
