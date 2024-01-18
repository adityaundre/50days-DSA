function leapYearBasic(N) {

    if(N%4==0 && N%100!=0 || N%400==0 ) {
        return true
    }
    else{
        return false
    }
}
