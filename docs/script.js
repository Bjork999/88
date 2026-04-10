// ============================================================
// 花札 八八 計算機 - script.js
// ============================================================

// === カードデータ（全48枚） ===
const CARDS = [
  // 1月 - 松 (Pine)
  { id: 0,  month: 1,  monthName: "松",   name: "松に鶴",       type: "bright", points: 20, ribbonType: null,  emoji: "🏯" },
  { id: 1,  month: 1,  monthName: "松",   name: "松に赤短",     type: "ribbon", points: 5,  ribbonType: "aka", emoji: "🎋" },
  { id: 2,  month: 1,  monthName: "松",   name: "松のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌲" },
  { id: 3,  month: 1,  monthName: "松",   name: "松のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌲" },

  // 2月 - 梅 (Plum)
  { id: 4,  month: 2,  monthName: "梅",   name: "梅に鶯",       type: "animal", points: 10, ribbonType: null,  emoji: "🐦" },
  { id: 5,  month: 2,  monthName: "梅",   name: "梅に赤短",     type: "ribbon", points: 5,  ribbonType: "aka", emoji: "🎋" },
  { id: 6,  month: 2,  monthName: "梅",   name: "梅のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌸" },
  { id: 7,  month: 2,  monthName: "梅",   name: "梅のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌸" },

  // 3月 - 桜 (Cherry)
  { id: 8,  month: 3,  monthName: "桜",   name: "桜に幕",       type: "bright", points: 20, ribbonType: null,  emoji: "🎪" },
  { id: 9,  month: 3,  monthName: "桜",   name: "桜に赤短",     type: "ribbon", points: 5,  ribbonType: "aka", emoji: "🎋" },
  { id: 10, month: 3,  monthName: "桜",   name: "桜のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌸" },
  { id: 11, month: 3,  monthName: "桜",   name: "桜のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌸" },

  // 4月 - 藤 (Wisteria)
  { id: 12, month: 4,  monthName: "藤",   name: "藤にホトトギス", type: "animal", points: 10, ribbonType: null,  emoji: "🐦" },
  { id: 13, month: 4,  monthName: "藤",   name: "藤に短冊",     type: "ribbon", points: 5,  ribbonType: "tan", emoji: "📜" },
  { id: 14, month: 4,  monthName: "藤",   name: "藤のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "💜" },
  { id: 15, month: 4,  monthName: "藤",   name: "藤のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "💜" },

  // 5月 - 菖蒲 (Iris)
  { id: 16, month: 5,  monthName: "菖蒲", name: "菖蒲に八橋",   type: "animal", points: 10, ribbonType: null,  emoji: "🌉" },
  { id: 17, month: 5,  monthName: "菖蒲", name: "菖蒲に短冊",   type: "ribbon", points: 5,  ribbonType: "tan", emoji: "📜" },
  { id: 18, month: 5,  monthName: "菖蒲", name: "菖蒲のカス①",  type: "chaff",  points: 1,  ribbonType: null,  emoji: "💠" },
  { id: 19, month: 5,  monthName: "菖蒲", name: "菖蒲のカス②",  type: "chaff",  points: 1,  ribbonType: null,  emoji: "💠" },

  // 6月 - 牡丹 (Peony)
  { id: 20, month: 6,  monthName: "牡丹", name: "牡丹に蝶",     type: "animal", points: 10, ribbonType: null,  emoji: "🦋" },
  { id: 21, month: 6,  monthName: "牡丹", name: "牡丹に青短",   type: "ribbon", points: 5,  ribbonType: "ao",  emoji: "📘" },
  { id: 22, month: 6,  monthName: "牡丹", name: "牡丹のカス①",  type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌺" },
  { id: 23, month: 6,  monthName: "牡丹", name: "牡丹のカス②",  type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌺" },

  // 7月 - 萩 (Bush Clover)
  { id: 24, month: 7,  monthName: "萩",   name: "萩に猪",       type: "animal", points: 10, ribbonType: null,  emoji: "🐗" },
  { id: 25, month: 7,  monthName: "萩",   name: "萩に短冊",     type: "ribbon", points: 5,  ribbonType: "tan", emoji: "📜" },
  { id: 26, month: 7,  monthName: "萩",   name: "萩のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌿" },
  { id: 27, month: 7,  monthName: "萩",   name: "萩のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌿" },

  // 8月 - 芒 (Pampas Grass)
  { id: 28, month: 8,  monthName: "芒",   name: "芒に月",       type: "bright", points: 20, ribbonType: null,  emoji: "🌕" },
  { id: 29, month: 8,  monthName: "芒",   name: "芒に雁",       type: "animal", points: 10, ribbonType: null,  emoji: "🦆" },
  { id: 30, month: 8,  monthName: "芒",   name: "芒のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌾" },
  { id: 31, month: 8,  monthName: "芒",   name: "芒のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌾" },

  // 9月 - 菊 (Chrysanthemum)
  { id: 32, month: 9,  monthName: "菊",   name: "菊に盃",       type: "animal", points: 10, ribbonType: null,  emoji: "🍶" },
  { id: 33, month: 9,  monthName: "菊",   name: "菊に青短",     type: "ribbon", points: 5,  ribbonType: "ao",  emoji: "📘" },
  { id: 34, month: 9,  monthName: "菊",   name: "菊のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌼" },
  { id: 35, month: 9,  monthName: "菊",   name: "菊のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🌼" },

  // 10月 - 紅葉 (Maple)
  { id: 36, month: 10, monthName: "紅葉", name: "紅葉に鹿",     type: "animal", points: 10, ribbonType: null,  emoji: "🦌" },
  { id: 37, month: 10, monthName: "紅葉", name: "紅葉に青短",   type: "ribbon", points: 5,  ribbonType: "ao",  emoji: "📘" },
  { id: 38, month: 10, monthName: "紅葉", name: "紅葉のカス①",  type: "chaff",  points: 1,  ribbonType: null,  emoji: "🍁" },
  { id: 39, month: 10, monthName: "紅葉", name: "紅葉のカス②",  type: "chaff",  points: 1,  ribbonType: null,  emoji: "🍁" },

  // 11月 - 柳 (Willow)
  { id: 40, month: 11, monthName: "柳",   name: "柳に小野道風",  type: "bright", points: 20, ribbonType: null,  emoji: "☔" },
  { id: 41, month: 11, monthName: "柳",   name: "柳に燕",       type: "animal", points: 10, ribbonType: null,  emoji: "🐦" },
  { id: 42, month: 11, monthName: "柳",   name: "柳に短冊",     type: "ribbon", points: 5,  ribbonType: "tan", emoji: "📜" },
  { id: 43, month: 11, monthName: "柳",   name: "柳のカス",     type: "chaff",  points: 1,  ribbonType: null,  emoji: "⚡" },

  // 12月 - 桐 (Paulownia)
  { id: 44, month: 12, monthName: "桐",   name: "桐に鳳凰",     type: "bright", points: 20, ribbonType: null,  emoji: "🔥" },
  { id: 45, month: 12, monthName: "桐",   name: "桐のカス①",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🍂" },
  { id: 46, month: 12, monthName: "桐",   name: "桐のカス②",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🍂" },
  { id: 47, month: 12, monthName: "桐",   name: "桐のカス③",    type: "chaff",  points: 1,  ribbonType: null,  emoji: "🍂" },
];

// 月ごとの色
const MONTH_COLORS = {
  1:  { bg: "#2d5a27", text: "#fff" },  // 松
  2:  { bg: "#c41e3a", text: "#fff" },  // 梅
  3:  { bg: "#ffb7c5", text: "#333" },  // 桜
  4:  { bg: "#8b5cf6", text: "#fff" },  // 藤
  5:  { bg: "#6366f1", text: "#fff" },  // 菖蒲
  6:  { bg: "#dc2626", text: "#fff" },  // 牡丹
  7:  { bg: "#db2777", text: "#fff" },  // 萩
  8:  { bg: "#f59e0b", text: "#333" },  // 芒
  9:  { bg: "#7c3aed", text: "#fff" },  // 菊
  10: { bg: "#ea580c", text: "#fff" },  // 紅葉
  11: { bg: "#65a30d", text: "#fff" },  // 柳
  12: { bg: "#1e3a5f", text: "#fff" },  // 桐
};

// 月名（日本語）
const MONTH_NAMES = {
  1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月",
  7: "七月", 8: "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月",
};

// 札種の日本語ラベル
const TYPE_LABELS = {
  bright: "光",
  animal: "種",
  ribbon: "短冊",
  chaff: "カス",
};

// === アプリケーション状態 ===
let currentMode = "teyaku"; // "teyaku" | "bafuda"
let selectedCards = [];      // 手役版の選択 or 場札版の場札選択
let selectedCaptured = [];   // 場札版の取り札選択
let selectionTarget = "field"; // 場札版: "field" | "captured"

// === 初期化 ===
document.addEventListener("DOMContentLoaded", init);

function init() {
  renderCardGrid();
  attachEventListeners();
  updateUI();
}

// === カードグリッド描画 ===
function renderCardGrid() {
  const grid = document.getElementById("card-grid");
  grid.innerHTML = "";

  // 月ヘッダー行
  const headerRow = document.createElement("div");
  headerRow.className = "grid-row header-row";
  for (let m = 1; m <= 12; m++) {
    const header = document.createElement("div");
    header.className = "month-header";
    header.style.backgroundColor = MONTH_COLORS[m].bg;
    header.style.color = MONTH_COLORS[m].text;
    header.textContent = `${MONTH_NAMES[m]} ${CARDS.find(c => c.month === m).monthName}`;
    headerRow.appendChild(header);
  }
  grid.appendChild(headerRow);

  // カード行（最大4行）
  for (let row = 0; row < 4; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "grid-row";
    for (let m = 1; m <= 12; m++) {
      const monthCards = CARDS.filter(c => c.month === m);
      if (row < monthCards.length) {
        const card = monthCards[row];
        const cardEl = createCardElement(card);
        rowDiv.appendChild(cardEl);
      } else {
        // 空セル（その月にカードが足りない場合）
        const empty = document.createElement("div");
        empty.className = "card-cell empty";
        rowDiv.appendChild(empty);
      }
    }
    grid.appendChild(rowDiv);
  }
}

function createCardElement(card) {
  const el = document.createElement("div");
  el.className = `card-cell card card-type-${card.type}`;
  el.dataset.cardId = card.id;
  el.style.setProperty("--month-bg", MONTH_COLORS[card.month].bg);
  el.style.setProperty("--month-text", MONTH_COLORS[card.month].text);

  // リボンタイプのクラス
  if (card.ribbonType) {
    el.classList.add(`ribbon-${card.ribbonType}`);
  }

  // 点数バッジ
  const badge = document.createElement("span");
  badge.className = "points-badge";
  badge.textContent = `${card.points}点`;
  el.appendChild(badge);

  // 絵文字アイコン
  const emojiDiv = document.createElement("div");
  emojiDiv.className = "card-emoji";
  emojiDiv.textContent = card.emoji;
  el.appendChild(emojiDiv);

  // 札名
  const nameDiv = document.createElement("div");
  nameDiv.className = "card-name";
  nameDiv.textContent = card.name;
  el.appendChild(nameDiv);

  // 札種ラベル
  const typeDiv = document.createElement("div");
  typeDiv.className = "card-type-label";
  typeDiv.textContent = TYPE_LABELS[card.type];
  el.appendChild(typeDiv);

  el.addEventListener("click", () => handleCardClick(card.id));
  return el;
}

// === イベントハンドラ ===
function attachEventListeners() {
  document.getElementById("btn-teyaku").addEventListener("click", () => switchMode("teyaku"));
  document.getElementById("btn-bafuda").addEventListener("click", () => switchMode("bafuda"));
  document.getElementById("btn-reset").addEventListener("click", resetSelection);
  document.getElementById("btn-field-select")?.addEventListener("click", () => switchTarget("field"));
  document.getElementById("btn-captured-select")?.addEventListener("click", () => switchTarget("captured"));
}

function switchMode(mode) {
  currentMode = mode;
  selectedCards = [];
  selectedCaptured = [];
  selectionTarget = "field";
  updateUI();
}

function switchTarget(target) {
  selectionTarget = target;
  updateTargetButtons();
}

function resetSelection() {
  if (currentMode === "bafuda") {
    if (selectionTarget === "field") {
      selectedCards = [];
    } else {
      selectedCaptured = [];
    }
  } else {
    selectedCards = [];
  }
  updateUI();
}

function handleCardClick(cardId) {
  if (currentMode === "teyaku") {
    handleTeyakuClick(cardId);
  } else {
    handleBafudaClick(cardId);
  }
  updateUI();
}

function handleTeyakuClick(cardId) {
  const idx = selectedCards.indexOf(cardId);
  if (idx >= 0) {
    selectedCards.splice(idx, 1);
  } else if (selectedCards.length < 7) {
    selectedCards.push(cardId);
  }
}

function handleBafudaClick(cardId) {
  if (selectionTarget === "field") {
    const idx = selectedCards.indexOf(cardId);
    if (idx >= 0) {
      selectedCards.splice(idx, 1);
    } else if (selectedCards.length < 6) {
      // 取り札に選択されていないことを確認
      if (selectedCaptured.indexOf(cardId) < 0) {
        selectedCards.push(cardId);
      }
    }
  } else {
    const idx = selectedCaptured.indexOf(cardId);
    if (idx >= 0) {
      selectedCaptured.splice(idx, 1);
    } else {
      // 場札に選択されていないことを確認
      if (selectedCards.indexOf(cardId) < 0) {
        selectedCaptured.push(cardId);
      }
    }
  }
}

// === UI更新 ===
function updateUI() {
  updateModeButtons();
  updateTargetButtons();
  updateCardStates();
  updateSelectionInfo();
  updateResults();
}

function updateModeButtons() {
  const btnT = document.getElementById("btn-teyaku");
  const btnB = document.getElementById("btn-bafuda");
  btnT.classList.toggle("active", currentMode === "teyaku");
  btnB.classList.toggle("active", currentMode === "bafuda");

  const targetArea = document.getElementById("target-selector");
  if (targetArea) {
    targetArea.style.display = currentMode === "bafuda" ? "flex" : "none";
  }
}

function updateTargetButtons() {
  const btnF = document.getElementById("btn-field-select");
  const btnC = document.getElementById("btn-captured-select");
  if (btnF && btnC) {
    btnF.classList.toggle("active", selectionTarget === "field");
    btnC.classList.toggle("active", selectionTarget === "captured");
  }
}

function updateCardStates() {
  document.querySelectorAll(".card").forEach(el => {
    const cardId = parseInt(el.dataset.cardId);
    el.classList.remove("selected", "selected-field", "selected-captured");

    if (currentMode === "teyaku") {
      if (selectedCards.includes(cardId)) {
        el.classList.add("selected");
      }
    } else {
      if (selectedCards.includes(cardId)) {
        el.classList.add("selected", "selected-field");
      } else if (selectedCaptured.includes(cardId)) {
        el.classList.add("selected", "selected-captured");
      }
    }
  });
}

function updateSelectionInfo() {
  const info = document.getElementById("selection-info");
  if (currentMode === "teyaku") {
    info.textContent = `手札: ${selectedCards.length} / 7枚`;
  } else {
    info.textContent = `場札: ${selectedCards.length} / 6枚　|　取り札: ${selectedCaptured.length}枚`;
  }
}

// === 判定結果表示 ===
function updateResults() {
  const panel = document.getElementById("results-panel");
  panel.innerHTML = "";

  if (currentMode === "teyaku") {
    renderTeyakuResults(panel);
  } else {
    renderBafudaResults(panel);
  }
}

function renderTeyakuResults(panel) {
  const cards = selectedCards.map(id => CARDS[id]);

  if (cards.length === 0) {
    panel.innerHTML = '<p class="hint">手札を7枚選択してください</p>';
    return;
  }

  if (cards.length < 7) {
    panel.innerHTML = `<p class="hint">あと${7 - cards.length}枚選択してください</p>`;
    return;
  }

  const result = detectTeyaku(cards);

  // 合計点
  const totalPoints = cards.reduce((sum, c) => sum + c.points, 0);

  let html = '<h3>手役判定結果</h3>';

  // Group A
  html += '<div class="result-group">';
  html += '<h4>Group A（月の組み合わせ）</h4>';
  if (result.groupA) {
    html += `<div class="yaku-item hit"><span class="yaku-name">${result.groupA.name}</span><span class="yaku-kan">${result.groupA.kan}貫</span></div>`;
  } else {
    html += '<div class="yaku-item miss">該当なし</div>';
  }
  html += '</div>';

  // Group B
  html += '<div class="result-group">';
  html += '<h4>Group B（札種の組み合わせ）</h4>';
  if (result.groupB) {
    html += `<div class="yaku-item hit"><span class="yaku-name">${result.groupB.name}</span><span class="yaku-kan">${result.groupB.kan}貫</span></div>`;
  } else {
    html += '<div class="yaku-item miss">該当なし</div>';
  }
  html += '</div>';

  // 合計
  const totalKan = (result.groupA?.kan || 0) + (result.groupB?.kan || 0);
  html += '<div class="result-total">';
  html += `<span>合計</span><span class="total-kan">${totalKan}貫</span>`;
  html += '</div>';

  // 手札合計点
  html += `<div class="result-info">手札合計点: ${totalPoints}点</div>`;

  panel.innerHTML = html;
}

function renderBafudaResults(panel) {
  const fieldCards = selectedCards.map(id => CARDS[id]);
  const capturedCards = selectedCaptured.map(id => CARDS[id]);

  let html = '';

  // 場の役
  html += '<h3>場の役判定</h3>';
  if (fieldCards.length === 0) {
    html += '<p class="hint">場札を6枚選択してください</p>';
  } else if (fieldCards.length < 6) {
    html += `<p class="hint">場札: あと${6 - fieldCards.length}枚選択してください</p>`;
  } else {
    const fieldResult = detectFieldYaku(fieldCards);
    html += '<div class="result-group">';
    html += '<h4>場の倍率</h4>';
    html += `<div class="yaku-item hit"><span class="yaku-name">${fieldResult.multiplier.name}</span><span class="yaku-kan">×${fieldResult.multiplier.value}</span></div>`;
    if (fieldResult.kuttsuki) {
      html += `<div class="yaku-item hit"><span class="yaku-name">くっつき</span><span class="yaku-kan">成立</span></div>`;
    }
    html += '</div>';
  }

  // 出来役
  html += '<h3>出来役判定</h3>';
  if (capturedCards.length === 0) {
    html += '<p class="hint">取り札を選択してください（選択対象を「取り札」に切り替え）</p>';
  } else {
    const dekiResult = detectDekiyaku(capturedCards);
    const capturedPoints = capturedCards.reduce((sum, c) => sum + c.points, 0);

    if (dekiResult.length > 0) {
      html += '<div class="result-group">';
      let totalDekiKan = 0;
      dekiResult.forEach(yaku => {
        html += `<div class="yaku-item hit"><span class="yaku-name">${yaku.name}</span><span class="yaku-kan">${yaku.kan}貫</span></div>`;
        totalDekiKan += yaku.kan;
      });
      html += '</div>';

      // 場の倍率適用
      if (fieldCards.length === 6) {
        const fieldResult = detectFieldYaku(fieldCards);
        const finalKan = totalDekiKan * fieldResult.multiplier.value;
        html += '<div class="result-total">';
        html += `<span>出来役合計</span><span class="total-kan">${totalDekiKan}貫</span>`;
        html += '</div>';
        if (fieldResult.multiplier.value > 1) {
          html += '<div class="result-total multiplied">';
          html += `<span>${fieldResult.multiplier.name}適用 (×${fieldResult.multiplier.value})</span><span class="total-kan">${finalKan}貫</span>`;
          html += '</div>';
        }
      } else {
        html += '<div class="result-total">';
        html += `<span>出来役合計</span><span class="total-kan">${totalDekiKan}貫</span>`;
        html += '</div>';
      }
    } else {
      html += '<div class="yaku-item miss">出来役なし</div>';
    }

    // 取り札の点数情報
    const capturedPointDiff = capturedPoints - 88;
    html += `<div class="result-info">取り札合計: ${capturedPoints}点（基準88点との差: ${capturedPointDiff >= 0 ? "+" : ""}${capturedPointDiff}点）</div>`;
  }

  panel.innerHTML = html;
}

// === 手役判定 ===
function detectTeyaku(cards) {
  return {
    groupA: detectGroupA(cards),
    groupB: detectGroupB(cards),
  };
}

// Group A: 月の組み合わせ
function detectGroupA(cards) {
  const monthCounts = {};
  cards.forEach(c => {
    monthCounts[c.month] = (monthCounts[c.month] || 0) + 1;
  });

  // 手四: 同月4枚
  for (const month in monthCounts) {
    if (monthCounts[month] === 4) {
      const monthName = cards.find(c => c.month === parseInt(month)).monthName;
      return { name: `手四（${monthName}）`, kan: 6 };
    }
  }

  // 喰付: 3組以上の同月ペア
  const pairCount = Object.values(monthCounts).filter(c => c >= 2).length;
  if (pairCount >= 3) {
    return { name: "喰付", kan: 4 };
  }

  return null;
}

// Group B: 札種の組み合わせ
function detectGroupB(cards) {
  const brightCount = cards.filter(c => c.type === "bright").length;
  const animalCount = cards.filter(c => c.type === "animal").length;
  const ribbonCount = cards.filter(c => c.type === "ribbon").length;
  const chaffCount = cards.filter(c => c.type === "chaff").length;

  const results = [];

  // 赤: 短冊+カスのみ（光・種なし）、短冊2枚以上
  if (brightCount === 0 && animalCount === 0 && ribbonCount >= 2) {
    results.push({ name: "赤", kan: 7 });
  }

  // 総カス: 7枚全てカス
  if (chaffCount === 7) {
    results.push({ name: "総カス", kan: 6 });
  }

  // 光一: 光1枚 + カス6枚
  if (brightCount === 1 && animalCount === 0 && ribbonCount === 0 && chaffCount === 6) {
    results.push({ name: "光一", kan: 6 });
  }

  // タネ一: 種1枚 + カス6枚
  if (animalCount === 1 && brightCount === 0 && ribbonCount === 0 && chaffCount === 6) {
    results.push({ name: "タネ一", kan: 5 });
  }

  // 短一: 短冊1枚 + カス6枚
  if (ribbonCount === 1 && brightCount === 0 && animalCount === 0 && chaffCount === 6) {
    results.push({ name: "短一", kan: 4 });
  }

  // 最高貫数のものを返す
  if (results.length === 0) return null;
  results.sort((a, b) => b.kan - a.kan);
  return results[0];
}

// === 場の役判定 ===
function detectFieldYaku(cards) {
  const multiplier = detectFieldMultiplier(cards);
  const kuttsuki = detectFieldKuttsuki(cards);
  return { multiplier, kuttsuki };
}

function detectFieldMultiplier(cards) {
  const brights = cards.filter(c => c.type === "bright");
  const brightMonths = new Set(brights.map(c => c.month));

  // 絶場: 柳(11) or 桐(12)
  if (brightMonths.has(11) || brightMonths.has(12)) {
    return { name: "絶場", value: 4 };
  }

  // 大場: 松(1), 桜(3), 芒(8)
  if (brightMonths.has(1) || brightMonths.has(3) || brightMonths.has(8)) {
    return { name: "大場", value: 2 };
  }

  // 小場
  return { name: "小場", value: 1 };
}

function detectFieldKuttsuki(cards) {
  if (cards.length !== 6) return false;
  const monthCounts = {};
  cards.forEach(c => {
    monthCounts[c.month] = (monthCounts[c.month] || 0) + 1;
  });
  const months = Object.keys(monthCounts);
  // 3組の同月ペア
  return months.length === 3 && Object.values(monthCounts).every(c => c === 2);
}

// === 出来役判定 ===
function detectDekiyaku(cards) {
  const results = [];
  const brights = cards.filter(c => c.type === "bright");
  const animals = cards.filter(c => c.type === "animal");
  const ribbons = cards.filter(c => c.type === "ribbon");
  const brightMonths = new Set(brights.map(c => c.month));
  const animalMonths = new Set(animals.map(c => c.month));

  // 光の役（排他的 - 最高のもの1つ）
  if (brights.length === 5) {
    results.push({ name: "五光", kan: 12 });
  } else if (brights.length === 4 && !brightMonths.has(11)) {
    results.push({ name: "四光", kan: 8 });
  } else if (brights.length === 4 && brightMonths.has(11)) {
    results.push({ name: "雨四光", kan: 7 });
  } else if (brights.length >= 3 && !brightMonths.has(11)) {
    results.push({ name: "三光", kan: 6 });
  }

  // 赤短: 松(1)・梅(2)・桜(3)の赤短冊
  const akaRibbons = ribbons.filter(c => c.ribbonType === "aka");
  const akaMonths = new Set(akaRibbons.map(c => c.month));
  if (akaMonths.has(1) && akaMonths.has(2) && akaMonths.has(3)) {
    results.push({ name: "赤短", kan: 7 });
  }

  // 青短: 牡丹(6)・菊(9)・紅葉(10)の青短冊
  const aoRibbons = ribbons.filter(c => c.ribbonType === "ao");
  const aoMonths = new Set(aoRibbons.map(c => c.month));
  if (aoMonths.has(6) && aoMonths.has(9) && aoMonths.has(10)) {
    results.push({ name: "青短", kan: 7 });
  }

  // 猪鹿蝶: 萩に猪(7)・紅葉に鹿(10)・牡丹に蝶(6)
  if (animalMonths.has(7) && animalMonths.has(10) && animalMonths.has(6)) {
    results.push({ name: "猪鹿蝶", kan: 5 });
  }

  // 花見酒: 桜に幕(3) + 菊に盃(9)
  if (brightMonths.has(3) && animalMonths.has(9)) {
    results.push({ name: "花見酒", kan: 5 });
  }

  // 月見酒: 芒に月(8) + 菊に盃(9)
  if (brightMonths.has(8) && animalMonths.has(9)) {
    results.push({ name: "月見酒", kan: 5 });
  }

  // 七短: 短冊7枚以上
  if (ribbons.length >= 7) {
    results.push({ name: "七短", kan: 7 });
  }

  return results;
}
