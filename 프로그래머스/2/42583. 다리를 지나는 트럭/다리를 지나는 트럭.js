function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({ length: bridge_length }, () => 0);
    let cnt = 0;

    while (true) {
        cnt++;
        bridge.shift();
        let total = bridge.reduce((acc, cur) => acc + cur, 0);

        if (total + truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            bridge.push(truck);
        }

        if (bridge.length !== bridge_length) {
            bridge.push(0);
        }

        total = bridge.reduce((acc, cur) => acc + cur, 0);
        if (total === 0 && truck_weights.length === 0) {
            return cnt;
        }
    }
}