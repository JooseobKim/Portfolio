import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Noto+Sans+KR:wght@500&family=Roboto:wght@500&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="프론트엔드 개발자 구직 포트폴리오"
          />
          <meta
            name="keywords"
            content="프론트엔드, 개발자, 구직, 포트폴리오"
          />
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
