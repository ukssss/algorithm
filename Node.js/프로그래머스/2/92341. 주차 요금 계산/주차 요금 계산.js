function calculateFee(time, dMin, dFee, uMin, uFee) {
    if (time <= dMin) return dFee;
    return dFee + Math.ceil((time - dMin) / uMin) * uFee;
}

function solution(fees, records) {
    const [dMin, dFee, uMin, uFee] = fees;
    const parking = {};
    const timeResult = {};
    const feeResult = {};
    
    records.forEach((record) => {
        const [time, car, status] = record.split(" ");
        const [hour, min] = time.split(":").map(Number);
        const totalTime = hour * 60 + min;
        
        if (status === "IN") {
            parking[car] = totalTime;
        } else {
            const parkedTime = totalTime - parking[car];
            timeResult[car] = (timeResult[car] || 0) + parkedTime;
            delete parking[car];
        }
    })
    
    for (const car in parking) {
        const parkedTime = (23 * 60 + 59) - parking[car];
        timeResult[car] = (timeResult[car] || 0) + parkedTime;
        delete parking[car];
    }
    
    for (const car in timeResult) {
        const totalTime = timeResult[car];
        feeResult[car] = (feeResult[car] || 0) + calculateFee(totalTime, dMin, dFee, uMin, uFee);
        delete timeResult[car];
    }
    
    return Object.entries(feeResult).sort(([a, ], [b, ]) => a - b).map((e) => e[1]);
}