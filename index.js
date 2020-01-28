import determineLength from './util/determineLength';
import types from './type';
import pattern from './pattern';

/**
 * Pack a set of values, starting at offset, based on format
 *
 * @param fmt
 * @param values
 * @param offset
 * @returns {Buffer|void}
 */
export const pack = (fmt, values, offset = 0) => {
    const buffer = Buffer.alloc(determineLength(fmt));
    const re = new RegExp(pattern, 'g');
    let match;
    let i = 0;

    while ((match = re.exec(fmt))) { // eslint-disable-line no-cond-assign
        const [, typeName, typeCount] = match;
        const type = types[typeName];
        if (!type) {
            throw new Error(`Unknown type: ${typeName}`);
        }

        const length = type.length();
        const count = typeCount ? parseInt(typeCount, 10) : 1;
        if (offset + count * length > buffer.length) {
            return buffer;
        }

        type.pack(buffer, values.slice(i, i + 1), offset, count);

        offset += count * length; // eslint-disable-line no-param-reassign
        i += 1;
    }

    return buffer;
};

/**
 * Unpack an array buffer, starting at offset, based on format
 *
 * @param fmt
 * @param buffer
 * @param offset
 * @returns {[]|void}
 */
export const unpack = (fmt, buffer, offset = 0) => {
    let results = [];
    let match;
    const re = new RegExp(pattern, 'g');

    while ((match = re.exec(fmt))) { // eslint-disable-line no-cond-assign
        const [, typeName, typeCount] = match;
        const type = types[typeName];
        if (!type) {
            throw new Error(`Unknown type: ${typeName}`);
        }

        const length = type.length();
        const count = typeCount ? parseInt(typeCount, 10) : 1;
        if (offset + count * length > buffer.length) {
            return results;
        }

        results = [...results, ...type.unpack(buffer, offset, count)];

        offset += count * length; // eslint-disable-line no-param-reassign
    }

    return results;
};
