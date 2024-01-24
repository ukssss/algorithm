function solution(record) {
    const result = [];
    const data = {};
    
    record.forEach((content) => {
        const [type, id, name] = content.split(" ");
        
        switch (type) {
            case "Enter":
                data[id] = name;
                result.push(`${id}님이 들어왔습니다.`)
                break;
            case "Leave":
                result.push(`${id}님이 나갔습니다.`)
                break;
            case "Change":
                data[id] = name;
                break;
        }
    })
    
    for (let i = 0; i < result.length; i++) {
        const [id, _] = result[i].split("님이");
        result[i] = result[i].replace(id, data[id]);
    }
    
    return result;
}