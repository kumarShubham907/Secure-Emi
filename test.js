const test = [[123,"shubham",3], [1334,"shubham",3], [1,"shubham",2],[2,"shubham",3]];

const checkValueIfItExistsOrNot = {};
const uniqueArr = [];
test.map((item) => {
    const check = item.toString().substring(1);
    console.log("check",check)
    if(!checkValueIfItExistsOrNot[check.toString()]) {
        checkValueIfItExistsOrNot[check.toString()] = true;
        uniqueArr.push(item);
    }
});

console.log("uniqueArr", uniqueArr);