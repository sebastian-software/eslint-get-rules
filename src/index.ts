import path from "path"
import { Legacy } from "@eslint/eslintrc"
import pkgDir from "pkg-dir"

export async function getRules(options) {
    const configArrayFactory = new Legacy.CascadingConfigArrayFactory({
        cliConfig: { plugins: options.plugins },
        useEslintrc: false
    });

    const root = await pkgDir(require.resolve("eslint"))
    if (!root) {
      throw new Error("Installation Issue: ESLint package was not found!")
    }
    const rulesPath = path.join(root, "lib/rules")
    const builtInRules = require(rulesPath)


    return new Map(function *() {
        yield* builtInRules;
        yield* configArrayFactory.getConfigArrayForFile().pluginRules
    }());
}
