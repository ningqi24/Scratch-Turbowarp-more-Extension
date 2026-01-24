(function(Scratch) {
  'use strict';
  class IntegratedToolsExtension {
    constructor() {
      this.isMeasuring = false; // 用于延迟检测的状态标记
    }
    getInfo() {
      return {
        id: 'integratedTools',
        name: '综合工具集',
        color1: '#3bb2ed',
        color2: '#37a1de',
        color3: '#3693d9',
        blocks: [
          // 弹窗交互组
          '---',
          {
            opcode: 'alertBlock',
            blockType: Scratch.BlockType.COMMAND,
            text: '弹出提示[STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'A red spy is in the base!'
              }
            }
          },
          {
            opcode: 'confirmationBlock',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '弹出确认框[STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Are you the red spy?'
              }
            }
          },
          // 替换为图片对应的「带默认值的弹出输入框」积木（取自系统弹窗.js）
          {
            opcode: 'inputPromptBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: '弹出输入框: [PROMPT] 默认值 [DEFAULT]',
            arguments: {
              PROMPT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '请输入内容'
              },
              DEFAULT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '默认文本'
              }
            }
          },
          // 延迟检测组
          '---',
          {
            opcode: 'getLatency',
            blockType: Scratch.BlockType.REPORTER,
            text: '获取 [SERVER] 的延迟(ms)',
            arguments: {
              SERVER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'wss://clouddata.turbowarp.org'
              }
            }
          },
          // 字符串与换行符组
          '---',
          {
            opcode: 'lettersToOf',
            blockType: Scratch.BlockType.REPORTER,
            text: '[STRING]的第[INPUTA]到第[INPUTB]个字符',
            arguments: {
              INPUTA: { type: Scratch.ArgumentType.NUMBER, defaultValue: '1' },
              INPUTB: { type: Scratch.ArgumentType.NUMBER, defaultValue: '3' },
              STRING: { type: Scratch.ArgumentType.STRING, defaultValue: 'suspicious' }
            }
          },
          {
            opcode: 'newlineCharacter',
            blockType: Scratch.BlockType.REPORTER,
            text: '换行符'
          },
          // 克隆体管理组
          '---',
          {
            opcode: 'clonesBeingUsed',
            blockType: Scratch.BlockType.REPORTER,
            text: '克隆体数量'
          },
          {
            opcode: 'isClone',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '是克隆体?'
          },
          // 条件判断与按键组
          '---',
          {
            opcode: 'whenKeyString',
            blockType: Scratch.BlockType.HAT,
            text: '当按下[KEY_OPTION]键',
            arguments: {
              KEY_OPTION: { type: Scratch.ArgumentType.STRING, defaultValue: 'enter' }
            }
          },
          {
            opcode: 'keyStringPressed',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '按下[KEY_OPTION]键?',
            arguments: {
              KEY_OPTION: { type: Scratch.ArgumentType.STRING, defaultValue: 'enter' }
            }
          },
          {
            opcode: 'stringIfElse',
            blockType: Scratch.BlockType.REPORTER,
            text: '如果[BOOLEAN]那么[INPUTA]否则[INPUTB]',
            arguments: {
              BOOLEAN: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: '' },
              INPUTA: { type: Scratch.ArgumentType.STRING, defaultValue: 'apple' },
              INPUTB: { type: Scratch.ArgumentType.STRING, defaultValue: 'banana' }
            }
          }
        ]
      };
    }
    // 延迟检测方法
    async getLatency(args) {
      if (this.isMeasuring) return -2;
      const serverUrl = args.SERVER;
      return new Promise((resolve) => {
        this.isMeasuring = true;
        const startTime = performance.now();
        try {
          const ws = new WebSocket(serverUrl);
          const timeout = setTimeout(() => {
            ws.close();
            this.isMeasuring = false;
            resolve(-1);
          }, 5000);
          ws.onopen = () => {
            clearTimeout(timeout);
            const latency = Math.round(performance.now() - startTime);
            ws.close();
            this.isMeasuring = false;
            resolve(latency);
          };
          ws.onerror = () => {
            clearTimeout(timeout);
            this.isMeasuring = false;
            resolve(-1);
          };
        } catch (error) {
          this.isMeasuring = false;
          resolve(-1);
        }
      });
    }
    // 弹窗相关方法
    alertBlock(args) {
      alert(args.STRING);
    }
    confirmationBlock(args) {
      return confirm(args.STRING);
    }
    // 替换为系统弹窗.js中带默认值的输入框实现逻辑
    inputPromptBlock(args) {
      const promptText = Scratch.Cast.toString(args.PROMPT);
      const defaultValue = Scratch.Cast.toString(args.DEFAULT);
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = window.prompt(promptText, defaultValue);
          resolve(result || '');
        }, 100);
      });
    }
    // 字符串与换行符方法
    lettersToOf(args) {
      const string = args.STRING.toString();
      const start = args.INPUTA - 1;
      const end = args.INPUTB;
      return string.slice(start, end);
    }
    newlineCharacter() {
      return '\n';
    }
    // 克隆体相关方法
    clonesBeingUsed(args, util) {
      return Scratch.vm.runtime._cloneCounter;
    }
    isClone(args, util) {
      return util.target.isOriginal ? false : true;
    }
    // 条件判断与按键方法
    stringIfElse(args) {
      return args.BOOLEAN ? args.INPUTA : args.INPUTB;
    }
    whenKeyString(args, util) {
      return util.ioQuery("keyboard", "getKeyIsDown", [args.KEY_OPTION]);
    }
    keyStringPressed(args, util) {
      return util.ioQuery("keyboard", "getKeyIsDown", [args.KEY_OPTION]);
    }
  }
  // 注册扩展
  Scratch.extensions.register(new IntegratedToolsExtension());
})(Scratch);