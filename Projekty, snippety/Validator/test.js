function steamrollArray(arr) {
    // I'm a steamroller, baby
    console.log(arr);
    var newa = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let changed = arr[i].join(" ");
            newa.push(changed);
        } else {
            newa.push(arr[i]);
        }
    }
    console.log(newa);
    newa = newa.join("").replace(" ", "");
    newa = newa.split("").map(e => {
        if (e == parseInt(e)) return parseInt(e);
        return e;
    });
    // newa = newa.map(e => parseInt(e));
    console.log(newa);
    return arr;
}

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
