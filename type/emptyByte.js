class EmptyByte { // X
    static length() {
        return 1;
    }

    static pack(buffer, value, offset, count) {
        if (count > 1) {
            [value] = value; // eslint-disable-line no-param-reassign
        }
        for (let i = 0; i < count; i++) {
            buffer.writeUInt8(0, offset + i * this.length());
        }
    }

    static unpack(buffer, offset, count) {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(0);
        }

        return count > 1 ? [result] : result;
    }
}

export default EmptyByte;
