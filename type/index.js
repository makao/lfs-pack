import X from './emptyByte';
import C from './unsignedChar';
import c from './signedChar';
import S from './unsignedShort';
import s from './signedShort';
import L from './unsignedLong';
import l from './signedLong';
import F from './float';
import D from './double';
import T from './text';

const type = {
    X, // Empty byte
    C, // Unsigned Char
    c, // Signed Char
    S, // Unsigned Short
    s, // Signed Short
    L, // Unsigned Long
    l, // Signed Long
    F, // Float
    D, // Double
    T // Text
};

export default type;

// B -> C
// b -> c
// s -> T
// H -> S
// h -> s
