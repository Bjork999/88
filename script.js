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

// === カードイラスト（SVG生成） ===

// ヘルパー: 五弁花
function _f5(cx, cy, r, c) {
  const ps = [[0,-1],[.951,-.309],[.588,.809],[-.588,.809],[-.951,-.309]];
  let s = '';
  ps.forEach(([dx, dy]) => {
    s += `<ellipse cx="${(cx+r*.6*dx).toFixed(1)}" cy="${(cy+r*.6*dy).toFixed(1)}" rx="${(r*.42).toFixed(1)}" ry="${(r*.42).toFixed(1)}" fill="${c}"/>`;
  });
  s += `<circle cx="${cx}" cy="${cy}" r="${(r*.22).toFixed(1)}" fill="#FFD700"/>`;
  return s;
}

// ヘルパー: 短冊
function _rib(color, texts) {
  let s = `<rect x="43" y="6" width="10" height="40" rx="2" fill="${color}" opacity="0.9" stroke="rgba(0,0,0,0.3)" stroke-width="0.5"/>`;
  (texts || []).forEach((ch, i) => {
    s += `<text x="48" y="${20+i*10}" text-anchor="middle" fill="#fff" font-size="6" font-weight="bold">${ch}</text>`;
  });
  return s;
}

// ヘルパー: 菊の花弁
function _chrysFn(cx, cy, r, color, op) {
  let s = '';
  for (let i = 0; i < 12; i++) {
    const a = i * 30 * Math.PI / 180;
    const px = cx + r * Math.cos(a);
    const py = cy + r * Math.sin(a);
    s += `<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="${(r*.35).toFixed(1)}" ry="${(r*.18).toFixed(1)}" transform="rotate(${i*30} ${px.toFixed(1)} ${py.toFixed(1)})" fill="${color}" opacity="${op}"/>`;
  }
  s += `<circle cx="${cx}" cy="${cy}" r="${(r*.3).toFixed(1)}" fill="#FFD700" opacity="${op}"/>`;
  return s;
}

// ヘルパー: 紅葉の葉
const _mleaf = (cx, cy, s, c, o) => {
  const pts = [
    [0,-1],[-.3,-.5],[-.8,-.6],[-.4,-.1],[-.7,.4],[-.2,.2],[0,.6],
    [.2,.2],[.7,.4],[.4,-.1],[.8,-.6],[.3,-.5]
  ].map(([dx,dy]) => `${(cx+s*dx).toFixed(1)},${(cy+s*dy).toFixed(1)}`).join(' ');
  return `<polygon points="${pts}" fill="${c}" opacity="${o}"/>`;
};

