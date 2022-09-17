const calculateTotal = (obj, total, setTotal, tax, setTax) => {
    let sum = 0;
    obj.map(item => {
        sum += +item.price.replace(' ', '');
    });

    if (sum.toString().length > 4) {
        let resultTotal = sum
            .toString()
            .split('')
            .map((item, index) => index === 1 ? item + ' ' : item)
            .join('');

        total = resultTotal;
        tax = Math.round(sum * 5 / 100).toString();
    } else {
        total = sum;
        tax = Math.round(sum * 5 / 100).toString();
    }

    setTotal(total);
    setTax(tax);
};

export default calculateTotal;