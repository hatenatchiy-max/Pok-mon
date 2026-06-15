const TYPES = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];

const TYPE_LABELS = {
  Normal: "ノーマル",
  Fire: "ほのお",
  Water: "みず",
  Electric: "でんき",
  Grass: "くさ",
  Ice: "こおり",
  Fighting: "かくとう",
  Poison: "どく",
  Ground: "じめん",
  Flying: "ひこう",
  Psychic: "エスパー",
  Bug: "むし",
  Rock: "いわ",
  Ghost: "ゴースト",
  Dragon: "ドラゴン",
  Dark: "あく",
  Steel: "はがね",
  Fairy: "フェアリー",
};

const TYPE_COLORS = {
  Normal: "#d7d2bd",
  Fire: "#f5a15a",
  Water: "#7db7f0",
  Electric: "#f7d65a",
  Grass: "#8bd06c",
  Ice: "#9ddddd",
  Fighting: "#d56c5f",
  Poison: "#c487ce",
  Ground: "#dfc172",
  Flying: "#afc4f5",
  Psychic: "#f48eae",
  Bug: "#c7d466",
  Rock: "#c9b36a",
  Ghost: "#9a8ac5",
  Dragon: "#9b85f0",
  Dark: "#9b826c",
  Steel: "#c5cad8",
  Fairy: "#f2b1d7",
};

