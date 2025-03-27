/**
 *  Test inputs:
 *
 *  console.log(StringChallenge("<div>abc</div><p><em><i>test test test</b></em></p>"))
 *  console.log(StringChallenge("<div><b><p>hello word</p></b></div>"))
 *  console.log(StringChallenge("<div><i>hello</i>word</b>"))
 *  console.log(StringChallenge("<div><div><b></b></div></p>"))
 *
 */

/**
 * @param {string} str
 * @return {string}
 */

function StringChallenge(str) {
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