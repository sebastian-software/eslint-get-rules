import path from "path"
import { Legacy } from "@eslint/eslintrc"
import pkgDir from "pkg-dir"

interface GetOptions {
  plugins: string[]
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

type Rules = ReadonlyMap<string, RawRule>

export async function getRules(options: GetOptions): Promise<Rules> {
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