const CHART = {
  Normal: { weak: ["Rock", "Steel"], immune: ["Ghost"] },
  Fire: { strong: ["Grass", "Ice", "Bug", "Steel"], weak: ["Fire", "Water", "Rock", "Dragon"] },
  Water: { strong: ["Fire", "Ground", "Rock"], weak: ["Water", "Grass", "Dragon"] },
  Electric: { strong: ["Water", "Flying"], weak: ["Electric", "Grass", "Dragon"], immune: ["Ground"] },
  Grass: { strong: ["Water", "Ground", "Rock"], weak: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"] },
  Ice: { strong: ["Grass", "Ground", "Flying", "Dragon"], weak: ["Fire", "Water", "Ice", "Steel"] },
  Fighting: { strong: ["Normal", "Ice", "Rock", "Dark", "Steel"], weak: ["Poison", "Flying", "Psychic", "Bug", "Fairy"], immune: ["Ghost"] },
  Poison: { strong: ["Grass", "Fairy"], weak: ["Poison", "Ground", "Rock", "Ghost"], immune: ["Steel"] },
  Ground: { strong: ["Fire", "Electric", "Poison", "Rock", "Steel"], weak: ["Grass", "Bug"], immune: ["Flying"] },
  Flying: { strong: ["Grass", "Fighting", "Bug"], weak: ["Electric", "Rock", "Steel"] },
  Psychic: { strong: ["Fighting", "Poison"], weak: ["Psychic", "Steel"], immune: ["Dark"] },
  Bug: { strong: ["Grass", "Psychic", "Dark"], weak: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"] },
  Rock: { strong: ["Fire", "Ice", "Flying", "Bug"], weak: ["Fighting", "Ground", "Steel"] },
  Ghost: { strong: ["Psychic", "Ghost"], weak: ["Dark"], immune: ["Normal"] },
  Dragon: { strong: ["Dragon"], weak: ["Steel"], immune: ["Fairy"] },
  Dark: { strong: ["Psychic", "Ghost"], weak: ["Fighting", "Dark", "Fairy"] },
  Steel: { strong: ["Ice", "Rock", "Fairy"], weak: ["Fire", "Water", "Electric", "Steel"] },
  Fairy: { strong: ["Fighting", "Dragon", "Dark"], weak: ["Fire", "Poison", "Steel"] },
};

const BASE_POKEMON = [
  p("venusaur", "フシギバナ", "Venusaur", ["Grass", "Poison"]),
  p("charizard", "リザードン", "Charizard", ["Fire", "Flying"]),
  p("blastoise", "カメックス", "Blastoise", ["Water"]),
  p("beedrill", "スピアー", "Beedrill", ["Bug", "Poison"]),
  p("pikachu", "ピカチュウ", "Pikachu", ["Electric"]),
  p("raichu", "ライチュウ", "Raichu", ["Electric"]),
  p("raichu-alola", "ライチュウ（アローラ）", "Raichu-Alola", ["Electric", "Psychic"]),
  p("clefable", "ピクシー", "Clefable", ["Fairy"]),
  p("ninetales", "キュウコン", "Ninetales", ["Fire"]),
  p("ninetales-alola", "キュウコン（アローラ）", "Ninetales-Alola", ["Ice", "Fairy"]),
  p("arcanine", "ウインディ", "Arcanine", ["Fire"]),
  p("arcanine-hisui", "ウインディ（ヒスイ）", "Arcanine-Hisui", ["Fire", "Rock"]),
  p("alakazam", "フーディン", "Alakazam", ["Psychic"]),
  p("victreebel", "ウツボット", "Victreebel", ["Grass", "Poison"]),
  p("slowbro", "ヤドラン", "Slowbro", ["Water", "Psychic"]),
  p("slowbro-galar", "ヤドラン（ガラル）", "Slowbro-Galar", ["Poison", "Psychic"]),
  p("gengar", "ゲンガー", "Gengar", ["Ghost", "Poison"]),
  p("kangaskhan", "ガルーラ", "Kangaskhan", ["Normal"]),
  p("starmie", "スターミー", "Starmie", ["Water", "Psychic"]),
  p("pinsir", "カイロス", "Pinsir", ["Bug"]),
  p("tauros", "ケンタロス", "Tauros", ["Normal"]),
  p("gyarados", "ギャラドス", "Gyarados", ["Water", "Flying"]),
  p("ditto", "メタモン", "Ditto", ["Normal"]),
  p("vaporeon", "シャワーズ", "Vaporeon", ["Water"]),
  p("jolteon", "サンダース", "Jolteon", ["Electric"]),
  p("flareon", "ブースター", "Flareon", ["Fire"]),
  p("aerodactyl", "プテラ", "Aerodactyl", ["Rock", "Flying"]),
  p("snorlax", "カビゴン", "Snorlax", ["Normal"]),
  p("dragonite", "カイリュー", "Dragonite", ["Dragon", "Flying"]),
  p("meganium", "メガニウム", "Meganium", ["Grass"]),
  p("typhlosion", "バクフーン", "Typhlosion", ["Fire"]),
  p("feraligatr", "オーダイル", "Feraligatr", ["Water"]),
  p("ampharos", "デンリュウ", "Ampharos", ["Electric"]),
  p("azumarill", "マリルリ", "Azumarill", ["Water", "Fairy"]),
  p("politoed", "ニョロトノ", "Politoed", ["Water"]),
  p("espeon", "エーフィ", "Espeon", ["Psychic"]),
  p("umbreon", "ブラッキー", "Umbreon", ["Dark"]),
  p("slowking", "ヤドキング", "Slowking", ["Water", "Psychic"]),
  p("steelix", "ハガネール", "Steelix", ["Steel", "Ground"]),
  p("scizor", "ハッサム", "Scizor", ["Bug", "Steel"]),
  p("heracross", "ヘラクロス", "Heracross", ["Bug", "Fighting"]),
  p("skarmory", "エアームド", "Skarmory", ["Steel", "Flying"]),
  p("houndoom", "ヘルガー", "Houndoom", ["Dark", "Fire"]),
  p("tyranitar", "バンギラス", "Tyranitar", ["Rock", "Dark"]),
  p("pelipper", "ペリッパー", "Pelipper", ["Water", "Flying"]),
  p("gardevoir", "サーナイト", "Gardevoir", ["Psychic", "Fairy"]),
  p("sableye", "ヤミラミ", "Sableye", ["Dark", "Ghost"]),
  p("aggron", "ボスゴドラ", "Aggron", ["Steel", "Rock"]),
  p("torkoal", "コータス", "Torkoal", ["Fire"]),
  p("altaria", "チルタリス", "Altaria", ["Dragon", "Flying"]),
  p("milotic", "ミロカロス", "Milotic", ["Water"]),
  p("castform", "ポワルン", "Castform", ["Normal"]),
  p("absol", "アブソル", "Absol", ["Dark"]),
  p("metagross", "メタグロス", "Metagross", ["Steel", "Psychic"]),
  p("torterra", "ドダイトス", "Torterra", ["Grass", "Ground"]),
  p("infernape", "ゴウカザル", "Infernape", ["Fire", "Fighting"]),
  p("empoleon", "エンペルト", "Empoleon", ["Water", "Steel"]),
  p("lopunny", "ミミロップ", "Lopunny", ["Normal"]),
  p("spiritomb", "ミカルゲ", "Spiritomb", ["Ghost", "Dark"]),
  p("garchomp", "ガブリアス", "Garchomp", ["Dragon", "Ground"]),
  p("lucario", "ルカリオ", "Lucario", ["Fighting", "Steel"]),
  p("hippowdon", "カバルドン", "Hippowdon", ["Ground"]),
  p("abomasnow", "ユキノオー", "Abomasnow", ["Grass", "Ice"]),
  p("weavile", "マニューラ", "Weavile", ["Dark", "Ice"]),
  p("rhyperior", "ドサイドン", "Rhyperior", ["Ground", "Rock"]),
  p("leafeon", "リーフィア", "Leafeon", ["Grass"]),
  p("glaceon", "グレイシア", "Glaceon", ["Ice"]),
  p("gliscor", "グライオン", "Gliscor", ["Ground", "Flying"]),
  p("mamoswine", "マンムー", "Mamoswine", ["Ice", "Ground"]),
  p("gallade", "エルレイド", "Gallade", ["Psychic", "Fighting"]),
  p("froslass", "ユキメノコ", "Froslass", ["Ice", "Ghost"]),
  p("rotom", "ロトム", "Rotom", ["Electric", "Ghost"]),
  p("serperior", "ジャローダ", "Serperior", ["Grass"]),
  p("emboar", "エンブオー", "Emboar", ["Fire", "Fighting"]),
  p("samurott", "ダイケンキ", "Samurott", ["Water"]),
  p("excadrill", "ドリュウズ", "Excadrill", ["Ground", "Steel"]),
  p("audino", "タブンネ", "Audino", ["Normal"]),
  p("conkeldurr", "ローブシン", "Conkeldurr", ["Fighting"]),
  p("whimsicott", "エルフーン", "Whimsicott", ["Grass", "Fairy"]),
  p("krookodile", "ワルビアル", "Krookodile", ["Ground", "Dark"]),
  p("garbodor", "ダストダス", "Garbodor", ["Poison"]),
  p("zoroark", "ゾロアーク", "Zoroark", ["Dark"]),
  p("vanilluxe", "バイバニラ", "Vanilluxe", ["Ice"]),
  p("emolga", "エモンガ", "Emolga", ["Electric", "Flying"]),
  p("chandelure", "シャンデラ", "Chandelure", ["Ghost", "Fire"]),
  p("stunfisk", "マッギョ", "Stunfisk", ["Ground", "Electric"]),
  p("golurk", "ゴルーグ", "Golurk", ["Ground", "Ghost"]),
  p("hydreigon", "サザンドラ", "Hydreigon", ["Dark", "Dragon"]),
  p("volcarona", "ウルガモス", "Volcarona", ["Bug", "Fire"]),
  p("chesnaught", "ブリガロン", "Chesnaught", ["Grass", "Fighting"]),
  p("delphox", "マフォクシー", "Delphox", ["Fire", "Psychic"]),
  p("greninja", "ゲッコウガ", "Greninja", ["Water", "Dark"]),
  p("diggersby", "ホルード", "Diggersby", ["Normal", "Ground"]),
  p("talonflame", "ファイアロー", "Talonflame", ["Fire", "Flying"]),
  p("vivillon", "ビビヨン", "Vivillon", ["Bug", "Flying"]),
  p("floette", "フラエッテ", "Floette", ["Fairy"]),
  p("furfrou", "トリミアン", "Furfrou", ["Normal"]),
  p("meowstic", "ニャオニクス", "Meowstic", ["Psychic"]),
  p("aegislash", "ギルガルド", "Aegislash", ["Steel", "Ghost"]),
  p("clawitzer", "ブロスター", "Clawitzer", ["Water"]),
  p("tyrantrum", "ガチゴラス", "Tyrantrum", ["Rock", "Dragon"]),
  p("aurorus", "アマルルガ", "Aurorus", ["Rock", "Ice"]),
  p("sylveon", "ニンフィア", "Sylveon", ["Fairy"]),
  p("hawlucha", "ルチャブル", "Hawlucha", ["Fighting", "Flying"]),
  p("goodra", "ヌメルゴン", "Goodra", ["Dragon"]),
  p("klefki", "クレッフィ", "Klefki", ["Steel", "Fairy"]),
  p("trevenant", "オーロット", "Trevenant", ["Ghost", "Grass"]),
  p("gourgeist", "パンプジン", "Gourgeist", ["Ghost", "Grass"]),
  p("noivern", "オンバーン", "Noivern", ["Flying", "Dragon"]),
  p("decidueye", "ジュナイパー", "Decidueye", ["Grass", "Ghost"]),
  p("decidueye-hisui", "ジュナイパー（ヒスイ）", "Decidueye-Hisui", ["Grass", "Fighting"]),
  p("incineroar", "ガオガエン", "Incineroar", ["Fire", "Dark"]),
  p("primarina", "アシレーヌ", "Primarina", ["Water", "Fairy"]),
  p("toucannon", "ドデカバシ", "Toucannon", ["Normal", "Flying"]),
  p("crabominable", "ケケンカニ", "Crabominable", ["Fighting", "Ice"]),
  p("lycanroc", "ルガルガン", "Lycanroc", ["Rock"]),
  p("toxapex", "ドヒドイデ", "Toxapex", ["Poison", "Water"]),
  p("mudsdale", "バンバドロ", "Mudsdale", ["Ground"]),
  p("araquanid", "オニシズクモ", "Araquanid", ["Water", "Bug"]),
  p("tsareena", "アマージョ", "Tsareena", ["Grass"]),
  p("oranguru", "ヤレユータン", "Oranguru", ["Normal", "Psychic"]),
  p("mimikyu", "ミミッキュ", "Mimikyu", ["Ghost", "Fairy"]),
  p("drampa", "ジジーロン", "Drampa", ["Normal", "Dragon"]),
  p("kommo-o", "ジャラランガ", "Kommo-o", ["Dragon", "Fighting"]),
  p("corviknight", "アーマーガア", "Corviknight", ["Flying", "Steel"]),
  p("appletun", "タルップル", "Appletun", ["Grass", "Dragon"]),
  p("sandaconda", "サダイジャ", "Sandaconda", ["Ground"]),
  p("polteageist", "ポットデス", "Polteageist", ["Ghost"]),
  p("hatterene", "ブリムオン", "Hatterene", ["Psychic", "Fairy"]),
  p("grimmsnarl", "オーロンゲ", "Grimmsnarl", ["Dark", "Fairy"]),
  p("mr-rime", "バリコオル", "Mr. Rime", ["Ice", "Psychic"]),
  p("runerigus", "デスバーン", "Runerigus", ["Ground", "Ghost"]),
  p("alcremie", "マホイップ", "Alcremie", ["Fairy"]),
  p("morpeko", "モルペコ", "Morpeko", ["Electric", "Dark"]),
  p("dragapult", "ドラパルト", "Dragapult", ["Dragon", "Ghost"]),
  p("kleavor", "バサギリ", "Kleavor", ["Bug", "Rock"]),
  p("ursaluna", "ガチグマ", "Ursaluna", ["Ground", "Normal"]),
  p("basculegion", "イダイトウ", "Basculegion", ["Water", "Ghost"]),
  p("sneasler", "オオニューラ", "Sneasler", ["Fighting", "Poison"]),
  p("meowscarada", "マスカーニャ", "Meowscarada", ["Grass", "Dark"]),
  p("skeledirge", "ラウドボーン", "Skeledirge", ["Fire", "Ghost"]),
  p("quaquaval", "ウェーニバル", "Quaquaval", ["Water", "Fighting"]),
  p("pawmot", "パーモット", "Pawmot", ["Electric", "Fighting"]),
  p("maushold", "イッカネズミ", "Maushold", ["Normal"]),
  p("garganacl", "キョジオーン", "Garganacl", ["Rock"]),
  p("armarouge", "グレンアルマ", "Armarouge", ["Fire", "Psychic"]),
  p("ceruledge", "ソウブレイズ", "Ceruledge", ["Fire", "Ghost"]),
  p("scovillain", "スコヴィラン", "Scovillain", ["Grass", "Fire"]),
  p("tinkaton", "デカヌチャン", "Tinkaton", ["Fairy", "Steel"]),
  p("palafin", "イルカマン", "Palafin", ["Water"]),
  p("orthworm", "ミミズズ", "Orthworm", ["Steel"]),
  p("glimmora", "キラフロル", "Glimmora", ["Rock", "Poison"]),
  p("dondozo", "ヘイラッシャ", "Dondozo", ["Water"]),
  p("tatsugiri", "シャリタツ", "Tatsugiri", ["Dragon", "Water"]),
  p("farigiraf", "リキキリン", "Farigiraf", ["Normal", "Psychic"]),
  p("kingambit", "ドドゲザン", "Kingambit", ["Dark", "Steel"]),
  p("sinistcha", "ヤバソチャ", "Sinistcha", ["Grass", "Ghost"]),
  p("archaludon", "ブリジュラス", "Archaludon", ["Steel", "Dragon"]),
  p("hydrapple", "カミツオロチ", "Hydrapple", ["Grass", "Dragon"]),
];

const MEGA_POKEMON = [
  p("venusaur-mega", "メガフシギバナ", "Mega Venusaur", ["Grass", "Poison"], { baseId: "venusaur", form: "メガ" }),
  p("charizard-mega-x", "メガリザードンX", "Mega Charizard X", ["Fire", "Dragon"], { baseId: "charizard", form: "メガ" }),
  p("charizard-mega-y", "メガリザードンY", "Mega Charizard Y", ["Fire", "Flying"], { baseId: "charizard", form: "メガ" }),
  p("blastoise-mega", "メガカメックス", "Mega Blastoise", ["Water"], { baseId: "blastoise", form: "メガ" }),
  p("beedrill-mega", "メガスピアー", "Mega Beedrill", ["Bug", "Poison"], { baseId: "beedrill", form: "メガ" }),
  p("alakazam-mega", "メガフーディン", "Mega Alakazam", ["Psychic"], { baseId: "alakazam", form: "メガ" }),
  p("slowbro-mega", "メガヤドラン", "Mega Slowbro", ["Water", "Psychic"], { baseId: "slowbro", form: "メガ" }),
  p("gengar-mega", "メガゲンガー", "Mega Gengar", ["Ghost", "Poison"], { baseId: "gengar", form: "メガ" }),
  p("kangaskhan-mega", "メガガルーラ", "Mega Kangaskhan", ["Normal"], { baseId: "kangaskhan", form: "メガ" }),
  p("pinsir-mega", "メガカイロス", "Mega Pinsir", ["Bug", "Flying"], { baseId: "pinsir", form: "メガ" }),
  p("gyarados-mega", "メガギャラドス", "Mega Gyarados", ["Water", "Dark"], { baseId: "gyarados", form: "メガ" }),
  p("aerodactyl-mega", "メガプテラ", "Mega Aerodactyl", ["Rock", "Flying"], { baseId: "aerodactyl", form: "メガ" }),
  p("ampharos-mega", "メガデンリュウ", "Mega Ampharos", ["Electric", "Dragon"], { baseId: "ampharos", form: "メガ" }),
  p("steelix-mega", "メガハガネール", "Mega Steelix", ["Steel", "Ground"], { baseId: "steelix", form: "メガ" }),
  p("scizor-mega", "メガハッサム", "Mega Scizor", ["Bug", "Steel"], { baseId: "scizor", form: "メガ" }),
  p("heracross-mega", "メガヘラクロス", "Mega Heracross", ["Bug", "Fighting"], { baseId: "heracross", form: "メガ" }),
  p("houndoom-mega", "メガヘルガー", "Mega Houndoom", ["Dark", "Fire"], { baseId: "houndoom", form: "メガ" }),
  p("tyranitar-mega", "メガバンギラス", "Mega Tyranitar", ["Rock", "Dark"], { baseId: "tyranitar", form: "メガ" }),
  p("gardevoir-mega", "メガサーナイト", "Mega Gardevoir", ["Psychic", "Fairy"], { baseId: "gardevoir", form: "メガ" }),
  p("sableye-mega", "メガヤミラミ", "Mega Sableye", ["Dark", "Ghost"], { baseId: "sableye", form: "メガ" }),
  p("aggron-mega", "メガボスゴドラ", "Mega Aggron", ["Steel"], { baseId: "aggron", form: "メガ" }),
  p("altaria-mega", "メガチルタリス", "Mega Altaria", ["Dragon", "Fairy"], { baseId: "altaria", form: "メガ" }),
  p("absol-mega", "メガアブソル", "Mega Absol", ["Dark"], { baseId: "absol", form: "メガ" }),
  p("metagross-mega", "メガメタグロス", "Mega Metagross", ["Steel", "Psychic"], { baseId: "metagross", form: "メガ" }),
  p("lopunny-mega", "メガミミロップ", "Mega Lopunny", ["Normal", "Fighting"], { baseId: "lopunny", form: "メガ" }),
  p("garchomp-mega", "メガガブリアス", "Mega Garchomp", ["Dragon", "Ground"], { baseId: "garchomp", form: "メガ" }),
  p("lucario-mega", "メガルカリオ", "Mega Lucario", ["Fighting", "Steel"], { baseId: "lucario", form: "メガ" }),
  p("abomasnow-mega", "メガユキノオー", "Mega Abomasnow", ["Grass", "Ice"], { baseId: "abomasnow", form: "メガ" }),
  p("gallade-mega", "メガエルレイド", "Mega Gallade", ["Psychic", "Fighting"], { baseId: "gallade", form: "メガ" }),
  p("audino-mega", "メガタブンネ", "Mega Audino", ["Normal", "Fairy"], { baseId: "audino", form: "メガ" }),
];

const POKEMON = [...BASE_POKEMON, ...MEGA_POKEMON];

const state = {
  team: [],
  search: "",
  typeFilter: "all",
  tab: "offense",
};

const el = {
  teamSlots: document.querySelector("#team-slots"),
  pokemonList: document.querySelector("#pokemon-list"),
  rosterCount: document.querySelector("#roster-count"),
  search: document.querySelector("#search"),
  typeFilter: document.querySelector("#type-filter"),
  clearTeam: document.querySelector("#clear-team"),
  tabs: document.querySelectorAll(".tab"),
  analysis: document.querySelector("#analysis-content"),
};

function p(id, name, en, types, options = {}) {
  const form = options.form || "";
  return {
    id,
    baseId: options.baseId || id,
    form,
    name,
    en,
    types,
    searchable: `${name} ${en} ${form} ${types.map((type) => TYPE_LABELS[type]).join(" ")} ${types.join(" ")}`.toLowerCase(),
  };
}

function init() {
  hydrateFromUrl();
  renderTypeFilter();
  bindEvents();
  render();
}

function hydrateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const ids = params.get("team");
  if (!ids) return;
  state.team = ids
    .split(",")
    .map((id) => POKEMON.find((pokemon) => pokemon.id === id))
    .filter(Boolean)
    .slice(0, 6);
}

function syncUrl() {
  const url = new URL(window.location.href);
  if (state.team.length) {
    url.searchParams.set("team", state.team.map((pokemon) => pokemon.id).join(","));
  } else {
    url.searchParams.delete("team");
  }
  window.history.replaceState(null, "", url);
}

function bindEvents() {
  el.search.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderPokemonList();
  });

  el.typeFilter.addEventListener("change", (event) => {
    state.typeFilter = event.target.value;
    renderPokemonList();
  });

  el.clearTeam.addEventListener("click", () => {
    state.team = [];
    render();
  });

  el.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.tab = tab.dataset.tab;
      renderTabs();
      renderAnalysis();
    });
  });
}

