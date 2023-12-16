// code your solution here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}


function mondayWork(schedule = "go to the office"){
  return `This Monday, I will ${schedule}.`
}
function wrapAdjective(flair ="*"){
  return function (pronoun="special"){
    return (`You are ${flair+pronoun+flair}!`)
  }
  
}