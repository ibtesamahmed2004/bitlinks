import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL Shortener in the Market
          </p>
          <p className="px-26 text-center">
            This is the most straightforward URL Shortener in the world. Most of the URL Shorteners will track you or ask you to login and give your details. We understand your needs and hence we have created this URL Shortener.
          </p>
          <div className='flex gap-3 justify-start'>
                <Link href = "/shorten"><button className='bg-purple-400 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer text-white'>Try Now</button></Link>
                <Link href = "/github"><button className='bg-purple-400 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer text-white'>GitHub</button></Link>
            </div>
        </div>

        <div className="flex justify-start relative">
          <img className="mix-blend-darken" alt="an image of a vector" src={"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20136/bitlinks/public/vector.jpg?raw=true"} width={700} height={300} />

        </div>

      </section>
    </main>
  );
}
