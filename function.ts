
function foo(input: string) {
  return input;
}

foo('string')

let friend = 'leslie'

console.log('🚀 ~ file: function.ts:8 ~ friend:', friend)

// 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
// const tmp1: Object = undefined;
// const tmp2: Object = null;
// const tmp3: Object = void 0;

const tmp4: Object = 'leslie';
const tmp5: Object = 599;
const tmp6: Object = { name: 'leslie' };
const tmp7: Object = () => {};
const tmp8: Object = [];
