function _build_relevant_facts(variables, facts) {
    var allfacts = [];
    for (var variable in variables) {
        var variablefacts = [];
        for (var fact in facts) {
            if (facts[fact].key == variables[variable].split("[")[0]) {
                variablefacts.push(facts[fact]);
            }
        }
        allfacts.push(variablefacts);
    }
    return allfacts
}
function dotProduct(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        var result = [];
        var subElements = dotProduct(arr.slice(1));
        for (var i = 0; i < subElements.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
            result.push(arr[0][j] + subElements[i]);
            }
        }
        return result;
    }
}
function run_test() {
    var array = [['a', 'b', 'c'], ['a', 'b', 'c'], ['a', 'b', 'c']];
    console.log(array);
    var newarray = dotProduct(array);
    console.log(newarray);
    var variables = ['test.1.simple', 'test.2.filtered[stuff]', 'test.3.multiple', 'test.4.notpresent'];
    var facts = [{'key':'test.1.simple', 'value':'irrelevant'},{'key':'test.2.filtered', 'value':'irrelevant'},{'key':'test.3.multiple', 'value':'irrelevant'},
                 {'key':'test.3.multiple', 'value':'irrelevant'},{'key':'test.3.multiple', 'value':'irrelevant'},{'key':'test.3.multiple', 'value':'irrelevant'},
                 {'key':'test.4.notamatch', 'value':'irrelevant'},{'key':'test.4.stillnope', 'value':'irrelevant'}];
    var result = _build_relevant_facts(variables, facts);
    console.log(result);
}
run_test();