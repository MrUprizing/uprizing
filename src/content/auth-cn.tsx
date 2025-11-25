import { CustomLink, Description } from "@/components/typography";

export const metadata = {
  title: "Auth CN",
  date: "20.11.2025",
  description: "Full-stack Components for Better Auth using shadcn/registry.",
  author: "Mr Uprizing",
};

export default function ExampleThought() {
  return (
    <>
      <Description>
        <CustomLink href="https://github.com/honojs/website/pull/744">
          Auth CN
        </CustomLink>{" "}
        is a collection of authentication components and configurations
        specifically designed for Better Auth. Install them directly into your
        project using the shadcn registry system.
      </Description>
      <Description>
        Each component is built with security and accessibility in mind, giving
        you a solid starting point for your authentication needs.
      </Description>
    </>
  );
}
