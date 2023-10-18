function solution(phone_book) {
    let status = true;
    phone_book.sort();

    for (let i = 0; i < phone_book.length - 1; i++) {
        let prefix = phone_book[i + 1].substr(0, phone_book[i].length);
        if (phone_book[i] === prefix) {
            return false;
        }
    }

    return status;
}