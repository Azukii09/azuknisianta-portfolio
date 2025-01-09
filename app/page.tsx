import Image from "next/image";

export default function Home() {
  return (
      <>
          <div className={"text-primary text-6xl font-bold"}>halo sayang</div>
          <div className={"w-12 h-12 bg-primary"}></div>
          <div className={"w-12 h-12 bg-secondary"}></div>
          <div className={"w-12 h-12 bg-ternary"}></div>
          <div className={"w-12 h-12 bg-contras"}></div>
          <div className={"w-12 h-12 bg-accent"}></div>
          <Image src={"/assets/img/logo_square.png"} alt={"logo"} width={400} height={400}/>
      </>
  );
}
