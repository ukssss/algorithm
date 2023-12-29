function solution(a, b) {
    let cnt = b;
    
    for(let month = 1; month < a; month++) {
        switch(month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                cnt += 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                cnt += 30;
                break;
            case 2:
                cnt += 29;
                break;
        }
    }
    
    const day = cnt % 7;
    
    switch(day) {
        case 0:
            return "THU";
            break;
        case 1:
            return "FRI";
            break;
        case 2:
            return "SAT";
            break;
        case 3:
            return "SUN";
            break;
        case 4:
            return "MON";
            break;
        case 5:
            return "TUE";
            break;
        case 6:
            return "WED";
            break;
    }
}