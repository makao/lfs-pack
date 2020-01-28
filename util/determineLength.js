import types from '../type';
import pattern from '../pattern';

/**
 * Determine the size of array buffer
 * @param fmt
 * @param pattern
 * @returns {number}
 */
const determineLength = (fmt) => {
    const re = new RegExp(pattern, 'g');
    let match;
    let sum = 0;

    while ((match = re.exec(fmt))) { // eslint-disable-line no-cond-assign
        const [, typeName, typeCount] = match;
        sum += (typeCount ? parseInt(typeCount, 10) : 1) * types[typeName].length();
    }

    return sum;
};

export default determineLength;
