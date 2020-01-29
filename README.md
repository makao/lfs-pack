# LFS pack

JavaScript library used for packing and unpacking [LFS](https://lfs.net) [InSim](https://en.lfsmanual.net/wiki/InSim) packets

[![Build Status](https://travis-ci.com/makao/lfs-pack.svg?branch=master)](https://travis-ci.com/makao/lfs-pack)
[![Coverage Status](https://coveralls.io/repos/github/makao/lfs-pack/badge.svg?branch=master)](https://coveralls.io/github/makao/lfs-pack?branch=master)

## Installation

```bash
npm install --save @makao.pl/lfs-pack
```

## Usage

__Pack__
```javascript
// packing 4 unsigned chars into buffer
const buffer = pack('CCCC', [10, 20, 30, 40]);
console.log(buffer); // <Buffer 0a 14 1e 28>
```

__Unpack__
```javascript
// unpacking 4 unsigned chars from buffer
const values = unpack('CCCC', Buffer.alloc(4));
console.log(values); // [0, 0, 0, 0]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
