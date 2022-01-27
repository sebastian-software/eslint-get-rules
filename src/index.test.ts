import { getRules } from "."

describe("getRules", () => {
  test("No Plugins", async () => {
    const rules = await getRules({})
    const keys = Array.from(rules.keys())
    expect(keys.length).toBe(286)
    expect(keys).toMatchSnapshot()
  })

  test("With JSDoc Plugin", async () => {
    const rules = await getRules({ plugins: ["jsdoc"] })
    const keys = Array.from(rules.keys())
    expect(keys.length).toBe(334)
    expect(keys).toMatchSnapshot()
  })
})
