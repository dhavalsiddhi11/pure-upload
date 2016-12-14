function forEach<T>(input: T[], callback: (item: T, index?: number) => void): void {
    if (!input)
        return;
    for (let i = 0; i < input.length; i++) {
        callback(input[i], i);
    }
}
