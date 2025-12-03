import Head from "next/head";
import Layout from "../components/layout";

export default function TrivohaPsihologLviv() {
  const siteUrl = "https://pidgorognuy.com.ua";
  const pageUrl = `${siteUrl}/trivoha-psiholog-lviv`;

  return (
    <Layout>
      <Head>
        <title>Тривога та панічні атаки – психолог Львів</title>
        <meta
          name="description"
          content="Психолог у Львові – допомога при тривожності, панічних атаках, постійному напруженні та страхах."
        />
        <meta
          name="keywords"
          content="тривога Львів, панічні атаки Львів, психолог тривога, страхи психолог Львів"
        />
        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Допомога при тривозі та панічних атаках – психолог Львів"
        />
        <meta
          property="og:description"
          content="Якщо ви живете у постійному напруженні та страхах – зверніться до психолога. Допомога при тривожних розладах."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/poster-d.jpg`} />
      </Head>

      <section className="row">
        <h1 className="section-title">Тривога та панічні атаки – допомога психолога</h1>

        <p>
          Постійна напруга, відчуття, що «щось станеться», проблеми зі сном, неможливість
          розслабитися – усе це прояви тривоги. Панічні атаки можуть супроводжуватися
          серцебиттям, задишкою, страхом померти або збожеволіти.
        </p>

        <h2 className="section-title">На консультаціях ми:</h2>
        <ul>
          <li>розбираємо, як працює тривога і чому вона з’являється;</li>
          <li>вчимося технік самодопомоги в моменти паніки;</li>
          <li>шукаємо глибинні причини та змінюємо ставлення до подій;</li>
          <li>поступово повертаємо відчуття контролю над життям.</li>
        </ul>

        <p>
          Якщо ви відчуваєте, що тривога заважає жити – це вже достатня причина звернутися по
          допомогу. Не потрібно чекати, поки стане «зовсім погано».
        </p>

        <p>
          Запис на консультацію:
          <br />
          <a href="tel:+380632404508">063 240 45 08</a> /{" "}
          <a href="tel:+380679802165">067 980 21 65</a>
        </p>
      </section>
    </Layout>
  );
}
