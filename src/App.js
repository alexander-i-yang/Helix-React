import React, { Component } from 'react';
import './App.scss';

const cards = {
  A: [
    {
      name: "sword",
      background: "#fa7979",
    }, {
      name: "hilted sword",
      background: "#ff4040",
    }, {
      name: "broad sword",
      color: "red",
      background: "white",
    }, {
      name: "spike sword",
      background: "red",
      color: "white",
    },
  ],
  D: [
    {
      name: "shield",
      background: "#f1c232",
    }, {
      name: "shield",
      background: "#ffd966",
    }, {
      name: "three shield",
      color: "black",
      background: "yellow",
    },
  ]
}

const combos = {
  A: {
    background: "#fa7979",
    stats: {
      attack: 1,
    },
  },
  U: {
    background: "#f1c232",
    stats: {defense: 1,},
  },
  G: {
    background: "#93c47d",
    stats: {maxAttack: 1,},
  },
  C: {
    background: "#6fa8dc",
    stats: {maxDefense: 1,},
  },
  AAA: {
    background: "#ff4040",
    name: "dagger",
    stats: {attack: 3},
  },
  AUA: {
    background: "#e66909",
    name: "Ile",
    stats: {
      attack: 3,
      defense: 1,
    },
  },
  AGA: {
    background: "#a64c00",
    name: "Arg",
    stats: {
      attack: 3,
      maxAttack: 1,
    }
  },
  ACA: {
    background: "#ef0a47",
    name: "Thr",
    stats: {
      attack: 4,
      maxDefense: 1,
    },
  },
  UAU: {
    background: "#e1892f",
    name: "Tyr",
    stats: {
      defense: 3,
      attack: 1,
    },
  },
  UUU: {
    background: "#ffd966",
    name: "Phe",
    stats: {
      defense: 4,
    },
  },
  UGU: {
    background: "#dad622",
    name: "Cys",
    stats: {
      defense: 4,
      maxAttack: 1,
    },
  },
  UCU: {
    background: "#bedc36",
    name: "Ser",
    text: "textOnLight",
    stats: {
      defense: 3,
      maxDefense: 2,
    },
  },
  GAG: {
    background: "#51b049",
    name: "Ala",
    stats: {
      maxAttack: 3,
      attack: 1,
    }
  },
  GUG: {
    background: "#c0e65f",
    name: "Ala",
    stats: {
      maxAttack: 3,
      defense: 1,
    },
  },
  GGG: {
    background: "#1dcd1d",
    name: "Ala",
    stats: {
      maxAttack: 4,
    },
  },
  GCG: {
    background: "#1ed289",
    name: "Ala",
    stats: {
      maxAttack: 3,
      maxDefense: 1,
    }
  },
  CGC: {
    background: "#5ed0c9",
    name: "Gln",
    stats: {
      maxDefense: 3,
      maxAttack: 1,
    }
  },
  CCC: {
    background: "#3a6ce5",
    name: "Pro",
    stats: {
      maxDefense: 4,
    },
  },
  AAAAAAAAA: {
    background: "white",
    text: "red",
    name: "Grx",
    stats: {attack: 20,
    maxAttack: 20,}
  },
  clear: "transparent",
  textDef: "white",
  textOnLight: "#595959",
  stats: ["attack", "defense", "maxAttack", "maxDefense"],
  tabs: {
    tree: {
      color: "#fa7979",
    },
    cards: {
      color: "#93c47d",
    },
    map: {
      color: "#6fa8dc",
    }
  }
};

const skills = {
  data: {
    background: "white",
    title: "More space",
    icon: "more cards 1",
    description: "Add 3 more tiles to the helix.",
  },
  0: {
    data: {
      background: "#ea9999",
      title: "Attack boost",
      description: "Each attack card gets +1 attack.",
    },
    0: {
      data: {
        background: "#ff4040",
        title: "Attack boost 2",
        description: "Each attack card gets +2 attack.",
      },
      0: {
        data: {
          background: "red",
          title: "Attack boost 3",
        },
      },
    },
    1: {
      data: {
        background: "#e66909",
        title: "Defense boost",
      },
    },
    2: {
      data: {
        background: "#ffb500",
        cost: 3,
        title: "Double boost",
      },
    },
  },
  1: {
    data: {
      background: "#93c47d",
      title: "Max stats",
      cost: 1,
    },
    0: {
      data: {
        background: "#c0e65f",
        title: "Max defense",
      },
    },
    1: {
      data: {
        background: "#1dcd1d",
        title: "Double buff",
      },
      0: {
        data: {
          background: "#00ff00",
          title: "Super buff",
        },
      },
    },
    2: {
      data: {
        background: "#4d9447",
        title: "Max attack"
      },
    },
  },
  2: {
    data: {
      background: "#f1c232",
      title: "More xp",
    },
    0: {
      data: {
        background: "#beec36",
        title: "Wild card",
      },
    },
    1: {
      data: {
        background: "#efe946",
        title: "More xp 2",
      },
    },
    2: {
      data: {
        background: "#eeb761",
        title: "Critical chance",
      },
    },
  },
  3: {
    data: {
      background: "#6fa8dc",
      title: "More space 2",
    },
    0: {
      data: {
        background: "#259deb",
        title: "More space 3",
      },
      0: {
        data: {
          background: "#00d4fe",
          title: "More space 4",
        },
      },
    },
    1: {
      data: {
        background: "#5ed0c9",
        //TODO: come up with something for this
        title: "???",
      },
    },
  },
}

const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  toRadians: (angle) => angle/180*Math.PI,
  getCardStats: (level) => Math.pow(2, level)+level,
}
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const level = this.props.level;
    const skill = this.props.skill;
    const data = cards[skill][this.props.level];
    var color = data["color"];
    color = color ? color:"white";
    const background = data["background"];
    const name = data["name"];
    var style = {
      boxShadow: this.props.midHover
        ? `0 0 15px 0px ${background}`
        : `0 0 6px 0px ${background}`,
      color: color,
      backgroundColor: background,
    }
    style = Object.assign(style, this.props.style);
    return (
      <>
        <div
          class="card"
          onClick={this.props.onClick}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          style={style}>
          <Icon name={name} fill={color}/>
        </div>
      </>
    );
  }
}

class HelixCard extends Card {
  constructor(props) {
    super(props);
  }
  render() {
    const loc = this.props.loc;
    const isMid = loc==0.5;
    const cursor = isMid?"pointer":"default";
    const scaleMid = isMid
      ? toScale(this.props.level)+0.25
      : toScale(this.props.level);
    const xShift = this.props.isHovered ? (0.5-loc)*60 : 0;
    const style = {
      cursor: cursor,
      transform: `scale(${scaleMid}) translateX(${xShift}px)`,
      zIndex: isMid ? "1" : "auto",
    }
    const isEnd = loc==1 || isNaN(loc);
    const connectorColor = isEnd
      ? "transparent"
      : this.props.connectorColor;
    return (
      <>
        <Card
          symbol={this.props.symbol}
          onClick={isMid ? this.props.onClick : null}
          onMouseOver={isMid ? this.props.onHover : null}
          onMouseOut={isMid ? this.props.onMouseOff:null}
          midHover={isMid&&this.props.isHovered}
          level={this.props.level}
          skill={this.props.skill}
          style={style}
        />
        <div
          class="connector"
          style={{
            background: connectorColor,
          }}>
        </div>
      </>
    );
  }
}

const Cards = (props) => {
  const [hovered, setHovered] = React.useState([]);
  const [stateThing, notState] = React.useState(false);

  const pushHovered = (ind) => {
    var temp = hovered;
    temp.push(ind);
    setHovered(temp);
    notState(true);
  }

  const setUnHovered = (ind) => {
    var temp = hovered;
    const index = temp.indexOf(ind);
    if (index > -1) {
      temp.splice(index, 1);
    }
    setHovered(temp);
    notState(false);
  }
  const cList = props.cardList;
  var items = [];
  var addStats = [2, 2, 7, 7];
  var groupInds = [];
  for(var i = 0; i<cList.length; ++i) {
    const symbol = cList[i];
    const skill = toSkill(symbol);
    const level = toLevel(symbol);
    var k = 0;
    const stat = parseInt(utils.getCardStats(toLevel(symbol)));
    if(toSkill(symbol) == "D") k = 1;
    addStats[k] += stat;
    if(symbol == cList[i+1] && symbol == cList[i+2]) {
      const maxLevel = Object.keys(cards[skill]).length-1;
      if(level < maxLevel) groupInds.push(i);
    }
  }
  var len = cList.length;
  for(var j = 0; j<len; ++j) {
    if(j > groupInds[0]) groupInds.shift();
    if(groupInds.includes(j)) {
      const symbol = cList[j];
      const level = toLevel(symbol);
      const skill = toSkill(symbol);
      groupInds.shift();
      const nextBack = cards[skill][level+1]["background"];
      const index = j;
      for(var k = 0; k<3; ++k) {
        items.push(
          <HelixCard
            skill={skill}
            level={level}
            connectorColor={nextBack}
            loc={k/2}
            isHovered={hovered.includes(index)}
            onHover={() => {pushHovered(index);}}
            onMouseOff={() => {setUnHovered(index);}}
            onClick={() => {setUnHovered(index); props.onGroupDelete(index, symbol); props.incrXP(level+1);}}
            />
        );
      }
      j+=2;
    } else {
      const symbol = cList[j];
      const skill = toSkill(symbol);
      const level = toLevel(symbol);
      items.push(
        <HelixCard
          skill={skill}
          level={level}
          connectorColor="transparent"
          />
      );
    }
  }
  props.setPoints(addStats);
  return(<>{items}</>);
};

