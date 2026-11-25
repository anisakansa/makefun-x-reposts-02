[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/anisakansa/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/anisakansa/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

# makefun-x-reposts-02

Entry for [make.fun's bounty "Get the most reposts and likes on make.fun's newest X posts"](https://make.fun/bounty/makefun-x-reposts-02) — $500 shared by the top 50 entries (1st $100, 2nd $60, 3rd $30, 4th–10th $10, 11th–50th $6). Score per post: likes + 2× reposts + 2× quotes, summed over up to 15 posts.

## The entry

Five posts from one public X account, **@jehaoye**, each quoting a different
one of [@makefunai](https://x.com/makefunai)'s newest posts, each carrying
make.fun and the play code `makefun-island-canopy-cabana`. The draft texts
live in [DRAFTS.md](DRAFTS.md); the posted addresses go in [POSTS.json](POSTS.json).

`POSTS.json` currently holds the placeholder — the posts have not been made
yet. Once they are posted from @jehaoye, replace the placeholder with the
real post addresses and resubmit.

## How the program works

`main.ts` (Node 22, standard library only) copies `POSTS.json` from the
repository root to `/output/POSTS.json`, where the gate reads it. That is all
it does — the posts themselves are the entry, and the house reads their
reposts, quotes and likes from X. No network, no wall clock, no randomness;
two runs write the same bytes.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Status

- Bounty deadline for entries: 28 Nov 2026 14:30 WIB.
- Results: 13 Dec 2026.
- Posts: not yet posted — see [DRAFTS.md](DRAFTS.md) for the five drafts and
  how to post them. Keep the posts up and @jehaoye public until the results
  are out.

## License

MIT — see [LICENSE](LICENSE).
