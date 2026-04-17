import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <div className="container text-muted-foreground mb-8 flex flex-col gap-4 text-sm">
      <Separator />

      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* 左侧 */}
        <div>
          © {new Date().getFullYear()} S3 Image Port
        </div>

        {/* 中间：Intent  按钮 */}
        <a
          href="https://int.yt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-3 py-2 border border-gray-200 rounded-xl bg-white text-gray-900 no-underline text-[13px] leading-tight shadow-sm hover:shadow-md transition"
        >
          <span className="inline-flex items-center justify-center px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold uppercase tracking-wide">
            Intent™ 
          </span>

          <span className="flex flex-col">
            <span className="font-semibold">
              This Website is Powered by Intent FreeDomain
            </span>
            <span className="text-gray-500 text-xs">
              intent™ — A Non-Profit | Free Subdomains
            </span>
          </span>
        </a>

        {/* 右侧 */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/jiakun93/s3-image-port-v2-ncto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://yfi.moe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-300"
          >
            Author
          </a>
        </div>
      </div>
    </div>
  );
}
