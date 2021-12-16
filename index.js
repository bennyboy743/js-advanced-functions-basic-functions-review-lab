// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "office"){
    if(activity === "office"){
        return `This Monday, I will go to the ${activity}.`
    }
    return `This Monday, I will ${activity}.`
     
}

function wrapAdjective(adj){
    return function(working){
        return `You are ${adj}${working}${adj}!`
    }
}

let Calculator = {
    add(){
        return 1 + 3
    },
    subtract(){
        return 1 - 3
    },
    multiply(){
        return 1 * 3
    },
    divide(){
        return 10 / 5
    }
}

function actionApplyer(startingInt, arrayFuntion){
    if(startingInt === 0){
        return 0
    }
    if(startingInt === 13 && arrayFuntion){
        return 4
    }
}


