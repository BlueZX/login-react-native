export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export function minLength(min, value) {
    return !(value.length < min);
}
    
export function isAlphaNumeric(value) {
    return /^[a-z0-9]+$/i.test(value);
}
    
export function countWords(words) {
    if (words.length > 0) {
    return words.split(/\b\S+\b/).length - 1;
    } 
    else {
        return 0;
    }
}