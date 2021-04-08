var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function numDupDigitsAtMostN(N) {
    var key = 0;
    for (var i = 0; i <= N; i++) {
        if (__spreadArrays(String(i)).length !== Array.from(new Set(__spreadArrays(String(i)))).length) {
            key++;
        }
    }
    return key;
}
;
console.log(numDupDigitsAtMostN(38707));
function numDupDigitsAtMostN2(N) {
    var key = 0;
    var str = String(N);
    var len = str.length;
    if (N <= 10)
        return 0;
    function getNumber(max, res) {
        var len1 = String(+res).length;
        var len2 = Array.from(new Set(__spreadArrays(String(+res)))).length;
        if (len1 !== len2) {
            if (str.indexOf(res) !== 0)
                key += Math.pow(10, len - res.length);
            else
                key += +str.slice(res.length) + 1;
        }
        else {
            if (len - res.length > 1) {
                for (var i = 0; i <= max; i++) {
                    if (str.indexOf(res + i) !== 0)
                        getNumber(9, res + i);
                    else
                        getNumber(+str.slice((res + i).length)[0], res + i);
                }
            }
            else if (len - res.length === 1) {
                key += len1;
            }
        }
    }
    getNumber(+str[0], '');
    if (str.slice(0, -1).length !== Array.from(new Set(__spreadArrays(str.slice(0, -1)))).length) {
        return key - 1;
    }
    else {
        var key1 = 0;
        for (var i = 0; i < str.slice(0, -1).length; i++) {
            if (str[i] > str[str.length - 1]) {
                key1++;
            }
        }
        return key - 1 - key1;
    }
}
;
console.log(numDupDigitsAtMostN2(38707));
