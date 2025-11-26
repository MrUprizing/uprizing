import {
  CodeBlock,
  Description,
  Subtitle,
  WhiteSpan,
} from "@/components/typography";

export const metadata = {
  title: "No SDK: You're a Losing Company",
  date: "10-10-2025",
  description:
    "No SDK isn't a technical limitation. It's tactical incompetence. Solutions exist. Automated solutions. If you're not using them, you're telling your market you don't know what you're doing.",
  author: "Mr Uprizing",
};

const curlExample = `curl -X POST 'https://api.example.com/emails' \\
     -H 'Authorization: Bearer xxx_token_xxx' \\
     -H 'Content-Type: application/json' \\
     -d $'{
  "from": "company@example.com",
  "to": ["user@example.com"],
  "subject": "hello world",
  "html": "<p>it works!</p>",
  "reply_to": "support@example.com"
}'`;

const manualIntegration = `// Developer has to write this
const sendEmail = async (email: string, subject: string) => {
  try {
    const response = await fetch('https://api.example.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${process.env.API_KEY}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'company@example.com',
        to: [email],
        subject: subject,
        html: '<p>Hello</p>',
        reply_to: 'support@example.com'
      })
    })

    if (!response.ok) {
      throw new Error(\`Error: \${response.status}\`)
    }

    return response.json()
  } catch (error) {
    console.error('Email failed:', error)
    throw error
  }
}`;

const withSDK = `// With SDK, developer does this
import { Client } from '@mycompany/sdk'

const client = new Client(process.env.API_KEY)

const sendEmail = async (email: string, subject: string) => {
  return client.emails.send({
    from: 'company@example.com',
    to: [email],
    subject: subject,
    html: '<p>Hello</p>',
    reply_to: 'support@example.com'
  })
}`;

const typesComparison = `// Without SDK: types are a guess
const data = {
  from: 'company@example.com',
  to: [email],
  // Is it email or to? subject or subj? Check the docs...
  subject: subject,
  html: content,
  reply_to: 'support@example.com'
}

// With SDK: types are automatic, always synced
import type { EmailRequest } from '@mycompany/sdk'

const data: EmailRequest = {
  from: 'company@example.com',
  to: [email],
  subject: subject,
  html: content,
  reply_to: 'support@example.com'
}`;

const retryLogic = `// Without SDK: every developer reimplements retries
const sendEmailWithRetry = async (email: string, attempt = 0): Promise<any> => {
  try {
    return await fetch('https://api.example.com/emails', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${process.env.API_KEY}\` },
      body: JSON.stringify({ to: email })
    })
  } catch (error) {
    if (attempt < 3) {
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, attempt)))
      return sendEmailWithRetry(email, attempt + 1)
    }
    throw error
  }
}

// With SDK: it's built-in
const client = new Client(process.env.API_KEY)
await client.emails.send({ to: email }) // automatic retries`;

const openAPISpec = `// If you have an OpenAPI spec (you should)
{
  "openapi": "3.0.0",
  "info": { "title": "My API", "version": "1.0.0" },
  "paths": {
    "/emails": {
      "post": {
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "from": { "type": "string" },
                  "to": { "type": "array", "items": { "type": "string" } },
                  "subject": { "type": "string" },
                  "html": { "type": "string" }
                },
                "required": ["from", "to", "subject", "html"]
              }
            }
          }
        }
      }
    }
  }
}`;

const generateSDK = `// Option 1: hey-api/openapi-ts (minimal)
npx @hey-api/openapi-ts --input ./openapi.json --output ./sdk

// Option 2: Speakeasy (professional, more features)
speakeasy generate sdk --schema ./openapi.json

// Option 3: openapi-generator (maximum control)
openapi-generator-cli generate -i openapi.json -g typescript -o ./sdk

// SDK is done. Zero lines of code written by hand. Zero maintenance.
// Always in sync with your API.

// Integrate into CI/CD:
// - GitHub Actions: Run generation on every spec change
// - Publish to npm automatically
// - Validate SDK against live API in test environment
// - Version bumps happen automatically`;

