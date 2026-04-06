import Scene from "./sd-scene";

export default function Hero() {
  return (
    <section className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Scene />
      </div>

      <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-7xl font-bold">
          Han <br />
          <span className="gradient-text">Developer</span>
        </h1>
      </div>
    </section>
  );
}