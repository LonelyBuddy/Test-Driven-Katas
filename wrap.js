const wrap = function(line = '', cloumnNum = 0) {
  let bool1 = typeof line !== 'string';
  let bool2 = typeof cloumnNum !== 'number';
  let bool3 = typeof cloumnNum < 1;
  let bool4 = line.length;
  let idxSpace;
  if (typeof line === 'string') {
    idxSpace = line.indexOf(' ');
  }
  let bool5 = idxSpace > cloumnNum;
  let bool6 = idxSpace <= cloumnNum;

  if (bool1 || bool2 || bool3 || bool4 || bool5) {
    return '';
  }
  if (bool6) return line;

  //
  let state = 0;
  let retStr = '';

  for (let i = 0; i < line.length; i++) {
    
    
    if (line[i] === ' ') {
      if (i > 20) {
        retStr += line.slice(0, state) + '\n';
      }
      state = i;
    }
  }

  return '';
};

module.exports = wrap;
