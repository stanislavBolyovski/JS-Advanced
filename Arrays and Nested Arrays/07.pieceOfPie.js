function piece(arr, start, stop) {

    let first = arr.indexOf(start);
    let last = arr.indexOf(stop);
    console.log(arr.splice(first, last));
}
piece(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'

);