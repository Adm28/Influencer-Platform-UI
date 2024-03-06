import Link from 'next/link'
import Image from "next/image";
import Logo from './WeConnectLogo.png'
import LogoWithBrandName from './WeConnectLogoWithCompanyNameHighAspect.png'

export default function Home() {
  

  return (
    <main className="min-h-screen items-center justify-between max-w-screen-xl mx-auto px-8">
      <nav className="flex items-center  justify-around py-6">
        <Image
          sizes="30vw"
          loading="lazy"
          quality={100}
          src={Logo}
          className="z-10 w-12"
        />
        <div className="flex gap-5 justify-between my-auto text-black whitespace-nowrap  text-sm font-semibold text-center">
          <div class="flex gap-3 justify-between">
            <p>Product</p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e92f2f545f5d3be4226089a5e20e55e46a2a69aebf64c57bd02e539cc69a774?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="my-auto aspect-[2.33] stroke-[2px] stroke-black w-[7px]"
            />
          </div>
          <div class="flex gap-3 justify-between">
            <p>Features</p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e92f2f545f5d3be4226089a5e20e55e46a2a69aebf64c57bd02e539cc69a774?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="my-auto aspect-[2.33] stroke-[2px] stroke-black w-[7px]"
            />
          </div>
          <div>Blog</div> 
          <div class="grow">Pricing</div>
          <div class="grow">About</div>
        </div>
        <div class="flex gap-5 justify-between items-center text-sm font-semibold">
          <Link href="/signup">
            <div> Sign Up</div>
          </Link>
          <Link href="/login">
            <div class="px-12 py-3 bg-indigo-500 rounded-xl max-md:px-5 text-center text-white">Login</div>
          </Link>
          
        </div>
      </nav>
      <div class="flex flex-col pb-12 bg-white">
        <div class="flex justify-end pb-2 mt-1 md:max-w-full my-8 relative items-center">
          <div class="flex flex-col text-gray-500 w-[630px] z-10 absolute left-0 space-y-4">
            <div class="text-xl tracking-tighter">
              Optimise your content reach and monetisation in a single platform
            </div>
            <div
              class="text-4xl font-extrabold tracking-tight text-gray-800"
            >
              Monetize your content by connecting directly with the sponsors
            </div>
            <div class="text-lg tracking-tighter text-gray-500">
              Find sponsors to your content on the fly
            </div>
          </div>

          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60c992856f95fc4e947796d98f5f0aa06cfdea0d1c22722f4637f2c3d2fbd2b5?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
            class="z-12 mt-14 max-w-full aspect-[1.23] w-[640px]"
          />

        </div>
        <div class="flex flex-col items-center px-5 w-full max-md:max-w-full">
          <div
            class="self-stretch w-full bg-stone-300 min-h-[1px] max-md:max-w-full"
          ></div>
          <div
            class="mt-16 text-2xl text-center text-black max-md:mt-10 max-md:max-w-full"
          >
            Over 32k+ leading tech companies sponsor connect bees
          </div>
          <div
            class="flex gap-5 justify-between items-center mt-10 w-full max-w-[1257px] max-md:flex-wrap max-md:max-w-full flex-wrap"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c38c95e7bfdda2e8a58e89939ad213541490970c67f47c063807644bd4f379af?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="flex-1 shrink-0 my-auto w-full aspect-[6.25]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d41a4e4e88914bc72af6389b82af257c49b2e5ed3eebeb4f047d10a9d5c6f2ff?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="flex-1 shrink-0 my-auto w-full aspect-[7.69]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3958c4ff89f17309ea57aafcdcc8a9c330e05826fa3179f3cdb4e22469344dac?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="flex-1 shrink-0 my-auto w-full aspect-[5]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99abcc9120fd8e757a31e79e56f3d0049917f08a7e78115bf9a6c12446cac6ad?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="flex-1 shrink-0 my-auto w-full aspect-[6.67]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/66a40bac598f7dfa17705196c465eba1989006d1adf62aadd1bc85bf70721e07?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="flex-1 shrink-0 my-auto w-full aspect-[5.56]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35c3f8f34c3247cbfc33ccfd867d2c3e7d7f65b94b95be9ba5d3a81a062bde29?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="flex-1 shrink-0 my-auto w-full aspect-[5]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b96d4df7b615d32554113da8b03ac00047372be9b489af361d5709b5e257439?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="flex-1 shrink-0 w-full aspect-[4.35]"
            />
          </div>
          <div
            class="self-stretch mt-20 w-full bg-stone-300 min-h-[1px] max-md:mt-10 max-md:max-w-full"
          ></div>
          <div
            class="flex z-10 flex-col mt-28 w-full max-w-[1316px] max-md:mt-10 max-md:max-w-full"
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/50d8cf48a102fe12e914113a6dc41f9ad870796c8f5b7e7ff45da8cb8c56a3d4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="w-full aspect-[2.78] stroke-[5px] stroke-red-400 max-md:max-w-full"
            />
            <div
              class="self-start mt-6 ml-32 text-base font-extrabold tracking-tight leading-8 text-black whitespace-nowrap max-md:ml-2.5"
            >
              Project Discovery Call
            </div>
            <div
              class="mt-4 ml-32 text-base tracking-tight leading-8 text-gray-500 w-[279px] max-md:ml-2.5"
            >
              Party we years to order allow asked of. We so opinion friends me message
              as delight.
            </div>
            <div
              class="flex flex-col items-center self-center px-16 py-12 mt-28 max-w-full text-white rounded-2xl bg-slate-900 w-[830px] max-md:px-5 max-md:mt-10"
            >
              <div
                class="self-end mt-16 text-5xl font-extrabold tracking-tighter leading-[60.06px] max-md:mt-10 max-md:max-w-full"
              >
                Push your content to the next level
              </div>
              <div
                class="mt-6 text-xl tracking-tight leading-8 text-center max-md:max-w-full"
              >
                End to End Payment and contract with the sponsor in the single
                platform
              </div>
              <div
                class="justify-center px-12 py-5 mt-14 mb-12 ml-7 text-base tracking-tight leading-8 text-center whitespace-nowrap bg-red-400 rounded-[47px] max-md:px-5 max-md:my-10"
              >
                Get Started
              </div>
            </div>
          </div>
          <div
            class="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-12 mt-0 w-full fill-slate-50 min-h-[1113px] max-md:px-5 max-md:max-w-full"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f3fbaeebace1a4edc72fae66374a0031263e9101307a1d33b7839ff65e9334?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="object-cover absolute inset-0 size-full"
            />
            <div
              class="flex relative flex-col mt-96 mb-20 w-full max-w-[1200px] max-md:my-10 max-md:max-w-full"
            >
              <div class="max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div
                      class="flex flex-col grow items-start px-5 py-11 mx-auto w-full text-base bg-white rounded-3xl max-md:px-5 max-md:mt-8"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/624514dc8d1f6fec5b9faa29027fc595ee5b1f5e7429a83974fab4667b6fbcf9?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                        class="mt-1 aspect-square w-[60px]"
                      />
                      <div
                        class="mt-9 ml-3 text-2xl font-extrabold tracking-tighter whitespace-nowrap leading-[60px] text-slate-900 max-md:ml-2.5"
                      >
                        Offending belonging
                      </div>
                      <div
                        class="mt-5 ml-3 tracking-tight leading-8 text-gray-500 max-md:ml-2.5"
                      >
                        Letter of on become he tended active enable to. Vicinity
                        relation sensible sociable surprise screened no up as.
                      </div>
                      <div
                        class="flex gap-3 mt-7 ml-3 font-semibold text-emerald-600 leading-[100%] max-md:ml-2.5"
                      >
                        <div>Read More</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aee7e9310ce6248be0436d19b0505039a64f74c332343c7ac2428f6cd00a464?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                          class="self-start aspect-[1.3] fill-zinc-200 stroke-[2px] stroke-emerald-600 w-[13px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div
                      class="flex flex-col grow px-6 py-11 mx-auto w-full text-base bg-white rounded-3xl max-md:px-5 max-md:mt-8"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cd1266483d1ca7da44e1c2011d1ff7d3ebfaa0a08bfccf60526c26c17933305?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                        class="mt-1 aspect-square w-[60px]"
                      />
                      <div
                        class="mt-9 text-2xl font-extrabold tracking-tighter leading-[60px] text-slate-900"
                      >
                        Promotion & provision
                      </div>
                      <div
                        class="mt-5 tracking-tight leading-8 text-gray-500 max-md:ml-2.5"
                      >
                        Led ask possible mistress relation elegance eat likewise
                        debating. By message or am nothing amongst chiefly address.
                      </div>
                      <div
                        class="flex gap-3 self-start mt-7 font-semibold text-emerald-600 leading-[100%]"
                      >
                        <div>Read More</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aee7e9310ce6248be0436d19b0505039a64f74c332343c7ac2428f6cd00a464?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                          class="self-start aspect-[1.3] fill-zinc-200 stroke-[2px] stroke-emerald-600 w-[13px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div
                      class="flex flex-col grow px-6 py-11 mx-auto w-full text-base bg-white rounded-3xl max-md:px-5 max-md:mt-8"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/354ac3a8410e58c0ee62bf1fda44d96135ae06fc557378f9acc24d074018786f?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                        class="mt-1 aspect-square w-[60px]"
                      />
                      <div
                        class="mt-9 text-2xl font-extrabold tracking-tighter leading-[60px] text-slate-900"
                      >
                        Blessing application
                      </div>
                      <div
                        class="mt-5 tracking-tight leading-8 text-gray-500 max-md:ml-2.5"
                      >
                        Ham windows sixteen who inquiry fortune demands. Is be upon
                        sang fond must shew. Really boy law county she unable her
                        sister.
                      </div>
                      <div
                        class="flex gap-3 self-start mt-7 font-semibold text-emerald-600 leading-[100%]"
                      >
                        <div>Read More</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aee7e9310ce6248be0436d19b0505039a64f74c332343c7ac2428f6cd00a464?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                          class="self-start aspect-[1.3] fill-zinc-200 stroke-[2px] stroke-emerald-600 w-[13px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="justify-center items-center self-center px-16 py-6 mt-11 max-w-full text-base text-center text-white whitespace-nowrap bg-indigo-500 rounded-xl w-[259px] max-md:px-5 max-md:mt-10"
              >
                More About Platform
              </div>
            </div>
          </div>
          <div class="text-sm text-indigo-800 uppercase mt-[884px] max-md:mt-10">
            Testimonials
          </div>
          <div
            class="mt-7 text-4xl font-extrabold tracking-tighter leading-10 text-center text-black max-md:max-w-full"
          >
            Check what our clients are saying
          </div>
          <div class="mt-10 w-full max-w-[1150px] max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93866c9ac8c326fc91bc079835507a49d617442e960f21ecb7f0b8e04f7526dd?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                  class="grow w-full mix-blend-darken aspect-[0.84] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div
                  class="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32b959133d1690ce3727962d58ae400f08b5323b5a249d88cb92b189136ea6b8?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                    class="aspect-[1.15] fill-red-400 w-[31px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1788eb8f679076e202eeaa987fe1b655a0143439efcd60246960119690778c4?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                    class="mt-5 max-w-full aspect-[5] w-[145px]"
                  />
                  <div
                    class="mt-8 text-3xl font-bold tracking-tight leading-10 text-gray-900 max-md:max-w-full"
                  >
                    Is be upon sang fond must shew. Really boy law county she unable
                    her sister. Feet you off its like like six. Among sex are leave
                    law built now.
                  </div>
                  <div
                    class="flex gap-5 justify-between pr-10 mt-16 leading-[150%] max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full"
                  >
                    <div class="flex flex-col">
                      <div class="text-xl font-bold tracking-tight text-black">
                        AR Shakir
                      </div>
                      <div
                        class="mt-3.5 text-base tracking-tight whitespace-nowrap text-slate-500"
                      >
                        CEO GetNextDesign
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/527138250924622ad72ba2a6bc6c88f05ef39032cb452927390390f13f8bf370?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                      class="my-auto max-w-full aspect-[5] w-[137px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-12 mt-24 w-full text-center fill-slate-50 min-h-[697px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45689d685518b15eef83fa0208c26fefa353a658eddb42db24e0511e3f5c5534?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
              class="object-cover absolute inset-0 size-full"
            />
            <div
              class="flex relative flex-col items-center mt-36 mb-36 max-w-full w-[678px] max-md:my-10"
            >
              <div class="text-sm text-indigo-500 uppercase whitespace-nowrap">
                Project Management App
              </div>
              <div
                class="self-stretch mt-8 text-4xl font-extrabold tracking-tighter leading-10 text-black max-md:max-w-full"
              >
                Download our app and start your free trail to get started today!
              </div>
              <div
                class="mt-8 text-xl tracking-tight leading-8 text-gray-500 max-md:max-w-full"
              >
                End-to-end payments and financial management in a single solution.
              </div>
              <div
                class="flex gap-3 mt-8 text-base font-semibold tracking-tight leading-8 text-white whitespace-nowrap"
              >
                <div
                  class="flex gap-3 justify-between px-8 py-4 bg-indigo-500 rounded-[47px] max-md:px-5"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b196b417390f8c3b4fbc279702f1f3fac316cbfe75d9144da8a0ed0dd89ad11?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                    class="self-start aspect-[0.81] w-[17px]"
                  />
                  <div>Playstore</div>
                </div>
                <div
                  class="flex gap-1 justify-between px-7 py-3 bg-slate-900 rounded-[47px] max-md:px-5"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dcbbf58187f92ece571177d0003747625ca41c37285195e2eaec09c07330e26?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                    class="aspect-square w-[30px]"
                  />
                  <div class="grow self-start mt-3">Google Play</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-14 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div class="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col max-md:mt-10">
                  <div class="text-xl tracking-tight leading-7 text-gray-900">
                    AR Shakir
                  </div>
                  <div class="mt-8 text-base tracking-tight leading-7 text-slate-500">
                    Simple innate summer fat appear basket his desire joy.
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0239bcf793b7b46bc202659b834bc38c1894f072d8c448cb3f31616edf62948b?apiKey=2f858cd8a51c4f6fa3938d1ca4b438a6&"
                    class="mt-9 w-32 max-w-full aspect-[6.25]"
                  />
                </div>
              </div>
              <div class="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                <div
                  class="flex flex-col grow text-base font-medium leading-6 whitespace-nowrap text-slate-900 max-md:mt-10"
                >
                  <div class="text-xl font-bold leading-6">Company</div>
                  <div class="mt-6">About Us</div>
                  <div class="mt-5">Careers</div>
                  <div class="mt-5">Blog</div>
                  <div class="mt-5">Pricing</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
                <div
                  class="flex flex-col text-base leading-6 text-slate-900 max-md:mt-10"
                >
                  <div class="text-xl font-bold leading-6">Resources</div>
                  <div class="mt-7">Templates</div>
                  <div class="mt-3">Tutorials</div>
                  <div class="mt-3">Free resources</div>
                  <div class="mt-3 whitespace-nowrap">Contract templates</div>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col text-base font-medium max-md:mt-10">
                  <div class="text-xl font-bold leading-6 text-slate-900">
                    Join Our Newsletter
                  </div>
                  <div
                    class="flex gap-5 justify-between pl-4 mt-7 tracking-tight bg-stone-50 leading-[162.5%]"
                  >
                    <div class="flex-auto self-end mt-7 text-slate-900">
                      Your email address
                    </div>
                    <div
                      class="justify-center px-11 py-5 text-white whitespace-nowrap bg-cyan-400 max-md:px-5"
                    >
                      Subscribe
                    </div>
                  </div>
                  <div class="mt-7 tracking-tight leading-7 text-slate-900">
                    * Will send you weekly updates for your better
                    <br />
                    finance management.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-14 max-w-full h-0.5 bg-gray-200 w-[1140px] max-md:mt-10"
          ></div>
          <div
            class="mt-12 text-base font-medium tracking-tight leading-7 text-center text-slate-900 max-md:mt-10"
          >
            Copyright @ WeConnect 2023. All Rights Reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
