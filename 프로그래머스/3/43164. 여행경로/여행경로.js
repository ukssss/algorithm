function solution(ticket) {
    let answer = [];
    let ticketCount = ticket.length;

    let withICN = [];
    let withoutICN = [];

    for (let i = 0; i < ticketCount; i++) {
        if (ticket[i][0] === 'ICN') withICN.push(ticket[i]);
        else withoutICN.push(ticket[i]);
    }

    ticket = [...withICN.sort(), ...withoutICN.sort()];

    function bfs(i) {
        let queue = [];
        let visited = [];

        queue.push([ticket[i][1], [ticket[i][0]]]);
        visited.push([i]);

        while (queue.length) {
            let current = queue.shift();
            let checkedVisited = visited.shift();

            if (current[1].length === ticketCount) {
                return (answer = [...current[1], current[0]]);
            }

            ticket.forEach((ticket, index) => {
                if (checkedVisited.includes(index)) return;
                if (ticket[0] === current[0]) {
                    queue.push([ticket[1], [...current[1], ticket[0]]]);
                    visited.push([...checkedVisited, index]);
                }
            });
        }
    }

    for (let i = 0; i < ticketCount; i++) {
        if (answer.length) {
            return answer;
        }
        bfs(i);
    }
}