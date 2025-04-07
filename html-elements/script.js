/**
 * @param {string} str
 * @return {string}
 */
function HTMLElements(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '<') {
      let k = i + 1;

      while (str[i] != '>') {
        i++;
      }

      const tag = str.substring(k, i);

      if (tag[0] != '/') {
        stack.push(tag);
        continue;
      }

      const openingTag = stack.pop();
      const closingTag = tag.substring(1, tag.length);

      if (openingTag != closingTag) {
        return openingTag;
      }
    }
  }

  return "true";
}