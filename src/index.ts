import path from "path"
import { Legacy } from "@eslint/eslintrc"
import pkgDir from "pkg-dir"

interface GetOptions {
  plugins?: string[]
}

interface RuleMetaDocs {
  category: string
  description: string
  url: string
}

interface RuleMeta {
  deprecated: boolean
  docs: RuleMetaDocs
  fixable: "code" | "whitespace"
  messages: Record<string, string>
  replacedBy: string[]
  type: "problem" | "suggestion" | "layout"
}

interface RawRule {
  create: () => {}
  meta: RuleMeta
}

type RawRules = ReadonlyMap<string, RawRule>

export async function getRawRules(options: GetOptions): Promise<RawRules> {
  const configArrayFactory = new Legacy.CascadingConfigArrayFactory({
    cliConfig: { plugins: options.plugins },
    useEslintrc: false
  })

  const root = await pkgDir(require.resolve("eslint"))
  if (!root) {
    throw new Error("Installation Issue: ESLint package was not found!")
  }
  const rulesPath = path.join(root, "lib/rules")
  const builtInRules = require(rulesPath)

  return new Map(
    (function* () {
      yield* builtInRules
      yield* configArrayFactory.getConfigArrayForFile().pluginRules
    })()
  )
}

export async function getFixableRules(options: GetOptions): Promise<Set<string>> {
  const result = new Set<string>()

  const rules = await getRawRules(options)
  for (const [ ruleId, rule ] of rules) {
    if (!!rule.meta.fixable) {
      result.add(ruleId)
    }
  }

  return result
}
