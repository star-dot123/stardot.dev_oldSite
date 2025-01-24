import Link from 'next/link';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/preline@2.7.0/dist/preline.min.js" async ></script>
        <script src="https://cdn.jsdelivr.net/npm/tailgrids@2.2.2/plugin.min.js" async ></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          className="inset-x-0 top-0 z-50 bg-black sticky flex flex-wrap md:justify-start md:flex-nowrap w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
          <nav
            className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                  href="/" aria-label="Preline">
                  <svg className="h-4 w-auto" width="853" height="90" viewBox="0 0 853 90" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.2177 50.8113L31.5653 33.4377C27.5101 32.2609 20.6727 28.4885 23.9981 22.552C26.1162 18.7712 34.5092 19.8226 41.0653 21.9365L54.7626 5.70059C46.7735 1.79724 27.8875 -3.75769 13.9396 3.70505C7.18289 7.31458 2.62643 13.2608 0.764572 20.9018C-0.927392 27.8354 0.200584 34.489 4.03153 40.1345C7.39039 45.0865 12.334 48.4718 17.2177 50.8113Z"
                      fill="white" />
                    <path d="M185.289 0.118843H114.924V19.9768H185.289V0.118843Z" fill="white" />
                    <path d="M160.683 88.6149H139.53V36.3812H160.683V88.6149Z" fill="white" />
                    <path d="M852.05 0.118843H781.686V19.9768H852.05V0.118843Z" fill="white" />
                    <path d="M827.443 88.6149H806.29V36.3812H827.443V88.6149Z" fill="white" />
                    <path d="M277.82 68.4361L258.952 22.8701L231.692 88.6144H254.269L262.624 68.4361H277.82Z"
                      fill="white" />
                    <path
                      d="M440.916 43.743C444.164 42.6262 450.081 39.4679 450.613 30.5652C451.128 21.9313 449.61 0.11961 424.361 0.11961H404.446L440.916 43.743Z"
                      fill="white" />
                    <path
                      d="M417.02 44.5413H400.248V24.4689L380.196 0.468048V88.6145H402.08V58.5226L426.168 88.6145H453.843L417.02 44.5413Z"
                      fill="white" />
                    <path
                      d="M698.141 67.0163C695.019 68.4646 691.574 69.3307 687.905 69.3307C674.414 69.3307 663.476 58.3935 663.476 44.9024C663.476 40.3599 664.798 36.1599 666.958 32.5169L652.84 16.8979C646.697 24.5793 643.003 34.3036 643.003 44.9024C643.003 69.7012 663.106 89.8042 687.905 89.8042C696.88 89.8042 705.22 87.143 712.234 82.6074L698.141 67.0163Z"
                      fill="white" />
                    <path
                      d="M680.911 21.6126C683.14 20.9428 685.458 20.4735 687.906 20.4735C701.397 20.4735 712.334 31.4107 712.334 44.9018C712.334 48.2314 711.657 51.4009 710.451 54.2933L724.92 70.3008C729.887 63.0748 732.808 54.3323 732.808 44.9018C732.808 20.1031 712.705 1.52588e-05 687.906 1.52588e-05C680.094 1.52588e-05 672.753 2.00253 666.354 5.509L680.911 21.6126Z"
                      fill="white" />
                    <path d="M290.584 0.467926H266.995L302.05 88.6144H325.639L290.584 0.467926Z" fill="white" />
                    <path
                      d="M48.2021 39.2109L33.8545 56.5845C37.9097 57.7612 44.7472 61.5336 41.4217 67.4701C39.3036 71.251 30.9107 70.1996 24.3545 68.0857L10.6572 84.3216C18.6464 88.2249 37.5323 93.7798 51.4802 86.3171C58.2369 82.7076 62.7934 76.7613 64.6553 69.1203C66.3472 62.1868 65.2192 55.5331 61.3883 49.8876C58.0294 44.9357 53.0858 41.5504 48.2021 39.2109Z"
                      fill="white" />
                    <path
                      d="M526.193 0.4673L542.666 20.3907H548.424C561.762 20.3907 572.574 31.2026 572.574 44.5405C572.574 47.9565 571.857 51.2012 570.577 54.1464L584.064 70.4575C589.363 63.1828 592.497 54.23 592.497 44.5405C592.497 20.1999 572.765 0.4673 548.424 0.4673H534.411H526.193Z"
                      fill="white" />
                    <path
                      d="M556.784 67.1745C554.176 68.1381 551.367 68.6924 548.423 68.6924H534.411V40.1156L512.273 13.3422V88.6144H526.932H548.423C556.22 88.6144 563.539 86.5812 569.894 83.0288L556.784 67.1745Z"
                      fill="white" />
                  </svg>
                </Link>
              </div>

              <div className="md:hidden">
                <button type="button"
                  className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-navbar-floating-dark-collapse" aria-expanded="false"
                  aria-controls="hs-navbar-floating-dark" aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-floating-dark">
                  <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div id="hs-navbar-floating-dark"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-navbar-floating-dark-collapse">
              <div className="flex flex-col md:flex-row md:items-center md:justify-end py-3 md:py-0 md:ps-7">
                <Link className="p-4 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                  href="/product/">製品</Link>
                <Link className="p-4 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                  href="/solution/">ソリューション</Link>
                <Link className="p-4 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                  href="/prices/">価格</Link>
                <Link className="p-4 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                  href="/blog/">ブログ</Link>

                <div>
                  <Link className="ml-2 inline-flex items-center gap-x-2 py-2 px-4 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                    href="#">
                    サインイン
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2">
              <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
                <div className="block text-teal-600 lg:hidden">
                  <svg className="h-5 w-auto" width="853" height="90" viewBox="0 0 853 90" fill="black"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.2177 50.8113L31.5653 33.4377C27.5101 32.2609 20.6727 28.4885 23.9981 22.552C26.1162 18.7712 34.5092 19.8226 41.0653 21.9365L54.7626 5.70059C46.7735 1.79724 27.8875 -3.75769 13.9396 3.70505C7.18289 7.31458 2.62643 13.2608 0.764572 20.9018C-0.927392 27.8354 0.200584 34.489 4.03153 40.1345C7.39039 45.0865 12.334 48.4718 17.2177 50.8113Z"
                      fill="currentColor" />
                    <path d="M185.289 0.118843H114.924V19.9768H185.289V0.118843Z" fill="currentColor" />
                    <path d="M160.683 88.6149H139.53V36.3812H160.683V88.6149Z" fill="currentColor" />
                    <path d="M852.05 0.118843H781.686V19.9768H852.05V0.118843Z" fill="currentColor" />
                    <path d="M827.443 88.6149H806.29V36.3812H827.443V88.6149Z" fill="currentColor" />
                    <path d="M277.82 68.4361L258.952 22.8701L231.692 88.6144H254.269L262.624 68.4361H277.82Z"
                      fill="currentColor" />
                    <path
                      d="M440.916 43.743C444.164 42.6262 450.081 39.4679 450.613 30.5652C451.128 21.9313 449.61 0.11961 424.361 0.11961H404.446L440.916 43.743Z"
                      fill="currentColor" />
                    <path
                      d="M417.02 44.5413H400.248V24.4689L380.196 0.468048V88.6145H402.08V58.5226L426.168 88.6145H453.843L417.02 44.5413Z"
                      fill="currentColor" />
                    <path
                      d="M698.141 67.0163C695.019 68.4646 691.574 69.3307 687.905 69.3307C674.414 69.3307 663.476 58.3935 663.476 44.9024C663.476 40.3599 664.798 36.1599 666.958 32.5169L652.84 16.8979C646.697 24.5793 643.003 34.3036 643.003 44.9024C643.003 69.7012 663.106 89.8042 687.905 89.8042C696.88 89.8042 705.22 87.143 712.234 82.6074L698.141 67.0163Z"
                      fill="currentColor" />
                    <path
                      d="M680.911 21.6126C683.14 20.9428 685.458 20.4735 687.906 20.4735C701.397 20.4735 712.334 31.4107 712.334 44.9018C712.334 48.2314 711.657 51.4009 710.451 54.2933L724.92 70.3008C729.887 63.0748 732.808 54.3323 732.808 44.9018C732.808 20.1031 712.705 1.52588e-05 687.906 1.52588e-05C680.094 1.52588e-05 672.753 2.00253 666.354 5.509L680.911 21.6126Z"
                      fill="currentColor" />
                    <path d="M290.584 0.467926H266.995L302.05 88.6144H325.639L290.584 0.467926Z"
                      fill="currentColor" />
                    <path
                      d="M48.2021 39.2109L33.8545 56.5845C37.9097 57.7612 44.7472 61.5336 41.4217 67.4701C39.3036 71.251 30.9107 70.1996 24.3545 68.0857L10.6572 84.3216C18.6464 88.2249 37.5323 93.7798 51.4802 86.3171C58.2369 82.7076 62.7934 76.7613 64.6553 69.1203C66.3472 62.1868 65.2192 55.5331 61.3883 49.8876C58.0294 44.9357 53.0858 41.5504 48.2021 39.2109Z"
                      fill="currentColor" />
                    <path
                      d="M526.193 0.4673L542.666 20.3907H548.424C561.762 20.3907 572.574 31.2026 572.574 44.5405C572.574 47.9565 571.857 51.2012 570.577 54.1464L584.064 70.4575C589.363 63.1828 592.497 54.23 592.497 44.5405C592.497 20.1999 572.765 0.4673 548.424 0.4673H534.411H526.193Z"
                      fill="currentColor" />
                    <path
                      d="M556.784 67.1745C554.176 68.1381 551.367 68.6924 548.423 68.6924H534.411V40.1156L512.273 13.3422V88.6144H526.932H548.423C556.22 88.6144 563.539 86.5812 569.894 83.0288L556.784 67.1745Z"
                      fill="currentColor" />
                  </svg>
                </div>

                <div className="mt-8 space-y-4 lg:mt-0">
                  <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>

                  <div>
                    <h2 className="text-2xl font-medium text-gray-900">ニュースレターの購読</h2>

                    <p className="mt-4 max-w-lg text-gray-500" id="newsletter_format">
                      メールでサイトの行動を監視してもよろしいかと！？
                      <br />
                      (* &apos;ᵕ&apos; )ｲｲﾖｯ!(* &apos;ᵕ&apos; )ｲｲﾖｯ!(* &apos;ᵕ&apos; )ｲｲﾖｯ!
                    </p>
                  </div>

                  <form className="mt-6 w-full">
                    <label className="sr-only"> Email </label>

                    <div
                      className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                      <input type="email" id="UserEmail" placeholder="john@example.com"
                        className="ml-2 w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm focus:outline-none" />

                      <button
                        className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                        購読する
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="py-8 lg:py-16 lg:pe-16">
                <div className="hidden text-teal-600 lg:block">
                  <svg className="h-5 w-auto" width="853" height="90" viewBox="0 0 853 90" fill="black"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.2177 50.8113L31.5653 33.4377C27.5101 32.2609 20.6727 28.4885 23.9981 22.552C26.1162 18.7712 34.5092 19.8226 41.0653 21.9365L54.7626 5.70059C46.7735 1.79724 27.8875 -3.75769 13.9396 3.70505C7.18289 7.31458 2.62643 13.2608 0.764572 20.9018C-0.927392 27.8354 0.200584 34.489 4.03153 40.1345C7.39039 45.0865 12.334 48.4718 17.2177 50.8113Z"
                      fill="currentColor" />
                    <path d="M185.289 0.118843H114.924V19.9768H185.289V0.118843Z" fill="currentColor" />
                    <path d="M160.683 88.6149H139.53V36.3812H160.683V88.6149Z" fill="currentColor" />
                    <path d="M852.05 0.118843H781.686V19.9768H852.05V0.118843Z" fill="currentColor" />
                    <path d="M827.443 88.6149H806.29V36.3812H827.443V88.6149Z" fill="currentColor" />
                    <path d="M277.82 68.4361L258.952 22.8701L231.692 88.6144H254.269L262.624 68.4361H277.82Z"
                      fill="currentColor" />
                    <path
                      d="M440.916 43.743C444.164 42.6262 450.081 39.4679 450.613 30.5652C451.128 21.9313 449.61 0.11961 424.361 0.11961H404.446L440.916 43.743Z"
                      fill="currentColor" />
                    <path
                      d="M417.02 44.5413H400.248V24.4689L380.196 0.468048V88.6145H402.08V58.5226L426.168 88.6145H453.843L417.02 44.5413Z"
                      fill="currentColor" />
                    <path
                      d="M698.141 67.0163C695.019 68.4646 691.574 69.3307 687.905 69.3307C674.414 69.3307 663.476 58.3935 663.476 44.9024C663.476 40.3599 664.798 36.1599 666.958 32.5169L652.84 16.8979C646.697 24.5793 643.003 34.3036 643.003 44.9024C643.003 69.7012 663.106 89.8042 687.905 89.8042C696.88 89.8042 705.22 87.143 712.234 82.6074L698.141 67.0163Z"
                      fill="currentColor" />
                    <path
                      d="M680.911 21.6126C683.14 20.9428 685.458 20.4735 687.906 20.4735C701.397 20.4735 712.334 31.4107 712.334 44.9018C712.334 48.2314 711.657 51.4009 710.451 54.2933L724.92 70.3008C729.887 63.0748 732.808 54.3323 732.808 44.9018C732.808 20.1031 712.705 1.52588e-05 687.906 1.52588e-05C680.094 1.52588e-05 672.753 2.00253 666.354 5.509L680.911 21.6126Z"
                      fill="currentColor" />
                    <path d="M290.584 0.467926H266.995L302.05 88.6144H325.639L290.584 0.467926Z"
                      fill="currentColor" />
                    <path
                      d="M48.2021 39.2109L33.8545 56.5845C37.9097 57.7612 44.7472 61.5336 41.4217 67.4701C39.3036 71.251 30.9107 70.1996 24.3545 68.0857L10.6572 84.3216C18.6464 88.2249 37.5323 93.7798 51.4802 86.3171C58.2369 82.7076 62.7934 76.7613 64.6553 69.1203C66.3472 62.1868 65.2192 55.5331 61.3883 49.8876C58.0294 44.9357 53.0858 41.5504 48.2021 39.2109Z"
                      fill="currentColor" />
                    <path
                      d="M526.193 0.4673L542.666 20.3907H548.424C561.762 20.3907 572.574 31.2026 572.574 44.5405C572.574 47.9565 571.857 51.2012 570.577 54.1464L584.064 70.4575C589.363 63.1828 592.497 54.23 592.497 44.5405C592.497 20.1999 572.765 0.4673 548.424 0.4673H534.411H526.193Z"
                      fill="currentColor" />
                    <path
                      d="M556.784 67.1745C554.176 68.1381 551.367 68.6924 548.423 68.6924H534.411V40.1156L512.273 13.3422V88.6144H526.932H548.423C556.22 88.6144 563.539 86.5812 569.894 83.0288L556.784 67.1745Z"
                      fill="currentColor" />
                  </svg>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div>
                    <p className="font-medium text-gray-900">製品</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <Link id="product_list_1" href="/product/twitch_bot/"
                          className="text-gray-700 transition hover:opacity-75">Twitch Bot</Link>
                      </li>
                      <li>
                        <Link id="product_list_2" href="/product/discord_bot/"
                          className="text-gray-700 transition hover:opacity-75">Discord bot</Link>
                      </li>
                      <li>
                        <Link id="product_list_3" href="/product/somthing_change_tool/"
                          className="text-gray-700 transition hover:opacity-75">いろいろ変換ツール</Link>
                      </li>
                      <li>
                        <Link id="product_list_4" href="/product/autocord/"
                          className="text-gray-700 transition hover:opacity-75">AutoCord</Link>
                      </li>
                      <li>
                        <Link id="product_list_5" href="/product/"
                          className="text-gray-700 transition hover:opacity-75">もっと見る→</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">サイトの概要</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <Link href="/about_site/"
                          className="text-gray-700 transition hover:opacity-75">このサイトについて</Link>
                      </li>

                      <li>
                        <Link href="/terms_of_service/"
                          className="text-gray-700 transition hover:opacity-75">利用規約</Link>
                      </li>

                      <li>
                        <Link href="/member/star_dot123/"
                          className="text-gray-700 transition hover:opacity-75">管理者のプロフィール</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">さまざまなリンク</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <Link href="/contact_us/" className="text-gray-700 transition hover:opacity-75">お問い合わせ</Link>
                      </li>

                      <li>
                        <Link href="/question/" className="text-gray-700 transition hover:opacity-75">よくある質問</Link>
                      </li>

                      <li>
                        <Link href="https://youtube.com/@stardot_dev"
                          className="text-gray-700 transition hover:opacity-75">YouTube</Link>
                      </li>

                      <li>
                        <Link href="https://github.com/Stardot-dev"
                          className="text-gray-700 transition hover:opacity-75">GitHub</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-8">
                  <ul className="flex flex-wrap gap-4 text-xs">
                    <li>
                      <Link href="/terms_of_service/" className="text-gray-500 transition hover:opacity-75">利用規約</Link>
                    </li>

                    <li>
                      <Link href="/privacy_policy/"
                        className="text-gray-500 transition hover:opacity-75">プライバシー・ポリシー</Link>
                    </li>

                    <li>
                      <Link href="/use_cookie/" className="text-gray-500 transition hover:opacity-75">クッキーの使用について</Link>
                    </li>
                  </ul>

                  <p className="mt-8 text-xs text-gray-500">&copy; <span id="cc_year"></span>.2025 Stardot.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}