import type { MDXComponents } from "mdx/types";


export const runtime = "edge"
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