function render() {
  syncUrl();
  renderTeam();
  renderPokemonList();
  renderTabs();
  renderAnalysis();
}

function renderTypeFilter() {
  el.typeFilter.innerHTML = `<option value="all">すべて</option>${TYPES.map((type) => `<option value="${type}">${TYPE_LABELS[type]}</option>`).join("")}`;
}

function renderTeam() {
  const slots = Array.from({ length: 6 }, (_, index) => state.team[index] || null);
  el.teamSlots.innerHTML = slots
    .map((pokemon, index) => {
      if (!pokemon) {
        return `<div class="team-slot empty"><span>${index + 1}匹目を選択</span></div>`;
      }
      return `
        <article class="team-slot">
          <div>
            <div class="pokemon-name">${nameWithBadge(pokemon)}<small>${pokemon.en}</small></div>
            ${typeRow(pokemon.types)}
          </div>
          <button type="button" aria-label="${pokemon.name}を外す" data-remove="${pokemon.id}">×</button>
        </article>
      `;
    })
    .join("");

  el.teamSlots.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.team = state.team.filter((pokemon) => pokemon.id !== button.dataset.remove);
      render();
    });
  });
}

function renderPokemonList() {
  const filtered = POKEMON.filter((pokemon) => {
    const matchesSearch = !state.search || pokemon.searchable.includes(state.search);
    const matchesType = state.typeFilter === "all" || pokemon.types.includes(state.typeFilter);
    return matchesSearch && matchesType;
  });

  el.rosterCount.textContent = `${filtered.length} / ${POKEMON.length}`;
  el.pokemonList.innerHTML = filtered
    .map((pokemon) => {
      const selected = state.team.some((member) => member.id === pokemon.id);
      const sameFamilySelected = state.team.some((member) => member.baseId === pokemon.baseId);
      const full = state.team.length >= 6 && !selected && !sameFamilySelected;
      return `
        <button class="pokemon-card ${selected ? "selected" : ""} ${sameFamilySelected && !selected ? "family-selected" : ""}" type="button" data-id="${pokemon.id}" ${full ? "disabled" : ""}>
          <span class="pokemon-name">${nameWithBadge(pokemon)}<small>${pokemon.en}</small></span>
          ${typeRow(pokemon.types)}
        </button>
      `;
    })
    .join("");

  el.pokemonList.querySelectorAll("[data-id]").forEach((card) => {
    card.addEventListener("click", () => togglePokemon(card.dataset.id));
  });
}

