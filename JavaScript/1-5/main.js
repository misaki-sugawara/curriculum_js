function createJuice(fruits){
    console.log(fruits + "を受け取りました。ジュースにして返します");
    console.log(fruits + "ジュースが届きました。");
    return fruits;
}

let orangejuice = createJuice('みかん');
let grapejuice = createJuice('ぶどう');