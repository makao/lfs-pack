import { pack, unpack } from '../index';

const data = [1, -1, 123421, 'ab', 300, -350, 400, 123.456, 0, 0, -23312, 32121];
const buffer = Buffer.alloc(32);
buffer.writeUInt8(1, 0);
buffer.writeInt8(-1, 1);
buffer.writeUInt32LE(123421, 2);
buffer.writeUInt8('a'.charCodeAt(0), 6);
buffer.writeUInt8('b'.charCodeAt(0), 7);
buffer.writeInt16LE(300, 8);
buffer.writeInt16LE(-350, 10);
buffer.writeUInt16LE(400, 12);
buffer.writeDoubleLE(123.456, 14);
buffer.writeUInt8(0, 22);
buffer.writeUInt8(0, 23);
buffer.writeInt32LE(-23312, 24);
buffer.writeFloatLE(32121, 28);

describe('pack/unpack', () => {
    it('packs values to buffer', () => {
        const buf = pack('CcLT2ssSDXXlF', data);

        expect(buf).toEqual(buffer);
        expect(buf.byteLength).toEqual(32);
    });

    it('unpacks values from buffer', () => {
        const values = unpack('CcLT2ssSDXXlF', buffer);

        expect(values).toEqual(data);
    });
});
