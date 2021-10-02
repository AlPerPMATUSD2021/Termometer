function FtoC(F) {
    return C = 5/9*(F-32);
}
console.log(FtoC(5))

function CtoF(C) {
    return F = 9/5 * C + 32;
}
console.log(CtoF(-15))

function FtoK(F) {
    return K = (F - 32) * 5/9 + 273.15;
}
console.log(FtoK(32))

function KtoF(K) {
    return F = (K - 273.15) * 9/5 + 32;
}
console.log(KtoF(273.15))

function CtoK(C) {
    return K = C + 273.15;
}
console.log(CtoK(0))

function KtoC(K) {
    return C = K - 273.15;
}
console.log(KtoC(273.15))