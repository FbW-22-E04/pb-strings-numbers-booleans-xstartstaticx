const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/ /g, "");
const solution = rewire("../solution");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. String variable", () => {
  test("`str` variable is defined", () => {
    const str = solution.__get__("str");
    expect(str).toBeDefined();
  });
  
  test("value of `str` variable is of type string", () => {
    const str = solution.__get__("str");
    expect(typeof str).toBe("string");
  });
  
  test("length of `str` variable is at least 6", () => {
    const str = solution.__get__("str");
    expect(str.length).toBeGreaterThanOrEqual(6);
  });
})

describe("2. String index notation", () => {
  test("2nd and 6th characters of `str` variable are accessed using index notation", () => {
    expect(content.includes("str[1]")).toBeTruthy();
    expect(content.includes("str[5]")).toBeTruthy();
  })
})

describe("3. `firstName` variable", () => {
  test("`firstName` variable is defined", () => {
    const str = solution.__get__("firstName");
    expect(str).toBeDefined();
  });
  
  test("value of `firstName` variable is of type string", () => {
    const str = solution.__get__("firstName");
    expect(typeof str).toBe("string");
  });
})

describe("4. `age` variable", () => {
  test("`age` variable is defined", () => {
    const str = solution.__get__("age");
    expect(str).toBeDefined();
  });
  
  test("value of `age` variable is of type number", () => {
    const str = solution.__get__("age");
    expect(typeof str).toBe("number");
  });
})

describe("5. `year` variable", () => {
  test("`year` variable is defined", () => {
    const str = solution.__get__("year");
    expect(str).toBeDefined();
  });
  
  test("value of `year` variable is of type number", () => {
    const str = solution.__get__("year");
    expect(typeof str).toBe("number");
  });
})

describe("6. print age sentence", () => {
  test('string containing `firstName`, `age` and `year` values is printed to the console', () => {
    const firstName = solution.__get__("firstName");
    const age = solution.__get__("age");
    const year = solution.__get__("year");
    const regex = new RegExp(`(?=.*${firstName})(?=.*${age})(?=.*${year})`);
    require("../solution");
    
    const outputFound = consoleSpy.mock.calls.find(call => regex.test(call.join(' ')))
    expect(outputFound).toBeTruthy();
  });
})

describe("7. `isMarried` variable", () => {
  test("`isMarried` variable is defined", () => {
    const str = solution.__get__("isMarried");
    expect(str).toBeDefined();
  });
  
  test("value of `isMarried` variable is of type boolean", () => {
    const str = solution.__get__("isMarried");
    expect(typeof str).toBe("boolean");
  });
})

describe("8. print marital status sentence", () => {
  test('string containing `firstName` and `isMarried` values is printed to the console', () => {
    const firstName = solution.__get__("firstName");
    const isMarried = solution.__get__("isMarried");
    const regex = new RegExp(`(?=.*${firstName})(?=.*${isMarried})`);
    require("../solution");
    
    const outputFound = consoleSpy.mock.calls.find(call => regex.test(call.join(' ')))
    expect(outputFound).toBeTruthy();
  });
})

describe("9. print JavaScript sentence", () => {
  test('string containing `programmingLanguage` and `isFun` values is printed to the console', () => {
    const programmingLanguage = solution.__get__("programmingLanguage");
    const isFun = solution.__get__("isFun");
    const regex = new RegExp(`(?=.*${programmingLanguage})(?=.*${isFun})`);
    require("../solution");
    
    const outputFound = consoleSpy.mock.calls.find(call => regex.test(call.join(' ')))
    expect(outputFound).toBeTruthy();
  });
})

describe('10. print "J" and "S" of "JavaScript"', () => {
  test('"J" and "S" of "JavaScript" are accessed accessed using index notation', () => {
    expect(content.includes('programmingLanguage[0]')).toBeTruthy();
    expect(content.includes('programmingLanguage[4]')).toBeTruthy();
  })
})

describe("11. String length", () => {
  test(`length of the string variable "programmingLanguage" is printed to the console`, () => {
    const programmingLanguage = solution.__get__("programmingLanguage");
    require("../solution");
    expect(consoleSpy).toHaveBeenCalledWith(programmingLanguage.length);
    expect(content.includes('programmingLanguage.length')).toBeTruthy();
  });
});
