const flailDirections = {
  l: Outputs.left,
  r: Outputs.right,
  combo: {
    en: "${first} => ${second}",
    de: "${first} => ${second}",
    fr: "${first} => ${second}",
    ja: "${first} => ${second}",
    cn: "${first} => ${second}",
    ko: "${first} => ${second}",
  },
};
const fireLightOutputStrings = {
  fire: {
    en: "Stand on fire",
    de: "Auf der Feuerfläche stehen",
    fr: "Placez-vous sur le feu",
    ja: "炎の床へ",
    cn: "站在火",
    ko: "빨간색 바닥 위에 서기",
  },
  light: {
    en: "Stand on light",
    de: "Auf der Lichtfläche stehen",
    fr: "Placez-vous sur la lumière",
    ja: "光の床へ",
    cn: "站在光",
    ko: "흰색 바닥 위에 서기",
  },
};

// 姓名 => 中文职业简称
function nametocnjob(name, data) {
  let re;
  switch (data.party.jobName(name)) {
    case "PLD":
      re = "骑士";
      break;
    case "MNK":
      re = "武僧";
      break;
    case "WAR":
      re = "战士";
      break;
    case "DRG":
      re = "龙骑";
      break;
    case "BRD":
      re = "诗人";
      break;
    case "WHM":
      re = "白魔";
      break;
    case "BLM":
      re = "黑魔";
      break;
    case "SMN":
      re = "召唤";
      break;
    case "SCH":
      re = "学者";
      break;
    case "NIN":
      re = "忍者";
      break;
    case "MCH":
      re = "机工";
      break;
    case "DRK":
      re = "黑骑";
      break;
    case "AST":
      re = "占星";
      break;
    case "SAM":
      re = "武士";
      break;
    case "RDM":
      re = "赤魔";
      break;
    case "GNB":
      re = "枪刃";
      break;
    case "DNC":
      re = "舞者";
      break;
    case "RPR":
      re = "镰刀";
      break;
    case "SGE":
      re = "贤者";
      break;
    case "BLU":
      re = "青魔";
      break;
  }
  // 如果有重复职业，则播报职业+ID
  // t同职业
  if (data.party.roleToPartyNames_.tank[0] == data.party.roleToPartyNames_.tank[1]) {
    return re + " " + data.ShortName(name);
  }
  // H同职业
  if (data.party.roleToPartyNames_.healer[0] == data.party.roleToPartyNames_.healer[1]) {
    return re + " " + data.ShortName(name);
  }
  // DPS同职业
  for (let i = 0; i < 3; i++) {
    for (let a = 1; a < 4; a++) {
      if (i == a) {
        continue;
      }
      if (data.party.roleToPartyNames_.dps[i] == data.party.roleToPartyNames_.dps[a]) {
        return re + " " + data.ShortName(name);
      }
    }
  }
  // 没有同职业，播报职业
  return re;
}

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFirstCircleSavage,
  overrideTimelineFile: true,
  timelineFile: "P1S.txt",
  timelineTriggers: [
    {
      id: "P1S Tile Positions",
      regex: /(?:第一次|第三次)炸方块/,
      suppressSeconds: 1,
      beforeSeconds: 3,
      infoText: (_data, _matches, output) => output.positions(),
      outputStrings: {
        positions: {
          en: "Tile Positions",
          de: "Flächen-Positionen",
          fr: "Positions",
          ja: "自分の担当マスへ",
          cn: "上自己的方块",
        },
      },
    },
    {
      id: "P1S 魔锁站位",
      regex: "魔锁 点名",
      beforeSeconds: 6,
      infoText: "魔锁点名",
    },
    {
      id: "P1S 四连魔锁",
      regex: "四连魔锁",
      beforeSeconds: 6,
      infoText: "四连魔锁",
    },
  ],
  triggers: [
    {
      id: "P1S Shining Cells",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "6616", capture: false }),
      alertText: "超大AOE",
    },
    {
      id: "P1S Pitiless Flail of Grace",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "660E", capture: false }),
      alertText: (_data, _matches, output) => output.directions(),
      outputStrings: {
        directions: {
          en: "Tankbuster+Knockback => Stack",
          de: "Tankbuster+Rückstoß => Sammeln",
          fr: "Tank buster + Poussée => Packez-vous",
          ja: "タンクバスター+ノックバック => 頭割り",
          cn: "坦克死刑+分摊",
        },
      },
    },
    {
      id: "P1S Pitiless Flail of Purgation",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "660F", capture: false }),
      alertText: (_data, _matches, output) => output.directions(),
      outputStrings: {
        directions: {
          en: "Tankbuster+Knockback => Flare",
          de: "Tankbuster+Rückstoß => Flare",
          fr: "Tank buster + Poussée => Brasier",
          ja: "タンクバスター+ノックバック => フレア",
          cn: "坦克死刑+核爆",
        },
      },
    },
    {
      id: "P1S Shackles of Companionship",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: "AB6" }),
      preRun: (data, matches) => (data.companionship = matches.target),
      durationSeconds: (_data, matches) => parseFloat(matches.duration) - 2,
      alertText: (data, matches, output) => {
        if (data.me === matches.target) return output.closeShacklesOnYou();
      },
      outputStrings: {
        closeShacklesOnYou: {
          en: "Close Shackles on YOU",
          de: "Nahe Fesseln auf DIR",
          fr: "Chaînes proches sur VOUS",
          ja: "紫鎖（近い方）",
          cn: "点名近锁,靠近靠近",
        },
      },
    },
    {
      id: "P1S Shackles of Loneliness",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: "AB7" }),
      preRun: (data, matches) => (data.loneliness = matches.target),
      durationSeconds: (_data, matches) => parseFloat(matches.duration) - 2,
      alertText: (data, matches, output) => {
        if (data.me === matches.target) return output.farShacklesOnYou();
      },
      outputStrings: {
        farShacklesOnYou: {
          en: "Far Shackles on YOU",
          de: "Entfernte Fesseln auf DIR",
          fr: "Chaînes éloignées sur VOUS",
          ja: "赤鎖（遠い方）",
          cn: "点名远锁,远离远离",
        },
      },
    },

    {
      // 两个都不点名的话执行
      id: "P1S Aetherial Shackles Callout",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: "AB[67]" }),
      condition: (data) => data.companionship !== undefined && data.loneliness !== undefined,
      durationSeconds: (_data, matches) => parseFloat(matches.duration) - 2,
      alertText: (data, _matches, output) => {
        if (data.companionship === data.me || data.loneliness === data.me) return null;
        return output.shacklesOn({ close: nametocnjob(data.companionship, data), far: nametocnjob(data.loneliness, data) });
      },
      run: (data) => {
        delete data.companionship;
        delete data.loneliness;
      },
      outputStrings: {
        shacklesOn: {
          en: "Close: ${close}, Far: ${far}",
          de: "Nahe: ${close}, Entfernt: ${far}",
          fr: "Proches : ${close}, Éloignées : ${far}",
          ja: "紫鎖（近い方）：${close}、赤鎖（遠い方）：${far}",
          cn: "近:（${close}）  , 远:（${far}） ",
        },
      },
    },

    {
      id: "P1S Shackles of Time Target",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: "AB5" }),
      infoText: (data, matches, output) => {
        if (data.me === matches.target) return output.shacklesOnYou();
        return output.shacklesOn({ player: nametocnjob(matches.target, data) });
      },
      // For raid calling purposes, this might be useful but don't clutter TTS.
      tts: null,
      outputStrings: {
        shacklesOn: {
          en: "Shackles of Time on ${player}",
          de: "Aspektierende Ketten auf ${player}",
          fr: "Chaînes à retardement sur ${player}",
          ja: "時限の魔鎖：${player}",
          cn: "时限魔锁点（${player}），去红色",
        },
        shacklesOnYou: {
          en: "Shackles of Time on YOU",
          de: "Aspektierende Ketten auf DIR",
          fr: "Chaînes à retardement sur VOUS",
          ja: "時限の魔鎖ついた",
          cn: "时限魔锁点名,去白色",
        },
      },
    },
    // 删除原本的时限魔锁站位
    {
      id: "P1S Shackles of Time",
      disabled: true,
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: "AB5" }),
    },

    ////
    {
      id: "P1S Warder's Wrath",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "662A", capture: false }),
      response: Responses.aoe(),
    },
    {
      id: "P1S Slam Shut",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "6617", capture: false }),
      response: Responses.aoe(),
    },
    {
      id: "P1S Gaoler's Flail Left => Right",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "65F6", capture: false }),
      alertText: (_data, _matches, output) => output.combo({ first: output.l(), second: output.r() }),
      outputStrings: flailDirections,
    },
    {
      id: "P1S Gaoler's Flail Right => Left",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "65F7", capture: false }),
      alertText: (_data, _matches, output) => output.combo({ first: output.r(), second: output.l() }),
      outputStrings: flailDirections,
    },
    {
      id: "P1S Gaoler's Flail Out => In",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: ["65F8", "65F9"], capture: false }),
      alertText: (_data, _matches, output) => output.outThenIn(),
      outputStrings: {
        outThenIn: "钢铁 + 月环",
      },
    },
    {
      id: "P1S Gaoler's Flail In => Out",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: ["65FA", "65FB"], capture: false }),
      alertText: (_data, _matches, output) => output.inThenOut(),
      outputStrings: {
        inThenOut: "月环 + 钢铁",
      },
    },
    {
      id: "P1S Heavy Hand",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({ id: "6629" }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    //禁用原本的吃冰吃火tts，每个人打法不一致，自己看更好
    {
      id: "P1S Hot/Cold Spell",
      disabled: true,
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: ["AB3", "AB4"] }),
      condition: Conditions.targetIsYou(),
    },
    {
      id: "P1S Powerful Light/Fire",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: "893" }),
      preRun: (data, matches) => {
        data.safeColor = matches.count === "14C" ? "light" : "fire";
      },
      alertText: (data, _matches, output) => data.safeColor && output[data.safeColor](),
      outputStrings: fireLightOutputStrings,
    },
  ],
});
console.log("Yoyot trigger loaded 中文解码测试");
