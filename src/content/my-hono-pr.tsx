import {
  CodeBlock,
  CustomLink,
  Description,
  MyBadge,
  Subtitle,
  WhiteSpan,
} from "@/components/typography";

export const metadata = {
  title: "My Hono PR",
  date: "09.08.2025",
  description: "Why Developer Experience Trumps Technical Equivalence.",
  author: "Mr Uprizing",
};

const code1 = `// Option 1: Import the entire instance
import { app } from './server'
const client = hc<typeof app>('/api')

// Option 2: Import only the type
import type { AppType } from './server'
const client = hc<AppType>('/api')`;

export default function ExampleThought() {
  return (
    <>
      <Description>
        <CustomLink href="https://github.com/honojs/website/pull/744">
          My PR
        </CustomLink>{" "}
        in Hono.js changed literally 3 lines of documentation. Technically
        unnecessary. Functionally identical. But it improved DX, and that was
        enough.
      </Description>
      <Subtitle title="The Real Problem" />
      <Description>
        When working with RPC in Hono, you need the server type on the client.
        Two ways:
      </Description>
      <CodeBlock code={code1} language="typescript" name="index.ts" />
      <Description>
        Both work the same. But the second is better DX.
      </Description>
      <Subtitle title="Why It Matters" />
      <Description>
        <WhiteSpan> Safety by default: </WhiteSpan> With{" "}
        <MyBadge className="font-mono text-base" title="import type" />, the
        bundler eliminates the import. Impossible to bundle your server by
        mistake. With{" "}
        <MyBadge className="font-mono text-base" title="import { app }" />, you
        depend on tree-shaking. One accidental{" "}
        <MyBadge className="font-mono text-base" title="app.fetch()" /> and you
        bundled your database.
      </Description>

      <Description>
        <WhiteSpan> Clear intent: </WhiteSpan>
        <MyBadge className="font-mono text-base" title="AppType" /> screams
        "this is a type contract".{" "}
        <MyBadge className="font-mono text-base" title="typeof app" /> screams
        "I'm not sure if I need the instance or the type".
      </Description>

      <Description>
        <WhiteSpan> Less friction to scale: </WhiteSpan> Multiple clients? One
        <MyBadge className="font-mono text-base" title="type.ts" /> file with
        exports. No repeating{" "}
        <MyBadge className="font-mono text-base" title="typeof app" />{" "}
        everywhere.
      </Description>
      <Subtitle title="The Lesson" />
      <Description>
        Technical equivalence isn't the only criterion. If two solutions do the
        same thing but one reduces potential errors and makes the code more
        obvious, that's the better solution. DX isn't luxury. It's choosing the
        path that makes it hard to mess up.
      </Description>
    </>
  );
}
