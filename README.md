# LFS pack

[![Build Status](https://travis-ci.com/makao/lfs-pack.svg?branch=master)](https://travis-ci.com/makao/lfs-pack)
[![Coverage Status](https://coveralls.io/repos/github/makao/lfs-pack/badge.svg?branch=master)](https://coveralls.io/github/makao/lfs-pack?branch=master)

JavaScript library used for packing and unpacking LFS packets

## Example

#### Pack
```javascript
// packing 4 unsigned chars into buffer
const buffer = pack('CCCC', [10, 20, 30, 40]);
console.log(buffer); // <Buffer 0a 14 1e 28>
```

#### Unpack
```javascript
// unpacking 4 unsigned chars from buffer
const values = unpack('CCCC', Buffer.alloc(4));
console.log(values); // [0, 0, 0, 0]
```
