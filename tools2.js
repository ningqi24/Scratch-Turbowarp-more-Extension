(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("该扩展需要非沙箱模式运行");
  }
  console.log("整合工具扩展 v1.0");
  const vm = Scratch.vm;

  let count = 0;

  const times = [];
  let fps = vm.runtime.frameLoop.framerate;
  const oldStep = vm.runtime._step;
  vm.runtime._step = function () {
    oldStep.call(this);
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
  };

  class CombinedTools {
    getInfo() {
      return {
        id: "CombinedTools",
        name: "整合工具集",
        color1: "#773c00",
        color2: "#5f3000",
        color3: "#f54242",
        blocks: [
          {
            opcode: "color",
            blockType: Scratch.BlockType.REPORTER,
            text: "颜色[COLOR]代码",
            arguments: {
              COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: "#ff0000",
              },
            },
          },
          {
            opcode: "returnCount",
            blockType: Scratch.BlockType.REPORTER,
            text: "计数器",
            arguments: {},
          },
          {
            opcode: "incrementCountByNum",
            blockType: Scratch.BlockType.COMMAND,
            text: "将计数器增加[NUM]",
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "decrementCountByNum",
            blockType: Scratch.BlockType.COMMAND,
            text: "将计数器减少[NUM]",
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "setCount",
            blockType: Scratch.BlockType.COMMAND,
            text: "将计数器设为[NUM]",
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "repeatTxtTimes",
            blockType: Scratch.BlockType.REPORTER,
            text: "重复文字[TEXT][NUM]次",
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "x",
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
            },
          },
          {
            opcode: "jsonParse",
            blockType: Scratch.BlockType.REPORTER,
            text: "解析JSON[TEXT]",
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '"RixxyX"',
              },
            },
          },
          {
            opcode: "getfps",
            blockType: Scratch.BlockType.REPORTER,
            text: "帧率",
            arguments: {},
          },
          {
            opcode: "brightnessByColor",
            blockType: Scratch.BlockType.REPORTER,
            text: "[color]的亮度",
            arguments: {
              color: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "#ffffff",
              },
            },
          },
          {
            opcode: "deleteImage",
            blockType: Scratch.BlockType.COMMAND,
            text: "删除角色[SPRITE]的造型[COSNAME]",
            arguments: {
              COSNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "costume1",
              },
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Sprite1",
              },
            },
          },
          {
            opcode: "json_vm_getlist",
            blockType: Scratch.BlockType.REPORTER,
            text: "获取原版列表[list]",
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                menu: "get_list",
              },
            },
          },
          {
            opcode: "json_vm_setlist",
            blockType: Scratch.BlockType.COMMAND,
            text: "将列表[list]设为[json]",
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                menu: "get_list",
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["apple","banana"]',
              },
            },
          },
        ],
        menus: {
          get_list: {
            acceptReporters: true,
            items: "getLists",
          },
        },
      };
    }

    color(args) {
      return args.COLOR;
    }

    returnCount(args) {
      return count;
    }

    incrementCountByNum(args) {
      if (
        count.toString().indexOf("-") === -1 ||
        args.NUM.toString().indexOf("-") === -1
      ) {
        count += Math.floor(args.NUM);
      } else {
        count = 0;
      }
    }

    decrementCountByNum(args) {
      if ((count - Math.floor(args.NUM)).toString().indexOf("-") === -1) {
        count -= Math.floor(args.NUM);
      } else {
        count = 0;
      }
    }

    setCount(args) {
      if (
        count.toString().indexOf("-") === -1 &&
        args.NUM.toString().indexOf("-") === -1
      ) {
        count = Math.floor(args.NUM);
      } else {
        count = 0;
      }
    }

    repeatTxtTimes(args) {
      return Scratch.Cast.toString(args.TEXT).repeat(Math.floor(args.NUM));
    }

    jsonParse(args) {
      try {
        const parsed = JSON.parse(args.TEXT);
        if (
          typeof parsed === "string" ||
          typeof parsed === "number" ||
          typeof parsed === "boolean"
        ) {
          return parsed;
        }
        return Scratch.Cast.toString(parsed);
      } catch (e) {
        console.error(e);
        return Scratch.Cast.toString((e && e.message) || e);
      }
    }

    getfps() {
      return fps;
    }

    brightnessByColor({ color }) {
      const { r, g, b } = Scratch.Cast.toRgbColorObject(color);
      return (r * 299 + g * 587 + b * 114) / 1000;
    }

    deleteImage({ SPRITE, COSNAME }) {
      const target = vm.runtime.getSpriteTargetByName(SPRITE);
      if (!target) return;
      target.deleteCostume(target.getCostumeIndexByName(COSNAME));
    }

    getLists() {
      const globalLists = Object.values(
        vm.runtime.getTargetForStage().variables
      ).filter((x) => x.type === "list");
      const localLists = vm.editingTarget
        ? Object.values(vm.editingTarget.variables).filter(
            (x) => x.type === "list"
          )
        : [];
      const uniqueLists = [...new Set([...globalLists, ...localLists])];
      if (uniqueLists.length === 0) {
        return [
          {
            text: "请选择一个列表",
            value: "select a list",
          },
        ];
      }
      return uniqueLists.map((i) => ({
        text: i.name,
        value: i.id,
      }));
    }

    lookupList(list, util) {
      const byId = util.target.lookupVariableById(list);
      if (byId && byId.type === "list") {
        return byId;
      }
      const byName = util.target.lookupVariableByNameAndType(list, "list");
      if (byName) {
        return byName;
      }
      return null;
    }

    json_valid_return(json) {
      if (typeof json !== "string") {
        return json;
      } else if (
        (json.slice(0, 1) !== "[" || json.slice(-1) !== "]") &&
        (json.slice(0, 1) !== "{" || json.slice(-1) !== "}")
      ) {
        return json;
      } else {
        try {
          return JSON.parse(json) ?? "";
        } catch {
          return json;
        }
      }
    }

    _fixInvalidJSONValues(value) {
      if (Number.isNaN(value)) return "NaN";
      if (value === Infinity) return "Infinity";
      if (value === -Infinity) return "-Infinity";
      return value ?? "";
    }

    json_vm_getlist({ list }, util) {
      try {
        const listVariable = this.lookupList(list, util);
        if (listVariable) {
          return JSON.stringify(listVariable.value);
        }
      } catch (e) {
      }
      return "";
    }

    json_vm_setlist({ list, json }, util) {
      try {
        const listVariable = this.lookupList(list, util);
        if (listVariable) {
          const array = JSON.parse(json);
          if (Array.isArray(array)) {
            const safeArray = array.map((i) => {
              if (typeof i === "object") return JSON.stringify(i);
              return this._fixInvalidJSONValues(this.json_valid_return(i));
            });
            listVariable.value = safeArray;
          }
        }
      } catch (e) {
      }
    }
  }

  Scratch.extensions.register(new CombinedTools());
})(Scratch);