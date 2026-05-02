export class GStatic {
  static replaceAll = (str, search, replaceWith) => {
    return str.split(search).join(replaceWith);
  };

  /**
   *
   * @param objs May be Reference types or more
   * @description This function responsible for checking the objects enters all are equal
   * @returns Boolean
   */
  static ObjectsEqual = (...objs) => {
    const convertedObjs = objs.map((obj) => JSON.stringify(obj));

    return convertedObjs.every((cObj) => cObj === convertedObjs[0]);
  };

  /**
   *
   * @param value1 Type of any
   * @param value2 Type of any
   * @description This function responsible for checking the equality for tow Items of types any
   * @returns Boolean
   */
  static isEqual = (value1, value2) => {
    // Check if the two values are identical
    if (value1 === value2) return true;

    // Check if the two values are both objects or arrays
    if (
      typeof value1 === "object" &&
      value1 !== null &&
      typeof value2 === "object" &&
      value2 !== null
    ) {
      if (Array.isArray(value1) && Array.isArray(value2)) {
        value1 = value1.sort();
        value2 = value2.sort();
      }
      // Check if the two values have the same number of keys/elements
      if (
        Object.keys(value1).length !== Object.keys(value2).length ||
        value1.length !== value2.length
      )
        return false;

      // Recursively compare each key/element
      for (const key in value1) {
        if (!this.isEqual(value1[key], value2[key])) return false;
      }

      // If all keys/elements are equal, return true
      return true;
    }

    // If the two values are not both objects or arrays, they are not equal
    return false;
  };

  static removeDuplicate = (list, param = "id") => {
    // Sort from length to make biggest objects first Then remove the smaller
    list = list.sort((a, b) => Object.keys(b).length - Object.keys(a).length);

    const uniqueObjects = [];

    const uniqueIds = new Set();

    list.forEach((obj) => {
      if (!uniqueIds.has(obj[param])) {
        uniqueIds.add(obj[param]);
        uniqueObjects.push(obj);
      }
    });

    return uniqueObjects;
  };

  static isEmptyObject = (obj) => {
    for (const name in obj) return false;
    return true;
  };

  static isDevMode = window.location.hostname === "localhost";
}
