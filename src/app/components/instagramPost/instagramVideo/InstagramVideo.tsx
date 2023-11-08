import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

interface InstagramVideoProps {
    src: string;
}

export default function InstagramVideo({ src }: InstagramVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoPlaying, setVideoPlaying] = useState(false);

    function toggleVideo() {
        if (!videoRef) {
            return;
        }

        if (!videoPlaying) {
            videoRef.current?.play();
            setVideoPlaying(true);
            return;
        }

        videoRef.current?.pause();
        setVideoPlaying(false);
    }

    return (
        <div className="relative group h-full lg:w-[302px]" onClick={toggleVideo}>
            <video
                src={src}
                ref={videoRef}
                className="lg:h-full w-full"
                controlsList="nodownload"
            ></video>
            {videoPlaying ? (
                <Pause className="fill-slate-50 text-slate-50 w-32 h-32 absolute left-1/3 top-1/3 group-hover:opacity-75 opacity-75 lg:opacity-0 transition-all duration-150"></Pause>
            ) : (
                <Play className="fill-slate-50 text-slate-50 w-32 h-32 absolute left-1/3 top-1/3 group-hover:opacity-75 opacity-75 lg:opacity-0 transition-all duration-150"></Play>
            )}
        </div>
    );
}
