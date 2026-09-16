const fs = require('fs');
const path = require('path');
const contentDir = path.join(__dirname, 'src', 'content');
const chapters = fs.readdirSync(contentDir).filter(f => f.startsWith('ch') && f.endsWith('-v2.js'));

const issues = [];

for (const file of chapters) {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  const lines = content.split('\n');
  
  let inChoice = false;
  let choiceLineNum = 0;
  let hasOptions = false;
  let hasChoices = false;
  
  lines.forEach((line, idx) => {
    if (line.match(/type:\s*'choice'/)) {
      inChoice = true;
      choiceLineNum = idx + 1;
      hasOptions = false;
      hasChoices = false;
    }
    
    if (inChoice && line.match(/^\s*options:/)) {
      hasOptions = true;
    }
    
    if (inChoice && line.match(/^\s*choices:/)) {
      hasChoices = true;
    }
    
    if (inChoice && line.match(/^\s*}\s*,?\s*$/)) {
      if (hasOptions && hasChoices) {
        issues.push(file + ':' + choiceLineNum + ' - 同时有options和choices');
      } else if (!hasOptions && !hasChoices) {
        issues.push(file + ':' + choiceLineNum + ' - 既没有options也没有choices');
      }
      inChoice = false;
    }
  });
}

if (issues.length > 0) {
  console.log('发现选择节点问题：');
  issues.forEach(i => console.log('  ' + i));
} else {
  console.log('未发现混用问题');
}
