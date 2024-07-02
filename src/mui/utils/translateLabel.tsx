import forEach from "lodash/forEach";
import isFunction from "lodash/isFunction";
import isPlainObject from "lodash/isPlainObject";
import get from "lodash/get";

const replacePlaceholder = (text: string, replacements = {}) => {
  forEach(replacements, (value: never, key: string) => {
    text = text.replace(`%{${key}}`, value);
  });

  return text;
};

const translateLabel = (translations: any, key: string, replacements = {}) => {
  if (isFunction(translations)) {
    return translations(key, replacements);
  } else if (isPlainObject(translations)) {
    return replacePlaceholder(get(translations, key, `[translation missing '${key}']`), replacements);
  }

  return null;
};

export default translateLabel;
