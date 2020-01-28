class Float { // F
    static length() {
        return 4;
    }

    static pack(buffer, value, offset, count) {
        if (count > 1) {
            [value] = value; // eslint-disable-line no-param-reassign
        }
        for (let i = 0; i < count; i++) {
            buffer.writeFloatLE(value[i], offset + i * this.length());
        }
    }

    static unpack(buffer, offset, count) {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(buffer.readFloatLE(offset + i * this.length()));
        }

        return count > 1 ? [result] : result;
    }
}

export default Float;
