function solution(book_time) {
    book_time.sort();
    
    const room = [];
    book_time.forEach((e) => {
        const tmp = e[0].split(":");
        const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
        const idx = room.findIndex((e) => e <= startTime);
        
        if(idx === -1) room.push(getNextTime(e[1]));
        else room[idx] = getNextTime(e[1]);
    })
    
    return room.length;
}

function getNextTime(endTime) {
    const next = endTime.split(":");
    return Number(next[0]) * 60 + Number(next[1]) + 10;
}