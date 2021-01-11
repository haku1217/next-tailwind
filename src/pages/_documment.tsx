import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";

type Props = {
  ids: [];
  css: any;
};

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }
  render() {
    return (
      <Html lang="ja">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
