function fibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibo(n - 2) + fibo(n - 1);
    }
}
// Zasada tworzenia kolejnych wyrazów tego ciągu jest prosta - 
// każdy kolejny wyraz tego ciągu jest równy sumie dwóch poprzednich.Dwa początkowe wyrazy to: 0 i 1.