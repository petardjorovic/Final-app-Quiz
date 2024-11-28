class Question {
    text;
    options;
    correctAnswer;
    category;
    points;
    constructor(text, options, correctAnswer, category, points){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.category = category;
        this.points = points;
    }
}

let questions = [
    new Question("Question 1", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 2", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 3", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 4", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 5", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 6", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 7", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 8", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 9", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
    new Question("Question 10", ["Option 1", "Option 2", "Option 3", "Option 4"], "Option 1", "Category", 10),
];

