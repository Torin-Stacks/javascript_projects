function isSafe(password){
    const REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,}$/;
    let state = REG.test(password);
    return state;
}
console.log(isSafe("Tiju8$KJKHJHJHJHJHHUU"));