function getCardSVG(cardId) {
  const svg = _svgData[cardId];
  if (svg == null) return '';
  return `<svg viewBox="0 0 60 54" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
}

const _svgData = {};

// ── 1月 松 (Pine) ──
const _p1 = `<polygon points="28,4 18,20 38,20" fill="#fff" opacity="0.25"/><polygon points="28,14 14,34 42,34" fill="#fff" opacity="0.2"/><rect x="26" y="34" width="4" height="8" fill="#fff" opacity="0.15"/>`;
_svgData[0] = `${_p1}<ellipse cx="30" cy="34" rx="12" ry="7" fill="#fff" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/><ellipse cx="30" cy="26" rx="4" ry="3.5" fill="#fff"/><circle cx="30" cy="23.5" r="2.5" fill="#e74c3c"/><circle cx="32" cy="25.5" r="0.8" fill="#333"/><line x1="21" y1="38" x2="14" y2="50" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/><line x1="39" y1="38" x2="46" y2="50" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>`;
_svgData[1] = `${_p1}${_rib('#e74c3c',['あ','か'])}`;
_svgData[2] = _p1;
_svgData[3] = `<polygon points="30,6 22,18 38,18" fill="#fff" opacity="0.25"/><polygon points="24,16 14,34 34,34" fill="#fff" opacity="0.2"/><polygon points="36,12 28,28 44,28" fill="#fff" opacity="0.18"/>`;

// ── 2月 梅 (Plum) ──
const _p2 = `<line x1="5" y1="48" x2="52" y2="8" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" stroke-linecap="round"/>${_f5(18,22,8,'rgba(255,255,255,0.5)')}${_f5(38,14,6,'rgba(255,255,255,0.4)')}`;
_svgData[4] = `${_p2}<ellipse cx="34" cy="34" rx="7" ry="5" fill="#7db600" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/><ellipse cx="40" cy="28" rx="3.5" ry="2.8" fill="#8dc600"/><circle cx="42" cy="27" r="0.8" fill="#333"/><polygon points="44,28 49,27 44,29" fill="#e8a020"/><path d="M28,37 Q24,44 20,46" stroke="#7db600" stroke-width="1.5" fill="none"/>`;
_svgData[5] = `${_p2}${_rib('#e74c3c',['あ','か'])}`;
_svgData[6] = `<line x1="5" y1="48" x2="52" y2="8" stroke="rgba(0,0,0,0.3)" stroke-width="2.5" stroke-linecap="round"/>${_f5(16,20,9,'rgba(255,255,255,0.5)')}${_f5(36,28,7,'rgba(255,255,255,0.4)')}${_f5(46,14,5,'rgba(255,255,255,0.35)')}`;
_svgData[7] = `<line x1="8" y1="46" x2="50" y2="10" stroke="rgba(0,0,0,0.25)" stroke-width="2" stroke-linecap="round"/>${_f5(22,18,8,'rgba(255,255,255,0.45)')}${_f5(40,26,6,'rgba(255,255,255,0.35)')}`;

// ── 3月 桜 (Cherry) ──
const _p3 = `${_f5(14,14,7,'rgba(255,255,255,0.5)')}${_f5(34,10,6,'rgba(255,255,255,0.4)')}${_f5(48,20,5,'rgba(255,255,255,0.35)')}`;
_svgData[8] = `${_p3}<rect x="6" y="32" width="48" height="6" rx="1" fill="#c0392b" opacity="0.85"/><rect x="6" y="38" width="48" height="5" fill="#fff" opacity="0.4"/><rect x="6" y="43" width="48" height="5" fill="#c0392b" opacity="0.7"/><rect x="6" y="48" width="48" height="4" fill="#2c3e50" opacity="0.3"/>`;
_svgData[9] = `${_p3}${_rib('#e74c3c',['み','よ'])}`;
_svgData[10] = `${_p3}${_f5(28,34,6,'rgba(255,255,255,0.4)')}`;
_svgData[11] = `${_f5(16,14,8,'rgba(255,255,255,0.45)')}${_f5(40,10,6,'rgba(255,255,255,0.4)')}${_f5(28,30,7,'rgba(255,255,255,0.35)')}${_f5(48,36,5,'rgba(255,255,255,0.3)')}`;

// ── 4月 藤 (Wisteria) ──
const _p4 = `<path d="M28,0 Q20,14 24,26 Q28,38 22,54" stroke="rgba(0,0,0,0.25)" stroke-width="2" fill="none"/><circle cx="20" cy="14" r="3.5" fill="rgba(255,255,255,0.35)"/><circle cx="22" cy="22" r="3" fill="rgba(255,255,255,0.3)"/><circle cx="20" cy="30" r="2.5" fill="rgba(255,255,255,0.25)"/><circle cx="18" cy="38" r="2" fill="rgba(255,255,255,0.2)"/><circle cx="36" cy="18" r="3" fill="rgba(255,255,255,0.3)"/><circle cx="38" cy="26" r="2.5" fill="rgba(255,255,255,0.25)"/><circle cx="36" cy="34" r="2" fill="rgba(255,255,255,0.2)"/>`;
_svgData[12] = `${_p4}<ellipse cx="42" cy="40" rx="6" ry="4" fill="#6b7b3a" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/><ellipse cx="46" cy="36" rx="3" ry="2.2" fill="#7b8b4a"/><circle cx="48" cy="35" r="0.7" fill="#333"/><polygon points="50,36 54,35 50,37" fill="#e8a020"/><path d="M38,42 Q34,48 30,50" stroke="#6b7b3a" stroke-width="1.5" fill="none"/>`;
_svgData[13] = `${_p4}${_rib('#a0785a',[])}`;
_svgData[14] = _p4;
_svgData[15] = `<path d="M30,0 Q22,16 26,32" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/><circle cx="22" cy="16" r="3" fill="rgba(255,255,255,0.3)"/><circle cx="24" cy="24" r="2.5" fill="rgba(255,255,255,0.25)"/><circle cx="22" cy="32" r="2" fill="rgba(255,255,255,0.2)"/>`;

// ── 5月 菖蒲 (Iris) ──
const _p5 = `<rect x="27" y="30" width="6" height="24" fill="rgba(255,255,255,0.15)"/><path d="M22,22 Q30,4 38,22" fill="rgba(255,255,255,0.35)"/><path d="M18,26 Q30,8 42,26" fill="rgba(255,255,255,0.25)"/><circle cx="30" cy="22" r="3" fill="#ffd700" opacity="0.4"/>`;
_svgData[16] = `${_p5}<rect x="10" y="38" width="40" height="5" rx="1" fill="#c0392b" opacity="0.75"/><rect x="14" y="43" width="32" height="4" rx="1" fill="#e74c3c" opacity="0.6"/><line x1="18" y1="38" x2="18" y2="47" stroke="rgba(0,0,0,0.15)" stroke-width="0.5"/><line x1="30" y1="38" x2="30" y2="47" stroke="rgba(0,0,0,0.15)" stroke-width="0.5"/><line x1="42" y1="38" x2="42" y2="47" stroke="rgba(0,0,0,0.15)" stroke-width="0.5"/>`;
_svgData[17] = `${_p5}${_rib('#a0785a',[])}`;
_svgData[18] = _p5;
_svgData[19] = `<rect x="28" y="32" width="4" height="22" fill="rgba(255,255,255,0.15)"/><path d="M24,24 Q30,8 36,24" fill="rgba(255,255,255,0.3)"/>`;

// ── 6月 牡丹 (Peony) ──
const _p6 = `<circle cx="28" cy="24" r="14" fill="rgba(255,255,255,0.2)"/><circle cx="28" cy="24" r="9" fill="rgba(255,255,255,0.2)"/><circle cx="28" cy="24" r="4" fill="#ffd700" opacity="0.25"/><circle cx="20" cy="18" r="5" fill="rgba(255,255,255,0.15)"/><circle cx="36" cy="18" r="5" fill="rgba(255,255,255,0.15)"/>`;
_svgData[20] = `${_p6}<g transform="translate(42,38)"><path d="M0,0 Q6,-7 10,0" fill="#2c3e50" opacity="0.85"/><path d="M0,0 Q6,7 10,0" fill="#34495e" opacity="0.75"/><path d="M0,0 Q-6,-7 -10,0" fill="#2c3e50" opacity="0.85"/><path d="M0,0 Q-6,7 -10,0" fill="#34495e" opacity="0.75"/><circle cx="5" cy="-2.5" r="1.2" fill="#f1c40f"/><circle cx="5" cy="2.5" r="1.2" fill="#f1c40f"/><circle cx="-5" cy="-2.5" r="1.2" fill="#f1c40f"/><circle cx="-5" cy="2.5" r="1.2" fill="#f1c40f"/><rect x="-0.5" y="-5" width="1" height="10" fill="#2c3e50"/></g>`;
_svgData[21] = `${_p6}${_rib('#3498db',[])}`;
_svgData[22] = _p6;
_svgData[23] = `<circle cx="30" cy="26" r="14" fill="rgba(255,255,255,0.18)"/><circle cx="30" cy="26" r="9" fill="rgba(255,255,255,0.15)"/><circle cx="30" cy="26" r="4" fill="#ffd700" opacity="0.2"/>`;

// ── 7月 萩 (Bush Clover) ──
const _p7 = `<path d="M30,0 Q20,20 16,54" stroke="rgba(0,0,0,0.25)" stroke-width="2" fill="none"/><path d="M32,8 Q42,28 46,54" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/><circle cx="18" cy="16" r="2.5" fill="rgba(255,255,255,0.35)"/><circle cx="14" cy="24" r="2" fill="rgba(255,255,255,0.3)"/><circle cx="22" cy="26" r="2.5" fill="rgba(255,255,255,0.3)"/><circle cx="40" cy="28" r="2" fill="rgba(255,255,255,0.25)"/><circle cx="16" cy="34" r="2" fill="rgba(255,255,255,0.25)"/><circle cx="44" cy="36" r="1.5" fill="rgba(255,255,255,0.2)"/>`;
_svgData[24] = `${_p7}<ellipse cx="34" cy="40" rx="12" ry="7" fill="#5a4a3a" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/><ellipse cx="24" cy="38" rx="5" ry="4" fill="#6a5a4a"/><circle cx="22" cy="36.5" r="0.8" fill="#333"/><ellipse cx="19" cy="39" rx="2.5" ry="1.5" fill="#7a6a5a"/><line x1="28" y1="46" x2="28" y2="52" stroke="#4a3a2a" stroke-width="2"/><line x1="40" y1="46" x2="40" y2="52" stroke="#4a3a2a" stroke-width="2"/>`;
_svgData[25] = `${_p7}${_rib('#a0785a',[])}`;
_svgData[26] = _p7;
_svgData[27] = `<path d="M28,0 Q18,22 14,54" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/><circle cx="16" cy="18" r="2.5" fill="rgba(255,255,255,0.35)"/><circle cx="20" cy="28" r="2" fill="rgba(255,255,255,0.3)"/><circle cx="14" cy="36" r="2.5" fill="rgba(255,255,255,0.25)"/>`;

// ── 8月 芒 (Pampas Grass) ──
const _p8 = `<line x1="18" y1="54" x2="22" y2="10" stroke="rgba(0,0,0,0.25)" stroke-width="2"/><line x1="30" y1="54" x2="30" y2="8" stroke="rgba(0,0,0,0.25)" stroke-width="2"/><line x1="42" y1="54" x2="38" y2="12" stroke="rgba(0,0,0,0.25)" stroke-width="2"/><path d="M22,10 Q18,4 12,6" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/><path d="M30,8 Q28,2 22,4" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/><path d="M38,12 Q42,6 48,8" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/>`;
_svgData[28] = `${_p8}<circle cx="30" cy="18" r="13" fill="#ffd700" opacity="0.3"/><circle cx="30" cy="18" r="10" fill="#ffe44d" opacity="0.7"/><circle cx="30" cy="18" r="7" fill="#fff8dc" opacity="0.5"/>`;
_svgData[29] = `${_p8}<path d="M12,20 L20,16 L28,20" stroke="#333" stroke-width="2" fill="none" opacity="0.7"/><path d="M20,16 L28,12 L36,16" stroke="#333" stroke-width="2" fill="none" opacity="0.6"/><path d="M28,12 L36,8 L44,12" stroke="#333" stroke-width="2" fill="none" opacity="0.5"/>`;
_svgData[30] = _p8;
_svgData[31] = `<line x1="22" y1="54" x2="26" y2="12" stroke="rgba(0,0,0,0.25)" stroke-width="2"/><line x1="38" y1="54" x2="34" y2="14" stroke="rgba(0,0,0,0.25)" stroke-width="2"/><path d="M26,12 Q22,6 16,8" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/><path d="M34,14 Q38,8 44,10" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" fill="none"/>`;

// ── 9月 菊 (Chrysanthemum) ──
const _p9 = _chrysFn(30, 24, 14, 'rgba(255,255,255,0.35)', 1);
_svgData[32] = `${_p9}<ellipse cx="30" cy="44" rx="10" ry="3" fill="#c0392b" opacity="0.8"/><path d="M20,44 Q20,36 30,36 Q40,36 40,44" fill="#e74c3c" opacity="0.75"/><ellipse cx="30" cy="37" rx="6" ry="2" fill="rgba(255,255,255,0.3)"/>`;
_svgData[33] = `${_p9}${_rib('#3498db',[])}`;
_svgData[34] = _p9;
_svgData[35] = _chrysFn(30, 28, 12, 'rgba(255,255,255,0.3)', 1);

// ── 10月 紅葉 (Maple) ──
const _p10 = `${_mleaf(20,20,14,'rgba(255,255,255,0.3)',1)}${_mleaf(42,16,10,'rgba(255,255,255,0.25)',1)}${_mleaf(30,38,8,'rgba(255,255,255,0.2)',1)}`;
_svgData[36] = `${_p10}<ellipse cx="36" cy="40" rx="10" ry="7" fill="#8a6a3a" stroke="rgba(0,0,0,0.2)" stroke-width="0.5"/><ellipse cx="28" cy="36" rx="4" ry="3" fill="#9a7a4a"/><circle cx="26" cy="35" r="0.7" fill="#333"/><path d="M30,32 L34,22 L36,24" stroke="#6a5a3a" stroke-width="1.5" fill="none"/><path d="M30,32 L26,22 L24,24" stroke="#6a5a3a" stroke-width="1.5" fill="none"/><line x1="30" y1="46" x2="30" y2="52" stroke="#7a5a2a" stroke-width="1.5"/><line x1="42" y1="46" x2="42" y2="52" stroke="#7a5a2a" stroke-width="1.5"/>`;
_svgData[37] = `${_p10}${_rib('#3498db',[])}`;
_svgData[38] = _p10;
_svgData[39] = `${_mleaf(24,22,16,'rgba(255,255,255,0.3)',1)}${_mleaf(44,32,10,'rgba(255,255,255,0.25)',1)}`;

// ── 11月 柳 (Willow) ──
const _p11 = `<line x1="30" y1="0" x2="30" y2="18" stroke="rgba(0,0,0,0.3)" stroke-width="3"/><path d="M30,8 Q14,22 10,48" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none"/><path d="M30,6 Q22,18 18,44" stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none"/><path d="M30,10 Q44,24 46,48" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" fill="none"/><path d="M30,8 Q38,20 42,46" stroke="rgba(255,255,255,0.25)" stroke-width="1" fill="none"/>`;
_svgData[40] = `${_p11}<ellipse cx="26" cy="28" rx="7" ry="4" fill="#c0392b" opacity="0.75"/><path d="M19,28 Q26,20 33,28" fill="#c0392b" opacity="0.75"/><circle cx="26" cy="36" r="3" fill="#f5cba7"/><circle cx="25" cy="35" r="0.6" fill="#333"/><rect x="24" y="40" width="4" height="12" fill="#2c3e50" opacity="0.6"/><line x1="14" y1="10" x2="18" y2="14" stroke="rgba(150,200,255,0.5)" stroke-width="1"/><line x1="42" y1="8" x2="46" y2="12" stroke="rgba(150,200,255,0.5)" stroke-width="1"/><line x1="10" y1="18" x2="14" y2="22" stroke="rgba(150,200,255,0.4)" stroke-width="1"/><line x1="46" y1="16" x2="50" y2="20" stroke="rgba(150,200,255,0.4)" stroke-width="1"/>`;
_svgData[41] = `${_p11}<g transform="translate(38,30)"><path d="M0,0 Q-8,-4 -14,-2" fill="#1a1a4a" opacity="0.85"/><path d="M0,0 Q-8,4 -14,2" fill="#2a2a6a" opacity="0.75"/><path d="M0,0 Q4,-6 8,-4" fill="#1a1a4a" opacity="0.8"/><circle cx="8" cy="-3" r="0.8" fill="#fff"/><path d="M-6,2 Q-10,10 -14,16" stroke="#1a1a4a" stroke-width="1.2" fill="none"/><path d="M-5,2 Q-8,12 -12,18" stroke="#1a1a4a" stroke-width="1.2" fill="none"/></g>`;
_svgData[42] = `${_p11}${_rib('#a0785a',[])}`;
_svgData[43] = `<path d="M30,4 L26,16 L34,22 L24,36 L34,42 L22,54" stroke="#ffd700" stroke-width="3" fill="none" opacity="0.8"/><path d="M32,4 L36,14 L28,18 L38,32 L28,36 L40,52" stroke="#f39c12" stroke-width="1.5" fill="none" opacity="0.5"/>`;

// ── 12月 桐 (Paulownia) ──
const _p12 = `<ellipse cx="22" cy="22" rx="10" ry="7" fill="rgba(255,255,255,0.15)"/><ellipse cx="40" cy="18" rx="8" ry="5.5" fill="rgba(255,255,255,0.12)"/><ellipse cx="30" cy="36" rx="12" ry="7" fill="rgba(255,255,255,0.1)"/><line x1="22" y1="29" x2="22" y2="48" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/><line x1="40" y1="23" x2="40" y2="48" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>`;
_svgData[44] = `${_p12}<ellipse cx="30" cy="30" rx="14" ry="10" fill="#c0392b" opacity="0.6"/><ellipse cx="30" cy="24" rx="6" ry="4" fill="#e74c3c" opacity="0.7"/><circle cx="30" cy="22" r="2" fill="#ffd700" opacity="0.85"/><path d="M16,32 Q12,26 8,28" stroke="#c0392b" stroke-width="2" fill="none" opacity="0.7"/><path d="M44,32 Q48,26 52,28" stroke="#c0392b" stroke-width="2" fill="none" opacity="0.7"/><path d="M22,38 L16,48" stroke="#ffd700" stroke-width="1.5" fill="none" opacity="0.5"/><path d="M38,38 L44,48" stroke="#ffd700" stroke-width="1.5" fill="none" opacity="0.5"/><path d="M30,40 L30,50" stroke="#ffd700" stroke-width="1" fill="none" opacity="0.4"/>`;
_svgData[45] = _p12;
_svgData[46] = `<ellipse cx="24" cy="24" rx="10" ry="7" fill="rgba(255,255,255,0.12)"/><ellipse cx="40" cy="20" rx="8" ry="5.5" fill="rgba(255,255,255,0.1)"/><line x1="24" y1="31" x2="24" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>`;
_svgData[47] = `<ellipse cx="30" cy="28" rx="12" ry="7" fill="rgba(255,255,255,0.1)"/><line x1="30" y1="35" x2="30" y2="52" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>`;

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

  // SVGイラスト
  const svgDiv = document.createElement("div");
  svgDiv.className = "card-svg";
  svgDiv.innerHTML = getCardSVG(card.id);
  el.appendChild(svgDiv);

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
