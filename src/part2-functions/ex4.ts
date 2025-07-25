function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[]{
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4], x => x > 2));
console.log(filterArray(["a", "ab", "abc"], str => str.length > 1));