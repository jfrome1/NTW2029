'use strict';

// A valid output which means nothing has been parsed.
// Used as error return / invalid output
const nothingHappend = {
  prop: {},
  eaten: '',
};

const defaultConfig = {
  defaultValue: () => undefined, // Its a function
};

function parse(value, indexNext, userConfig) {
// Main function
  let letsEat = '';
  let stopOnBrace = false;
  let errorDetected = false;
  const config = {...defaultConfig, ...userConfig};

  // Make defaultValue a function if it isn't
  if (typeof (config.defaultValue) !== 'function') {
    const {defaultValue} = config;
    config.defaultValue = () => defaultValue;
  }

  const prop = {};

  /* They are at least one label and at best two */
  /* ekqsdf <- one label
   * qsdfqsfd=qsdfqsdf <- two */
  let labelFirst = '';
  let labelSecond;

  if (indexNext === undefined) {
    indexNext = 0;
  }

  /* 3 types :
   * .azcv <- class
   * #poi <- id
   * dfgh=zert <- key
   * jkj <- this is also a key but with a user defined value (default is undefined)
   * jkj= <- this is also a key but with a empty value
   */
  let type;
  const forbidenCharacters = '\n\r{}';

  // A function that detect if it's time to end the parsing
  const shouldStop = function () {
    if (indexNext >= value.length || forbidenCharacters.indexOf(value[indexNext]) > -1) {
      if (stopOnBrace && value[indexNext] !== '}') {
        errorDetected = true;
      }

      return true;
    }

    return value[indexNext] === '}' && stopOnBrace;
  };

  let eaten = '';
  // Couple of functions that parse same kinds of characters
  // Used to parse spaces or identifiers
  const eat = chars => {
    eaten = '';

    while (indexNext < value.length &&
            forbidenCharacters.indexOf(value.charAt(indexNext)) < 0 &&
            chars.indexOf(value.charAt(indexNext)) >= 0) {
      letsEat += value.charAt(indexNext);
      eaten += value.charAt(indexNext);
      indexNext++;
    }

    return shouldStop();
  };

  const eatUntil = chars => {
    eaten = '';

    while (indexNext < value.length &&
            forbidenCharacters.indexOf(value.charAt(indexNext)) < 0 &&
            chars.indexOf(value.charAt(indexNext)) < 0) {
      letsEat += value.charAt(indexNext);
      eaten += value.charAt(indexNext);
      indexNext++;
    }

    // Ugly but keep the main loop readable
    // Set the label it should set
    if (labelFirst) {
      labelSecond = eaten;
    } else {
      labelFirst = eaten;
    }

    return shouldStop();
  };

  // In quote, every character is valid except the unescaped quotes and CR or LF
  // Same function for single and double quote
  const eatInQuote = quote => {
    eaten = '';
    // First check so value[indexNext-1] will always be valid
    if (value[indexNext] === quote) {
      return;
    }

    while (indexNext < value.length &&
          !(quote === value[indexNext] && value[indexNext - 1] !== '\\') &&
          value[indexNext] !== '\n' && value[indexNext] !== '\r') {
      letsEat += value.charAt(indexNext);
      eaten += value.charAt(indexNext);
      indexNext++;
    }

    // If we encounter an EOL, there is an error
    // We are waiting for a quote
    if (value[indexNext] === '\n' || value[indexNext] === '\r' || indexNext >= value.length) {
      errorDetected = true;
      return true;
    }

    // Ugly but keep the main loop readable
    if (labelFirst) {
      labelSecond = eaten.replace(/\\"/g, '"');
    } else {
      labelFirst = eaten.replace(/\\"/g, '"');
    }

    return shouldStop();
  };

  // It's really common to eat only one character so let's make it a function
  const eatOne = (c, skipStopCheck) => {
    // Miam !
    letsEat += c;
    indexNext++;

    return skipStopCheck ? false : shouldStop();
  };

  // Common parsing of quotes
  const eatQuote = q => {
    eatOne(q, true);
    eatInQuote(q, true);

    if (value.charAt(indexNext) !== q) {
      return nothingHappend;
    }

    if (eatOne(q)) {
      return -1;
    }
  };

  let idSetByKey = false;
  const addAttribute = () => {
    switch (type) {
      case 'id': // ID
        if (idSetByKey) {
          prop.id = labelFirst;
          idSetByKey = false;
        } else {
          prop.id = prop.id || labelFirst;
        }

        break;
      case 'class':
        if (!prop.class) {
          prop.class = [];
        }

        if (prop.class.indexOf(labelFirst) < 0) {
          prop.class.push(labelFirst);
        }

        break;
      case 'key':
        if (!labelFirst) {
          return nothingHappend;
        }

        if (!(labelFirst in prop)) {
          if (labelSecond === undefined) { // Here, we have an attribute without value
            // so it's user defined
            prop[labelFirst] = config.defaultValue(labelFirst);
          } else {
            prop[labelFirst] = labelFirst === 'class' ? [labelSecond] : labelSecond;
          }

          if (labelFirst === 'id') {
            idSetByKey = true;
          }
        } else if (labelFirst === 'class' && Boolean(labelSecond)) {
          prop.class.push(labelSecond);
        }

        break;
      default:
    }

    type = undefined;
    labelFirst = '';
    labelSecond = undefined;
  };

  /** *********************** Start parsing ************************ */

  // Let's check for leading spaces first
  eat(' \t\v');

  if (value[indexNext] === '{') {
    eatOne('{');
    stopOnBrace = true;
  }

  while (!shouldStop()) { // Main loop which extract attributes
    if (eat(' \t\v')) {
      break;
    }

    if (value.charAt(indexNext) === '.') { // Classes
      type = 'class';
      if (eatOne('.')) {
        errorDetected = true;
        break;
      }
    } else if (value.charAt(indexNext) === '#') { // ID
      type = 'id';
      if (eatOne('#')) {
        errorDetected = true;
        break;
      }
    } else { // Key
      type = 'key';
    }

    // Extract name
    if (eatUntil('=\t\b\v  ') || !labelFirst) {
      break;
    }

    if (value.charAt(indexNext) === '=' && type === 'key') { // Set labelSecond
      if (eatOne('=')) {
        break;
      }

      if (value.charAt(indexNext) === '"') {
        const ret = eatQuote('"');
        if (ret === -1) {
          break;
        } else if (ret === nothingHappend) {
          return nothingHappend;
        }
      } else if (value.charAt(indexNext) === '\'') {
        const ret = eatQuote('\'');
        if (ret === -1) {
          break;
        } else if (ret === nothingHappend) {
          return nothingHappend;
        }
      } else if (eatUntil(' \t\n\r\v=}')) {
        break;
      }
    }

    // Add the parsed attribute to the output prop with the ad hoc type
    addAttribute();
  }

  addAttribute();
  if (stopOnBrace) {
    if (indexNext < value.length && value[indexNext] === '}') {
      stopOnBrace = false;
      eatOne('}');
    } else {
      return nothingHappend;
    }
  }

  return errorDetected ? nothingHappend : {prop, eaten: letsEat};
}

module.exports = parse;
