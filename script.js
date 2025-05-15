const actresses = [
  { name: "天神羽衣ちゃん（20）", age: 20, work: "START-323 今、の地元愛溢れる次世代スター！ 天神羽衣 AV DEBUT", likes: 0 },
  { name: "一宮るい（21or22）", age: 21, work: "START294 ！華奢な体 一宮るい", likes: 0 },
  { name: "瀬緒凛(21)", age: 21, work: "GNI-004 新人 瀬緒凛 2,710 9", likes: 0 },
  { name: "降矢あすか（21）", age: 21, work: "FSDSS-888 スペシャル 降矢あすか", likes: 0 },
  { name: "浜辺やよい", age: 30, work: "FNS-008スペシャル 浜辺やよい", likes: 7 },
  { name: "天使もえ", age: 30, work: "もえもえ図書室", likes: 6 },
  { name: "篠田ゆう", age: 34, work: "雨の日の告白", likes: 5 },
  { name: "伊東ちなみ", age: 28, work: "恋と予感", likes: 6 },
  { name: "波多野結衣", age: 38, work: "誘惑マンション", likes: 11 },
  { name: "涼森れむ", age: 26, work: "放課後プレイ", likes: 7 }
];

const list = document.getElementById("list");
const search = document.getElementById("search");

function renderList() {
  const keyword = search.value.toLowerCase();
  list.innerHTML = "";

  actresses
    .filter(a =>
      a.name.toLowerCase().includes(keyword) ||
      a.work.toLowerCase().includes(keyword)
    )
    .sort((a, b) => b.likes - a.likes)
    .forEach((a, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${i + 1}. ${a.name}（${a.age}歳）</h2>
        <p>代表作：${a.work}</p>
        <button class="like-btn" onclick="like('${a.name}')">👍 ${a.likes}</button>
      `;
      list.appendChild(card);
    });
}

function like(name) {
  const a = actresses.find(a => a.name === name);
  if (a) {
    a.likes++;
    renderList();
  }
}

search.addEventListener("input", renderList);
renderList();
