// Name: ningqi-Repetitive block
// ID: ningqiRepetitiveblock
// Description: Let you simplify some repetitive building blocks
// By: ningqi <https://github.com/ningqi24>
// License: Creative Commons Zero v1.0 Universal

Scratch.translate.setup({
    "zh-cn": {
        "_Repetitive block": "可重复积木",
        "_repetitiveAdd": "将 [VALUE1] 重复 + [VALUE2] [TIMES] 次",
        "_repetitiveSubtract": "将 [VALUE1] 重复 - [VALUE2] [TIMES] 次",
        "_repetitiveMultiply": "将 [VALUE1] 重复 * [VALUE2] [TIMES] 次",
        "_repetitiveDivide": "将 [VALUE1] 重复 / [VALUE2] [TIMES] 次",
        "_repetitiveJoin": "将 [TEXT1] 重复 连接 [TEXT2] [TIMES] 次",
        "_threeNumberOperation": "[VALUE1] [OP1] [VALUE2] [OP2] [VALUE3]",
        "_fourNumberOperation": "[VALUE1] [OP1] [VALUE2] [OP2] [VALUE3] [OP3] [VALUE4]",
        "_joinThree": "连接 [TEXT1] [TEXT2] [TEXT3]",
        "_joinFour": "连接 [TEXT1] [TEXT2] [TEXT3] [TEXT4]",
        "_andThree": "[BOOL1] [OP1] [BOOL2] [OP2] [BOOL3]",
        "_compare": "[VALUE1] [OP] [VALUE2]",
        "_logicGate": "[BOOL1] [GATE] [BOOL2]",
        "_inputBox": "[VALUE]",
        "_sqrtOperation": "[VALUE1] √ [VALUE2]",
        "_powerOperation": "[VALUE1] ^ [VALUE2]",
        "_newline": "换行符",
        "_ifEqual": "如果 [BOOL1] = [BOOL2] 那么",
        "_ifNotEqual": "如果 [BOOL1] ≠ [BOOL2] 那么",
        "_and": "与",
        "_or": "或",
        "_nor": "或非",
        "_xor": "异或",
        "_xnor": "同或",
        "_nand": "与非"
    },
    "en": {
        "_Repetitive block": "Repetitive block",
        "_repetitiveAdd": "repeat [VALUE1] + [VALUE2] [TIMES] times",
        "_repetitiveSubtract": "repeat [VALUE1] - [VALUE2] [TIMES] times",
        "_repetitiveMultiply": "repeat [VALUE1] * [VALUE2] [TIMES] times",
        "_repetitiveDivide": "repeat [VALUE1] / [VALUE2] [TIMES] times",
        "_repetitiveJoin": "repeat join [TEXT1] [TEXT2] [TIMES] times",
        "_threeNumberOperation": "[VALUE1] [OP1] [VALUE2] [OP2] [VALUE3]",
        "_fourNumberOperation": "[VALUE1] [OP1] [VALUE2] [OP2] [VALUE3] [OP3] [VALUE4]",
        "_joinThree": "join [TEXT1] [TEXT2] [TEXT3]",
        "_joinFour": "join [TEXT1] [TEXT2] [TEXT3] [TEXT4]",
        "_andThree": "[BOOL1] [OP1] [BOOL2] [OP2] [BOOL3]",
        "_compare": "[VALUE1] [OP] [VALUE2]",
        "_logicGate": "[BOOL1] [GATE] [BOOL2]",
        "_inputBox": "[VALUE]",
        "_sqrtOperation": "[VALUE1] √ [VALUE2]",
        "_powerOperation": "[VALUE1] ^ [VALUE2]",
        "_newline": "newline",
        "_ifEqual": "if [BOOL1] = [BOOL2] then",
        "_ifNotEqual": "if [BOOL1] ≠ [BOOL2] then",
        "_and": "and",
        "_or": "or",
        "_nor": "nor",
        "_xor": "xor",
        "_xnor": "xnor",
        "_nand": "nand"

    },
    "zh-tw": {
        "_Repetitive block": "可重複積木",
        "_repetitiveAdd": "將 [VALUE1] 重複 + [VALUE2] [TIMES] 次",
        "_repetitiveSubtract": "將 [VALUE1] 重複 - [VALUE2] [TIMES] 次",
        "_repetitiveMultiply": "將 [VALUE1] 重複 * [VALUE2] [TIMES] 次",
        "_repetitiveDivide": "將 [VALUE1] 重複 / [VALUE2] [TIMES] 次",
        "_repetitiveJoin": "將 [TEXT1] 重複 連接 [TEXT2] [TIMES] 次",
        "_threeNumberOperation": "[VALUE1] [OP1] [VALUE2] [OP2] [VALUE3]",
        "_fourNumberOperation": "[VALUE1] [OP1] [VALUE2] [OP2] [VALUE3] [OP3] [VALUE4]",
        "_joinThree": "連接 [TEXT1] [TEXT2] [TEXT3]",
        "_joinFour": "連接 [TEXT1] [TEXT2] [TEXT3] [TEXT4]",
        "_andThree": "[BOOL1] [OP1] [BOOL2] [OP2] [BOOL3]",
        "_compare": "[VALUE1] [OP] [VALUE2]",
        "_logicGate": "[BOOL1] [GATE] [BOOL2]",
        "_inputBox": "[VALUE]",
        "_sqrtOperation": "[VALUE1] √ [VALUE2]",
        "_powerOperation": "[VALUE1] ^ [VALUE2]",
        "_newline": "換行符",
        "_ifEqual": "如果 [BOOL1] = [BOOL2] 那麼",
        "_ifNotEqual": "如果 [BOOL1] ≠ [BOOL2] 那麼",
        "_and": "與",
        "_or": "或",
        "_nor": "或非",
        "_xor": "異或",
        "_xnor": "同或",
        "_nand": "與非"

    }
});

