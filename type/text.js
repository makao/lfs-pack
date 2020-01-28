class Text { // T
    static length() {
        return 1;
    }

    static pack(buffer, value, offset, count) {
        const [val] = value;
        for (let i = 0; i < count; i++) {
            const code = i < val.length ? val.charCodeAt(i) : 0;
            buffer.writeUInt8(code, offset + i * this.length());
        }
    }

    static unpack(buffer, offset, count) {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(String.fromCharCode(buffer.readUInt8(offset + i * this.length())));
        }

        return [result.join('')];
    }
}

export default Text;
