class UnsignedShort { // S
    static length() {
        return 2;
    }

    static pack(buffer, value, offset, count) {
        if (count > 1) {
            [value] = value; // eslint-disable-line no-param-reassign
        }
        for (let i = 0; i < count; i++) {
            buffer.writeUInt16LE(value[i], offset + i * this.length());
        }
    }

    static unpack(buffer, offset, count) {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(buffer.readUInt16LE(offset + i * this.length()));
        }

        return count > 1 ? [result] : result;
    }
}

export default UnsignedShort;