const Stats = (props) => {
  const maxStat = props.stat[props.pos+2];
  const curStat = props.stat[props.pos];
  const name = props.name;
  const iconName = name=="attack" ? "sword" : "shield";
  return (
    <div>
      <Icon name={iconName}/>
      {utils.range(0, maxStat-1).map(statNum => {
        var key = "A";
        if(name == "defense") key = "U";
        const style = {
          background: statNum < curStat
            ? combos[key]["background"]
            : "darkgray",
        }
        return (
          <div
            class="statPoint"
            style={style}>
          </div>
        );
      })}
    </div>
  );
}

function toSkill(symbol) {return(symbol.charAt(0));}
function toLevel(symbol) {return(parseInt(symbol.charAt(1)));}
function toScale(level) {return(1+level*0.1);}

const CardDraw = (props) => {
  const [cards, setCards] = React.useState(props.cards);
  return (
    utils.range(0, cards.length-1).map((cardId) => {
      const symbol = cards[cardId];
      return(
        <Card
          skill={toSkill(symbol)}
          level={toLevel(symbol)}
          onClick={() => props.onClick(symbol)}/>
      );
    })
  );
}

const NavButtons = props => {
  const onButtonClick = (name) => {
    props.setTab(name);
  }
  const tabs = combos["tabs"];
  const len = Object.keys(tabs).length;
  const buttons = [];
  for(var name in tabs) {
    const isSelected = props.curTab == name;
    buttons.push(
      <IconButton
        isSelected={isSelected}
        name={name}
        onClick={onButtonClick}/>
    );
  }
  return (
    <div class="nav-buttons"> {buttons}</div>
  );
}

const IconButton = props => {
  const color = combos["tabs"][props.name]["color"];
  const [hovered, setHovered] = React.useState(false);
  const unselectedColor = hovered ? "#ffffff10" : "#ffffff08";
  const style = {
    background: props.isSelected
      ? "#111a22"
      : unselectedColor,
  }

  return(
    <button
      class="icon"
      onMouseOver={()=>{setHovered(true);}}
      onMouseOut={()=>{setHovered(false);}}
      style={style}
      onClick = {() => {
        props.onClick(props.name);
      }}>
      <Icon name={props.name} />
    </button>
  );
}

