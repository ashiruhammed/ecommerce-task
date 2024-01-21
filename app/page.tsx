import ConcreteIcon from "@/public/icon/ConcreteIcon";
import "./globals.css";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Section from "@/components/section";
import BookIcon from "@/public/icon/BookIcon";
import HackIcon from "@/components/HackIcon";
import Image from "next/image";
import Arrow from "@/public/icon/Arrow";
import Clock from "@/public/icon/Clock";
import Stat from "@/public/icon/Stat";
import RatingComp from "@/components/rating";
import Rating from "@/components/rating";
import FacebookIcon from "@/public/icon/FacebookIcon";
import InstagramIcon from "@/public/icon/InstagramIcon";
import TwitterIcon from "@/public/icon/TwitterIcon";
export default function Home() {
  return (
    <main>
      <Section label="hero-section">
        <Hero />
      </Section>
      <Section label="best seller product">
        <div className="text-center space-y-3 md:py-0 py-20">
          <p className="text-[20px] text-[#737373]">Featured Products</p>
          <h2 className="text-[24px] font-bold">BESTSELLER PRODUCTS</h2>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
          <Products />
        </div>
      </Section>
      <Section label="best services">
        <div className="text-center space-y-3 md:py-0 py-20">
          <p className="text-[20px] text-[#737373]">Featured Products</p>
          <h2 className="text-[24px] font-bold">THE BEST SERVICES</h2>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:mt-20">
          {[
            {
              label: "Easy win",
              description: "Get your best looking smile now !",
              Icon: BookIcon,
            },
            {
              label: "Concrete",
              description:
                "Defalcate is most focused in helping you discover your most beautiful smile",
              Icon: ConcreteIcon,
            },
            {
              label: "Hack Growth",
              description: "Overcame any hurdle or any other problem",
              Icon: HackIcon,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-5 items-center px-10 py-9 text-center">
              <item.Icon className="text-[72px]" />
              <h3 className="text-[#252B42] font-bold text-[24px]">
                {item.label}
              </h3>
              <p className="text-[#737373]">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section label="practical advice">
        <div className="text-center space-y-3 md:py-0 py-20">
          <h2 className="text-[#23A6F0] font-bold">Practical Advice</h2>
          <p className="text-[40px] text-[#252B42] font-bold">
            Featured Products
          </p>
        </div>
        <div className="py-20 flex flex-col items-center md:flex-row mx-auto max-w-fit gap-3">
          {["/bar-room.png", "/dining-room.png", "/bedroom.png"].map(
            (imgSrc, i) => (
              <div
                key={i}
                className="max-w-[350px] border rounded-sm shadow-sm cursor-pointer hover:scale-105 duration-300">
                <Image src={imgSrc} alt="" width={350} height={300} />
                <div className="space-y-3 p-6">
                  <div className="flex gap-2">
                    <p>Google</p>
                    <p>Trending</p>
                    <p>New</p>
                  </div>

                  <p className="text-[20px] text-[#252b42]">
                    Loudest a la Madison #1 (L&apos;integral)
                  </p>
                  <p className="text-[#737373]">
                    We focus on ergonomics and meeting where you work. It&apos;s
                    only a keystroke away{" "}
                  </p>
                  <div className="flex gap-2 justify-between text-xs">
                    <p className="flex gap-2 items-center">
                      <Clock /> 22 April 2021
                    </p>
                    <p className="flex gap-2 items-center">
                      <Stat /> 10 comments
                    </p>
                  </div>
                  <a className="flex gap-2 items-center" href="#">
                    Learn more <Arrow />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </Section>

      <Section
        label="what they about us"
        className="bg-[#FAFAFA] md:bg-transparent lg:flex gap-[120px]">
        <div
          tabIndex={0}
          aria-label="What they say about us"
          className="flex items-center flex-col gap-7 font-bold p-12">
          <h2 className="text-[#252B42] text-[24px]">What the say about us</h2>
          <div className="py-7 px-9 gap-5 flex flex-col items-center text-center">
            <Image
              alt="user-image"
              src="/user.jpg"
              width={90}
              height={90}
              tabIndex={0}
            />
            <Rating rating={4} />
            <p>
              late helps you see how many more days you need to work to reach
              your financial goal
            </p>
            <div>
              <p
                aria-label="user regina miles"
                tabIndex={0}
                className="text-[#23A6F0]">
                Regina Miles
              </p>
              <p aria-live="polite" tabIndex={0}>
                Designer
              </p>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-3 max-w-fit mx-auto gap-4"
          aria-label="designs"
          tabIndex={0}>
          {[
            "/photograph.png",
            "/lady-holding-bar.png",
            "/street.png",
            "/ice-cream.png",
            "/lady-sitting.png",
            "/man-writing.png",
            "/rock.png",
            "/mountain.png",
            "/pool.png",
          ].map((img) => (
            <Image
              key={img}
              tabIndex={0}
              src={img}
              alt={img.replace(".png", "").replace("/", "")}
              width={112}
              height={112}
              className="md:w-[147px]"
            />
          ))}
        </div>
      </Section>
      <div className="relative mt-20 md:mt-0">
        <Section label="" className="py-20">
          <div>
            <div>
              <Image
                src="/footer-bg.png"
                fill
                alt="Backgound image"
                className="-z-50"
              />
            </div>
            <div className="mx-auto max-w-[570px] text-center py-20 space-y-7">
              <p className="text-[#23A6F0] font-bold">
                Designing better experience
              </p>
              <h2 className="text-[#252B42] text-[40px] font-bold leading-[50px]">
                Problems trying to resolve the conflict between
              </h2>
              <p className="text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of classical physics
              </p>
              <p className="text-[24px] font-bold text-[#23856d]">$16.48</p>
              <button className="font-bold px-10 py-4 rounded-md bg-[#23a6f0] text-white">
                ADD YOUR CALL TO ACTION
              </button>
            </div>
          </div>
        </Section>
      </div>
      <div className=" bg-[#FAFAFA]">
        <div className="py-10 px-11 space-y-4 md:flex items-center justify-between  max-w-[1450px] mx-auto">
          <h2
            aria-live="polite"
            className="text-[24px] font-bold text-[#252B42]"
            tabIndex={0}>
            Bandage
          </h2>

          <div className="space-x-5 text-blue-700 flex">
            <FacebookIcon color="#23A6F0" className="text-[24px]" />
            <InstagramIcon color="#23A6F0" className="text-[24px]" />
            <TwitterIcon color="#23A6F0" className="text-[24px]" />
          </div>
        </div>
      </div>
    </main>
  );
}
