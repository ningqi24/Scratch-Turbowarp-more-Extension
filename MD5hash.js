(function(Scratch) {
    'use strict';

    function md5(str) {
        function rotl(n, b) { return (n << b) | (n >>> (32 - b)); }
        function toHex(n) {
            let hexChars = '0123456789abcdef';
            let result = '';
            for (let i = 7; i >= 0; i--) {
                result += hexChars.charAt((n >>> (i * 4)) & 0x0f);
            }
            return result;
        }
        let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476;
        let strLen = str.length * 8;
        str += String.fromCharCode(0x80);
        while (str.length % 64 !== 56) str += String.fromCharCode(0x00);
        str += String.fromCharCode((strLen >>> 24) & 0xff, (strLen >>> 16) & 0xff, (strLen >>> 8) & 0xff, strLen & 0xff);
        for (let i = 0; i < str.length; i += 64) {
            let w = new Array(16);
            for (let j = 0; j < 16; j++) {
                w[j] = (str.charCodeAt(i + j * 4) << 24) | (str.charCodeAt(i + j * 4 + 1) << 16) | (str.charCodeAt(i + j * 4 + 2) << 8) | str.charCodeAt(i + j * 4 + 3);
            }
            let a = h0, b = h1, c = h2, d = h3;
            for (let j = 0; j < 64; j++) {
                let f, g;
                if (j < 16) { f = (b & c) | (~b & d); g = j; }
                else if (j < 32) { f = (d & b) | (~d & c); g = (5 * j + 1) % 16; }
                else if (j < 48) { f = b ^ c ^ d; g = (3 * j + 5) % 16; }
                else { f = c ^ (b | ~d); g = (7 * j) % 16; }
                let temp = d; d = c; c = b;
                b = (b + rotl(a + f + 0x5a827999 + w[g], 7)) & 0xffffffff;
                a = temp;
                [a, b, c, d, h0, h1, h2, h3] = [h0, h1, h2, h3, a, b, c, d];
            }
        }
        return toHex(h0) + toHex(h1) + toHex(h2) + toHex(h3);
    }

    class NingqiTools {
        getInfo() {
            return {
                id: 'ningqiTools',
                name: 'ningqiMD5hash',
                color1: '#7e57c2',
                color2: '#673ab7',
                categories: [
                    {
                        name: '加密',
                        color: '#7e57c2'
                    }
                ],
                blocks: [
                    {
                        opcode: 'md5Hash',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'MD5hash [TEXT]',
                        category: '加密',
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ' '
                            }
                        }
                    }
                ]
            };
        }

        md5Hash(args) {
            return md5(args.TEXT.trim());
        }
    }

    Scratch.extensions.register(new NingqiTools());
})(Scratch);
