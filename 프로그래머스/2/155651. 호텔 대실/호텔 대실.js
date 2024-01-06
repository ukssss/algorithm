function getNextTime(endTime) {
    const [hour, min] = endTime.split(":").map(Number);
    return hour * 60 + min + 10;
}

function solution(book_time) {
    const hotel = [];
    
    book_time.sort();
    book_time.forEach(([start, end]) => {
        const [hour, min] = start.split(":").map(Number);
        const startTime = hour * 60 + min;
        const idx = hotel.findIndex((room) => room <= startTime);
        
        if(idx === -1) hotel.push(getNextTime(end));
        else hotel[idx] = getNextTime(end);
    })
    
    return hotel.length;
}