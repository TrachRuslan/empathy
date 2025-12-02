import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://pidgorognuy.com.ua";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
      id: params.id,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, id }) {
  const { title, date, postContentHtml, img, excerpt } = postData;

  const description =
    excerpt && typeof excerpt === "string"
      ? excerpt.replace(/<[^>]+>/g, "").slice(0, 200)
      : `Стаття «${title}» від психолога Павла Підгороднього у Львові. Поради, підтримка та психологічна допомога.`;

  const canonicalUrl = `${siteUrl}/posts/${id}`;

  return (
    <Layout>
      <Head>
        <title>{`${title} – Психолог Львів | Павло Підгородний`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} – Психолог Львів`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        {img && <meta property="og:image" content={`${siteUrl}${img}`} />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              image: img ? `${siteUrl}${img}` : undefined,
              author: {
                "@type": "Person",
                name: "Павло Підгородний",
              },
              publisher: {
                "@type": "Organization",
                name: "Психолог Павло Підгородний",
                url: siteUrl,
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonicalUrl,
              },
              datePublished: date,
              dateModified: date,
            }),
          }}
        />
      </Head>

      <section className="row">
        <Image
          src={img}
          priority
          className="post__image"
          width={1200}
          height={360}
          alt={title}
        />

        <Date dateString={date} className="post__date" />
        <h1 className="post__title">{title}</h1>

        <article
          dangerouslySetInnerHTML={{ __html: postContentHtml }}
          className="post"
        />

        <div className="post__footer">
          <div className="post__footer-left">
            <p className="post__author">Підгородний Павло Михайлович</p>
            <p className="post__contacts">
              Тел.{" "}
              <a className="post__phone" href="tel:+380632404508">
                0632404508
              </a>
              {" / "}
              <a className="post__phone" href="tel:+380679802165">
                0679802165
              </a>
            </p>
          </div>

          <button
            type="button"
            className="post__button button button--gray button--s"
          >
            <Link href="/" className="button__link">
              <span className="button__text">Перейти на головну</span>
              <div className="button__icon">
                <svg
                  className="button__arrow"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="right-arrow"
                    stroke="#F8F9F8"
                    strokeWidth="6"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="50" x2="95" y2="50" />
                    <line x1="58" y1="13" x2="95" y2="50" />
                    <line x1="58" y1="87" x2="95" y2="50" />
                  </g>
                </svg>
              </div>
            </Link>
          </button>
        </div>
      </section>
    </Layout>
  );
}
