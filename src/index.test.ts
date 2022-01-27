import { getFixableRules, getRawRules } from "."

describe("getRawRules", () => {
  test("No Plugins", async () => {
    const rules = await getRawRules({})
    const keys = Array.from(rules.keys())
    expect(keys.length).toBe(286)
    expect(keys).toMatchSnapshot()
  })

  test("With JSDoc Plugin", async () => {
    const rules = await getRawRules({ plugins: ["jsdoc"] })
    const keys = Array.from(rules.keys())
    expect(keys.length).toBe(334)
    expect(keys).toMatchSnapshot()
  })
})

describe("getFixableRules", () => {
  test("No Plugins", async () => {
    const rules = await getFixableRules({})
    expect(rules.size).toBe(105)
    expect(rules).toMatchSnapshot()
  })

  test("With JSDoc Plugin", async () => {
    const rules = await getFixableRules({ plugins: ["jsdoc"] })
    expect(rules.size).toBe(129)
    expect(rules).toMatchSnapshot()
  })
})
