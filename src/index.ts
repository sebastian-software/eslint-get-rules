import fs from "fs"
import path from "path"
import eslintrc from "@eslint/eslintrc"
import pkgDir from "pkg-dir"

const builtInRules = require.resolve("eslint/lib/rules");

export async function getRules(options) {
    const configArrayFactory = new eslintrc.Legacy.CascadingConfigArrayFactory({
        cliConfig: { plugins: options.plugins },
        useEslintrc: false
    });

    const root = await pkgDir(require.resolve("eslint"))
    if (!root) {
      throw new Error("Installation Issue: ESLint package was not found!")
    }
    const recommendedPath = join(root, "conf/eslint-recommended")


    return new Map(function *() {
        yield* builtInRules;
        yield* configArrayFactory.getConfigArrayForFile().pluginRules
    }());
}