const Icon = (props) => {

  if(props.name=="shield") {
    return(
      <svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m119.03545 166.15492l360.0 0l0 288.09448l-360.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m479.08777 933.74805c-95.50867 0.018432617 -187.10846 -50.567566 -254.63646 -140.62317c-67.527985 -90.05554 -105.448944 -212.19885 -105.41573 -339.54376l359.99997 0.16690063z" fill-rule="evenodd"/><path fill="#000000" d="m121.06166 180.16568l0 0c-8.57563 -32.006424 10.418411 -64.906044 42.424377 -73.48337l299.4347 -80.245865c15.369812 -4.118973 31.746063 -1.9635258 45.526123 5.9921722c13.78006 7.9556923 23.835236 21.059948 27.9534 36.429977l0 0l0 0c8.575623 32.006424 -10.418457 64.90604 -42.424408 73.48337l-299.4347 80.245865c-32.005966 8.577316 -64.903854 -10.415726 -73.47949 -42.42215z" fill-rule="evenodd"/><path fill="#000000" d="m357.1374 141.01706l121.921265 0l0 225.00787l-121.921265 0z" fill-rule="evenodd"/><path fill="#000000" d="m479.05908 526.2493l0 408.0l-97.7323 -408.0z" fill-rule="evenodd"/><path fill="#000000" d="m780.9344 511.6824l0 0c33.137085 0 60.002075 -26.862915 60.00464 -60.0l0.022216797 -286.96063c0.0012207031 -15.912979 -6.319031 -31.174225 -17.570312 -42.4264c-11.251343 -11.252182 -26.512085 -17.573593 -42.42505 -17.573593l0 0l0 0c-33.137085 0 -60.002075 26.862907 -60.00464 59.999992l-0.022216797 286.96063c-0.0025634766 33.137085 26.858276 60.0 59.99536 60.0z" fill-rule="evenodd"/><path fill="#000000" d="m477.63705 933.731c96.05789 1.0792236 188.45193 -49.07379 256.62595 -139.30072c68.17395 -90.22699 106.4729 -213.04364 106.375854 -341.12524l-120.01672 0.14767456l0 0c0.05883789 96.11606 -25.509094 188.27219 -71.00891 255.94162c-45.499817 67.66943 -107.152466 105.23187 -171.22556 104.32068z" fill-rule="evenodd"/><path fill="#000000" d="m838.93835 178.16656l0 0c8.575623 -32.006424 -10.418945 -64.90406 -42.4256 -73.47893l-296.50317 -79.43586c-15.370117 -4.117794 -31.746674 -1.961216 -45.526978 5.9953136c-13.780304 7.9565315 -23.83554 21.061253 -27.953705 36.43128l0 0l0 0c-8.575653 32.006424 10.418915 64.90406 42.425568 73.47892l296.50317 79.43587c32.006653 8.57486 64.90509 -10.420181 73.48071 -42.42659z" fill-rule="evenodd"/></g></svg>
    );
  } else if(props.name == "sword") {
    return(
      <svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m750.35565 10.114334l199.4331 199.43307l-411.71655 411.7165l-199.43307 -199.43304z" fill-rule="evenodd"/><path fill="#000000" d="m105.06816 512.9492l0 0c23.596039 -23.59607 61.852783 -23.59607 85.44882 0l256.44092 256.44092c11.331238 11.331238 17.697052 26.699646 17.697052 42.724426c0 16.02478 -6.365814 31.393188 -17.697052 42.724426l0 0l0 0c-23.596039 23.596008 -61.852783 23.596008 -85.44882 0l-256.44092 -256.44098l0 0c-23.596039 -23.596008 -23.596039 -61.852783 0 -85.44879z" fill-rule="evenodd"/><path fill="#000000" d="m737.02576 40.72933l0 0c0 -22.494196 18.235168 -40.729343 40.72937 -40.729343l141.50189 0l0 0c10.802124 0 21.161804 4.291115 28.800049 11.929348c7.6381836 7.638234 11.929321 17.997902 11.929321 28.799995l0 141.31297c0 22.494202 -18.235168 40.72934 -40.72937 40.72934l-141.50189 0c-22.494202 0 -40.72937 -18.235138 -40.72937 -40.72934z" fill-rule="evenodd"/><path fill="#000000" d="m410.42807 350.03973l0 0c15.901459 -15.901459 41.6828 -15.901459 57.58426 0l141.84882 141.84882c7.6361084 7.636139 11.926086 17.992981 11.926086 28.792114c0 10.799133 -4.289978 21.156006 -11.926086 28.792114l-99.89606 99.89606c-15.901459 15.901489 -41.6828 15.901489 -57.58426 0l-141.84882 -141.84879c-15.901459 -15.901459 -15.901459 -41.6828 0 -57.58426z" fill-rule="evenodd"/><path fill="#000000" d="m178.59506 667.3423l0 0c11.506287 -11.506287 30.161667 -11.506287 41.66797 0l72.28479 72.28479l0 0c5.5255127 5.5255127 8.6297 13.019714 8.6297 20.833984c0 7.81427 -3.104187 15.308472 -8.6297 20.833984l-157.7651 157.76514c-11.506294 11.506287 -30.161674 11.506287 -41.66797 0l-72.28479 -72.28479c-11.506291 -11.506287 -11.506291 -30.161682 0 -41.66797z" fill-rule="evenodd"/></g></svg>
    );
  } else if(props.name == "maxAttack") {
    return(
      <svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0">
        <path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m597.221 728.8735l0 0c0 -25.082825 20.333618 -45.416504 45.416504 -45.416504l272.6712 0c12.045227 0 23.597046 4.784912 32.11432 13.302185c8.517273 8.517212 13.302185 20.069092 13.302185 32.11432l0 0l0 0c0 25.082825 -20.33368 45.416504 -45.416504 45.416504l-272.6712 0l0 0c-25.082886 0 -45.416504 -20.33368 -45.416504 -45.416504z" fill-rule="evenodd"/><path fill="#000000" d="m682.1082 141.91806l0 0c-11.95813 -11.958099 -11.95813 -31.346024 0 -43.30413l75.20929 -75.20927l0 0c5.7424927 -5.742483 13.530945 -8.968578 21.652039 -8.968578c8.121094 0 15.909607 3.2260952 21.652039 8.968578l75.12323 75.12317c11.958069 11.958107 11.958069 31.346024 0 43.304123l-75.20929 75.209274c-11.95813 11.958115 -31.346008 11.958115 -43.30414 0z" fill-rule="evenodd"/><path fill="#000000" d="m672.9341 479.9561l0 0c0 -16.904785 13.704041 -30.608826 30.608826 -30.608826l150.79779 0c8.117981 0 15.903442 3.2248535 21.643738 8.965118c5.7402344 5.740265 8.965088 13.525757 8.965088 21.643707l0 106.19919c0 16.904785 -13.704041 30.608826 -30.608826 30.608826l-150.79779 0c-16.904785 0 -30.608826 -13.704041 -30.608826 -30.608826z" fill-rule="evenodd"/><path fill="#000000" d="m718.3836 771.8717l0 0c0 -12.231995 9.915955 -22.14795 22.14795 -22.14795l76.843506 0l0 0c5.8740234 0 11.507446 2.333435 15.66095 6.4869995c4.1535645 4.1535645 6.4869995 9.786926 6.4869995 15.66095l0 167.7196c0 12.231934 -9.915955 22.147888 -22.14795 22.147888l-76.843506 0c-12.231995 0 -22.14795 -9.915955 -22.14795 -22.147888z" fill-rule="evenodd"/><path fill="#000000" d="m672.9187 118.55727l212.01544 0l0.04309082 437.7204l-212.01544 0z" fill-rule="evenodd"/><path fill="#000000" d="m122.22272 360.70535l0 0c-75.67516 -84.07306 -120.56667 -220.15576 -120.45221 -365.13504l98.012535 0.1885128l0 0c-0.057777405 103.04059 24.437958 200.87747 66.94129 267.366z" fill-rule="evenodd"/><path fill="#000000" d="m218.82565 478.962l0 0c-103.52038 -103.931946 -168.41034 -223.98747 -162.42549 -300.5099l105.99158 78.00427l0 0c25.034958 42.100037 71.665726 98.76846 126.365616 153.56686z" fill-rule="evenodd"/><path fill="#000000" d="m455.24695 360.70535l0 0c75.67517 -84.07306 120.56665 -220.15576 120.45221 -365.13504l-98.01251 0.1885128l0 0c0.057769775 103.04059 -24.437988 200.87747 -66.941284 267.366z" fill-rule="evenodd"/><path fill="#000000" d="m358.644 478.962l0 0c103.520386 -103.931946 168.41037 -223.98747 162.4255 -300.5099l-105.99158 78.00427l0 0c-25.034973 42.100037 -71.66571 98.76846 -126.36563 153.56686z" fill-rule="evenodd"/><path fill="#000000" d="m122.22272 597.39655l0 0c-75.67516 84.07306 -120.56667 220.15576 -120.45221 365.135l98.012535 -0.18847656l0 0c-0.057777405 -103.04059 24.437958 -200.8775 66.94129 -267.36603z" fill-rule="evenodd"/><path fill="#000000" d="m218.82565 479.13986l0 0c-103.52038 103.93198 -168.41034 223.98752 -162.42549 300.50992l105.99158 -78.00427l0 0c25.034958 -42.100037 71.665726 -98.76843 126.365616 -153.5669z" fill-rule="evenodd"/><path fill="#000000" d="m455.24695 597.39655l0 0c75.67517 84.07306 120.56665 220.15576 120.45221 365.135l-98.01251 -0.18847656l0 0c0.057769775 -103.04059 -24.437988 -200.8775 -66.941284 -267.36603z" fill-rule="evenodd"/><path fill="#000000" d="m358.644 479.13986l0 0c103.520386 103.93198 168.41037 223.98752 162.4255 300.50992l-105.99158 -78.00427l0 0c-25.034973 -42.100037 -71.66571 -98.76843 -126.36563 -153.5669z" fill-rule="evenodd"/><path fill="#000000" d="m288.77213 409.04718l70.07123 70.155304l-69.99078 70.07474l-70.07123 -70.15527z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 26.134727l421.6609 0l0 73.69144l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 147.03195l421.6609 0l0 73.69144l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m153.9585 267.92917l269.55835 0l0 73.69144l-269.55835 0z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 929.1712l421.6609 0l0 -73.69147l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 808.274l421.6609 0l0 -73.69147l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m153.9585 687.3768l269.55835 0l0 -73.69147l-269.55835 0z" fill-rule="evenodd"/></g>
      </svg>
    );
  } else if(props.name == "maxDefense"){
    return(<svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m122.22272 360.70535l0 0c-75.67516 -84.07306 -120.56667 -220.15576 -120.45221 -365.13504l98.012535 0.1885128l0 0c-0.057777405 103.04059 24.437958 200.87747 66.94129 267.366z" fill-rule="evenodd"/><path fill="#000000" d="m218.82565 478.962l0 0c-103.52038 -103.931946 -168.41034 -223.98747 -162.42549 -300.5099l105.99158 78.00427l0 0c25.034958 42.100037 71.665726 98.76846 126.365616 153.56686z" fill-rule="evenodd"/><path fill="#000000" d="m455.24695 360.70535l0 0c75.67517 -84.07306 120.56665 -220.15576 120.45221 -365.13504l-98.01251 0.1885128l0 0c0.057769775 103.04059 -24.437988 200.87747 -66.941284 267.366z" fill-rule="evenodd"/><path fill="#000000" d="m358.644 478.962l0 0c103.520386 -103.931946 168.41037 -223.98747 162.4255 -300.5099l-105.99158 78.00427l0 0c-25.034973 42.100037 -71.66571 98.76846 -126.36563 153.56686z" fill-rule="evenodd"/><path fill="#000000" d="m122.22272 597.39655l0 0c-75.67516 84.07306 -120.56667 220.15576 -120.45221 365.135l98.012535 -0.18847656l0 0c-0.057777405 -103.04059 24.437958 -200.8775 66.94129 -267.36603z" fill-rule="evenodd"/><path fill="#000000" d="m218.82565 479.13986l0 0c-103.52038 103.93198 -168.41034 223.98752 -162.42549 300.50992l105.99158 -78.00427l0 0c25.034958 -42.100037 71.665726 -98.76843 126.365616 -153.5669z" fill-rule="evenodd"/><path fill="#000000" d="m455.24695 597.39655l0 0c75.67517 84.07306 120.56665 220.15576 120.45221 365.135l-98.01251 -0.18847656l0 0c0.057769775 -103.04059 -24.437988 -200.8775 -66.941284 -267.36603z" fill-rule="evenodd"/><path fill="#000000" d="m358.644 479.13986l0 0c103.520386 103.93198 168.41037 223.98752 162.4255 300.50992l-105.99158 -78.00427l0 0c-25.034973 -42.100037 -71.66571 -98.76843 -126.36563 -153.5669z" fill-rule="evenodd"/><path fill="#000000" d="m288.77213 409.04718l70.07123 70.155304l-69.99078 70.07474l-70.07123 -70.15527z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 26.134727l421.6609 0l0 73.69144l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 147.03195l421.6609 0l0 73.69144l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m153.9585 267.92917l269.55835 0l0 73.69144l-269.55835 0z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 929.1712l421.6609 0l0 -73.69147l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m77.90722 808.274l421.6609 0l0 -73.69147l-421.6609 0z" fill-rule="evenodd"/><path fill="#000000" d="m153.9585 687.3768l269.55835 0l0 -73.69147l-269.55835 0z" fill-rule="evenodd"/><path fill="#000000" d="m528.0082 310.92093l211.46399 0l0 169.22672l-211.46399 0z" fill-rule="evenodd"/><path fill="#000000" d="m739.50287 761.8051c-56.101807 0.010864258 -109.90747 -29.70337 -149.57343 -82.60205c-39.665955 -52.89862 -61.940735 -124.64563 -61.921204 -199.448l211.46399 0.09805298z" fill-rule="evenodd"/><path fill="#000000" d="m529.19836 319.15085l0 0c-5.0373535 -18.800568 6.119751 -38.125824 24.920044 -43.164124l175.88794 -47.13643c9.028259 -2.4194794 18.647644 -1.1533661 26.742065 3.519806c8.094421 4.673172 14.000793 12.370621 16.4198 21.398972l0 0l0 0c5.0373535 18.800568 -6.119751 38.125793 -24.920044 43.164124l-175.88794 47.136414c-18.800354 5.03833 -38.124573 -6.1181946 -43.161865 -24.918762z" fill-rule="evenodd"/><path fill="#000000" d="m667.86926 296.15494l71.616516 0l0 132.16965l-71.616516 0z" fill-rule="evenodd"/><path fill="#000000" d="m739.486 522.44037l0 239.65924l-57.40796 -239.65924z" fill-rule="evenodd"/><path fill="#000000" d="m916.80756 513.8838l0 0c19.464722 0 35.24524 -15.779297 35.246765 -35.24402l0.013000488 -168.56067c7.324219E-4 -9.34729 -3.711731 -18.311737 -10.32074 -24.921265c-6.60907 -6.609558 -15.573242 -10.322754 -24.920532 -10.322754l0 0l0 0c-19.464722 0 -35.24518 15.779297 -35.246704 35.24402l-0.013061523 168.56067c-0.0014648438 19.464722 15.77655 35.24402 35.241272 35.24402z" fill-rule="evenodd"/><path fill="#000000" d="m738.65076 761.7951c56.424377 0.63397217 110.696655 -28.825928 150.74207 -81.825195c40.04541 -52.99933 62.542175 -125.141846 62.48517 -200.37698l-70.4978 0.08673096l0 0c0.0345459 56.458588 -14.98407 110.591095 -41.710632 150.34012c-26.726624 39.749023 -62.941406 61.81317 -100.57788 61.277954z" fill-rule="evenodd"/><path fill="#000000" d="m950.8791 317.97656l0 0c5.0373535 -18.800568 -6.120056 -38.124634 -24.920776 -43.1615l-174.16595 -46.660645c-9.028442 -2.4187927 -18.64801 -1.152008 -26.742554 3.5216522c-8.094543 4.6736603 -14.000977 12.371384 -16.419983 21.399734l0 0l0 0c-5.0373535 18.800568 6.120056 38.124634 24.920776 43.16153l174.16595 46.660614c18.80072 5.036865 38.125244 -6.120819 43.162537 -24.921387z" fill-rule="evenodd"/></g></svg>);
  } else if(props.name=="tree") {
    return(<svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m613.393 554.42834l83.4646 83.4646l-67.87402 67.87402l-83.4646 -83.4646z" fill-rule="evenodd"/><path fill="#000000" d="m301.56592 687.4467l59.02362 -102.20471l83.1496 48.0l-59.02362 102.20471z" fill-rule="evenodd"/><path fill="#000000" d="m551.20215 343.36298l95.6535 -95.653534l67.87402 67.87402l-95.6535 95.653534z" fill-rule="evenodd"/><path fill="#000000" d="m453.95657 209.41383l30.551178 113.98424l-92.72443 24.850403l-30.551178 -113.98425z" fill-rule="evenodd"/><path fill="#000000" d="m312.01077 480.00717l0 0c0 -92.77515 75.21619 -167.9913 168.0 -168.0l0 0c44.556366 -0.004180908 87.28781 17.690094 118.793976 49.190308c31.506104 31.500183 49.206055 74.22598 49.206055 118.7782l0 0c0 92.775116 -75.21619 167.9913 -168.00003 167.99997l0 0c-92.78381 0.008728027 -168.0 -75.19336 -168.0 -167.96848z" fill-rule="evenodd"/><path fill="#000000" d="m5.2729656E-4 479.99966l0 0c0 -66.27417 53.72583 -120.0 120.0 -120.0l0 0c31.825981 0 62.348442 12.642822 84.85282 35.147186c22.504364 22.504364 35.147186 53.026825 35.147186 84.85281l0 0c0 66.2742 -53.72583 120.00003 -120.00001 120.00003l0 0c-66.27417 0 -120.0 -53.72583 -120.0 -120.00003z" fill-rule="evenodd"/><path fill="#000000" d="m209.50394 431.99213l118.01575 0l0 96.0l-118.01575 0z" fill-rule="evenodd"/><path fill="#000000" d="m858.1721 853.8426l0 0c56.237366 -56.237366 56.237366 -147.41614 0 -203.6535l0 0c-27.006165 -27.006165 -63.63434 -42.17804 -101.82678 -42.17804c-38.192444 0 -74.82062 15.171875 -101.82678 42.17804l0 0c-56.237366 56.237366 -56.237366 147.41614 0 203.6535l0 0c56.237366 56.237366 147.4162 56.237366 203.65356 0z" fill-rule="evenodd"/><path fill="#000000" d="m351.90918 25.055082l0 0c64.01285 -17.151268 129.80939 20.837545 146.96063 84.85039l0 0c8.236328 30.740051 3.9238892 63.49295 -11.988647 91.053406c-15.912537 27.56047 -42.121674 47.6709 -72.861725 55.90724l0 0c-64.01285 17.151245 -129.80939 -20.837555 -146.96063 -84.8504l0 0c-17.151276 -64.01285 20.837524 -129.80937 84.85037 -146.96063z" fill-rule="evenodd"/><path fill="#000000" d="m870.20526 93.82609l0 0c56.237366 56.237373 56.237366 147.41617 0 203.65356l0 0c-27.006165 27.006134 -63.63434 42.17801 -101.82678 42.17801c-38.192444 0 -74.82062 -15.171875 -101.82678 -42.17801l0 0c-56.237366 -56.23738 -56.237366 -147.41618 0 -203.65356l0 0c56.237366 -56.23737 147.4162 -56.23737 203.65356 0z" fill-rule="evenodd"/><path fill="#000000" d="m225.68384 921.6682l0 0c63.1344 36.450806 143.86417 14.819458 180.31497 -48.31494l0 0c17.504272 -30.318237 22.247772 -66.34827 13.186951 -100.16388c-9.060791 -33.815613 -31.183716 -62.64679 -61.501923 -80.15112l0 0c-63.1344 -36.450806 -143.86417 -14.819458 -180.31496 48.315002l0 0c-36.45079 63.1344 -14.819443 143.86414 48.314957 180.31494z" fill-rule="evenodd"/><path fill="#000000" d="m209.50394 431.99213l118.01575 0l0 96.0l-118.01575 0z" fill-rule="evenodd"/></g></svg>);
  } else if(props.name == "cards") {
    return(<svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m314.11023 177.27559l229.95276 0c10.775757 0 21.110107 4.2806396 28.729675 11.900223c7.619629 7.6195984 11.900269 17.95398 11.900269 28.729706l0 40.629913c0 0.0014343262 -0.001159668 0.0025939941 -0.0026245117 0.0025939941l-311.21 -0.0025939941l0 0c-0.0014343262 0 -0.0025939941 -0.001159668 -0.0025939941 -0.0025939941l0.0025939941 -40.62732l0 0c0 -22.439285 18.190643 -40.62993 40.629913 -40.62993z" fill-rule="evenodd"/><path fill="#000000" d="m4.6456695E-5 423.3899l0 0c0 -38.01999 30.821287 -68.84128 68.84127 -68.84128l275.35684 0l0 0c18.257843 0 35.767883 7.252899 48.67813 20.163147c12.910248 12.910248 20.163147 30.420288 20.163147 48.67813l0 467.7663c0 38.01996 -30.82129 68.84125 -68.84128 68.84125l-275.35684 0c-38.01998 0 -68.84127 -30.82129 -68.84127 -68.84125z" fill-rule="evenodd"/><path fill="#000000" d="m686.5197 245.63965l0 469.41364c0 17.943298 -7.1279907 35.151733 -19.815857 47.8396c-12.687805 12.687805 -29.89624 19.815796 -47.83954 19.815796l-110.86432 0c-0.0027770996 0 -0.0050354004 -0.0022583008 -0.0050354004 -0.005065918l0.0050354004 -604.71936l0 0c0 -0.0027770996 0.0022583008 -0.0050354004 0.0050354004 -0.0050354004l110.85928 0.0050354004l0 0c37.36499 0 67.655396 30.290344 67.655396 67.655396z" fill-rule="evenodd"/><path fill="#000000" d="m413.90967 217.62425l0 0c36.795044 0 72.05493 14.747818 97.89282 40.944717c25.83789 26.1969 40.09784 61.65689 39.59015 98.448425l-40.975403 -0.56539917l0 0c0.35635376 -25.826202 -9.653534 -50.71768 -27.79071 -69.10687c-18.137177 -18.38916 -42.888214 -28.741547 -68.71686 -28.741547z" fill-rule="evenodd"/><path fill="#000000" d="m587.5906 0l229.95276 0c10.775696 0 21.110046 4.28064 28.729675 11.9002285c7.619568 7.619589 11.9002075 17.953968 11.9002075 28.729692l0 40.62992c0 0.0014343262 -0.001159668 0.0025939941 -0.0025634766 0.0025939941l-311.21002 -0.0025939941l0 0c-0.0014648438 0 -0.0026245117 -0.001159668 -0.0026245117 -0.0025939941l0.0026245117 -40.627327l0 0c0 -22.439285 18.190613 -40.62992 40.629944 -40.62992z" fill-rule="evenodd"/><path fill="#000000" d="m960.0 68.36405l0 469.41367c0 17.943298 -7.1279297 35.151733 -19.815796 47.83954c-12.687866 12.687866 -29.89624 19.815796 -47.8396 19.815796l-110.86432 0c-0.002746582 0 -0.005004883 -0.0022583008 -0.005004883 -0.005004883l0.005004883 -604.71936l0 0c0 -0.0027831793 0.0022583008 -0.005039394 0.005065918 -0.005039394l110.85925 0.005039394l0 0c37.36505 0 67.655396 30.29035 67.655396 67.65539z" fill-rule="evenodd"/><path fill="#000000" d="m687.39 40.348667l0 0c36.795044 0 72.05487 14.747818 97.89282 40.944706c25.83789 26.1969 40.09778 61.6569 39.59015 98.44843l-40.975464 -0.5654144l0 0c0.35638428 -25.826172 -9.653503 -50.71768 -27.79071 -69.10685c-18.137146 -18.389168 -42.888184 -28.741547 -68.7168 -28.741547z" fill-rule="evenodd"/></g></svg>);
  } else if(props.name == "map") {
    return(<svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m2.8372704E-4 480.01505l0 0c0 -79.52902 64.471 -144.00705 144.0 -144.01575l0 0c38.191162 -0.004180908 74.81813 15.1631775 101.823364 42.165466c27.005234 27.002289 42.17662 63.627594 42.17662 101.81879l0 0c0 79.52896 -64.47099 144.00705 -143.99998 144.01572l0 0c-79.52901 0.008728027 -144.0 -64.4552 -144.0 -143.98422z" fill-rule="evenodd"/><path fill="#000000" d="m336.00027 480.01505l0 0c0 -79.52902 64.47101 -144.00705 144.0 -144.01575l0 0c38.191193 -0.004180908 74.818146 15.1631775 101.823395 42.165466c27.005249 27.002289 42.176636 63.627594 42.176636 101.81879l0 0c0 79.52896 -64.47101 144.00705 -144.00003 144.01572l0 0c-79.52899 0.008728027 -144.0 -64.4552 -144.0 -143.98422z" fill-rule="evenodd"/><path fill="#000000" d="m672.0003 480.01505l0 0c0 -79.52902 64.47095 -144.00705 144.0 -144.01575l0 0c38.191162 -0.004180908 74.818115 15.1631775 101.823364 42.165466c27.005249 27.002289 42.176636 63.627594 42.176636 101.81879l0 0c0 79.52896 -64.47101 144.00705 -144.0 144.01572l0 0c-79.52905 0.008728027 -144.0 -64.4552 -144.0 -143.98422z" fill-rule="evenodd"/><path fill="#000000" d="m168.00029 768.0465l0 0c0 -79.52899 64.47099 -144.00702 143.99998 -144.01575l0 0c38.191193 -0.0041503906 74.818146 15.163208 101.823395 42.165527c27.005219 27.002258 42.176605 63.627563 42.176605 101.818726l0 0c0 79.52905 -64.47098 144.00708 -144.0 144.01575l0 0c-79.52899 0.008728027 -143.99998 -64.4552 -143.99998 -143.98425z" fill-rule="evenodd"/><path fill="#000000" d="m504.00027 768.0465l0 0c0 -79.52899 64.47098 -144.00702 144.00003 -144.01575l0 0c38.191162 -0.0041503906 74.818115 15.163208 101.823364 42.165527c27.005249 27.002258 42.176636 63.627563 42.176636 101.818726l0 0c0 79.52905 -64.47101 144.00708 -144.0 144.01575l0 0c-79.52905 0.008728027 -144.00003 -64.4552 -144.00003 -143.98425z" fill-rule="evenodd"/><path fill="#000000" d="m168.00029 191.98354l0 0c0 -79.529 64.47099 -144.00705 143.99998 -144.01575l0 0c38.191193 -0.0041770935 74.818146 15.163204 101.823395 42.16549c27.005219 27.002281 42.176605 63.627586 42.176605 101.81876l0 0c0 79.52901 -64.47098 144.00706 -144.0 144.01576l0 0c-79.52899 0.00869751 -143.99998 -64.45526 -143.99998 -143.98427z" fill-rule="evenodd"/><path fill="#000000" d="m504.00027 191.98354l0 0c0 -79.529 64.47098 -144.00705 144.00003 -144.01575l0 0c38.191162 -0.0041770935 74.818115 15.163204 101.823364 42.16549c27.005249 27.002281 42.176636 63.627586 42.176636 101.81876l0 0c0 79.52901 -64.47101 144.00706 -144.0 144.01576l0 0c-79.52905 0.00869751 -144.00003 -64.45526 -144.00003 -143.98427z" fill-rule="evenodd"/></g></svg>);
  } else if(props.name == "hilted sword") {
    return(<svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m750.3494 10.167267l199.43304 199.43307l-411.71655 411.71655l-199.43304 -199.4331z" fill-rule="evenodd"/><path fill="#000000" d="m105.36111 512.70294l0 0c23.430794 -23.430817 61.41961 -23.430817 84.850395 0l254.5512 254.55115c11.251862 11.251892 17.57309 26.512695 17.57309 42.425232c0 15.912537 -6.321228 31.17334 -17.57309 42.42517l0 0l0 0c-23.430817 23.430786 -61.419617 23.430786 -84.8504 0l-254.55118 -254.55121l0 0c-23.430786 -23.430786 -23.430786 -61.419556 0 -84.85034z" fill-rule="evenodd"/><path fill="#000000" d="m737.0195 40.7765l0 0c0 -22.491013 18.232605 -40.723583 40.723633 -40.723583l141.54492 0l0 0c10.800598 0 21.158752 4.2905083 28.79596 11.927661c7.637146 7.6371536 11.927612 17.995356 11.927612 28.795921l0 141.29298c0 22.491013 -18.232544 40.723587 -40.72357 40.723587l-141.54492 0c-22.491028 0 -40.723633 -18.232574 -40.723633 -40.723587z" fill-rule="evenodd"/><path fill="#000000" d="m410.4218 350.09265l0 0c15.901428 -15.901428 41.6828 -15.901428 57.58423 0l141.84882 141.84882c7.6361694 7.6361694 11.926086 17.993011 11.926086 28.792114c0 10.799194 -4.289917 21.156006 -11.926086 28.792175l-99.89606 99.89606c-15.901459 15.901428 -41.6828 15.901428 -57.58426 0l-141.84882 -141.84885c-15.901428 -15.901428 -15.901428 -41.6828 0 -57.58423z" fill-rule="evenodd"/><path fill="#000000" d="m178.58879 667.39526l0 0c11.506302 -11.506348 30.161682 -11.506348 41.66797 0l72.284805 72.28479l0 0c5.5255127 5.5255127 8.6297 13.019714 8.6297 20.833984c0 7.814209 -3.104187 15.308411 -8.6297 20.833923l-157.76512 157.76514c-11.506287 11.506287 -30.161674 11.506287 -41.66796 0l-72.28479 -72.28479c-11.50629 -11.506287 -11.50629 -30.161682 0 -41.66797z" fill-rule="evenodd"/><path fill="#000000" d="m132.69206 612.6296l0 0l0 0c-15.374382 -4.1193237 -28.482666 -14.177429 -36.441177 -27.961609c-7.9585037 -13.78418 -10.115311 -30.165283 -5.995949 -45.539673l34.157524 -127.48358c1.373291E-4 -5.187988E-4 6.866455E-4 -8.544922E-4 0.0012207031 -7.019043E-4l115.937195 31.06485l0 0c5.340576E-4 1.5258789E-4 8.544922E-4 7.019043E-4 7.171631E-4 0.0012207031l-34.158234 127.48236l0 0c-8.578125 32.015503 -41.48578 51.01526 -73.5013 42.437134z" fill-rule="evenodd"/><path fill="#000000" d="m186.43414 272.83508l0 0l0 0c6.143036 1.6502686 11.380493 5.6736755 14.560211 11.18515c3.179718 5.511444 4.041214 12.059479 2.394989 18.203583l-32.902252 122.798584c-4.5776367E-5 2.1362305E-4 -2.746582E-4 3.3569336E-4 -4.8828125E-4 2.746582E-4l-46.324135 -12.444946l0 0c-2.1362305E-4 -6.1035156E-5 -3.3569336E-4 -2.746582E-4 -2.822876E-4 -4.8828125E-4l32.902527 -122.798096l0 0c3.4281006 -12.794434 16.57724 -20.380554 29.36943 -16.944061z" fill-rule="evenodd"/><path fill="#000000" d="m164.72646 431.24994l18.63359 -69.5448l12.2752075 77.826416z" fill-rule="evenodd"/><path fill="#000000" d="m174.21196 272.56262l0 0l0 0c6.1437073 -1.6443176 12.690048 -0.78100586 18.198929 2.4000244c5.5088806 3.1810608 9.529037 8.41922 11.176071 14.562195l37.320587 139.19571c3.4297638 12.792084 -4.161133 25.937897 -16.954727 29.362l0 0l0 0c-12.79361 3.4241028 -25.945236 -4.170166 -29.375 -16.96225l-37.320587 -139.19568l0 0c-3.4297638 -12.792084 4.1611176 -25.937897 16.954727 -29.362z" fill-rule="evenodd"/><path fill="#000000" d="m344.4324 825.76556l0 0l0 0c4.119385 15.37439 14.17746 28.482727 27.96164 36.441223c13.784149 7.958496 30.165253 10.115295 45.539673 5.9959106l127.48358 -34.15747c5.493164E-4 -1.8310547E-4 8.544922E-4 -7.324219E-4 6.713867E-4 -0.0012207031l-31.06482 -115.937195l0 0c-1.8310547E-4 -5.493164E-4 -6.713867E-4 -8.544922E-4 -0.0012207031 -7.324219E-4l-127.48239 34.158203l0 0c-32.015503 8.578125 -51.01526 41.48578 -42.437134 73.50128z" fill-rule="evenodd"/><path fill="#000000" d="m684.2269 772.0235l0 0l0 0c-1.6502686 -6.1430054 -5.673706 -11.380493 -11.18512 -14.560181c-5.5114746 -3.1797485 -12.059509 -4.0411987 -18.203613 -2.3950195l-122.798584 32.902283c-2.4414062E-4 6.1035156E-5 -3.6621094E-4 2.4414062E-4 -3.0517578E-4 4.8828125E-4l12.444946 46.324097l0 0c6.1035156E-5 2.4414062E-4 3.0517578E-4 3.6621094E-4 4.8828125E-4 3.0517578E-4l122.798096 -32.902527l0 0c12.794495 -3.4281006 20.380554 -16.57721 16.944092 -29.369446z" fill-rule="evenodd"/><path fill="#000000" d="m525.8121 793.7312l69.5448 -18.633606l-77.826416 -12.2752075z" fill-rule="evenodd"/><path fill="#000000" d="m684.4994 784.2457l0 0l0 0c1.6443481 -6.143738 0.78100586 -12.690063 -2.4000244 -18.198975c-3.1810303 -5.50885 -8.4192505 -9.528992 -14.562195 -11.176025l-139.19568 -37.320618c-12.792114 -3.4297485 -25.937927 4.161133 -29.36203 16.954712l0 0l0 0c-3.4241028 12.79364 4.1701355 25.945251 16.96225 29.375l139.19568 37.320618l0 0c12.792114 3.4297485 25.937927 -4.161133 29.362 -16.954712z" fill-rule="evenodd"/></g></svg>);
  } else if(props.name == "broad sword") {
    return(<svg class="icon fillRed" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m569.3285 79.34744l0 0c0.8331909 -39.247963 33.32544 -71.74195 72.5733 -72.577354l247.03607 -5.2582135l0 0c18.847534 -0.40117323 36.76416 6.7012396 49.80841 19.74479c13.0442505 13.0435505 20.147705 30.959776 19.747559 49.807312l-5.234558 246.56346c-0.83325195 39.247955 -33.32544 71.74194 -72.573364 72.57736l-247.03607 5.258209c-39.247925 0.8353882 -70.38916 -30.304138 -69.55591 -69.55209z" fill-rule="evenodd"/><path fill="#000000" d="m68.036476 620.4278l0 0c18.74289 -18.742859 49.131126 -18.742859 67.874016 0l203.65353 203.65356c9.000671 9.00061 14.05719 21.20813 14.05719 33.93701c0 12.728821 -5.0565186 24.93634 -14.05719 33.93701l0 0l0 0c-18.74289 18.742859 -49.131104 18.742859 -67.87399 0l-203.65356 -203.65356l0 0c-18.74289 -18.74292 -18.74289 -49.131104 0 -67.87402z" fill-rule="evenodd"/><path fill="#000000" d="m696.80835 127.4225l0 0c13.710205 -13.710236 35.938904 -13.710236 49.64917 0l86.13037 86.13039l0 0c6.5838623 6.5838776 10.282654 15.51355 10.282654 24.82457c0 9.31102 -3.6987915 18.240677 -10.282654 24.82457l-458.69733 458.69733c-13.710236 13.710205 -35.938904 13.710205 -49.64914 0l-86.13039 -86.13037c-13.710236 -13.710266 -13.710236 -35.938965 0 -49.64917z" fill-rule="evenodd"/><path fill="#000000" d="m117.161255 741.01013l0 0c10.281883 -10.28186 26.952103 -10.28186 37.23398 0l64.59279 64.59277l0 0c4.937546 4.937561 7.7114105 11.634277 7.7114105 18.617004c0 6.982727 -2.7738647 13.679443 -7.7114105 18.617004l-98.54554 98.54553c-10.281883 10.28186 -26.952103 10.28186 -37.23398 0l-64.5928 -64.59277c-10.281879 -10.28186 -10.281879 -26.952087 0 -37.23401z" fill-rule="evenodd"/><path fill="#000000" d="m685.3738 138.85611l-452.7874 452.78738l351.0866 -554.48816z" fill-rule="evenodd"/><path fill="#000000" d="m822.7756 272.98212l-454.42517 454.42517l556.126 -352.72437z" fill-rule="evenodd"/><path fill="#000000" d="m88.20685 696.51733l0 0l0 0c-11.616348 -3.1134033 -21.520134 -10.713867 -27.532623 -21.129395c-6.012493 -10.415466 -7.6411896 -22.792847 -4.527794 -34.40918l25.816124 -96.32214c1.0681152E-4 -3.6621094E-4 5.187988E-4 -6.1035156E-4 9.2315674E-4 -4.8828125E-4l87.59806 23.478638l0 0c3.9672852E-4 1.2207031E-4 6.4086914E-4 5.493164E-4 5.340576E-4 9.765625E-4l-25.81665 96.32117l0 0c-6.483322 24.189758 -31.348785 38.5437 -55.538574 32.060425z" fill-rule="evenodd"/><path fill="#000000" d="m128.83295 439.7784l0 0l0 0c4.641449 1.2472534 8.598541 4.287567 11.000748 8.452118c2.4022064 4.1645203 3.052765 9.112122 1.808548 13.754395l-24.867378 92.78229c-4.5776367E-5 1.8310547E-4 -2.0599365E-4 2.4414062E-4 -3.6621094E-4 2.4414062E-4l-35.000885 -9.405884l0 0c-1.6021729E-4 0 -2.593994E-4 -1.8310547E-4 -2.1362305E-4 -3.6621094E-4l24.867592 -92.78189l0 0c2.59095 -9.667053 12.526619 -15.398193 22.191956 -12.800903z" fill-rule="evenodd"/><path fill="#000000" d="m112.421875 559.4723l14.083199 -52.545593l9.270409 58.80481z" fill-rule="evenodd"/><path fill="#000000" d="m119.59811 439.5718l0 0l0 0c4.6421585 -1.2420349 9.588402 -0.58935547 13.750618 1.8144836c4.162216 2.4038696 7.199463 6.3619385 8.443573 11.003571l28.190659 105.17569c2.5907135 9.665588 -3.1455688 19.5979 -12.812363 22.184326l0 0l0 0c-9.666794 2.5864868 -19.60347 -3.1523438 -22.194183 -12.817993l-28.190659 -105.17569l0 0c-2.5907211 -9.665649 3.1455688 -19.59793 12.812355 -22.184387z" fill-rule="evenodd"/><path fill="#000000" d="m261.24744 872.63556l0 0l0 0c3.1134033 11.616333 10.713867 21.52008 21.129364 27.532593c10.415497 6.012512 22.792877 7.6411743 34.40921 4.527771l96.32211 -25.816101c3.9672852E-4 -1.2207031E-4 6.4086914E-4 -4.8828125E-4 5.493164E-4 -9.1552734E-4l-23.478699 -87.59808l0 0c-1.2207031E-4 -3.6621094E-4 -5.187988E-4 -6.1035156E-4 -9.460449E-4 -4.8828125E-4l-96.32117 25.81665l0 0c-24.189789 6.4832764 -38.54373 31.348755 -32.060425 55.538574z" fill-rule="evenodd"/><path fill="#000000" d="m517.9863 832.00946l0 0l0 0c-1.2472534 -4.6414795 -4.2875366 -8.598572 -8.452087 -11.000793c-4.1645203 -2.4022217 -9.112152 -3.0527344 -13.754425 -1.8085327l-92.78226 24.86737c-1.8310547E-4 6.1035156E-5 -2.746582E-4 2.4414062E-4 -2.1362305E-4 3.6621094E-4l9.405823 35.000916l0 0c3.0517578E-5 1.2207031E-4 2.1362305E-4 2.4414062E-4 3.6621094E-4 1.8310547E-4l92.78192 -24.867554l0 0c9.667023 -2.5910034 15.398163 -12.526672 12.800873 -22.191956z" fill-rule="evenodd"/><path fill="#000000" d="m398.29248 848.42053l52.545593 -14.083252l-58.80481 -9.270386z" fill-rule="evenodd"/><path fill="#000000" d="m518.19293 841.24426l0 0l0 0c1.2420654 -4.642151 0.58935547 -9.588379 -1.8144531 -13.75061c-2.4038696 -4.1622314 -6.361969 -7.199463 -11.003571 -8.4435425l-105.17566 -28.190674c-9.665649 -2.5906982 -19.59793 3.1455688 -22.184387 12.812378l0 0l0 0c-2.5864258 9.666748 3.1523743 19.603455 12.818024 22.194153l105.17569 28.190674l0 0c9.665649 2.5906982 19.59793 -3.1455688 22.184357 -12.812378z" fill-rule="evenodd"/></g></svg>);
  } else if(props.name == "spike sword") {
    return(
      <svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m682.91486 56.631527l0 0c0.5883789 -27.541315 23.392029 -50.34174 50.93341 -50.92617l173.36615 -3.6788568l0 0c13.225891 -0.28065455 25.79779 4.704117 34.950073 13.857721c9.152283 9.1536045 14.135254 21.726227 13.852722 34.95203l-3.696106 173.01999c-0.5883789 27.54132 -23.392029 50.341736 -50.93347 50.926178l-173.36609 3.6788635c-27.541443 0.5844116 -49.391174 -21.268463 -48.802795 -48.80977z" fill-rule="evenodd"/><path fill="#000000" d="m65.08449 621.38556l0 0c18.74289 -18.742859 49.13112 -18.742859 67.87401 0l203.65353 203.65356c9.000671 9.000671 14.05719 21.20819 14.05719 33.93701c0 12.728821 -5.0565186 24.93634 -14.05719 33.93701l0 0l0 0c-18.74289 18.742859 -49.131104 18.742859 -67.87399 0l-203.65355 -203.65356l0 0c-18.742893 -18.742859 -18.742893 -49.131104 0 -67.87402z" fill-rule="evenodd"/><path fill="#000000" d="m773.90045 48.33622l0 0c13.710266 -13.710232 35.938904 -13.710232 49.64917 0l86.13037 86.13038l0 0c6.5838623 6.583893 10.282654 15.51355 10.282654 24.82457c0 9.31102 -3.6987915 18.240692 -10.282654 24.824585l-538.7288 538.72876c-13.710236 13.710266 -35.938904 13.710266 -49.64914 0l-86.13039 -86.13037c-13.710236 -13.710205 -13.710236 -35.938904 0 -49.64917z" fill-rule="evenodd"/><path fill="#000000" d="m114.20927 741.9679l0 0c10.281876 -10.28186 26.952095 -10.28186 37.23397 0l64.592804 64.592834l0 0c4.9375305 4.9375 7.7114105 11.634216 7.7114105 18.616943c0 6.982727 -2.77388 13.679504 -7.7114105 18.617004l-98.545555 98.54553c-10.281876 10.281921 -26.952095 10.281921 -37.23398 0l-64.59279 -64.59277c-10.281879 -10.28186 -10.281879 -26.952087 0 -37.233948z" fill-rule="evenodd"/><path fill="#000000" d="m751.1114 79.55638l-517.2599 517.2598l462.11026 -572.4094z" fill-rule="evenodd"/><path fill="#000000" d="m884.28076 204.72485l-521.2598 521.2598l575.68506 -466.83463z" fill-rule="evenodd"/><path fill="#000000" d="m85.17173 697.5066l0 0l0 0c-11.616348 -3.1149902 -21.519493 -10.71698 -27.53086 -21.133606c-6.011368 -10.416626 -7.6385384 -22.794617 -4.523548 -34.41101l25.829319 -96.32208c1.0681152E-4 -4.272461E-4 5.187988E-4 -6.1035156E-4 9.2315674E-4 -5.493164E-4l87.59806 23.490723l0 0c3.9672852E-4 1.2207031E-4 6.4086914E-4 4.8828125E-4 5.340576E-4 9.1552734E-4l-25.82985 96.32117l0 0c-6.4866333 24.18982 -31.354782 38.541077 -55.54458 32.054443z" fill-rule="evenodd"/><path fill="#000000" d="m125.83204 440.76407l0 0l0 0c4.6414566 1.2478943 8.5982895 4.2888184 11.000053 8.453796c2.401764 4.164978 3.051712 9.112854 1.8068542 13.755127l-24.880096 92.78226c-3.8146973E-5 1.8310547E-4 -2.0599365E-4 3.0517578E-4 -3.6621094E-4 2.4414062E-4l-35.000885 -9.410645l0 0c-1.6021729E-4 -6.1035156E-5 -2.5177002E-4 -1.8310547E-4 -2.1362305E-4 -3.6621094E-4l24.88031 -92.78192l0 0c2.59227 -9.667023 12.529015 -15.397125 22.194344 -12.798492z" fill-rule="evenodd"/><path fill="#000000" d="m109.40511 560.45996l14.090401 -52.545624l9.263199 58.808014z" fill-rule="evenodd"/><path fill="#000000" d="m116.59692 440.5563l0 0l0 0c4.642479 -1.2415161 9.588806 -0.5881653 13.750862 1.8162842c4.1620483 2.40448 7.1988983 6.363098 8.442444 11.005005l28.178177 105.18289c2.5895844 9.666321 -3.148178 19.598206 -12.815628 22.183472l0 0l0 0c-9.66745 2.5853271 -19.60373 -3.1549683 -22.193314 -12.821289l-28.17817 -105.18289l0 0c-2.5895767 -9.66629 3.148178 -19.598175 12.815628 -22.183472z" fill-rule="evenodd"/><path fill="#000000" d="m258.26398 873.67645l0 0l0 0c3.1149902 11.616333 10.71698 21.51947 21.133606 27.530823c10.416626 6.0114136 22.794617 7.63855 34.41095 4.5235596l96.32211 -25.829285c3.9672852E-4 -1.2207031E-4 6.4086914E-4 -5.493164E-4 5.493164E-4 -9.765625E-4l-23.490723 -87.59802l0 0c-9.1552734E-5 -4.272461E-4 -5.187988E-4 -6.713867E-4 -9.1552734E-4 -5.493164E-4l-96.32117 25.829834l0 0c-24.189789 6.4866333 -38.541046 31.354797 -32.054413 55.544617z" fill-rule="evenodd"/><path fill="#000000" d="m515.0065 833.0161l0 0l0 0c-1.2478638 -4.6414185 -4.2888184 -8.598267 -8.453796 -11.000061c-4.164978 -2.4017334 -9.112854 -3.0516968 -13.755127 -1.8068237l-92.78229 24.880066c-1.5258789E-4 6.1035156E-5 -2.4414062E-4 2.4414062E-4 -1.8310547E-4 3.6621094E-4l9.410614 35.000916l0 0c6.1035156E-5 1.2207031E-4 2.1362305E-4 2.4414062E-4 3.6621094E-4 1.8310547E-4l92.78192 -24.88031l0 0c9.667023 -2.5922241 15.397125 -12.528992 12.798492 -22.194336z" fill-rule="evenodd"/><path fill="#000000" d="m395.3106 849.44305l52.545593 -14.090393l-58.808014 -9.263184z" fill-rule="evenodd"/><path fill="#000000" d="m515.21423 842.2512l0 0l0 0c1.2415161 -4.642456 0.5881958 -9.588806 -1.8162842 -13.7508545c-2.4044495 -4.1620483 -6.3630676 -7.1988525 -11.005005 -8.442444l-105.18289 -28.178162c-9.66629 -2.5895996 -19.598175 3.1481934 -22.183472 12.815613l0 0l0 0c-2.5852966 9.66748 3.1549988 19.60376 12.821289 22.19336l105.18289 28.178162l0 0c9.666321 2.5895386 19.598206 -3.1481934 22.183472 -12.815674z" fill-rule="evenodd"/><path fill="#000000" d="m688.24536 95.89444l-96.8504 96.8504l0 -193.70079z" fill-rule="evenodd"/><path fill="#000000" d="m538.6858 283.55243l-96.8504 96.85037l0 -193.70078z" fill-rule="evenodd"/><path fill="#000000" d="m393.0385 475.12268l-96.8504 96.8504l0 -193.7008z" fill-rule="evenodd"/><path fill="#000000" d="m866.10406 277.73965l-96.8504 96.8504l193.7008 0z" fill-rule="evenodd"/><path fill="#000000" d="m678.4461 427.29926l-96.8504 96.8504l193.7008 0z" fill-rule="evenodd"/><path fill="#000000" d="m486.87585 572.94653l-96.8504 96.8504l193.7008 0z" fill-rule="evenodd"/></g></svg>
    );
  } else if(props.name=="three shield") {
    return(
      <svg class="icon threeShield" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m119.03545 166.15492l360.0 0l0 288.09448l-360.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m479.08777 933.74805c-95.50867 0.018432617 -187.10846 -50.567566 -254.63646 -140.62317c-67.527985 -90.05554 -105.448944 -212.19885 -105.41573 -339.54376l359.99997 0.16690063z" fill-rule="evenodd"/><path fill="#000000" d="m121.06166 180.16568l0 0c-8.57563 -32.006424 10.418411 -64.906044 42.424377 -73.48337l299.4347 -80.245865c15.369812 -4.118973 31.746063 -1.9635258 45.526123 5.9921722c13.78006 7.9556923 23.835236 21.059948 27.9534 36.429977l0 0l0 0c8.575623 32.006424 -10.418457 64.90604 -42.424408 73.48337l-299.4347 80.245865c-32.005966 8.577316 -64.903854 -10.415726 -73.47949 -42.42215z" fill-rule="evenodd"/><path fill="#000000" d="m357.1374 141.01706l121.921265 0l0 225.00787l-121.921265 0z" fill-rule="evenodd"/><path fill="#000000" d="m479.05908 526.2493l0 408.0l-97.7323 -408.0z" fill-rule="evenodd"/><path fill="#000000" d="m780.9344 511.6824l0 0c33.137085 0 60.002075 -26.862915 60.00464 -60.0l0.022216797 -286.96063c0.0012207031 -15.912979 -6.319031 -31.174225 -17.570312 -42.4264c-11.251343 -11.252182 -26.512085 -17.573593 -42.42505 -17.573593l0 0l0 0c-33.137085 0 -60.002075 26.862907 -60.00464 59.999992l-0.022216797 286.96063c-0.0025634766 33.137085 26.858276 60.0 59.99536 60.0z" fill-rule="evenodd"/><path fill="#000000" d="m477.63705 933.731c96.05789 1.0792236 188.45193 -49.07379 256.62595 -139.30072c68.17395 -90.22699 106.4729 -213.04364 106.375854 -341.12524l-120.01672 0.14767456l0 0c0.05883789 96.11606 -25.509094 188.27219 -71.00891 255.94162c-45.499817 67.66943 -107.152466 105.23187 -171.22556 104.32068z" fill-rule="evenodd"/><path fill="#000000" d="m838.93835 178.16656l0 0c8.575623 -32.006424 -10.418945 -64.90406 -42.4256 -73.47893l-296.50317 -79.43586c-15.370117 -4.117794 -31.746674 -1.961216 -45.526978 5.9953136c-13.780304 7.9565315 -23.83554 21.061253 -27.953705 36.43128l0 0l0 0c-8.575653 32.006424 10.418915 64.90406 42.425568 73.47892l296.50317 79.43587c32.006653 8.57486 64.90509 -10.420181 73.48071 -42.42659z" fill-rule="evenodd"/></g></svg>
    );
  } else if(props.name=="more cards 1") {
    return(
      <svg class="icon" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10"><clipPath id="p.0"><path d="m0 0l960.0 0l0 960.0l-960.0 0l0 -960.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 960.0l-960.0 0z" fill-rule="evenodd"/><path fill="#000000" d="m556.0063 -0.012477165l141.86237 0l0 0c28.966125 0 56.74591 11.506758 77.22809 31.988918c20.482117 20.482159 31.988892 48.261932 31.988892 77.22808l0 294.69897l-251.07935 0z" fill-rule="evenodd"/><path fill="#000000" d="m556.0063 959.9872l141.86237 0l0 0c28.966125 0 56.74591 -11.506775 77.22809 -31.988953c20.482117 -20.482117 31.988892 -48.2619 31.988892 -77.22803l0 -294.69904l-251.07935 0z" fill-rule="evenodd"/><path fill="#000000" d="m403.9727 -0.012477165l-141.8623 0l0 0c-28.966156 0 -56.74594 11.506758 -77.22809 31.988918c-20.482162 20.482159 -31.988922 48.261932 -31.988922 77.22808l0 294.69897l251.07932 0z" fill-rule="evenodd"/><path fill="#000000" d="m403.9727 959.9872l-141.8623 0l0 0c-28.966156 0 -56.74594 -11.506775 -77.22809 -31.988953c-20.482162 -20.482117 -31.988922 -48.2619 -31.988922 -77.22803l0 -294.69904l251.07932 0z" fill-rule="evenodd"/><path fill="#000000" d="m152.89337 384.85135l99.02493 0l0 225.13022l-99.02493 0z" fill-rule="evenodd"/><path fill="#000000" d="m708.0815 384.85135l99.02496 0l0 225.13022l-99.02496 0z" fill-rule="evenodd"/><path fill="#000000" d="m350.1201 708.3137l272.38095 0l0 251.69843l-272.38095 0z" fill-rule="evenodd"/><path fill="#000000" d="m365.9591 -0.012477165l218.55322 0l0 251.6984l-218.55322 0z" fill-rule="evenodd"/></g></svg>
    );
  } else {
    return("Icon: " + props.name);
  }
}

class TreeCicle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const angle = this.props.angle;
    const distance = this.props.distance;
    const centerX = this.props.centerX;
    const centerY = this.props.centerY;
    const lineX = this.props.lineX;
    const lineY = this.props.lineY;
    const background = this.props.background;
    const cX = centerX+distance*Math.cos(angle);
    const cY = centerY+distance*Math.sin(angle);
    const r = 20;
    const id = "tree-circle-"+background;
    const cursor = this.props.status==1 ? "pointer" : "default";
    const style = {
      filter: this.props.status==2 ? `url(#shadow${id})` : "none",
      cursor: cursor,
    }
    return (
      <>
        <defs>
          <filter id={"shadow"+id} color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="2"/>
            <feOffset dx="0" dy="0" result="shadow"/>
            <feComposite in="SourceGraphic" in2="shadow" operator="over"/>
          </filter>
          <pattern id={id} x="0%" y="0%" height="100%" width="100%"
            viewBox="0 0 1500 1500">
            <image x="60%" y="60%" width="1024" height="1024" href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Button_Icon_White.svg/1024px-Button_Icon_White.svg.png"></image>
          </pattern>
        </defs>
        <line
          x1={lineX}
          y1={lineY}
          x2={cX}
          y2={cY}
          stroke-width="10"
          stroke={background}/>
        <circle
          cx={cX}
          cy={cY}
          fill={background}
          onClick={this.props.onClick.bind(this)}
          style={style}
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          r="20"/>
        <circle
          cx={cX}
          cy={cY}
          style={{cursor: cursor,}}
          onClick={this.props.onClick.bind(this)}
          fill="#111a22"
          onMouseOver={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          r="13"/>
      </>
    );
  }
}

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.centerX = 200;
    this.centerY = 125;
    this.state = {
      test: "test",
      hovered: "none",
    };
  }

  circleClick(cost, title, skillList, setSkills) {
    var temp = skillList;
    temp.push(title);
    this.setState({test: "test again"});
    setSkills(temp);
  }

  makeTree(circles, distance, layer, indexNode, numSiblings, parentAngle, angleRange, skillList, setSkills, parentBought, xp, incrXP) {
    var len = Object.keys(layer).length-1;
    const angle = parentAngle+angleRange*indexNode;
    const newRange = angleRange/len;
    var data = layer["data"];
    var pX = this.centerX+(distance-60)*Math.cos(utils.toRadians(parentAngle));
    var pY = this.centerY+(distance-60)*Math.sin(utils.toRadians(parentAngle));
    const cost = data["cost"]
      ? data["cost"]
      : distance/60+1;
    data["cost"] = cost;
    var status = 0;
    if(skillList.includes(data["title"])) status = 2;
    else if(parentBought && cost <= xp) status = 1;
    var background = data["background"];
    if(status == 0) background = "#505050";
    else if(status == 1) background = "#808080";
    if(angleRange == 360) {pX = this.centerX; pY = this.centerY;}
    for(var i = 0; i<len; ++i) {
      const ind = i - (len-1)/2.0;
      this.makeTree(circles, distance+60, layer[""+i], ind, len, angle, newRange, skillList, setSkills, status==2, xp, incrXP);
    }
    circles.push(
      <TreeCicle
        angle={utils.toRadians(angle)}
        distance = {distance}
        centerX={this.centerX}
        centerY={this.centerY}
        lineX={pX}
        lineY={pY}
        cost={cost}
        status={status}
        iconName={data["icon"]}
        onMouseOver={
          () => {
            this.setState({hovered: data});
          }
        }
        onMouseOut = {
          () => {this.setState({hovered: "none"});}
        }
        onClick={
          () => {
            if(status == 1) {
              this.circleClick(cost, data["title"], skillList, setSkills);
              incrXP(-1*cost);
            }
          }
        }
        background={background}/>
    );
  }

  render() {
    const circles = [];
    const innerDistance = 60;
    const outerDistance = 70;
    const firstLayer = skills[0];
    const firstLen = Object.keys(firstLayer).length-1;
    this.makeTree(circles, 0, skills, 0, 0, 0, 360, this.props.skillList, this.props.setSkills, true, this.props.xp, this.props.incrXP);
    const hovered = this.state.hovered;
    var title = hovered["title"];
    title = title ? title : "Skills";
    var desc = hovered["description"];
    desc = desc ? desc : "Hover over a skill to display its effects. Click to buy it.";
    var cost = hovered["cost"];
    cost = cost ? cost + " XP": "";
    return(
      <>
        <svg id="tree" viewbox="0 0 100 100">
          <g>
            {circles}
          </g>
        </svg>
        <div class="sidebar">
          <div class="title">{title}</div>
          <div class="body">
            <div class="description">{desc}</div>
            <div class="cost">{"Cost: " + cost}</div>
          </div>
        </div>
      </>
    );
  }
}

const ExpCounter = props => {
  return(
    <div class="xp">
      XP: {props.xp}
    </div>
  );
}

const MapSpace = props => {
  const style = {};
  Object.assign(style, props.style);
  return(
    <div
      class="space"
      onClick={props.onClick}
      style={style}
      >
    </div>
  );
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    var spaces = [];
    const rows = 5;
    for(var i = 0; i<rows; ++i) {
      const cellsNum = -1*Math.abs(i-2)+rows;
      const row = [];
      for(var j = 0; j<cellsNum; ++j) {
        const space = {
          style: {background: "#ffffff10",},
        };
        row.push(space);
      }
      spaces.push(row);
    }
    this.state = {
      spaces: spaces,
      test: "test",
    }
  }

  spaceClick(row, col) {
    var spaces = this.state.spaces;
    const space = spaces[row][col];
    const style = {
      background: "blue",
    }
    Object.assign(space["style"], style);
    spaces[row][col] = space;
    this.setState({spaces: spaces});
  }

  render() {
    var objects = [];
    var rowInd = 0;
    this.state.spaces.map(row => {
      var obRow = [];
      const rowConst = rowInd;
      var colInd = 0;
      row.map(col => {
        const colConst = colInd;
        obRow.push(
          <MapSpace
            onClick={() => {this.spaceClick(rowConst, colConst);}}
            style={col["style"]}
            />
        );
        colInd++;
      });
      rowInd++;
      objects.push(<div class="row">{obRow}</div>);
    });
    return(
      <><div>{objects}</div></>
    );
  }

}

const NavWindows = props => {
  const tabs = combos["tabs"];
  const len = Object.keys(tabs).length;
  const setCardStats = (num) => {props.setPoints(num);}
  const objects = [
    <Tree
      skillList={props.skillList}
      setSkills={props.setSkills}
      incrXP={props.incrXP}
      xp={props.xp}/>,
    <Cards
      cardList={props.cardList}
      onGroupDelete={props.onGroupDelete}
      setPoints={setCardStats}
      incrXP={props.incrXP} />,
    <Map />
  ];
  const rets = [];
  var index = 0;
  for (var i in tabs) {
    rets.push(
      <div
        class={i}
        style={{
          display: props.curTab == i ? "flex" : "none",
        }}>
        {objects[index]}
      </div>
    );
    ++index;
  }
  return(<>{rets}</>);
}

const App = () => {
  const [cardList, setCardList] = React.useState([]);
  const [drawCards, setDraw] = React.useState(['A0', 'D0']);
  const [statsState, setStatsState] = React.useState([2, 2, 7, 7]);
  const [curTab, setTab] = React.useState("map");
  const [skillList, setSkills] = React.useState([]);
  const [xp, setXP] = React.useState(0);

  const incrXP = incr => {
    const newXP = xp+incr;
    setXP(newXP);
  }
  const onDrawClick = (symbol) => {
    const newCardList = cardList.concat(symbol);
    setCardList(newCardList);
  };
  const onGroupDelete = (index, symbol) => {
    var temp = [...cardList];
    var newInd = index;
    temp.splice(newInd, 3);
    temp.splice(newInd, 0, toSkill(symbol)+(toLevel(symbol)+1));
    setCardList(temp);
  }
  const setStats = (num) => {
    var temp = statsState;
    var j = 0;
    num.map(curNum => {
      if(temp[j] != curNum) temp[j] = curNum;
      j++;
    });
    setStatsState(temp);
  }
  return(
    <>
      <div class="top">
        <ExpCounter xp={xp} />
        <NavButtons curTab={curTab} setTab={setTab}/>
      </div>
      <div class="helix">
        <NavWindows
          curTab={curTab}
          cardList={cardList}
          onGroupDelete={onGroupDelete}
          xp={xp}
          incrXP={incrXP}
          skillList={skillList}
          setSkills={setSkills}
          setPoints={setStats}/>
      </div>
      <div class="bottom">
        <div class="stats">
          <Stats name="attack" stat={statsState} pos={0}/>
          <Stats name="defense" stat={statsState} pos={1} />
        </div>
        <div class="draw">
          <CardDraw cards={drawCards} onClick={onDrawClick}/>
        </div>
      </div>
    </>
  );
};

export default App;