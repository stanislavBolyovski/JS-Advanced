function cooking(num, arr) {
    for (const action of arr) {
        switch (action) {
            case 'chop':
                num = num / 2
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num++;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                s
                break;
            case 'fillet':
                num = num - num * 0.2
                console.log(num);
                break;
            default:
                break;
        }
    }
}
cooking('9', ['dice', 'spice', 'chop', 'bake', 'fillet']);