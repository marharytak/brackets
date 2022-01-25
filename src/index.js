module.exports = function check(str, bracketsConfig) {
  const isConfigNum = Number.isInteger(+bracketsConfig[0][0]);
  let txtToReplace = '';
  for (let i = 0; i < bracketsConfig.length; i++) {
    const opening = bracketsConfig[i][0];
    const closing = bracketsConfig[i][1];
    txtToReplace += isConfigNum
      ? `[${opening}-${closing}]{2}`
      : `(\\${opening}\\${closing})`;
    if (i !== bracketsConfig.length - 1) { txtToReplace += '|'; }
  }

  const reg = new RegExp(txtToReplace, 'g');
  while (str.match(reg)) { str = str.replace(reg, ''); }
  return !str.length;
};