const competitorComparison = `// Real-world buyer decision scenario

// API without SDK
const emailService = fetch('https://api-no-sdk.com/send', {
  // 30 minutes of setup
  // Manual headers
  // Manual error handling
  // No types
  // No type documentation
})

// Alternative API WITH SDK
import { EmailService } from '@api-with-sdk/sdk'
const emailService = new EmailService(process.env.API_KEY)
// 2 minutes of setup
// Everything typed
// IntelliSense works
// Documentation embedded in code`;

export default function NoSDKIsALoss() {
  return (
    <>
      <Description>
        I see a public API without an SDK and think: that company doesn't
        understand developer experience. But it's worse. It's not apathy. It's
        <WhiteSpan> tactical incompetence</WhiteSpan>. Because the solution
        exists. And they chose not to use it.
      </Description>

      <Subtitle title="Incompetence is optional" />

      <Description>
        In 2025, not having an SDK isn't a technical problem. It's a public
        admission that your team doesn't know, can't, or doesn't care.
      </Description>

      <Description>
        Multiple tools exist that generate SDKs automatically from a good API
        spec. You don't need to write code. You just need an honest OpenAPI
        spec.
      </Description>

      <CodeBlock code={openAPISpec} language="json" name="openapi.json" />

      <Description>You have that. You have this option:</Description>

      <CodeBlock code={generateSDK} language="bash" name="generate.sh" />

      <Description>
        Your SDK is done. Zero lines of code written by hand. Zero maintenance.
        Always in sync with your API. Integrated into CI/CD—the SDK regenerates
        and publishes automatically every time your spec changes. Your
        developers never touch it.
      </Description>

      <Description>
        If your company uses curl in the documentation, you're telling your
        market: <WhiteSpan>"We don't know the tools that exist"</WhiteSpan>.
      </Description>

      <Subtitle title="The invisible cost without SDK" />

      <Description>
        When a company publishes an API and only offers curl documentation,
        they're delegating work. Not to specialists. To everyone. To every one
        of their developer users.
      </Description>

      <CodeBlock code={curlExample} language="bash" name="docs.sh" />

      <Description>
        That example is where most companies think their responsibility ends. In
        reality, that's where the real problem begins.
      </Description>

      <Subtitle title="Every developer reinvents the wheel" />

      <Description>
        Without an SDK, every team integrating your API writes the same code.
        Not the logic. The boilerplate. Fetch, headers, error handling,
        validation.
      </Description>

      <CodeBlock
        code={manualIntegration}
        language="typescript"
        name="client.ts"
      />

      <Description>
        Multiply that by 500 teams. 500 implementations of the same integration.
        500 versions of the truth. Some handle errors. Others don't. Some
        validate. Others don't.
      </Description>

      <Description>
        If you're the company, this is your problem. Each of those 500 teams
        asks questions in your Slack. Each one reports different bugs. Each one
        questions why certain fields don't work as expected.
      </Description>

      <Description>
        All of that is support you could have avoided with an automatically
        generated SDK.
      </Description>

      <Subtitle title="The SDK is the control center" />

      <Description>
        A well-built SDK is the canonical version. The only place where
        integrating your API correctly matters. Developers don't think. They
        write.
      </Description>

      <CodeBlock code={withSDK} language="typescript" name="with-sdk.ts" />

      <Description>With that SDK, I solve every problem once:</Description>

      <Description>
        <WhiteSpan>1. Error handling.</WhiteSpan> Not each developer. Me. One
        implementation. Versioned. Maintained.
      </Description>

      <Description>
        <WhiteSpan>2. Type safety.</WhiteSpan> No confusion about which fields
        are required, which types they accept, or what the correct order is.
      </Description>

      <CodeBlock code={typesComparison} language="typescript" name="types.ts" />

      <Description>
        <WhiteSpan>3. Retries and resilience.</WhiteSpan> Rate limiting handled.
        Exponential backoff automatic. Resilience by default.
      </Description>

      <CodeBlock code={retryLogic} language="typescript" name="retries.ts" />

      <Description>
        <WhiteSpan>4. Guaranteed synchronization.</WhiteSpan> The SDK
        regenerates from your OpenAPI spec. Never drift. Never surprises.
      </Description>

      <Subtitle title="The moment of truth: buyer decision" />

      <Description>
        A developer faces a choice. They need a service. They compare two
        options:
      </Description>

      <CodeBlock
        code={competitorComparison}
        language="typescript"
        name="choice.ts"
      />

      <Description>
        At a technical level, both APIs could be identical. The difference is
        here.
      </Description>

      <Description>
        <WhiteSpan>Without SDK:</WhiteSpan> 30 minutes of setup. Boilerplate.
        Manual testing. Risk of errors.
      </Description>

      <Description>
        <WhiteSpan>With SDK:</WhiteSpan> 2 minutes of setup. Everything typed.
        IntelliSense works. Documentation in the code.
      </Description>

      <Description>
        In a real decision, the developer chooses the alternative with SDK. Not
        because it's better technically. But because it's easier. And it's{" "}
        <WhiteSpan>your job</WhiteSpan> to make it easy.
      </Description>

      <Description>
        If you don't, you lose that customer to a competitor. And you never even
        know why.
      </Description>

      <Subtitle title="This affects real adoption" />

      <Description>
        It's not a detail. It's a metric. Companies with SDKs have:
      </Description>

      <Description>
        <WhiteSpan>• Faster adoption.</WhiteSpan> Less friction on first use.
      </Description>

      <Description>
        <WhiteSpan>• Less support overhead.</WhiteSpan> The SDK is living
        documentation. Fewer dumb questions.
      </Description>

      <Description>
        <WhiteSpan>• Better user experience.</WhiteSpan> The developer feels you
        care.
      </Description>

      <Description>
        <WhiteSpan>• Informed decisions.</WhiteSpan> You know exactly how your
        API is used. Real adoption metrics.
      </Description>

      <Description>
        Without an SDK, you lose all of that. And every new user is a mystery.
        Are they using your API correctly? Without errors? Respecting limits?
        You don't know. Each integrator can do whatever they want.
      </Description>

      <Subtitle title="The message you send" />

      <Description>
        When you publish your API with just curl, the message is clear:
      </Description>

      <Description>
        <WhiteSpan>
          "We care that it exists. We don't care that it's easy".
        </WhiteSpan>
      </Description>

      <Description>An SDK says the opposite:</Description>

      <Description>
        <WhiteSpan>
          "We care about your time. We care that you integrate quickly. We
          solved the boring problems for you".
        </WhiteSpan>
      </Description>

      <Description>
        In a saturated market of options, that message determines whether
        developers recommend you or avoid you.
      </Description>

      <Subtitle title="It's not a resource issue. It's a priority issue." />

      <Description>
        Many companies without SDKs say: "We don't have bandwidth to maintain an
        SDK".
      </Description>

      <Description>
        False. If you have an OpenAPI spec and use hey-api, Speakeasy, or
        openapi-generator, <WhiteSpan>you don't maintain anything</WhiteSpan>.
        The SDK generates automatically.
      </Description>

      <Description>
        The truth is harsher: you didn't prioritize it. You didn't believe it
        mattered. And that's what your users read.
      </Description>

      <Subtitle title="The closing" />

      <Description>
        No SDK isn't an engineering problem. It's a vision problem. It says: "My
        users matter enough that I make things easy." Or not.
      </Description>

      <Description>
        If your company has a public API without an SDK in 2025, you're a
        <WhiteSpan> losing company</WhiteSpan>. Not from lack of money. From
        lack of judgment.
      </Description>

      <Description>
        The tools exist. The practices exist. The cost is near zero. If you
        don't have an SDK, you chose not to.
      </Description>

      <Description>And that's what the market reads.</Description>
    </>
  );
}
