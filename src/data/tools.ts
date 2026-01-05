export type Tool = {
  id: string;
  name: string;
  url: string;
  category: string;
  bestFor: string;
  pricing: "Free" | "Free tier" | "Paid" | "Waitlist";
  tags?: string[];
};

export const ALL_TOOLS: Tool[] = [
  // Coding (15+ tools)
  { id: "copilot", name: "GitHub Copilot", url: "https://github.com/features/copilot", category: "Coding", bestFor: "VS Code/Next.js autocomplete", pricing: "Paid" as const },
  { id: "cursor", name: "Cursor AI", url: "https://cursor.com", category: "Coding", bestFor: "React/Next.js AI IDE", pricing: "Free tier" as const },
  { id: "codeium", name: "Codeium", url: "https://codeium.com", category: "Coding", bestFor: "Free coding assistant", pricing: "Free" as const },
  { id: "tabnine", name: "Tabnine", url: "https://tabnine.com", category: "Coding", bestFor: "Team coding autocomplete", pricing: "Free tier" as const },
  { id: "cody", name: "Cody", url: "https://sourcegraph.com/cody", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  
  // Design (12 tools)
  { id: "v0", name: "v0 by Vercel", url: "https://v0.dev", category: "Design", bestFor: "Figma → React/Shadcn", pricing: "Free tier" as const },
  { id: "bolt-new", name: "Bolt.new", url: "https://bolt.new", category: "Design", bestFor: "Text → Full app prototype", pricing: "Free" as const },
  { id: "framer-ai", name: "Framer AI", url: "https://framer.com/ai", category: "Design", bestFor: "Prompt → Website", pricing: "Free tier" as const },
  { id: "beautiful-ai", name: "Beautiful.ai", url: "https://beautiful.ai", category: "Design", bestFor: "AI presentation slides", pricing: "Free tier" as const },
  
  // Image (8 tools)
  { id: "midjourney", name: "Midjourney", url: "https://midjourney.com", category: "Image", bestFor: "Professional image generation", pricing: "Paid" as const },
  { id: "firefly", name: "Adobe Firefly", url: "https://firefly.adobe.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "canva", name: "Canva Magic Studio", url: "https://www.canva.com/magic-studio", category: "Image", bestFor: "Social graphics & thumbnails", pricing: "Free tier" as const },
  
  // Chat & Writing
  { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com", category: "Chat", bestFor: "General AI assistant", pricing: "Free tier" as const },
  { id: "claude", name: "Claude AI", url: "https://claude.ai", category: "Chat", bestFor: "Long-form writing & code", pricing: "Free tier" as const },
  { id: "perplexity", name: "Perplexity AI", url: "https://perplexity.ai", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  
  // Video
  { id: "runway", name: "Runway ML", url: "https://runwayml.com", category: "Video", bestFor: "AI video generation", pricing: "Paid" as const },
  { id: "descript", name: "Descript", url: "https://descript.com", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  
  // Productivity
  { id: "notion-ai", name: "Notion AI", url: "https://www.notion.so/product/ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Paid" as const },
];
