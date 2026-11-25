// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry itself is the X posts listed in POSTS.json: posts of our own on
// X, each quoting or replying directly to a different one of make.fun's
// newest posts on x.com/makefunai, all from one account, each carrying
// make.fun and our play code. This program only hands POSTS.json to the
// grader: it copies POSTS.json from the repository root to /output/POSTS.json,
// where the gate reads it. Nothing this program writes about the posts is
// scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Deterministic by construction: no network, no wall clock, no randomness,
// no files outside the repository. Two runs write the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
