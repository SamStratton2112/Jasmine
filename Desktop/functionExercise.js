//question 1
function countDown(num){
  let numDecrement = setInterval(function(){
    num--;
    if (num <= 0){
      clearInterval(numDecrement);
      console.log('Done!');
    }
    else{
      console.log(num);
    }
  }, 1000)
  }


//question 2
function randomGame(){
  let attempt= 0;
  let num;
  let attempts= setInterval(function(){
    num = Math.random()
    attempt++;
    if(num>.75){
    clearInterval(attempts)
    console.log(attempt+' attempt(s)');
    }
  }, 1000);
}

function calAvrg(nums){
  for(let i=0; i<=nums.length; i++){
    let total =0
    if(arr[i]!== 0){
      total += arr[i]
    }
  }
}