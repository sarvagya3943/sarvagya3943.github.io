var $output = $(".output");
var $display = $(".display");
var timer;
var coord = ["t","rt","lt","b","rb","lb","l","r"];
var animations = ["bounce","tada","rubberBand","shake","wobble","swing","jello"];
var x;
function modulo(a,b,p){
    var ans = 1;
    while(b>0)
    {
        if(b%2==1){
          ans = ans * a ;
          ans = ans % p;
        }
        a = a*a;
        a = a%p;
        b = b>>1;
    }
    return ans;
}
function isPrime(p){
  if(p==1)return false;
  if(p==2)return true;
  if(p%2==0)return false;
  var iter = 10;
  for(var i=0;i<iter;i++){
    var a = Math.floor(Math.random()*(p-1)) + 1;
    if(modulo(a,p-1,p)!=1)
    {
      return false;
    }
  }
  return true;
}
function isPrimee(n){
  var i=2;
  if(n==1)return false;
  if(n<4)return true;
  while(i<(Math.floor(Math.sqrt(n)))+1){
    if(n%i===0)return false;
    i++;
  }
  return true;
}

function outputPrime(n,c){
  if(n){
    $output.append("<i class='prime" + c + "'>" + n +"</i>");
  }
}
function outputNormal(n){
  if(n){
    $output.append("<i>" + n + "</i>");
  }
}
function display(n,prime,c){
  var $temp,pos;
  if(n){
    $display.text(n);
    console.log(arguments);
    if(prime){
      x = Math.floor(Math.random()*animations.length);
      $("h1").addClass(animations[x]);
      pos = Math.floor(Math.random()*coord.length);
      $temp = $display.clone().addClass("prime c" + c).insertAfter($display);
      setTimeout(function(){      $temp.addClass("out").addClass(coord[pos]);},10);
      setTimeout(function(){
        $temp.remove();
        $("h1").removeClass(animations[x]);
      },1200);

    }
  }
}
var n=0,work,scroll,paused=true;
function calcPrimes(){
  var c,p;
  clearInterval(work);
  work = setInterval(function(){
    c = Math.floor(Math.random()*6);
    p = isPrime(n);
    if(!p){
      outputNormal(n);
      display(n,p,c);
    }
    else{
      outputPrime(n,c);
      display(n,p,c);
    }

    n++;
  },30);
}
function pauseWork(){
  clearInterval(work);
}
function scrollWindow(){
  scroll = setInterval(function(){
    $(".body").animate({
      "scrollTop": $("body").height()-80
    },200);
  },2000);
}
function pauseScroll(){
  clearInterval(scroll);
}
$(".control").on("click",function(){
  if(paused)
    {
      scrollWindow();
      calcPrimes();
      $(".control").addClass("play").removeClass("pause");
    }
  else{
    pauseScroll();
    pauseWork();
    $(".control").addClass("pause").removeClass("play");
  }
  paused = !paused;
}).trigger("click");
