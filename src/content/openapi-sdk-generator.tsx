import {
  CodeBlock,
  ContainerLinks,
  Description,
  Subtitle,
  WhiteSpan,
} from "@/components/typography";

export const metadata = {
  title: "SDKs Build Themselves",
  date: "05-10-2025",
  description:
    "Why writing a good API spec means you never have to write SDK code again. The client code writes itself.",
  author: "Mr Uprizing",
};

const badApproach = `// The old way: write the SDK by hand
class UserClient {
  async getUser(id: string) {
    const response = await fetch(\`/users/\${id}\`)
    return response.json()
  }

  async createUser(data: unknown) {
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    return response.json()
  }

  // ... repeat for every endpoint
}`;

const openAPISpec = `// Your OpenAPI spec (generated from Hono)
{
  "openapi": "3.0.0",
  "info": { "title": "User API", "version": "1.0.0" },
  "paths": {
    "/users/{id}": {
      "get": {
        "parameters": [
          { "name": "id", "in": "path", "required": true, "schema": { "type": "string" } }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": { "$ref": "#/components/schemas/User" }
              }
            }
          }
        }
      }
    }
  }
}`;

const generatedSDK = `// Generated automatically from OpenAPI spec
import { createClient } from '@hey-api/openapi-ts'

const client = createClient({
  baseURL: 'https://api.example.com'
})

// Fully typed. No manual work.
const user = await client.users.getUser({ path: { id: '123' } })`;

const speakeasyExample = `// Using Speakeasy or hey-api/openapi-ts
// Point it at your OpenAPI endpoint
const client = new Client({
  apiKey: process.env.API_KEY,
  baseURL: 'https://api.example.com',
  serverURL: 'https://api.example.com/openapi.json'
})

// SDK is generated. Types are perfect. No hand-written code.
const result = await client.users.getUser('user-123')`;

export default function OpenAPISDKGenerators() {
  return (
    <>
      <Description>
        If my API has a good OpenAPI spec, I don't need to write the SDK at all.
        It can build itself.
      </Description>

      <Subtitle title="The pattern we all recognize" />

      <Description>
        You write an API. It needs a Node.js client. You write it. Then Python.
        You write it. Then a browser SDK. You write it. Every time you add a
        field, you update three codebases. Every time you change a parameter,
        you fix it everywhere. It works. But it's not sustainable.
      </Description>

      <CodeBlock code={badApproach} language="typescript" name="client.ts" />

      <Description>
        This approach scales poorly. Not because it's hard. But because you're
        doing the same work multiple times. The contract between server and
        client is defined in three places instead of one. And they always drift.
      </Description>

      <Subtitle title="The insight: your API is already documented" />

      <Description>
        If you're using OpenAPI (like we discussed before), your API contract is
        already machine-readable. Every endpoint. Every parameter. Every
        response. It's all there.
      </Description>

      <CodeBlock code={openAPISpec} language="json" name="openapi.json" />

      <Description>
        Now here's the shift: instead of <WhiteSpan>writing</WhiteSpan> an SDK,
        you <WhiteSpan>generate</WhiteSpan> it. Tools like{" "}
        <WhiteSpan>hey-api/openapi-ts</WhiteSpan> and{" "}
        <WhiteSpan>Speakeasy</WhiteSpan> take your spec and build the entire
        client for you. Automatically.
      </Description>

      <Subtitle title="The generated SDK is honest" />

      <CodeBlock
        code={generatedSDK}
        language="typescript"
        name="generated.ts"
      />

      <Description>
        You don't hand-write this. A generator does. And because it reads from
        your OpenAPI spec, it's always correct. It's always in sync. When you
        change your API, you regenerate. That's it.
      </Description>

      <Description>
        No manual updates. No drift. No confusion about which version of the
        client matches which version of the server.
      </Description>

      <Subtitle title="Different generators, same idea" />

      <Description>
        Tools like <WhiteSpan>hey-api/openapi-ts</WhiteSpan> generate
        lightweight clients with minimal dependencies.{" "}
        <WhiteSpan>Speakeasy</WhiteSpan> generates fully-featured SDKs with
        built-in analytics, retries, and polish. They have different
        philosophies, but the principle is the same: the spec is the source of
        truth. The code comes after.
      </Description>

      <CodeBlock
        code={speakeasyExample}
        language="typescript"
        name="setup.ts"
      />

      <Description>
        You pick the tool that matches your taste. But you never hand-write
        boilerplate again.
      </Description>

      <Subtitle title="What this means for your team" />

      <Description>
        You write one good API. You document it properly (in code, via OpenAPI).
        Your backend team is done. Your frontend team? They generate a client
        and move on.
      </Description>

      <Description>
        Need a Python SDK for data science? Generate it. Need a Go SDK for
        infrastructure? Generate it. Need to update the iOS app? Regenerate,
        ship.
      </Description>

      <Description>
        The API is the contract. Everything else flows from it.
      </Description>

      <Subtitle title="It's not magic. It's just honesty at scale." />

      <Description>
        SDK generators don't create anything you couldn't write by hand. They
        just do the boring work for you. And they do it perfectly because they
        read from a single source of truth.
      </Description>

      <Description>
        When your API spec is honest, everything else becomes honest too. Your
        documentation is honest. Your clients are honest. Your types are honest.
      </Description>

      <Description>
        That's the real power. Not automation for its own sake. But removing
        lies from your entire system.
      </Description>

      <ContainerLinks
        links={[
          {
            title: "hey-api/openapi-ts",
            href: "https://github.com/hey-api/openapi-ts",
            _blank: true,
          },
          {
            title: "Speakeasy SDK Generator",
            href: "https://www.speakeasy.com",
            _blank: true,
          },
          {
            title: "OpenAPI Generator",
            href: "https://openapi-generator.tech",
            _blank: true,
          },
        ]}
      />
    </>
  );
}
