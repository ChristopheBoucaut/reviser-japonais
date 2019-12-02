// Exporter depuis google doc au format html.
// Exécuter ce JS et récupérer la sortie pour le placer dans ./js/data/vocabulaire.js

// Vire les annotations + les kanjis qui ne sont plus utilisés.
var ignoredKanji = {};
document.querySelectorAll('[id^=cmnt]').forEach(function (el) {
    if (!el.nextSibling) {
        ignoredKanji[el.text] = el.parentElement.parentElement;
    } else {
        if (el.nextSibling.innerText == "pas utilisé") {
            ignoredKanji[el.text].parentElement.outerHTML = ignoredKanji[el.text].parentElement.nextSibling.outerHTML;
        } else {
            ignoredKanji[el.text].querySelector('sup').remove();
        }
    }
});

// Certains mots ne sont pas dans le document.
var wordsGroup = {
    "Les nombres": [
        ["零", "レイ", "0"],
        ["一", "イチ", "1"],
        ["二", "ニ", "2"],
        ["三", "サン", "3"],
        ["四", "よん", "4"],
        ["五", "ゴ", "5"],
        ["六", "ロク", "6"],
        ["七", "なな", "7"],
        ["八", "ハチ", "8"],
        ["九", "キュウ", "9"],
        ["十", "ジュウ", "10"],
        ["はた", "はた", "20"],
        ["百", "ヒャク", "100"],
        ["千", "セン", "1000"],
        ["万", "マン", "10 000"],
        ["億", "オク", "100 000 000"],
        ["兆", "チョウ", "1 000 000 000 000"],
    ],
    "Les jours de la semaine": [
        ["日曜日", "ニチヨウび", "dimanche"],
        ["月曜日", "ゲツヨウび", "lundi"],
        ["火曜日", "カヨウび", "mardi"],
        ["水曜日", "スイヨウび", "mercredi"],
        ["木曜日", "モクヨウび", "jeudi"],
        ["金曜日", "キンヨウび", "vendredi"],
        ["土曜日", "ドヨウび", "samedi"],
    ],
    "Les mois": [
        ["一月", "イチガツ", "janvier"],
        ["二月", "ニガツ", "février"],
        ["三月", "サンガツ", "mars"],
        ["四月", "シガツ", "avril"],
        ["五月", "ゴガツ", "mai"],
        ["六月", "ロクガツ", "juin"],
        ["七月", "シチガツ", "juillet"],
        ["八月", "ハチガツ", "août"],
        ["九月", "クガツ", "septembre"],
        ["十月", "ジュウガツ", "octobre"],
        ["十一月", "ジュウイチガツ", "novembre"],
        ["十二月", "ジュウニガツ", "décembre"],
    ],
    "Le numéro des jours": [
        ["一日", "ついたち", "jour 1"],
        ["二日", "ふつか", "jour 2"],
        ["三日", "みっか", "jour 3"],
        ["四日", "よっか", "jour 4"],
        ["五日", "いつか", "jour 5"],
        ["六日", "むいか", "jour 6"],
        ["七日", "なのか", "jour 7"],
        ["八日", "ようか", "jour 8"],
        ["九日", "ここのか", "jour 9"],
        ["十日", "とおか", "jour 10"],
        ["十一日", "ジュウイチニチ", "jour 11"],
        ["十二日", "ジュウニニチ", "jour 12"],
        ["十三日", "ジュウサンニチ", "jour 13"],
        ["十四日", "ジュウよっか", "jour 14"],
        ["十五日", "ジュウゴニチ", "jour 15"],
        ["十六日", "ジュウロクニチ", "jour 16"],
        ["十七日", "ジュウシチニチ", "jour 17"],
        ["十八日", "ジュウハチニチ", "jour 18"],
        ["十九日", "ジュウキュウニチ", "jour 19"],
        ["二十日", "はつか", "jour 20"],
        ["二十一日", "ニジュウイチニチ", "jour 21"],
        ["二十二日", "ニジュウニニチ", "jour 22"],
        ["二十三日", "ニジュウサンニチ", "jour 23"],
        ["二十四日", "ニジュウよっか", "jour 24"],
        ["二十五日", "ニジュウゴニチ", "jour 25"],
        ["二十六日", "ニジュウロクニチ", "jour 26"],
        ["二十七日", "ニジュウシチニチ", "jour 27"],
        ["二十八日", "ニジュウハチニチ", "jour 28"],
        ["二十九日", "ニジュウキュウニチ", "jour 29"],
        ["三十日", "サンジュウニチ", "jour 30"],
        ["三十一日", "サンジュウイチニチ", "jour 31"],
    ],
    "Lire l'heure": [
        ["時", "ジ", "l'heure"],
        ["午前", "ゴゼン", "avant midi"],
        ["午後", "ゴゴ", "après midi"],
        ["正午", "ショウゴ", "midi"],
        ["真夜中", "まよなか", "minuit"],
        ["分", "フン", "minute"],
        ["半", "ハン", "la demi"],
        ["一分", "イップン", "1 min"],
        ["二分", "ニフン", "2 min"],
        ["三分", "サンプン", "3 min"],
        ["四分", "よんプン", "4 min"],
        ["五分", "ゴフン", "5 min"],
        ["六分", "ロップン", "6 min"],
        ["七分", "ななフン", "7 min"],
        ["八分", "ハップン", "8 min"],
        ["九分", "キュウフン", "9 min"],
        ["十分", "ジュップン", "10 min"],
        ["秒", "ビョウ", "seconde"],
    ],
};
document.querySelectorAll('h1').forEach(function (el) {
    wordsGroup[el.innerText] = [];

    // On cherche le tableau associé.
    var tableEl = document.querySelector('#'+el.id.replace('.', '\\.')+' ~ table');
    tableEl.querySelectorAll('tr').forEach(function (trEl) {
        var group = [];
        trEl.querySelectorAll('td').forEach(function (tdEl) {
            group.push(tdEl.innerText);
        });

        if (group.length < 3) {
            group.unshift(group[0]);
        }

        wordsGroup[el.innerText].push(group);
    });
});

var jsonOutput = `Revision.wordsGroup = (function () {
    'use strict';

    return {\n`;
for (var groupName in wordsGroup) {
    jsonOutput += '        "'+groupName+'": [\n';
    for (var i = 0; i < wordsGroup[groupName].length; i++) {
        var part0 = JSON.stringify(wordsGroup[groupName][i][0].replace(/\s+/, ' '));
        var part1 = JSON.stringify(wordsGroup[groupName][i][1].replace(/\s+/, ' '));
        var part2 = JSON.stringify(wordsGroup[groupName][i][2].replace(/\s+/, ' '));
        jsonOutput += '            ['+part0+', '+part1+', '+part2+'],\n';
    }
    jsonOutput += '        ],\n';
}
jsonOutput += `
    };
})(); `;
