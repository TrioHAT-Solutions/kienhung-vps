import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 px-4">
      <div className="text-center max-w-md">
        <SearchX className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
        <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-xl text-white font-semibold mb-2">
          Không tìm thấy trang
        </p>
        <p className="text-zinc-400 text-sm mb-8">
          Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600">
              <Home className="h-4 w-4" />
              Về trang chủ
            </Button>
          </Link>
          <Link href="/apps">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Khám phá ứng dụng
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
