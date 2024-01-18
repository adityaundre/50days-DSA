function reverseString(s) {
    let m=[];
    let rev="";

    for(let i=0;i<s.length;i++){
        m.push(s[i])
    }
    for(let i=0;i<s.length;i++){
        let temp=m.pop();
        rev=rev+temp
    }
    return rev
}

//Another simple way
//let m=s.split("").reverse().join("")
//return m;