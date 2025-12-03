import Head from "next/head";
import Layout from "../components/layout";

export default function DepresiaLviv() {
  const siteUrl = "https://pidgorognuy.com.ua";
  const pageUrl = `${siteUrl}/depresia-lviv`;

  return (
    <Layout>
      <Head>
        <title>Допомога при депресії Львів – психологічна підтримка</title>
        <meta
          name="description"
          content="Допомога при депресії у Львові – консультації психолога, підтримка при втраті сил, апатії, втраті інтересу до життя. Психолог Павло Підгородний."
        />
        <meta
          name="keywords"
          content="допомога при депресії Львів, депресія психолог Львів, немає сил жити Львів"
        />
        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Допомога при депресії у Львові – консультації психолога"
        />
        <meta
          property="og:description"
          content="Якщо ви відчуваєте апатію, втому та безнадію – зверніться по професійну психологічну допомогу."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/poster-d.jpg`} />
      </Head>

      <section className="row">
        <h1 className="section-title">Допомога при депресії у Львові</h1>

        <p>
          Депресія – це не просто «поганий настрій». Це стан, коли немає сил, нічого не хочеться,
          людина втрачає інтерес до того, що раніше приносило радість. У такій ситуації важливо не
          залишатися наодинці, а звернутися по допомогу.
        </p>

        <h2 className="section-title">Можливі ознаки депресії:</h2>
        <ul>
          <li>відсутність сил навіть на прості справи;</li>
          <li>байдужість до всього, що раніше подобалось;</li>
          <li>відчуття провини, безнадії, думки «я нікчемний»;</li>
          <li>проблеми зі сном, апетитом, концентрацією;</li>
          <li>думки про те, що життя не має сенсу.</li>
        </ul>

        <p>
          На консультаціях ми поступово повертаємо відчуття опори, шукаємо причини стану та
          крок за кроком змінюємо ваше життя у бік більшої підтримки й турботи про себе.
        </p>

        <p>
          Ви можете звернутися особисто у Львові або онлайн.
          <br />
          Телефон: <a href="tel:+380632404508">063 240 45 08</a> /{" "}
          <a href="tel:+380679802165">067 980 21 65</a>
        </p>
      </section>
    </Layout>
  );
}