var pinyinConverter = require("pinyin");

var hanziArray = ["布丁", "是", "在", "無聊", "的", "一種", "不能", "吃", "的", "甜點"]


function convertToPinyin(hanzi, pinyinConverter) {    
    return pinyinConverter(hanzi).join("")
}

function hanziArrayToPinyinSentence(hanziArray) {
    var pinyinSentence = ""
    for (i = 0; i < hanziArray.length; i++) {
        pinyinSentence += convertToPinyin(hanziArray[i],pinyinConverter) + " "; 
    }
    return pinyinSentence
    
}

console.log(hanziArrayToPinyinSentence(hanziArray))



