function getTimeString (time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond /60);
    remainingSecond = remainingSecond % 60;
    return `${hour} Hour ${minute} Minute ${remainingSecond} second ago`
}
console.log(getTimeString(4320))

