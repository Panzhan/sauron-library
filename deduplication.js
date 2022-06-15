const arr = [
  { id: 1, name: "aaa" },
  { id: 2, name: "bbb" },
  { id: 3, name: "ccc" },
  { id: 2, name: "ddd" },
  { id: 4, name: "ddd" },
];
const deduplication = ({ target = [], key = '' }) => {
  if(!target.length) return false
  if(!key) return false
  let obj = {};
  return target.reduce((prev, cur, idx, arr) => {
    !obj[cur[key]]
      ? prev.push({ [key]: cur[key], ...cur }) && (obj[cur[key]] = true)
      : "";
    return prev;
  }, []);
};
const result = deduplication({ target: arr, key: 'name' });
console.log("result", result);