(function(Scratch) {
    'use strict';

    class RepetitiveBlock {
        getInfo() {
            return {
                id: 'ningqiRepetitiveblock',
                name: Scratch.translate('Repetitive block'),
                menuIconURI: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMzguMzY5NzUxIgogICBoZWlnaHQ9IjM4LjM2NzQ2MiIKICAgdmlld0JveD0iMCAwIDM4LjM2OTc1IDM4LjM2NzQ2MyIKICAgaWQ9InN2ZzkiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im5pbmdxaVJlcGV0aXRpdmVibG9jay5zdmciCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuNC4yIChmNDMyN2Y0LCAyMDI1LTA1LTEzKSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc5IgogICAgIHBhZ2Vjb2xvcj0iIzUwNTA1MCIKICAgICBib3JkZXJjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjEiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjNTA1MDUwIgogICAgIGlua3NjYXBlOnpvb209IjAuOTAyNDk1MDkiCiAgICAgaW5rc2NhcGU6Y3g9IjU5MS4xMzg5NSIKICAgICBpbmtzY2FwZTpjeT0iMjc4LjY3MTg4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM2NiIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI3MDUiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzkiPjxpbmtzY2FwZTpwYWdlCiAgICAgICB4PSIwIgogICAgICAgeT0iMCIKICAgICAgIHdpZHRoPSIzOC4zNjk3NTEiCiAgICAgICBoZWlnaHQ9IjM4LjM2NzQ2MiIKICAgICAgIGlkPSJwYWdlMSIKICAgICAgIG1hcmdpbj0iMCIKICAgICAgIGJsZWVkPSIwIiAvPjwvc29kaXBvZGk6bmFtZWR2aWV3PjxkZWZzCiAgICAgaWQ9ImRlZnMyIj48bGluZWFyR3JhZGllbnQKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDEwIgogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIj48c3RvcAogICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMTg4OGYwO3N0b3Atb3BhY2l0eTowLjk0OTAxOTYxOyIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDEwIiAvPjxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMxOGFiZjA7c3RvcC1vcGFjaXR5OjAuODI4OTQ3Mzc7IgogICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgIGlkPSJzdG9wMTEiIC8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEwIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50MTEiCiAgICAgICB4MT0iMyIKICAgICAgIHkxPSIxNiIKICAgICAgIHgyPSIyOSIKICAgICAgIHkyPSIxNiIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiAvPjxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50MTAiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQxIgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICB4MT0iMyIKICAgICAgIHkxPSIxNiIKICAgICAgIHgyPSIyOSIKICAgICAgIHkyPSIxNiIgLz48bGluZWFyR3JhZGllbnQKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDEwIgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50MiIKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgeDE9IjMiCiAgICAgICB5MT0iMTYiCiAgICAgICB4Mj0iMjkiCiAgICAgICB5Mj0iMTYiIC8+PC9kZWZzPjxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xMDU2OTY1LDAsMCwwLjEwNTY5NjUsLTg2LjUxMTYyMywtMTcuODEwMDMzKSIKICAgICBpZD0iZzkiCiAgICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSJuaW5ncWlSZXBldGl0aXZlYmxvY2suc3ZnIgogICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSI5NiIKICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iOTYiPjxnCiAgICAgICBzdHJva2U9Im5vbmUiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBpZD0iZzgiPjxnCiAgICAgICAgIGZpbGwtb3BhY2l0eT0iMC4zODAzOSIKICAgICAgICAgZmlsbD0iIzc1YzhmZiIKICAgICAgICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgICAgICBzdHJva2Utd2lkdGg9IjEiCiAgICAgICAgIGlkPSJnNCIgLz48cGF0aAogICAgICAgICBkPSJtIDExODEuNTA5LDM1MCBjIDAsMTIwLjk5NDczIC02MC41MDMsMTgxLjQ5ODMyIC0xODEuNTA5LDE4MS40OTgzMiAtMTIxLjAwNiwwIC0xODEuNTA5LC02MC41MTM2OCAtMTgxLjUwOSwtMTgxLjQ5ODMyIDAsLTEyMC45ODQ2NSA2MC41MDMsLTE4MS40OTgzMiAxODEuNTA5LC0xODEuNDk4MzIgMTIwLjk5NTMsMCAxODEuNTA5LDYwLjUwMyAxODEuNTA5LDE4MS40OTgzMiB6IgogICAgICAgICBmaWxsLW9wYWNpdHk9IjAuODUwOTgiCiAgICAgICAgIGZpbGw9IiNmZmZmZmYiCiAgICAgICAgIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICAgc3Ryb2tlLXdpZHRoPSIxIgogICAgICAgICBpZD0icGF0aDUiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3MiIC8+PGcKICAgICAgICAgZmlsbC1vcGFjaXR5PSIwLjM4MDM5IgogICAgICAgICBmaWxsPSIjNzVjOGZmIgogICAgICAgICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgIHN0cm9rZS13aWR0aD0iMSIKICAgICAgICAgaWQ9Imc3IiAvPjwvZz48L2c+PGcKICAgICBpZD0iZzEwIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuODE3NDAwNTksMCwwLDAuNzA0Nzg5MTksNi4zOTYwOTcsOC44Mzk1NDc3KSIKICAgICBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MTEpO2ZpbGwtb3BhY2l0eTowLjg1MDk4Ij48cmVjdAogICAgICAgeD0iMTEiCiAgICAgICB5PSIxMSIKICAgICAgIHdpZHRoPSIxOCIKICAgICAgIGhlaWdodD0iMTgiCiAgICAgICByeD0iMiIKICAgICAgIHJ5PSIyIgogICAgICAgaWQ9InJlY3QxIgogICAgICAgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDEpO2ZpbGwtb3BhY2l0eTowLjg1MDk4IiAvPjxwYXRoCiAgICAgICBkPSJtIDIxLDUgdiA1IGggLTkgYyAtMS4xLDAgLTIsMC45IC0yLDIgdiA5IEggNSBDIDMuOSwyMSAzLDIwLjEgMywxOSBWIDUgQyAzLDMuOSAzLjksMyA1LDMgaCAxNCBjIDEuMSwwIDIsMC45IDIsMiB6IgogICAgICAgaWQ9InBhdGgxIgogICAgICAgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDIpO2ZpbGwtb3BhY2l0eTowLjg1MDk4IiAvPjwvZz48L3N2Zz4KPCEtLXJvdGF0aW9uQ2VudGVyOjU1OC4yNDY2ODUwMDAwMDAxOjI3OC42NzE4OC0tPgoK',
                color1: '#26d84f',
                color2: '#1fb540',
                color3: '#1a9635',
                blocks: [
                    {
                        opcode: 'repetitiveAdd',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('repetitiveAdd'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            TIMES: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        }
                    },
                    {
                        opcode: 'repetitiveSubtract',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('repetitiveSubtract'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            TIMES: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        }
                    },
                    {
                        opcode: 'repetitiveMultiply',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('repetitiveMultiply'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            TIMES: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        }
                    },
                    {
                        opcode: 'repetitiveDivide',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('repetitiveDivide'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            TIMES: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        }
                    },
                    {
                        opcode: 'repetitiveJoin',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('repetitiveJoin'),
                        arguments: {
                            TEXT1: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            TEXT2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            TIMES: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            }
                        }
                    },
                    {
                        opcode: 'joinThree',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('joinThree'),
                        arguments: {
                            TEXT1: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            TEXT2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            TEXT3: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'joinFour',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('joinFour'),
                        arguments: {
                            TEXT1: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            TEXT2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            TEXT3: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            },
                            TEXT4: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'threeNumberOperation',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('threeNumberOperation'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            OP1: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'operators',
                                defaultValue: '+'
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            OP2: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'operators',
                                defaultValue: '+'
                            },
                            VALUE3: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        opcode: 'fourNumberOperation',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('fourNumberOperation'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            OP1: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'operators',
                                defaultValue: '+'
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            OP2: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'operators',
                                defaultValue: '+'
                            },
                            VALUE3: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            OP3: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'operators',
                                defaultValue: '+'
                            },
                            VALUE4: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        opcode: 'andThree',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: Scratch.translate('andThree'),
                        arguments: {
                            BOOL1: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: true
                            },
                            OP1: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'logicOperators',
                                defaultValue: 'and'
                            },
                            BOOL2: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: true
                            },
                            OP2: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'logicOperators',
                                defaultValue: 'and'
                            },
                            BOOL3: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: true
                            }
                        }
                    },
                    {
                        opcode: 'compare',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: Scratch.translate('compare'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '16'
                            },
                            OP: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'comparisonOperators',
                                defaultValue: 'less'
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '25'
                            }
                        }
                    },
                    {
                        opcode: 'logicGate',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: Scratch.translate('logicGate'),
                        arguments: {
                            BOOL1: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: true
                            },
                            GATE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'logicGates',
                                defaultValue: 'nor'
                            },
                            BOOL2: {
                                type: Scratch.ArgumentType.BOOLEAN,
                                defaultValue: true
                            }
                        }
                    },
                    {
                        opcode: 'inputBox',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('inputBox'),
                        arguments: {
                            VALUE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        opcode: 'sqrtOperation',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('sqrtOperation'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        opcode: 'powerOperation',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('powerOperation'),
                        arguments: {
                            VALUE1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            VALUE2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        opcode: 'newline',
                        blockType: Scratch.BlockType.REPORTER,
                        text: Scratch.translate('newline')
                    },
                    {
                        opcode: 'ifEqual',
                        blockType: Scratch.BlockType.CONDITIONAL,
                        text: Scratch.translate('ifEqual'),
                        arguments: {
                            BOOL1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            BOOL2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    },
                    {
                        opcode: 'ifNotEqual',
                        blockType: Scratch.BlockType.CONDITIONAL,
                        text: Scratch.translate('ifNotEqual'),
                        arguments: {
                            BOOL1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            BOOL2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                ],
                menus: {
                    operators: [
                        { text: '+', value: '+' },
                        { text: '-', value: '-' },
                        { text: '×', value: '*' },
                        { text: '÷', value: '/' }
                    ],
                    logicOperators: [
                        { text: Scratch.translate('and'), value: 'and' },
                        { text: Scratch.translate('or'), value: 'or' }
                    ],
                    comparisonOperators: [
                        { text: '≤', value: 'less' },
                        { text: '≥', value: 'greater' },
                        { text: '≠', value: 'notEqual' },
                        { text: '===', value: 'equal' }
                    ],
                    logicGates: [
                        { text: Scratch.translate('nor'), value: 'nor' },
                        { text: Scratch.translate('xor'), value: 'xor' },
                        { text: Scratch.translate('xnor'), value: 'xnor' },
                        { text: Scratch.translate('nand'), value: 'nand' }
                    ]
                }
            };
        }

        repetitiveAdd(args) {
            const value1 = Number(args.VALUE1) || 0;
            const value2 = Number(args.VALUE2) || 0;
            const times = Number(args.TIMES);
            if (isNaN(times) || times <= 0) {
                return 0;
            }
            if (times > 100000) {
                return NaN;
            }
            const actualTimes = Math.floor(times) + 1;
            return value1 + value2 * (actualTimes - 1);
        }

        repetitiveSubtract(args) {
            const value1 = Number(args.VALUE1) || 0;
            const value2 = Number(args.VALUE2) || 0;
            const times = Number(args.TIMES);
            if (isNaN(times) || times <= 0) {
                return 0;
            }
            if (times > 100000) {
                return NaN;
            }
            const actualTimes = Math.floor(times) + 1;
            return value1 - value2 * (actualTimes - 1);
        }

        repetitiveMultiply(args) {
            const value1 = Number(args.VALUE1) || 1;
            const value2 = Number(args.VALUE2) || 1;
            const times = Number(args.TIMES);
            if (isNaN(times) || times <= 0) {
                return 0;
            }
            if (times > 100000) {
                return NaN;
            }
            const actualTimes = Math.floor(times) + 1;
            return value1 * Math.pow(value2, actualTimes - 1);
        }

        repetitiveDivide(args) {
            const value1 = Number(args.VALUE1) || 1;
            const value2 = Number(args.VALUE2) || 1;
            const times = Number(args.TIMES);
            if (isNaN(times) || times <= 0) {
                return 0;
            }
            if (times > 100000) {
                return NaN;
            }
            if (value2 === 0) {
                return 0;
            }
            const actualTimes = Math.floor(times) + 1;
            let result = value1;
            for (let i = 1; i < actualTimes; i++) {
                result /= value2;
            }
            return result;
        }

        repetitiveJoin(args) {
            const text1 = String(args.TEXT1) || '';
            const text2 = String(args.TEXT2) || '';
            const times = Number(args.TIMES);
            if (isNaN(times) || times <= 0) {
                return '';
            }
            if (times > 100000) {
                return NaN;
            }
            const actualTimes = Math.floor(times) + 1;
            let result = text1;
            for (let i = 1; i < actualTimes; i++) {
                result += text2;
            }
            return result;
        }

        threeNumberOperation(args) {
            const value1 = Number(args.VALUE1) || 0;
            const value2 = Number(args.VALUE2) || 0;
            const value3 = Number(args.VALUE3) || 0;
            const op1 = args.OP1;
            const op2 = args.OP2;
            let result = value1;
            if (op1 === '+') {
                result += value2;
            } else if (op1 === '-') {
                result -= value2;
            } else if (op1 === '*') {
                result *= value2;
            } else if (op1 === '/') {
                if (value2 !== 0) {
                    result /= value2;
                } else {
                    return 0;
                }
            }
            if (op2 === '+') {
                result += value3;
            } else if (op2 === '-') {
                result -= value3;
            } else if (op2 === '*') {
                result *= value3;
            } else if (op2 === '/') {
                if (value3 !== 0) {
                    result /= value3;
                } else {
                    return 0;
                }
            }
            return result;
        }

        fourNumberOperation(args) {
            const value1 = Number(args.VALUE1) || 0;
            const value2 = Number(args.VALUE2) || 0;
            const value3 = Number(args.VALUE3) || 0;
            const value4 = Number(args.VALUE4) || 0;
            const op1 = args.OP1;
            const op2 = args.OP2;
            const op3 = args.OP3;
            let result = value1;
            if (op1 === '+') {
                result += value2;
            } else if (op1 === '-') {
                result -= value2;
            } else if (op1 === '*') {
                result *= value2;
            } else if (op1 === '/') {
                if (value2 !== 0) {
                    result /= value2;
                } else {
                    return 0;
  }
            }
            if (op2 === '+') {
                result += value3;
            } else if (op2 === '-') {
                result -= value3;
            } else if (op2 === '*') {
                result *= value3;
            } else if (op2 === '/') {
                if (value3 !== 0) {
                    result /= value3;
                } else {
                    return 0;
                }
            }
            if (op3 === '+') {
                result += value4;
            } else if (op3 === '-') {
                result -= value4;
            } else if (op3 === '*') {
                result *= value4;
            } else if (op3 === '/') {
                if (value4 !== 0) {
                    result /= value4;
                } else {
                    return 0;
                }
            }
            return result;
        }

        joinThree(args) {
            const text1 = String(args.TEXT1) || '';
            const text2 = String(args.TEXT2) || '';
            const text3 = String(args.TEXT3) || '';
            return text1 + text2 + text3;
        }

        joinFour(args) {
            const text1 = String(args.TEXT1) || '';
            const text2 = String(args.TEXT2) || '';
            const text3 = String(args.TEXT3) || '';
            const text4 = String(args.TEXT4) || '';
            return text1 + text2 + text3 + text4;
        }

        andThree(args) {
            const bool1 = Boolean(args.BOOL1);
            const bool2 = Boolean(args.BOOL2);
            const bool3 = Boolean(args.BOOL3);
            const op1 = args.OP1;
            const op2 = args.OP2;
            let result = bool1;
            if (op1 === 'and') {
                result = result && bool2;
            } else if (op1 === 'or') {
                result = result || bool2;
            }
            if (op2 === 'and') {
                result = result && bool3;
            } else if (op2 === 'or') {
                result = result || bool3;
            }
            return result;
        }

        compare(args) {
            const value1 = args.VALUE1;
            const value2 = args.VALUE2;
            const op = args.OP;
            if (op === 'equal') {
                return value1 === value2;
            } else if (op === 'notEqual') {
                return value1 !== value2;
            } else {
                const num1 = Number(value1);
                const num2 = Number(value2);
                const isNumber1 = !isNaN(num1);
                const isNumber2 = !isNaN(num2);
                if (isNumber1 && isNumber2) {
                    switch (op) {
                        case 'less':
                            return num1 <= num2;
                        case 'greater':
                            return num1 >= num2;
                        default:
                            return false;
                    }
                } else {
                    switch (op) {
                        case 'less':
                            return String(value1) <= String(value2);
                        case 'greater':
                            return String(value1) >= String(value2);
                        default:
                            return false;
                    }
                }
            }
        }

        logicGate(args) {
            const bool1 = Boolean(args.BOOL1);
            const bool2 = Boolean(args.BOOL2);
            const gate = args.GATE;
            switch (gate) {
                case 'nor':
                    return !(bool1 || bool2);
                case 'xor':
                    return bool1 !== bool2;
                case 'xnor':
                    return bool1 === bool2;
                case 'nand':
                    return !(bool1 && bool2);
                default:
                    return false;
            }
        }

        inputBox(args) {
            return Number(args.VALUE) || 0;
        }

        sqrtOperation(args) {
            const value1 = Number(args.VALUE1) || 0;
            const value2 = Number(args.VALUE2) || 0;
            if (value2 === 0) {
                return 0;
            }
            return Math.pow(value1, 1 / value2);
        }

        powerOperation(args) {
            const value1 = Number(args.VALUE1) || 0;
            const value2 = Number(args.VALUE2) || 0;
            return Math.pow(value1, value2);
        }

        newline() {
            return '\n';
        }

        ifEqual(args, util) {
            const value1 = Number(args.BOOL1) || 0;
            const value2 = Number(args.BOOL2) || 0;
            if (value1 === value2) {
                util.startBranch(1);
            } else {
                util.startBranch(2);
            }
        }

        ifNotEqual(args, util) {
            const value1 = Number(args.BOOL1) || 0;
            const value2 = Number(args.BOOL2) || 0;
            if (value1 !== value2) {
                util.startBranch(1);
            } else {
                util.startBranch(2);
            }
        }

    }

    Scratch.extensions.register(new RepetitiveBlock());
})(Scratch);