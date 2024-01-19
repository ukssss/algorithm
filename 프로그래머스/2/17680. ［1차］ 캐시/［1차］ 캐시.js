function solution(cacheSize, cities) {
    const q = [];
    let time = 0;
    cities = cities.map((city) => city.toUpperCase());
    cities.forEach((city) => {
        const idx = q.indexOf(city);
        if (cacheSize === 0) {
            time += 5;  
        } else if (idx === -1) {
            if (q.length === cacheSize) {
                q.shift();
                q.push(city);
            } else {
                q.push(city);
            }
            time += 5;
        } else {
            q.splice(idx, 1);
            q.push(city);
            time += 1;
        }
    })
    return time;
}