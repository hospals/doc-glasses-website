/**
 * Cursor beforeShellExecution hook — gates agent git commit/push.
 * Production runtime unaffected. Fail-open if stdin is empty/invalid.
 */
"use strict";

const chunks = [];
process.stdin.setEncoding("utf8");
process.stdin.on("data", (c) => chunks.push(c));
process.stdin.on("end", () => {
  let permission = "allow";
  let user_message;
  let agent_message;

  try {
    const raw = chunks.join("");
    const input = raw ? JSON.parse(raw) : {};
    const command = String(input.command || "");
    const isGitWrite =
      /\bgit\b/i.test(command) &&
      /\b(commit|push)\b/i.test(command) &&
      !/\b(commit-tree|commit-graph)\b/i.test(command);

    if (isGitWrite) {
      permission = "ask";
      user_message =
        "Confirm OWASP/security checklist passed for this diff before commit/push.";
      agent_message =
        "Before commit/push: run .cursor/skills/pre-commit-security-sonar/SKILL.md → GATE: PASS. Then 16-git-commit (approve message; author Rajwant Singh). Do not weaken cookie consent, headers, or contact API without approval.";
    }
  } catch {
    permission = "allow";
  }

  const out = { permission };
  if (user_message) out.user_message = user_message;
  if (agent_message) out.agent_message = agent_message;
  process.stdout.write(JSON.stringify(out));
});
