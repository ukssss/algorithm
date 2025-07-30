function solution(priorities, location) {
    const copyPriorities = [...priorities];
    const dataset = priorities.map((priority, index) => ({ priority, index }));
    let currentValue = 1;

    while (dataset.length) {
        const { priority, index } = dataset.shift();
        const copyPriority = copyPriorities.shift();
        const maxPriority = Math.max(...copyPriorities);

        if (priority < maxPriority) {
            dataset.push({ priority, index });
            copyPriorities.push(copyPriority);
        } else {
            if (index === location) {
                return currentValue;
            }

            currentValue++;
        }
    }
}