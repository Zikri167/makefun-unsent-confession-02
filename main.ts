// Unsent: The Micro-Confession Sprint
// Writes the two-line micro-confession to <outputDir>/entry.txt.
// Node stdlib only, deterministic, offline, no randomness, no clock.

import fs from "node:fs";
import path from "node:path";

const ENTRY =
  "To: Grandma, whose voicemail I saved and never called back\n" +
  "I still have your last voicemail, 42 seconds of you saying call when you can, and I never did, and now I play it just to hear you say my name again.";

const outputDir = process.env.OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), ENTRY, "utf8");
