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
  { id: "replit", name: "Replit Ghostwriter", url: "https://replit.com/site/ghostwriter", category: "Coding", bestFor: "In-browser coding AI", pricing: "Paid" as const },
  { id: "sourcery", name: "Sourcery", url: "https://sourcery.ai", category: "Coding", bestFor: "Python code improvement", pricing: "Free tier" as const },
  { id: "codegrepper", name: "CodeGrepper", url: "https://codegrepper.com", category: "Coding", bestFor: "Code search & snippets", pricing: "Free tier" as const },
  { id: "codewhisperer", name: "Amazon CodeWhisperer", url: "https://aws.amazon.com/codewhisperer", category: "Coding", bestFor: "AI coding companion", pricing: "Free tier" as const },
  { id: "intelli", name: "IntelliCode", url: "https://visualstudio.microsoft.com/services/intellicode", category: "Coding", bestFor: "AI-assisted development", pricing: "Free" as const },
  { id: "askcodi", name: "AskCodi", url: "https://askcodi.ai", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "codiga", name: "Codiga", url: "https://codiga.io", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "qodo", name: "Qodo", url: "https://qodo.ai", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },

  // Design (12 tools)
  { id: "v0", name: "v0 by Vercel", url: "https://v0.dev", category: "Design", bestFor: "Figma → React/Shadcn", pricing: "Free tier" as const },
  { id: "bolt-new", name: "Bolt.new", url: "https://bolt.new", category: "Design", bestFor: "Text → Full app prototype", pricing: "Free" as const },
  { id: "framer-ai", name: "Framer AI", url: "https://framer.com/ai", category: "Design", bestFor: "Prompt → Website", pricing: "Free tier" as const },
  { id: "beautiful-ai", name: "Beautiful.ai", url: "https://beautiful.ai", category: "Design", bestFor: "AI presentation slides", pricing: "Free tier" as const },
  { id: "designer", name: "Designer by Wix", url: "https://www.wix.com/designer", category: "Design", bestFor: "AI website design", pricing: "Free tier" as const },
  { id: "looka", name: "Looka", url: "https://looka.com", category: "Design", bestFor: "AI logo design", pricing: "Paid" as const },
  { id: "tailorbrands", name: "Tailor Brands", url: "https://www.tailorbrands.com", category: "Design", bestFor: "AI logo design", pricing: "Paid" as const },
  { id: "designs.ai", name: "Designs.ai", url: "https://designs.ai", category: "Design", bestFor: "AI marketing assets", pricing: "Paid" as const },
  { id: "brandmark", name: "Brandmark.io", url: "https://brandmark.io", category: "Design", bestFor: "AI logo design", pricing: "Paid" as const },
  { id: "logoai", name: "LogoAI", url: "https://logoai.com", category: "Design", bestFor: "AI logo design", pricing: "Paid" as const },
  { id: "synthesia", name: "Synthesia", url: "https://synthesia.io", category: "Design", bestFor: "AI video avatars", pricing: "Paid" as const },
  { id: "designify", name: "Designify", url: "https://designify.com", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },
  { id: "gamma", name: "Gamma", url: "https://gamma.app", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },
  { id: "pitch", name: "Pitch", url: "https://pitch.com", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },
  { id: "slidesgo", name: "Slidesgo", url: "https://slidesgo.com", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },
  { id: "autodraw", name: "AutoDraw", url: "https://autodraw.com", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },
  { id: "microsoft designer", name: "Microsoft Designer", url: "https://designer.microsoft.com", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },

  // Image (8 tools)
  { id: "midjourney", name: "Midjourney", url: "https://midjourney.com", category: "Image", bestFor: "Professional image generation", pricing: "Paid" as const },
  { id: "firefly", name: "Adobe Firefly", url: "https://firefly.adobe.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "canva", name: "Canva Magic Studio", url: "https://www.canva.com/magic-studio", category: "Image", bestFor: "Social graphics & thumbnails", pricing: "Free tier" as const },
  { id: "recraft", name: "Recraft", url: "https://recraft.ai", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "ideogram", name: "Ideogram", url: "https://ideogram.ai", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "flux.1", name: "Flux.1", url: "https://flux1.ai", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "starryai", name: "StarryAI", url: "https://starryai.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },


  // Chat & Writing
  { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com", category: "Chat", bestFor: "General AI assistant", pricing: "Free tier" as const },
  { id: "claude", name: "Claude AI", url: "https://claude.ai", category: "Chat", bestFor: "Long-form writing & code", pricing: "Free tier" as const },
  { id: "perplexity", name: "Perplexity AI", url: "https://perplexity.ai", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "deepseek", name: "DeepSeek", url: "https://www.deepseek.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "Gemini", name: "Gemini", url: "https://gemini.google.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "Meta AI", name: "Meta AI", url: "https://meta.ai", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "MS Copilot", name: "MS Copilot", url: "https://copilot.microsoft.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "grok", name: "Grok", url: "https://grok.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },


  // Video
  { id: "runway", name: "Runway ML", url: "https://runwayml.com", category: "Video", bestFor: "AI video generation", pricing: "Paid" as const },
  { id: "descript", name: "Descript", url: "https://descript.com", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "invideo", name: "InVideo", url: "https://invideo.io", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "krea", name: "Krea", url: "https://krea.ai", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "luma", name: "Luma", url: "https://luma.ai", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "pika", name: "Pika", url: "https://pika.art", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },


  // Productivity
  { id: "notion-ai", name: "Notion AI", url: "https://www.notion.so/product/ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Paid" as const },
  { id: "mem", name: "Mem", url: "https://mem.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "grammarly", name: "Grammarly", url: "https://www.grammarly.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "copy", name: "Copy AI", url: "https://www.copy.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Paid" as const },
  { id: "jasper", name: "Jasper", url: "https://www.jasper.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "scribe", name: "Scribe", url: "https://scribehow.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "tinywow", name: "TinyWow", url: "https://tinywow.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "supermeme", name: "Supermeme", url: "https://supermeme.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
];

