function solution(msg) {
    const result = [];
    const dictionary = {};
    let wordIdx = 1;
    
    for (let i = 65; i < 65 + 26; i++) {
        dictionary[String.fromCharCode(i)] = wordIdx++;
    }
    
    const msgs = msg.split("");
    let msgsIdx = 0;
    let msgString = '';
    
    while (msgs.length !== msgsIdx) {
        msgString = msgString.concat(msgs[msgsIdx]);
        
        if (dictionary[msgString]) msgsIdx++;
        else {
            result.push(dictionary[msgString.slice(0, msgString.length - 1)]);
            dictionary[msgString] = wordIdx++;
            msgString = '';
        }
        
        if (msgs.length === msgsIdx) {
            result.push(dictionary[msgString]);
        }
    }
    
    return result;
}