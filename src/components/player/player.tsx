import ReactPlayer from "react-player";

export default function Player() {
  return (
    <div className="w-full mb-6 aspect-w-16 aspect-h-9 z-0">
      <ReactPlayer
        className="w-full h-full rounded-3xl"
        url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
        height="100%"
        width="100%"
      />
    </div>
  );
}
