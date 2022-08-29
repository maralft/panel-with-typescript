const Global = {
    formatPrice(value) {
        if (value === undefined)
            return '-';
        if (isNaN(value))
            return value;

        value = value.toString();
        const pricision = value.split('.')[1];
        const val = parseFloat(value.split('.')[0]).toFixed(0).replace('.', ',');
        const integer = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return integer + (pricision !== undefined ? '.' + pricision : '');
    },
    farsiNumbersToEnglish(input) {
        const num_dic = {
            '۰': '0',
            '۱': '1',
            '۲': '2',
            '۳': '3',
            '۴': '4',
            '۵': '5',
            '۶': '6',
            '۷': '7',
            '۸': '8',
            '۹': '9',
        };
        return input.replace(/[۰-۹]/g, function (w) {
            return num_dic[w]
        });
    },

    _commaSeparateNumber(val) {
        if (val) while (/(\d+)(\d{3})/.test(val.toString())) {
            val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
        }
        return val;
    },

    _checkIranianNationalCode(nationalCode) {
        const isValidIranianNationalCode = (input) => {
            if (!/^\d{10}$/.test(input))
                return false;

            const check = parseInt(input[9]);
            let sum = 0;
            for (let i = 0; i < 9; ++i)
                sum += parseInt(input[i]) * (10 - i);
            sum %= 11;

            return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
        };

        return !isValidIranianNationalCode(nationalCode);
    }
};
export default Global;
