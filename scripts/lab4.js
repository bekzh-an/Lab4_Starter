function sumValues(num1, num2, add) {
    // validate inputs
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }

    if (add) {
        return num1 + num2;
    } else {
        return false;
    }
}

function discountPrices(prices, discount) {
    // validate inputs
    if (!Array.isArray(prices) || typeof discount !== 'number') {
        return false;
    }

    if (prices.length === 0) {
        return false;
    }

    const discounted = [];

    for (let i = 0; i < prices.length; i++) {
        if (typeof prices[i] !== 'number') {
            return false; // extra safety (usually expected)
        }

        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };