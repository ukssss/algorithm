function solution(order) {
    const container = Array.from({ length: order.length }, (_, idx) => idx + 1);
    const subContainer = [];
    let orderIdx = 0;
    let containerIdx = 0;
    let cnt = 0;

    while (orderIdx < order.length) {
        const orderBox = order[orderIdx];
        if (orderBox === container[containerIdx]) {
            orderIdx++;
            containerIdx++;
            cnt++;
        } else if (orderBox === subContainer[subContainer.length - 1]) {
            subContainer.pop();
            orderIdx++;
            cnt++;
        } else if (container[containerIdx] > orderBox) {
            break;
        } else {
            subContainer.push(container[containerIdx]);
            containerIdx++;
        }
    }

    return cnt;
}