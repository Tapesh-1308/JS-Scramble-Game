const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let score = document.querySelector('.score');
let scoreNum = 0;
score.innerHTML = "Score : " + scoreNum;
let play = false;
let newWords = "";
let randWords = "";
let words = ['Python', 'Java', 'Ruby', 'HTML', 'JavaScript', 'C++', 'C#', 'PHP', 'SQL', 'Swift', "CSS", 'ReactJS', 'Angular', 'Android', 'Hacking', 'Linux', 'Windows', 'Microsoft'];

const createWords = () => {
    let randomNum = Math.floor(Math.random() * words.length);
    let newTempWords = words[randomNum];
    return newTempWords
}

const scrambleWords = (arr) => {
    for (let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i+ 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}
btn.addEventListener('click', () => {
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess Me!! : ${randWords}`;
    }
    else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            console.log('correct');
            play = false;
            msg.innerHTML = `Awesome It's Correct. It was ${newWords}`;
            scoreNum += 1;
            score.innerHTML = "Score : " + scoreNum;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else{
            console.log('incorreect');
            msg.innerHTML = `Sorry It's Incorrect. Try Again! ${randWords} `;
            guess.value = "";
        }
    }
    
});
