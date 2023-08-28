const product = {
    name:"socks",

    'price tag':1090,

    rating:{stars:4.7,
    count:89},

    func:function functionname(){
        console.log("a function inside object")
    }
};

product.name = "shoes"
console.log(product)
product.type = "inanimate"
console.log(product)
delete product.type
console.log(product["price tag"])

const score ={
    wins:0,
    losses:0,
    ties:0
}



function playGame(playerMove){
    const computerMove = pickComputerMove() 
    let result ="";

    if(playerMove === "scissors"){}
}

if(result === "you win"){score.wins += 1}
else if(result === "you lose"){score.losses+=1}
else if(result === "tie"){score.ties+=1}

//JSON.stringify(object). takes in an objet to return JSON
//JSON.parse(object). turns an object to a JSON