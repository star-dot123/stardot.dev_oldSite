import Image from 'next/image';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stardot - 次世代のインフラとサービスを提供するプラットフォーム",
  description: "",
};

export default function Home() {
  return (
    <div>
      <main className="z-50">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image className="object-cover object-center rounded" alt="hero" src="/image/blurry-1800136_1280.jpg" />
            </div>
            <div
              className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">次世代の
                <br className="hidden lg:inline-block" />インフラとサービスを
                <br className="hidden lg:inline-block" />提供するプラットフォーム
              </h1>
              <p className="mb-8 leading-relaxed">
                Stardot.devは、次世代のインフラとサービスを提供することを使命としたプラットフォームです。シンプルで効率的なツールを通じて、誰もがアイデアを形にできる環境を目指しています。
              </p>
              <div className="flex justify-center">
                <a className="inline-block border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="/solution">
                  詳しく
                </a>
                <a className="ml-4 inline-block border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="#">
                  サインアップする
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
