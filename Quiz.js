class Quiz {
    questions;
    filteredQuestions;
    totalPointsByCategory = 0;
    correctAnswersSum = 0;
    questionIndex = 0;
    score = 0;
    userAnswers = [];
    constructor(questions){
        this.questions = questions;
    }

    getQuestion(){
        let randQuest = this.randomizeOptions(this.filteredQuestions[this.questionIndex]);
        return randQuest;
    }

    getAllQuestions(){
        for(let i = 0; i < this.userAnswers.length; i++){
            this.filteredQuestions[i].userAnswer = this.userAnswers[i];
        }
        return this.filteredQuestions;
    }

    isEnd(){
        return this.questionIndex === this.filteredQuestions.length;
    }

    questionAnswered(answer){
        if(answer === this.filteredQuestions[this.questionIndex].correctAnswer){
            this.score += this.filteredQuestions[this.questionIndex].points;
            this.correctAnswersSum++;
        }
        this.questionIndex++;
        this.userAnswers.push(answer);

    }

    randomizeOptions(question){
        let copyOptions = [...question.options];
        let randomOptions = [];
        for(let i = 0; i < 4; i++){
            let rand = Math.floor(Math.random()*copyOptions.length);
            randomOptions.push(copyOptions[rand]);
            copyOptions.splice(rand,1);
        }
        question.options = randomOptions;
        return question
    }

    filter(category){
        if(category === "Random"){
            this.filteredQuestions = this.randomizeQuestions(this.questions);
        }else{
            this.filteredQuestions = this.questions.filter(el => el.category === category);
        }
        this.totalPointsByCategory = this.filteredQuestions.reduce((total,el) => total + el.points,0);
    }

    randomizeQuestions(questions){
        let newArr = [];
        while(newArr.length < 5){
            let rand = Math.floor(Math.random()*questions.length);
            if(!newArr.includes(questions[rand])){
                newArr.push(questions[rand]);
            }
        }
        return newArr;
    }

}