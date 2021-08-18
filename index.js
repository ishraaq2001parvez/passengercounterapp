let count=0;
function increment(){
	count++;
	document.getElementById("count-el").innerText=count;
}
function save(){
	let saveEl=document.getElementById("save-el");
	saveEl.innerText+=" "+count+" - ";
	document.getElementById("count-el").innerText=0;count=0;
}
function rnd(a,b){
	return Math.floor(Math.random()*(b-a+1))+a;
}
function change(){
	let n1=rnd(0,255),n2=rnd(0,255),n3=rnd(0,255);
	document.body.style.background=`rgba(${n1},${n2},${n3})`;
}



