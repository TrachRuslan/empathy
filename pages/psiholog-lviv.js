import Head from "next/head";
import Layout from "../components/layout";

export default function PsihologLviv() {
  const siteUrl = "https://pidgorognuy.com.ua";
  const pageUrl = `${siteUrl}/psiholog-lviv`;

  return (
    <Layout>
      <Head>
        <title>Психолог Львів – консультації онлайн та офлайн | Павло Підгородний</title>

        <meta
          name="description"
          content="Психолог Львів — індивідуальні та сімейні консультації, онлайн і офлайн. Допомога при депресії, тривозі, конфліктах, адаптації дітей та підлітків. Психолог Павло Підгородний."
        />

        <meta
          name="keywords"
          content="Психолог Львів, психолог Львів консультації, сімейний психолог Львів, онлайн психолог Львів, консультація психолога Львів"
        />

        <link rel="canonical" href={pageUrl} />

        {/* ----- OpenGraph ----- */}
        <meta property="og:title" content="Психолог Львів – консультації онлайн та офлайн" />
        <meta property="og:description" content="Консультації психолога у Львові та онлайн. Досвід, довіра, допомога дорослим, дітям, парам та сім'ям." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/poster-d.jpg`} />

        {/* ----- Schema.org ----- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Psychologist",
              name: "Психолог Павло Підгородний",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Львів",
                addressCountry: "UA",
              },
              url: pageUrl,
              telephone: "+380679802165",
              image: `${siteUrl}/images/poster-d.jpg`,
              description:
                "Психолог Львів — консультації онлайн і офлайн. Допомога дорослим, дітям, сім'ям, парам. Робота з депресією, тривожністю, конфліктами та адаптацією.",
            }),
          }}
        />
      </Head>

      <div className="row">
        <h1 className="section-title">Психолог Львів – професійна допомога</h1>

        <p>
          Якщо ви шукаєте <strong>психолога у Львові</strong>, який працює з дорослими,
          підлітками, дітьми та сім’ями — ви у правильному місці. Я,{" "}
          <strong>Підгородний Павло</strong>, практичний психолог з багаторічним досвідом.
        </p>

        <p>
          Проводжу <strong>індивідуальні</strong> та <strong>сімейні консультації</strong>, а також
          працюю онлайн. Допомагаю при депресії, тривожності, стресі, конфліктах у відносинах,
          професійній дезорієнтації та труднощах соціальної адаптації.
        </p>

        <h2 className="section-title">Чим я можу вам допомогти?</h2>

        <ul>
          <li>Консультації психолога у Львові та онлайн</li>
          <li>Сімейне консультування та робота з парами</li>
          <li>Допомога підліткам і дітям</li>
          <li>Робота з депресією, тривогою, панічними атаками</li>
          <li>Корекція поведінки, самооцінки та емоційного стану</li>
          <li>Підтримка в кризових ситуаціях</li>
        </ul>

        <h2 className="section-title">Чому обирають мене?</h2>

        <ul>
          <li>10+ років практики</li>
          <li>Понад 250 задоволених клієнтів</li>
          <li>Досвід роботи з сім’ями, дітьми та дорослими</li>
          <li>Сучасні методики та індивідуальний підхід</li>
        </ul>

        <h2 className="section-title">Записатись на консультацію</h2>

        <p>
          Телефон для запису:
          <br />
          <a href="tel:+380632404508">063 240 45 08</a> /
          <a href="tel:+380679802165">067 980 21 65</a>
        </p>

        <p>
          Я гарантую повну конфіденційність, повагу та професійний супровід під час усієї роботи.
        </p>
      </div>
    </Layout>
  );
}
