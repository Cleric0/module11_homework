export function getMonth(n){
    const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let answer = '';
    if(n >= 1 && n <= 12){
    for (let i = 1; i <= month.length; i++){
    answer += month[n-i];
    return answer;}
    }else if(isNaN(n)){
    return ('it is not a number');
    }else{
    return ('error, but you are still nice');
    }
    }