function renderTabs() {
  el.tabs.forEach((tab) => {
    const active = tab.dataset.tab === state.tab;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

function renderAnalysis() {
  if (!state.team.length) {
    el.analysis.innerHTML = `<div class="empty-state"><p>左の一覧からポケモンを選ぶと、ここに相性補完が表示されます。</p></div>`;
    return;
  }

  const analysis = analyzeTeam(state.team);
  if (state.tab === "offense") el.analysis.innerHTML = offenseView(analysis);
  if (state.tab === "defense") el.analysis.innerHTML = defenseView(analysis);
  if (state.tab === "overall") el.analysis.innerHTML = overallView(analysis);
}

function togglePokemon(id) {
  const pokemon = POKEMON.find((entry) => entry.id === id);
  if (!pokemon) return;
  const selected = state.team.some((pokemon) => pokemon.id === id);
  if (selected) {
    state.team = state.team.filter((pokemon) => pokemon.id !== id);
  } else if (state.team.some((member) => member.baseId === pokemon.baseId)) {
    state.team = state.team.map((member) => (member.baseId === pokemon.baseId ? pokemon : member));
  } else if (state.team.length < 6) {
    state.team = [...state.team, pokemon];
  }
  render();
}

function typeRow(types) {
  return `<span class="type-row">${types.map(typeChip).join("")}</span>`;
}

function typeChip(type) {
  return `<span class="type-chip" style="background:${TYPE_COLORS[type]}">${TYPE_LABELS[type]}</span>`;
}

function formBadge(pokemon) {
  return pokemon.form ? `<span class="form-badge">${pokemon.form}</span>` : "";
}

function nameWithBadge(pokemon) {
  return `<span>${pokemon.name}</span>${formBadge(pokemon)}`;
}

function analyzeTeam(team) {
  const attackTypes = [...new Set(team.flatMap((pokemon) => pokemon.types))];
  const offenseByType = TYPES.map((defenseType) => {
    const best = Math.max(...attackTypes.map((attackType) => effectiveness(attackType, [defenseType])));
    const attackers = team
      .filter((pokemon) => pokemon.types.some((attackType) => effectiveness(attackType, [defenseType]) === best))
      .map((pokemon) => pokemon.name);
    return { type: defenseType, best, attackers };
  });

  const rosterCoverage = POKEMON.map((target) => {
    const best = Math.max(...attackTypes.map((attackType) => effectiveness(attackType, target.types)));
    return { target, best };
  });

  const defenseByType = TYPES.map((attackType) => {
    const members = team.map((pokemon) => ({
      pokemon,
      multiplier: effectiveness(attackType, pokemon.types),
    }));
    return {
      type: attackType,
      weak: members.filter((entry) => entry.multiplier > 1),
      resist: members.filter((entry) => entry.multiplier > 0 && entry.multiplier < 1),
      immune: members.filter((entry) => entry.multiplier === 0),
      neutral: members.filter((entry) => entry.multiplier === 1),
      members,
    };
  });

  const offenseScore = scoreOffense(offenseByType, rosterCoverage);
  const defenseScore = scoreDefense(defenseByType, team.length);
  const overallScore = Math.round(offenseScore * 0.5 + defenseScore * 0.5);

  return {
    team,
    attackTypes,
    offenseByType,
    rosterCoverage,
    defenseByType,
    offenseScore,
    defenseScore,
    overallScore,
    recommendations: recommendAdditions(team),
  };
}

function effectiveness(attackType, defenseTypes) {
  const chart = CHART[attackType] || {};
  return defenseTypes.reduce((multiplier, defenseType) => {
    if ((chart.immune || []).includes(defenseType)) return multiplier * 0;
    if ((chart.strong || []).includes(defenseType)) return multiplier * 2;
    if ((chart.weak || []).includes(defenseType)) return multiplier * 0.5;
    return multiplier;
  }, 1);
}

function scoreOffense(offenseByType, rosterCoverage) {
  const monoScore = offenseByType.reduce((total, entry) => {
    if (entry.best >= 2) return total + 3;
    if (entry.best === 1) return total + 1.7;
    if (entry.best > 0) return total + 0.7;
    return total;
  }, 0);
  const rosterScore = rosterCoverage.reduce((total, entry) => {
    if (entry.best >= 2) return total + 1;
    if (entry.best === 1) return total + 0.58;
    if (entry.best > 0) return total + 0.25;
    return total;
  }, 0);
  return Math.round(((monoScore / (TYPES.length * 3)) * 55 + (rosterScore / POKEMON.length) * 45));
}

function scoreDefense(defenseByType, teamSize) {
  const total = defenseByType.reduce((score, entry) => {
    const safe = entry.resist.length + entry.immune.length;
    const weak = entry.weak.length;
    let value = 5;
    if (safe > 0) value += 2.2;
    if (entry.immune.length > 0) value += 0.8;
    if (weak >= Math.ceil(teamSize / 2)) value -= 3.2;
    if (weak >= 2 && safe === 0) value -= 2.4;
    if (safe === 0) value -= 1.2;
    return score + clamp(value, 0, 8);
  }, 0);
  return Math.round((total / (TYPES.length * 8)) * 100);
}

function recommendAdditions(team) {
  if (team.length >= 6) return [];
  const current = analyzeLite(team).overall;
  return POKEMON.filter((pokemon) => !team.some((member) => member.baseId === pokemon.baseId))
    .map((pokemon) => {
      const next = analyzeLite([...team, pokemon]);
      return {
        pokemon,
        gain: next.overall - current,
        offense: next.offense,
        defense: next.defense,
      };
    })
    .sort((a, b) => b.gain - a.gain || b.defense - a.defense || b.offense - a.offense)
    .slice(0, 8);
}

function analyzeLite(team) {
  const attackTypes = [...new Set(team.flatMap((pokemon) => pokemon.types))];
  const offenseByType = TYPES.map((type) => ({
    type,
    best: Math.max(...attackTypes.map((attackType) => effectiveness(attackType, [type]))),
  }));
  const rosterCoverage = POKEMON.map((target) => ({
    target,
    best: Math.max(...attackTypes.map((attackType) => effectiveness(attackType, target.types))),
  }));
  const defenseByType = TYPES.map((attackType) => {
    const members = team.map((pokemon) => ({ pokemon, multiplier: effectiveness(attackType, pokemon.types) }));
    return {
      type: attackType,
      weak: members.filter((entry) => entry.multiplier > 1),
      resist: members.filter((entry) => entry.multiplier > 0 && entry.multiplier < 1),
      immune: members.filter((entry) => entry.multiplier === 0),
    };
  });
  const offense = scoreOffense(offenseByType, rosterCoverage);
  const defense = scoreDefense(defenseByType, team.length);
  return { offense, defense, overall: Math.round((offense + defense) / 2) };
}

function offenseView(analysis) {
  const superEffective = analysis.offenseByType.filter((entry) => entry.best >= 2).length;
  const poor = analysis.offenseByType.filter((entry) => entry.best < 1).length;
  const rosterSe = analysis.rosterCoverage.filter((entry) => entry.best >= 2).length;
  return `
    ${scoreCards([
      ["攻撃スコア", analysis.offenseScore, "単タイプ18種と内定リストへのSTAB打点から算出"],
      ["抜群を取れる単タイプ", `${superEffective}/18`, "選択中ポケモンのタイプ一致技を想定"],
      ["等倍未満の単タイプ", `${poor}/18`, "半減・無効にされやすい穴"],
    ])}
    <section class="summary-card">
      <h3>タイプ別の最高打点</h3>
      <div class="type-grid">${analysis.offenseByType.map(offenseTypeCard).join("")}</div>
    </section>
    <section class="summary-card">
      <h3>内定ポケモンへの攻撃カバー</h3>
      <p class="small-note">内定リスト全${POKEMON.length}匹のうち、タイプ一致技だけで抜群を取れる相手は${rosterSe}匹です。</p>
      <ul class="detail-list">${analysis.rosterCoverage
        .filter((entry) => entry.best < 1)
        .slice(0, 12)
        .map((entry) => `<li><span>${entry.target.name}</span><span class="badge bad">最大 ${formatMultiplier(entry.best)}</span></li>`)
        .join("") || `<li><span>等倍未満の相手はいません</span><span class="badge good">OK</span></li>`}</ul>
    </section>
  `;
}

function defenseView(analysis) {
  const sharedWeak = analysis.defenseByType.filter((entry) => entry.weak.length >= 2).length;
  const noSafe = analysis.defenseByType.filter((entry) => entry.resist.length + entry.immune.length === 0).length;
  const immunities = analysis.defenseByType.filter((entry) => entry.immune.length > 0).length;
  return `
    ${scoreCards([
      ["防御スコア", analysis.defenseScore, "耐性・無効の受け先と弱点集中から算出"],
      ["2匹以上が弱点", `${sharedWeak}/18`, "重い攻撃タイプの目安"],
      ["無効を持つ攻撃タイプ", `${immunities}/18`, "交代で流しやすいタイプ"],
    ])}
    <section class="summary-card">
      <h3>攻撃されるタイプ別の受け先</h3>
      <div class="type-grid">${analysis.defenseByType.map(defenseTypeCard).join("")}</div>
    </section>
    <section class="summary-card">
      <h3>耐性がない攻撃タイプ</h3>
      <ul class="detail-list">${analysis.defenseByType
        .filter((entry) => entry.resist.length + entry.immune.length === 0)
        .map((entry) => `<li><span>${typeChip(entry.type)}</span><span class="badge warn">受け先なし</span></li>`)
        .join("") || `<li><span>全タイプに耐性または無効があります</span><span class="badge good">OK</span></li>`}</ul>
      <p class="small-note">${noSafe ? "受け先なしのタイプは、実戦では素早さ・火力・特性・技範囲で補える場合もあります。" : "かなりきれいに受け先が散っています。"}</p>
    </section>
  `;
}

function overallView(analysis) {
  const badDefense = analysis.defenseByType
    .filter((entry) => entry.weak.length >= 2 || entry.resist.length + entry.immune.length === 0)
    .sort((a, b) => b.weak.length - a.weak.length);
  const attackGaps = analysis.offenseByType.filter((entry) => entry.best < 2);
  return `
    ${scoreCards([
      ["総合スコア", analysis.overallScore, "攻撃50%・防御50%の簡易評価"],
      ["攻撃補完", analysis.offenseScore, "抜群範囲と等倍保証"],
      ["防御補完", analysis.defenseScore, "弱点集中の少なさと受け先"],
    ])}
    <div class="split-grid">
      <section class="summary-card">
        <h3>優先して埋めたい攻撃面</h3>
        <ul class="detail-list">${attackGaps
          .slice(0, 8)
          .map((entry) => `<li><span>${typeChip(entry.type)}</span><span class="badge ${entry.best < 1 ? "bad" : "warn"}">最大 ${formatMultiplier(entry.best)}</span></li>`)
          .join("") || `<li><span>全単タイプに抜群を取れます</span><span class="badge good">OK</span></li>`}</ul>
      </section>
      <section class="summary-card">
        <h3>優先して埋めたい防御面</h3>
        <ul class="detail-list">${badDefense
          .slice(0, 8)
          .map((entry) => `<li><span>${typeChip(entry.type)}</span><span class="badge ${entry.weak.length >= 2 ? "bad" : "warn"}">弱点${entry.weak.length} / 受け${entry.resist.length + entry.immune.length}</span></li>`)
          .join("") || `<li><span>大きな防御穴は少なめです</span><span class="badge good">OK</span></li>`}</ul>
      </section>
    </div>
    <section class="summary-card">
      <h3>追加候補</h3>
      <div class="recommendations">${analysis.recommendations.map(recommendationCard).join("") || `<p class="small-note">6匹選択済みです。入れ替えながら比較してください。</p>`}</div>
    </section>
    <p class="small-note">判定はタイプのみを見た補完チェックです。メガシンカはタイプ変化だけを反映し、特性、技範囲、テラスタル、Zワザ、種族値、役割集中は別途考慮してください。</p>
  `;
}

function scoreCards(items) {
  return `
    <div class="score-strip">
      ${items
        .map(([label, value, note]) => {
          const numeric = Number(value);
          const meter = Number.isFinite(numeric) ? `<div class="meter"><span style="width:${clamp(numeric, 0, 100)}%"></span></div>` : "";
          return `<article class="summary-card"><h3>${label}</h3><strong class="metric">${value}</strong>${meter}<p class="small-note">${note}</p></article>`;
        })
        .join("")}
    </div>
  `;
}

function offenseTypeCard(entry) {
  const badgeClass = entry.best >= 2 ? "good" : entry.best >= 1 ? "warn" : "bad";
  const label = entry.best >= 2 ? "抜群" : entry.best >= 1 ? "等倍" : "苦手";
  return `
    <article class="type-result">
      <div class="type-result-header">${typeChip(entry.type)}<span class="badge ${badgeClass}">${formatMultiplier(entry.best)} ${label}</span></div>
      <small class="muted">${entry.attackers.slice(0, 3).join(" / ") || "該当なし"}</small>
    </article>
  `;
}

function defenseTypeCard(entry) {
  const safe = entry.resist.length + entry.immune.length;
  const badgeClass = entry.weak.length >= 2 && safe === 0 ? "bad" : safe > 0 ? "good" : "warn";
  return `
    <article class="type-result">
      <div class="type-result-header">${typeChip(entry.type)}<span class="badge ${badgeClass}">弱点${entry.weak.length} / 受け${safe}</span></div>
      <small class="muted">弱点: ${entry.weak.map((item) => item.pokemon.name).join(" / ") || "なし"}</small>
      <small class="muted">耐性・無効: ${[...entry.resist, ...entry.immune].map((item) => `${item.pokemon.name}${item.multiplier === 0 ? " 無効" : ""}`).join(" / ") || "なし"}</small>
    </article>
  `;
}

function recommendationCard(entry) {
  return `
    <article class="recommend-card">
      <div class="pokemon-name">${nameWithBadge(entry.pokemon)}<small>+${entry.gain}</small></div>
      ${typeRow(entry.pokemon.types)}
      <small class="muted">攻撃 ${entry.offense} / 防御 ${entry.defense}</small>
    </article>
  `;
}

function formatMultiplier(value) {
  if (value === 0.25) return "1/4";
  if (value === 0.5) return "1/2";
  return `${value}x`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

init();
