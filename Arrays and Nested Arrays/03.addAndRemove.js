function add(arr) {
    let i = 1;
    let result = [];
    for (const line of arr) {
        switch (line) {
            case 'add':
                result.push(i);
                break;
            case 'remove':
                result.pop();
                break;
        }
        i++;
    }
    if (result.length == 0) {
        console.log('Empty');
    } else {
        result.forEach(element => {
            console.log(element);
        });
    }
}
add(['add',
    'add',
    'remove',
    'add',
    'add'
]);