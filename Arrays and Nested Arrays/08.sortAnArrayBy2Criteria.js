function sortBy(arr) {
    arr = arr
        .sort()
        .sort((a, b) => a.length - b.length);
    console.log(arr.join('\n'));
}
sortBy(['test',
    'Deny',
    'omen',
    'Default'
]);