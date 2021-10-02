function KtoC(k) {
    return c = k - 273.15
}
console.log(KtoC(4));

function CtoK(c) {
    return k = c + 273.15
}
console.log(CtoK(7));

function FtoC(f) {
    return c = ((f - 32) * 5/9) 
}
console.log(FtoC(41));

function CtoF(c) {
    return f = ((c * 9/5) + 32)
}
console.log(CtoF(5))

function KtoF(k) {
    return f = ((k - 273.15) * 9/5 + 32)
}
console.log(KtoF(273.15))

function FtoK(f) {
    return k = ((f - 32) * 5/9 + 273.15)
}
console.log(FtoK(32))
