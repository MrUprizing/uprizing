"use client";

import React, { forwardRef, useRef } from "react";
import {
  Wand2,
  Code2,
  Cloud,
  Globe,
  Smartphone,
  Monitor,
  ShoppingCart,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { IconYuno } from "@/assets";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-md border-dashed border bg-card p-3",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function ProjectArchitecturFlow({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragDropRef = useRef<HTMLDivElement>(null);
  const aiAgentRef = useRef<HTMLDivElement>(null);
  const yunoRef = useRef<HTMLDivElement>(null);
  const cdnRef = useRef<HTMLDivElement>(null);
  const mobileAppRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<HTMLDivElement>(null);
  const ecommerceRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[420px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-6xl flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <Circle ref={dragDropRef}>
              <Wand2 className="size-6" />
            </Circle>
            <p className="text-[10px] text-center mt-1 text-muted-foreground font-mono -ml-2">
              Drag & Drop
            </p>
          </div>
          <div>
            <Circle ref={aiAgentRef}>
              <Code2 className="size-6" />
            </Circle>
            <p className="text-[10px] text-center mt-1 text-muted-foreground -ml-3 font-mono">
              AI Agent
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={yunoRef} className="size-16">
            <IconYuno className="size-8 " />
          </Circle>
          <p className="text-[10px] text-center mt-1 text-muted-foreground font-mono">
            Yuno
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={cdnRef} className="size-16">
            <Globe className="size-8" />
          </Circle>
          <p className="text-[10px] text-center mt-1 text-muted-foreground font-mono">
            CDN
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <Circle ref={mobileAppRef}>
            <Smartphone className="size-6" />
          </Circle>
          <Circle ref={webRef}>
            <Monitor className="size-6" />
          </Circle>
          <Circle ref={ecommerceRef}>
            <ShoppingCart className="size-6" />
          </Circle>
          <p className="text-[10px] text-center mt-1 text-muted-foreground font-mono">
            Checkout
          </p>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={dragDropRef}
        toRef={yunoRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={aiAgentRef}
        toRef={yunoRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={yunoRef}
        toRef={cdnRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cdnRef}
        toRef={mobileAppRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cdnRef}
        toRef={webRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cdnRef}
        toRef={ecommerceRef}
        duration={3}
      />
    </div>
  );
}
