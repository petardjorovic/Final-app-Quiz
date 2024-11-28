class API {
    static getAllData(){
        return new Promise((resolve,rejected)=>{
            fetch('https://raw.githubusercontent.com/petardjorovic/my_quiz/refs/heads/main/new_data.json')   /// stari 'https://raw.githubusercontent.com/petardjorovic/my_quiz/refs/heads/main/data.json'
            .then(res => (res.json()))
            .then(data => resolve(data))
        })
    }
}