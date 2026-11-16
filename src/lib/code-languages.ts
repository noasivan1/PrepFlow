import { EDITOR_LANGUAGES, type CodeLanguage, type EditorLanguage } from '../types'

/** How each code language is named on tabs. */
export const languageLabels: Record<CodeLanguage, string> = {
  c: 'C',
  cpp: 'C++',
  java: 'Java',
  python: 'Python',
  javascript: 'JavaScript',
  sql: 'SQL',
  bash: 'Shell',
}

/** A starting point per language: a function to fill in and a main that prints its result. */
export const TEMPLATES: Record<EditorLanguage, string> = {
  python: `def solution():
    # Write your solution here
    pass


if __name__ == "__main__":
    print(solution())
`,
  java: `import java.util.*;

class Main {
    static int solution() {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(solution());
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>

int solution(void) {
    // Write your solution here
    return 0;
}

int main(void) {
    printf("%d\\n", solution());
    return 0;
}
`,
  cpp: `#include <bits/stdc++.h>
using namespace std;

int solution() {
    // Write your solution here
    return 0;
}

int main() {
    cout << solution() << endl;
    return 0;
}
`,
  javascript: `function solution() {
  // Write your solution here
}

console.log(solution())
`,
}

export function isEditorLanguage(language: CodeLanguage | null | undefined): language is EditorLanguage {
  return (EDITOR_LANGUAGES as readonly string[]).includes(language ?? '')
}

/** True when the code is still the untouched starting template. */
export function isTemplate(language: EditorLanguage, code: string): boolean {
  return code.trim() === TEMPLATES[language].trim()
}

