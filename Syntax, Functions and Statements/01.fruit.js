function fruit(product, weightKg, price) {
    let weightGr = weightKg / 1000;
    console.log(`I need $${weightGr*price.toFixed(2)} to buy ${weightGr} kilograms ${product}.`);
}

fruit('orange', 2500, 1.80);