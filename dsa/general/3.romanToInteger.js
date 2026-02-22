function RomanToInteger(s) {
    const hashValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }

    let result = 0;
    let i = 0;

    while (i < s.length) {
        if (hashValue[s[i + 1]] > hashValue[s[i]]) {
            result = result + hashValue[`${s[i] + s[i + 1]}`];
            i = i + 2;
        } else {
            result = result + hashValue[s[i]];
            i = i + 1;
        }
    }

    return result;
}

RomanToInteger("III")