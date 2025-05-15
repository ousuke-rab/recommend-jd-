<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>おすすめ女優紹介</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
    }
    .card {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 10px;
      background-color: #f9f9f9;
    }
    .like-btn {
      background-color: #ffcccc;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    input {
      padding: 5px;
      width: 300px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>

  <h1>おすすめ女優紹介</h1>
  <input type="text" id="search" placeholder="名前や作品名で検索">
  <div id="list"></div>

  <script>
    const actresses = [
      { name: "天神羽衣ちゃん（20）", age: 20, work: "START-323 今、の地元愛溢れる次世代スター！ 天神羽衣 AV DEBUT", likes: 0 },
      { name: "一宮るい（21or22）", age: 21, work: "START294 ！華奢な体 一宮るい", likes: 0 },
      { name: "瀬緒凛(21)", age: 21, work: "GNI-004 新人 瀬緒凛 2,710 9", likes: 0 },
      { name: "降矢あすか（21）", age: 21, work: "FSDSS-888 スペシャル 降矢あすか", likes: 0 },
      { name: "浜辺やよい", age: 30, work: "FNS-008スペシャル 浜辺やよい", likes: 7 },
      { name: "天使", age: 30, work: "もえもえ図書室", likes: 6 },
      { name: "篠田ゆう", age: 34, work: "雨の日の告白", likes: 5 },
      { name: "伊東ちなみ", age: 28, work: "恋と予感", likes: 6 },
      { name: "波多野結衣", age: 38, work: "誘惑マンション", likes: 11 },
      {
        name: "関連サイトはこちら。",
        age: "不明",
        work: "新幹線大爆発",
        likes: 0,
        link: "https://ruukrey1412.github.io/RuukRey1234.github.io/"
      }
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

          const workDisplay = a.link
            ? `<a href="${a.link}" target="_blank">${a.work}</a>`
            : a.work;

          const ageDisplay = a.age !== undefined ? `${a.age}歳` : "年齢不明";

          card.innerHTML = `
            <h2>${i + 1}. ${a.name}（${ageDisplay}）</h2>
            <p>代表作：${workDisplay}</p>
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
  </script>

</body>
</html>
