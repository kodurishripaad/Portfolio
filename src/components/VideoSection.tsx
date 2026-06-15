import { useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import SplitText from "./SplitText";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById("showcase-video") as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play().catch(() => {});
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = document.getElementById("showcase-video") as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section
      id="video-section"
      className="pt-6 pb-16 md:py-24 bg-[#03020D] border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 md:mb-16">
          <SplitText
            text="See How It Works"
            tag="h2"
            splitType="words"
            delay={40}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.03em] font-sans"
          />
          <p className="text-zinc-400 text-sm sm:text-base leading-[1.6] font-body">
            A quick introduction to how I help businesses automate repetitive work and improve operations.
          </p>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative w-full aspect-video rounded-2xl md:rounded-[24px] border border-white/10 bg-[#0F0F1B] overflow-hidden group shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
        >
          {/* Loop/playsinline clean abstract video feed */}
         <video
  id="showcase-video"
  src="/videos/introduction.mp4"
  className="w-full h-full object-cover"
  controls
  playsInline
  preload="metadata"
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
  onEnded={() => setIsPlaying(false)}
  onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
/>

          {/* Video Overlay controls layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between w-full">
              {/* Play / Pause Toggle Button */}
              <button
                id="video-play-toggle"
                onClick={togglePlay}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-semibold backdrop-blur-md transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-3 w-3 fill-white" />
                    <span>Pause Demo</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 fill-white" />
                    <span>Play Demo</span>
                  </>
                )}
              </button>

              {/* Mute Toggle Button */}
              <button
                id="video-volume-toggle"
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Prominent Play overlay when paused */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
            >
              <div className="h-14 w-14 rounded-full bg-[#5F62FF] text-white flex items-center justify-center shadow-[0_0_20px_rgba(95,98,255,0.4)] animate-pulse">
                <Play className="h-6 w-6 fill-white ml-0.5" />
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
