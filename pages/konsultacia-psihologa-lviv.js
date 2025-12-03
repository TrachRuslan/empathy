import Head from "next/head";
import Layout from "../components/layout";

export default function KonsultaciaPsihologaLviv() {
  const siteUrl = "https://pidgorognuy.com.ua";
  const pageUrl = `${siteUrl}/konsultacia-psihologa-lviv`;

  return (
    <Layout>
      <Head>
        <title>Консультація психолога Львів – онлайн та офлайн</title>
        <meta
          name="description"
          content="Консультація психолога у Львові – індивідуальні зустрічі, сімейне консультування, допомога при кризах, депресії, тривозі, конфліктах."
        />
        <meta
          name="keywords"
          content="консультація психолога Львів, консультація психолога онлайн Львів, запис до психолога Львів"
        />
        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Консультація психолога у Львові – професійна допомога"
        />
        <meta
          property="og:description"
          content="Запис на консультацію психолога у Львові або онлайн. Конфіденційність та підтримка у складних життєвих ситуаціях."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/poster-d.jpg`} />
      </Head>

      <section className="row">
        <h1 className="section-title">Консультація психолога у Львові</h1>

        <p>
          Консультація психолога – це не «розмова ні про що», а структурована робота
          над вашими запитами. Ми визначаємо проблему, розуміємо її причини та шукаємо
          реальні кроки для змін.
        </p>

        <h2 className="section-title">Як проходить зустріч?</h2>
        <ul>
          <li>обговорюємо, що саме вас турбує зараз;</li>
          <li>формуємо запит – з чим саме будемо працювати;</li>
          <li>я пояснюю, що відбувається з точки зору психології;</li>
          <li>разом шукаємо рішення та будуємо план змін.</li>
        </ul>

        <p>
          Формат: очно у Львові або онлайн. Тривалість консультації – 50–60 хвилин.
        </p>

        <p>
          Запис за телефонами:
          <br />
          <a href="tel:+380632404508">063 240 45 08</a> /{" "}
          <a href="tel:+380679802165">067 980 21 65</a>
        </p>
      </section>
    </Layout>
  );
}