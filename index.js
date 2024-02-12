let number=7;
let namethems=["1) Тема: Производная", "1) Тема: Вероятность"]
let thems=["proizvod", "veroat"]
let index=0;
function view(){
    const answer = document.querySelector(".answer")
    answer.style.display="block"

    const buttonanswer = document.querySelector(".button-answer")
    buttonanswer.style.display="block"

    const answerimg = document.querySelector(".answerimg")
    answerimg.src="problems/"+thems[index]+"/1 ("+number+").jpg"
    
}
function next(){
    
    let zx=Math.floor(Math.random() * 10) + 1;
    
    if(zx>5){
        let rand=Math.floor(Math.random() * 23) + 1;
        index=0
        if (rand%2==0){

        }else{
            rand--
        }
        if(rand==0){
            rand=2;
        }
        number=rand-1;
        console.log(rand)
        const question = document.querySelector(".question")
        question.src="problems/"+thems[index]+"/1 ("+rand+").jpg"
    
        const answer = document.querySelector(".answer")
        answer.style.display="none"
    
        const buttonanswer = document.querySelector(".button-answer")
        buttonanswer.style.display="none"
        
        const head = document.querySelector(".head")
        head.style.display="none"

    }else{
        let rand=Math.floor(Math.random() * 2) + 1;
        index=1
        if (rand%2==0){

        }else{
            rand--
        }
        if(rand==0){
            rand=2;
        }
        number=rand-1;
        console.log(rand)
        const question = document.querySelector(".question")
        question.src="problems/"+thems[index]+"/1 ("+rand+").jpg"
        
        const answer = document.querySelector(".answer")
        answer.style.display="none"
    
        const buttonanswer = document.querySelector(".button-answer")
        buttonanswer.style.display="none" 
    }
    
}