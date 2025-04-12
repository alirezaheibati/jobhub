import Feature from "./Feature";

export default function Features() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 py-16 md:py-28">
      <Feature
        statistics="45K+"
        featureInfo="job positions are
        scanned every day, world wide"
      />
      <div className="bg-primary h-24 w-1 hidden md:block"></div>
      <Feature
        statistics="15min+"
        featureInfo="users spend time to get the right jobs for them"
      />
      <div className="bg-primary h-24 w-1 hidden md:block"></div>
      <Feature
        statistics="2000+"
        featureInfo="resume send to employers every day world wide"
      />
    </section>
  );
}
