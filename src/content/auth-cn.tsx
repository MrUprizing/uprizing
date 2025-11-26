import {
  CodeBlock,
  ContainerLinks,
  CustomLink,
  Description,
  Subtitle,
  WhiteSpan,
} from "@/components/typography";

export const metadata = {
  title: "Auth CN",
  date: "20-11-2025",
  description:
    "Auth CN is a collection of shadcn components that install Better Auth with a single command.",
  author: "Mr Uprizing",
};

const installExample = `npx shadcn@latest add @auth-cn/sign-in-01
npx shadcn@latest add @auth-cn/postgres`;

const usageExample = `import { SignIn01 } from '@/components/auth/sign-in-01'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn01 />
    </div>
  )
}`;

const dbSetup = `# Generate schema
pnpm dlx @better-auth/cli@latest generate

# Apply migrations
pnpm dlx @better-auth/cli@latest migrate`;

export default function AuthCNBlog() {
  return (
    <>
      <Description>
        Auth CN is a collection of authentication components and configurations
        specifically designed for Better Auth. Install them directly into your
        project using the shadcn registry system.
      </Description>

      <Description>
        Each component is built with security and accessibility in mind, giving
        you a solid starting point for your authentication needs.
      </Description>

      <Subtitle title="How it works" />

      <Description>
        Add the Auth CN registry to your <WhiteSpan>components.json</WhiteSpan>:
      </Description>

      <CodeBlock
        code={`{
  "registries": {
    "@auth-cn": "https://auth.uprizing.me/r/{name}.json"
  }
}`}
        language="json"
        name="components.json"
      />

      <Description>Then install components:</Description>

      <CodeBlock code={installExample} language="bash" name="install.sh" />

      <Description>
        Customize them to fit your needs, and deploy. All components are fully
        customizable since the code lives in your project.
      </Description>

      <CodeBlock code={usageExample} language="typescript" name="page.tsx" />

      <Subtitle title="What you get" />

      <Description>
        <WhiteSpan>Production-ready components</WhiteSpan> built with shadcn/ui.
        Sign-in, sign-up, and more. Mobile-responsive. Accessible.
      </Description>

      <Description>
        <WhiteSpan>Better Auth configured</WhiteSpan> and ready to use.
        Type-safe. Secure. No configuration headaches.
      </Description>

      <Description>
        <WhiteSpan>Database setup</WhiteSpan> for MySQL, PostgreSQL, or SQLite.
        Schema generated automatically. Migrations handled.
      </Description>

      <CodeBlock code={dbSetup} language="bash" name="database.sh" />

      <Subtitle title="No abstractions, no hidden logic" />

      <Description>
        Better Auth handles the authentication logic. shadcn/ui provides the
        visual components. You own the code completely.
      </Description>

      <Description>
        No npm packages hiding complexity. No vendor lock-in. No monthly fees.
        Just code that lives in your project.
      </Description>

      <Subtitle title="What developers are saying" />

      <Description>
        Developers like{" "}
        <CustomLink
          _blank
          href="https://nihardaily.com/169-auth-cn-the-authentication-component-library-that-actually-makes-sense"
        >
          Nihar Ranjan Das
        </CustomLink>{" "}
        and the{" "}
        <CustomLink
          _blank
          href="https://next.jqueryscript.net/next-js/better-auth-components/"
        >
          jQueryScript team
        </CustomLink>{" "}
        have written about Auth CN, explaining how it provides production-ready
        authentication without the complexity of building from scratch or the
        lock-in of Auth0 and Clerk. These articles dive deeper into real-world
        implementations and comparisons with other authentication solutions.
      </Description>

      <ContainerLinks
        links={[
          {
            title: "Auth CN",
            href: "https://auth.uprizing.me",
            _blank: true,
          },
          {
            title: "Better Auth ",
            href: "https://better-auth.com",
            _blank: true,
          },
        ]}
      />
    </>
  );
}
