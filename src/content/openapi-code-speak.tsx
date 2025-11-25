import {
  CodeBlock,
  ContainerLinks,
  Description,
  Subtitle,
  WhiteSpan,
} from "@/components/typography";

export const metadata = {
  title: "OpenAPI: Letting Code Speak",
  date: "10.01.2025",
  description:
    "Why OpenAPI in Hono matters. It's not about automation. It's about honesty.",
  author: "Mr Uprizing",
};

const schemaExample = `const querySchema = v.object({
  name: v.optional(v.string()),
})

const responseSchema = v.string()`;

const routeExample = `app.get(
  '/',
  describeRoute({
    description: 'Say hello to user',
    responses: {
      200: {
        description: 'Greeting response',
        content: { 'text/plain': { schema: resolver(responseSchema) } }
      }
    }
  }),
  validator('query', querySchema),
  (c) => {
    const query = c.req.valid('query')
    return c.text(\`Hello \${query?.name ?? 'World'}!\`)
  }
)`;

const openAPIEndpoint = `app.get('/openapi', openAPIRouteHandler(app, {
  documentation: {
    info: {
      title: 'My API',
      version: '1.0.0'
    }
  }
}))`;

export default function OpenAPIThoughts() {
  return (
    <>
      <Description>
        I built an API with Hono + OpenAPI recently. Not because I needed
        automation. But because I wanted the contract between server and client
        to be honest. And it surprised me how much that changes things.
      </Description>

      <Subtitle title="The problem with APIs today" />

      <Description>
        I write an endpoint. I write documentation (which inevitably gets out of
        sync). The client writes types by hand (or copy-pastes from the docs). I
        change a field. Docs don't update. Client still uses old types.
        Everything fails silently in production.
      </Description>

      <Description>
        The problem isn't technical. It's that{" "}
        <WhiteSpan>there's no honesty</WhiteSpan>. My code is the truth.
        Documentation is a well-meaning lie. Client types are fiction.
      </Description>

      <Subtitle title="OpenAPI is honesty" />

      <Description>
        When you use OpenAPI in Hono, the contract lives in your code. It's not
        a separate document. It's reality.
      </Description>

      <CodeBlock code={schemaExample} language="typescript" name="schema.ts" />

      <Description>
        This isn't documentation. It's your server saying explicitly: "a
        greeting has an optional name". If someone tries to pass something else,
        you reject it. Validation is automatic.
      </Description>

      <CodeBlock code={routeExample} language="typescript" name="route.ts" />

      <Description>
        Here's the shift: you describe the route once. Hono validates. It
        generates the OpenAPI spec. It documents. All from the same code.
      </Description>

      <Description>
        I'm not writing documentation. I'm describing server reality. That's
        different.
      </Description>

      <Subtitle title="One endpoint exposes everything" />

      <CodeBlock
        code={openAPIEndpoint}
        language="typescript"
        name="openapi.ts"
      />

      <Description>
        One endpoint. Your entire API contract. Clients read it. Swagger UI
        renders it. Everything knows the truth.
      </Description>

      <Subtitle title="Not about automation" />

      <Description>
        I've read posts about OpenAPI as if it's a productivity feature:
        "generate SDKs, save time, etc". Technically correct. But they miss the
        point.
      </Description>

      <Description>
        For me, OpenAPI is about <WhiteSpan>removing lies</WhiteSpan>. When your
        validation is the source of truth, and your docs flow from it, there's
        no gap. No confusion.
      </Description>

      <Description>
        Your clients don't wonder "does this work?". They know it works. Their
        IDE knows. The compiler knows. It's certainty.
      </Description>

      <Subtitle title="Taste in design" />

      <Description>
        Writing honest APIs means other developers read your code and instantly
        understand what you expect, what you return, why you reject invalid
        input.
      </Description>

      <Description>
        It's not about rules. It's not about "best practices". It's about
        letting your code be clear. Accessible. Honest.
      </Description>

      <Description>That requires taste. And taste is personal.</Description>

      <Subtitle title="Why it matters" />

      <Description>
        Building APIs that developers want to use is hard. It's easier to build
        APIs that work. But working ≠ usable.
      </Description>

      <Description>
        OpenAPI in Hono doesn't force you to have good taste. But it lets you
        express it. It lets you be honest about what your API is and what it
        does.
      </Description>

      <Description>And that's what matters.</Description>

      <ContainerLinks
        links={[
          {
            title: "Hono OpenAPI Docs",
            href: "https://honohub.dev/docs/openapi",
            _blank: true,
          },
          {
            title: "Hono Validation",
            href: "https://hono.dev/docs/guides/validation",
            _blank: true,
          },
        ]}
      />
    </>
  );
}
