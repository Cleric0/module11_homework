export function repeatWord(word, count) {
let worrd = '';
if(count >= 1 && count <= 10){
for (let i = 1; i <= count; i++){
worrd += word + [+i] + ' ';
}
}else if(count === 0){
worrd += 'вы не можете ввести 0';
}
else{
worrd += 'число вне диапазона';
}return worrd;
}