import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative max-w-6xl flex justify-center items-center">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/RCZUq7uquzo"
        thumbnailSrc="https://r4.wallpaperflare.com/wallpaper/448/785/66/futuristic-science-fiction-digital-art-concept-art-artwork-hd-wallpaper-b8a23b2c6c29a1f2c7c9ebb4b52fbbba.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/RCZUq7uquzo"
        thumbnailSrc="https://r4.wallpaperflare.com/wallpaper/448/785/66/futuristic-science-fiction-digital-art-concept-art-artwork-hd-wallpaper-b8a23b2c6c29a1f2c7c9ebb4b52fbbba.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
