function solution(survey, choices) {
    const test = {};
    const types = ["RT", "CF", "JM", "AN"];
    
    types.forEach((type) => type.split("").forEach((char) => test[char] = 0));
    
    choices.forEach((choice, idx) => {
        const [disagree, agree] = survey[idx];
        test[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    })
    
    return types.map(([aType, bType]) => test[aType] < test[bType] ? bType : aType).join("");
}