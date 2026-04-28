import { url } from "inspector/promises";

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
  // Coding (20 tools)
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
  { id: "polycode", name: "Polycode AI", url: "https://polycode.ai", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "genie", name: "Genie AI", url: "https://genieai.co", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "windsurf", name: "windsurf", url: "https://codeium.com/x", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "codegeex", name: "CodeGeeX", url: "https://codegeex.cn", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "welcome.ai", name: "Welcome.ai", url: "https://welcome.ai", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "success.ai", name: "Success.ai", url: "https://www.success.ai/", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "codingfleet", name: "CodingFleet", url: "https://codingfleet.com", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },
  { id: "codeassist", name: "CodeAssist", url: "https://codeassist.dev", category: "Coding", bestFor: "Codebase search & chat", pricing: "Free tier" as const },

  // Design (20 tools)
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
  { id: "scribble diffusion", name: "Scribble Diffusion", url: "https://scribblediffusion.com", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },
  { id: "cleanup.pictures", name: "Cleanup.pictures", url: "https://cleanup.pictures", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },
  { id: "letsenhance", name: "Let's Enhance", url: "https://letsenhance.io", category: "Design", bestFor: "AI image enhancement", pricing: "Free tier" as const },

  // Image (20 tools)
  { id: "midjourney", name: "Midjourney", url: "https://midjourney.com", category: "Image", bestFor: "Professional image generation", pricing: "Paid" as const },
  { id: "firefly", name: "Adobe Firefly", url: "https://firefly.adobe.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "canva", name: "Canva Magic Studio", url: "https://www.canva.com/magic-studio", category: "Image", bestFor: "Social graphics & thumbnails", pricing: "Free tier" as const },
  { id: "recraft", name: "Recraft", url: "https://recraft.ai", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "ideogram", name: "Ideogram", url: "https://ideogram.ai", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "flux.1", name: "Flux.1", url: "https://flux1.ai", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "starryai", name: "StarryAI", url: "https://starryai.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "nightcafe", name: "NightCafe", url: "https://nightcafe.studio", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "photosonic", name: "Photosonic", url: "https://photosonic.writesonic.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "artbreeder", name: "Artbreeder", url: "https://www.artbreeder.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "deepdreamgenerator", name: "Deep Dream Generator", url: "https://deepdreamgenerator.com", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  { id: "artflow", name: "Artflow AI", url: "https://artflow.ai", category: "Image", bestFor: "Image editing/generation", pricing: "Free tier" as const },
  //{ id: "paintschainer", name: "PaintsChainer", url: "https://paintschainer.preferred.tech", category: "Image", bestFor: "Anime-style image generation", pricing: "Free tier" as const },//
  { id: "deepart", name: "DeepArt", url: "https://deepart.io", category: "Image", bestFor: "Style transfer image generation", pricing: "Free tier" as const },
  { id: "toonme", name: "ToonMe", url: "https://toonme.com", category: "Image", bestFor: "Cartoon-style image generation", pricing: "Free tier" as const },
  { id: "faceapp", name: "FaceApp", url: "https://www.faceapp.com", category: "Image", bestFor: "Photo editing & face transformation", pricing: "Free tier" as const },
  { id: "rembg", name: "Rembg", url: "https://rembg.com", category: "Image", bestFor: "Background removal", pricing: "Free tier" as const },
  { id: "letsenhance", name: "Let's Enhance", url: "https://letsenhance.io", category: "Image", bestFor: "Image upscaling & enhancement", pricing: "Free tier" as const },
  { id: "cleanup.pictures", name: "Cleanup.pictures", url: "https://cleanup.pictures", category: "Image", bestFor: "Image cleanup & object removal", pricing: "Free tier" as const },
  { id: "pixian", name: "Pixian AI", url: "https://pixian.ai", category: "Image", bestFor: "AI image generation & editing", pricing: "Free tier" as const },
  //{ id: "imgcreator", name: "ImgCreator AI", url: "https://imgcreator.zmo.ai", category: "Image", bestFor: "AI image generation & editing", pricing: "Free tier" as const },//
  { id: "pixray", name: "Pixray", url: "https://pixray.gob.io", category: "Image", bestFor: "AI image generation & editing", pricing: "Free tier" as const },

  // Chat & AI Assistants (10 tools)
  { id: "chatgpt", name: "ChatGPT", url: "https://chatgpt.com", category: "Chat", bestFor: "General AI assistant", pricing: "Free tier" as const },
  { id: "claude", name: "Claude AI", url: "https://claude.ai", category: "Chat", bestFor: "Long-form writing & code", pricing: "Free tier" as const },
  { id: "perplexity", name: "Perplexity AI", url: "https://perplexity.ai", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "deepseek", name: "DeepSeek", url: "https://www.deepseek.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "Gemini", name: "Gemini", url: "https://gemini.google.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "Meta AI", name: "Meta AI", url: "https://meta.ai", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "MS Copilot", name: "MS Copilot", url: "https://copilot.microsoft.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "grok", name: "Grok", url: "https://grok.com", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "youchat", name: "YouChat", url: "https://you.com/chat", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  { id: "pi.ai", name: "Pi AI", url: "https://pi.ai", category: "Chat", bestFor: "Research with citations", pricing: "Free tier" as const },
  


  // Writing (20 tools)
  { id: "writesonic", name: "Writesonic", url: "https://writesonic.com", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "rytr", name: "Rytr", url: "https://rytr.me", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "simplified-writing", name: "Simplified Writing", url: "https://simplified.com", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "peppertype", name: "Peppertype.ai", url: "https://www.peppertype.ai", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "contentbot", name: "ContentBot", url: "https://contentbot.ai", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "longshot", name: "LongShot AI", url: "https://www.longshot.ai", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "scalenut", name: "Scalenut", url: "https://www.scalenut.com", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "textcortex", name: "TextCortex", url: "https://textcortex.com", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "hypotenuse", name: "Hypotenuse AI", url: "https://hypotenuse.ai", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "anyword", name: "Anyword", url: "https://anyword.com", category: "Writing", bestFor: "Marketing copy & content", pricing: "Free tier" as const },
  { id: "wordtune", name: "Wordtune", url: "https://www.wordtune.com", category: "Writing", bestFor: "AI writing assistant & rephrasing", pricing: "Free tier" as const },
  { id: "quillbot", name: "QuillBot", url: "https://quillbot.com", category: "Writing", bestFor: "AI writing assistant & rephrasing", pricing: "Free tier" as const },
  { id: "lingva", name: "LingvaNex", url: "https://lingvanex.com", category: "Writing", bestFor: "AI translation & language tools", pricing: "Free tier" as const },
  { id: "deepl", name: "DeepL", url: "https://www.deepl.com", category: "Writing", bestFor: "AI translation & language tools", pricing: "Free tier" as const },
  { id: "papago", name: "Papago", url: "https://papago.naver.com", category: "Writing", bestFor: "AI translation & language tools", pricing: "Free tier" as const },
  { id: "google translate", name: "Google Translate", url: "https://translate.google.com", category: "Writing", bestFor: "AI translation & language tools", pricing: "Free" as const },
  { id: "microsoft translator", name: "Microsoft Translator", url: "https://www.microsoft.com/en-us/translator", category: "Writing", bestFor: "AI translation & language tools", pricing: "Free" as const },
  { id: "reverso", name: "Reverso", url: "https://www.reverso.net", category: "Writing", bestFor: "AI translation & language tools", pricing: "Free tier" as const },
  { id: "linguee", name: "Linguee", url: "https://www.linguee.com", category: "Writing", bestFor: "AI translation & language tools", pricing: "Free" as const },
  { id: "prowritingaid", name: "ProWritingAid", url: "https://prowritingaid.com", category: "Writing", bestFor: "AI grammar & style checker", pricing: "Free tier" as const },


  // Video (20 tools)
  { id: "runway", name: "Runway ML", url: "https://runwayml.com", category: "Video", bestFor: "AI video generation", pricing: "Paid" as const },
  { id: "descript", name: "Descript", url: "https://descript.com", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "invideo", name: "InVideo", url: "https://invideo.io", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "krea", name: "Krea", url: "https://krea.ai", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "luma", name: "Luma", url: "https://luma.ai", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "pika", name: "Pika", url: "https://pika.art", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "veed", name: "Veed.io", url: "https://veed.io", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "elai", name: "Elai.io", url: "https://elai.io", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "wisecut", name: "Wisecut", url: "https://wisecut.video", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "flexclip", name: "FlexClip", url: "https://flexclip.com", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "synthesia", name: "Synthesia", url: "https://synthesia.io", category: "Video", bestFor: "AI video avatars & generation", pricing: "Paid" as const },
  { id: "lumen5", name: "Lumen5", url: "https://lumen5.com", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  //{ id: "magisto", name: "Magisto", url: "https://www.magisto.com", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "clipchamp", name: "Clipchamp", url: "https://www.clipchamp.com", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "headliner", name: "Headliner", url: "https://www.headliner.app", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "recast.studio", name: "Recast Studio", url: "https://recast.studio", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "veed", name: "Veed.io", url: "https://veed.io", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "pictory", name: "Pictory", url: "https://pictory.ai", category: "Video", bestFor: "Text-based video editing", pricing: "Free tier" as const },
  { id: "reelgood", name: "Reelgood", url: "https://reelgood.com", category: "Video", bestFor: "AI video generation & editing", pricing: "Free tier" as const },
  { id: "magisto", name: "Magisto", url: "https://www.magisto.com", category: "Video", bestFor: "AI video generation & editing", pricing: "Free tier" as const },
  { id: "invideo", name: "InVideo", url: "https://invideo.io", category: "Video", bestFor: "AI video generation & editing", pricing: "Free tier" as const },


  // Productivity (20 tools)
  { id: "notion-ai", name: "Notion AI", url: "https://www.notion.so/product/ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Paid" as const },
  { id: "mem", name: "Mem", url: "https://mem.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "grammarly", name: "Grammarly", url: "https://www.grammarly.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "copy", name: "Copy AI", url: "https://www.copy.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Paid" as const },
  { id: "jasper", name: "Jasper", url: "https://www.jasper.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "scribe", name: "Scribe", url: "https://scribehow.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "tinywow", name: "TinyWow", url: "https://tinywow.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "supermeme", name: "Supermeme", url: "https://supermeme.ai", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "simplified", name: "Simplified", url: "https://simplified.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  { id: "hyperwrite", name: "HyperWrite", url: "https://hyperwriteai.com", category: "Productivity", bestFor: "Docs & database AI", pricing: "Free tier" as const },
  //{ id: "tome", name: "Tome", url: "https://tome.app", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },//
  { id: "beautiful.ai", name: "Beautiful.ai", url: "https://beautiful.ai", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "gamma", name: "Gamma", url: "https://gamma.app", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "pitch", name: "Pitch", url: "https://pitch.com", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "slidesgo", name: "Slidesgo", url: "https://slidesgo.com", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "autodraw", name: "AutoDraw", url: "https://autodraw.com", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "microsoft designer", name: "Microsoft Designer", url: "https://designer.microsoft.com", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "scribble diffusion", name: "Scribble Diffusion", url: "https://scribblediffusion.com", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "cleanup.pictures", name: "Cleanup.pictures", url: "https://cleanup.pictures", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "letsenhance", name: "Let's Enhance", url: "https://letsenhance.io", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "tome", name: "Tome", url: "https://tome.app", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },
  { id: "microsoft designer", name: "Microsoft Designer", url: "https://designer.microsoft.com", category: "Productivity", bestFor: "AI storytelling & presentations", pricing: "Free tier" as const },

  // Entertainment (20 tools) 
  { id: "ai dungeon", name: "AI Dungeon", url: "https://play.aidungeon.io", category: "Entertainment", bestFor: "AI text adventure gaming", pricing: "Free tier" as const },
  { id: "replika", name: "Replika", url: "https://replika.ai", category: "Entertainment", bestFor: "AI companionship & chat", pricing: "Free tier" as const },
  { id: "ai music generator", name: "AI Music Generator", url: "https://aimusicgenerator.com", category: "Entertainment", bestFor: "AI-generated music creation", pricing: "Free tier" as const },
  { id: "artbreeder", name: "Artbreeder", url: "https://www.artbreeder.com", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "deepdreamgenerator", name: "Deep Dream Generator", url: "https://deepdreamgenerator.com", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "starryai", name: "StarryAI", url: "https://starryai.com", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "nightcafe", name: "NightCafe", url: "https://nightcafe.studio", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "photosonic", name: "Photosonic", url: "https://photosonic.writesonic.com", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "artflow", name: "Artflow AI", url: "https://artflow.ai", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "deepart", name: "DeepArt", url: "https://deepart.io", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "toonme", name: "ToonMe", url: "https://toonme.com", category: "Entertainment", bestFor: "AI-generated art creation", pricing: "Free tier" as const },
  { id: "faceapp", name: "FaceApp", url: "https://www.faceapp.com", category: "Entertainment", bestFor: "AI photo editing & face transformation", pricing: "Free tier" as const },
  { id: "rembg", name: "Rembg", url: "https://rembg.com", category: "Entertainment", bestFor: "AI background removal", pricing: "Free tier" as const },
  { id: "pixian", name: "Pixian AI", url: "https://pixian.ai", category: "Entertainment", bestFor: "AI image generation & editing", pricing: "Free tier" as const },
  { id: "pixray", name: "Pixray", url: "https://pixray.gob.io", category: "Entertainment", bestFor: "AI image generation & editing", pricing: "Free tier" as const },
  { id: "synthesia", name: "Synthesia", url: "https://synthesia.io", category: "Entertainment", bestFor: "AI video avatars & generation", pricing: "Paid" as const },
  { id: "lumen5", name: "Lumen5", url: "https://lumen5.com", category: "Entertainment", bestFor: "AI video creation & editing", pricing: "Free tier" as const },
  { id: "reelgood", name: "Reelgood", url: "https://reelgood.com", category: "Entertainment", bestFor: "AI video generation & editing", pricing: "Free tier" as const },
  { id: "magisto", name: "Magisto", url: "https://www.magisto.com", category: "Entertainment", bestFor: "AI video generation & editing", pricing: "Free tier" as const },
  { id: "invideo", name: "InVideo", url: "https://invideo.io", category: "Entertainment", bestFor: "AI video generation & editing", pricing: "Free tier" as const },


  // Animation (1 tools)
  { id: "runway", name: "Runway ML", url: "https://runwayml.com", category: "Animation", bestFor: "AI animation generation", pricing: "Paid" as const },
  { id: "luma", name: "Luma", url: "https://luma.ai", category: "Animation", bestFor: "AI 3D animation generation", pricing: "Free tier" as const },
  { id: "pika", name: "Pika", url: "https://pika.art", category: "Animation", bestFor: "AI 3D animation generation", pricing: "Free tier" as const },
  { id: "veed", name: "Veed.io", url: "https://veed.io", category: "Animation", bestFor: "AI video editing & animation", pricing: "Free tier" as const },
  { id: "elai", name: "Elai.io", url: "https://elai.io", category: "Animation", bestFor: "AI video editing & animation", pricing: "Free tier" as const },


];