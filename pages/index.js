import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

const siteUrl = "https://pidgorognuy.com.ua";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* TITLE + DESCRIPTION */}
        <title>
          Психолог Львів – консультації онлайн та офлайн | Підгородний Павло
        </title>
        <meta
          name="description"
          content="Психолог Львів – консультації для дорослих, сімей та підлітків. Онлайн психолог, сімейне консультування, допомога при депресії, тривозі та складних життєвих ситуаціях. Психолог Павло Підгородний – консультація онлайн або у Львові."
        />

        {/* META KEYWORDS (для інших пошукових систем) */}
        <meta
          name="keywords"
          content="Психолог Львів – консультації, Психолог Львів, Львів Психолог, Психолог, Допомога Психолога, Онлайн психолог – індивідуальні та сімейні консультації, Сімейний психолог Львів – допомога у стосунках, Психолог для дітей і підлітків у Львові, Психолог Павло Підгородний – консультація онлайн, Допомога при депресії, Психологічна підтримка у Львові – запис на прийом, Консультація психолога онлайн або у Львові, Сімейне консультування, консультування чоловіка та жінки, термінове консультування, консультування з професійної реабілітації, Консультування підготовки до певного виду діяльності, допомога із соціальної адаптації для дітей і підлітків, консультування батьків по вихованню дітей, консультації перед весіллям, консультація з проблем подружніх відносин, консультації проти азартних ігор, профілактика та профорієнтація молоді, профорієнтація школярів і старшокласників, послуги по захищенню медіа-компетентності та ІКІ, послуги по захищенню ІКІ і програмуванню, послуги соціального працівника"
        />

        {/* CANONICAL */}
        <link rel="canonical" href={siteUrl} />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Психолог Львів – консультації онлайн та офлайн | Підгородний Павло"
        />
        <meta
          property="og:description"
          content="Практичний психолог у Львові. Індивідуальні та сімейні консультації, онлайн психолог, допомога при депресії, стресі та складних стосунках. Запис на прийом у Львові або онлайн."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:image"
          content={`${siteUrl}/images/poster-d.jpg`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* STRUCTURED DATA (schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Psychologist"],
              name: "Психолог Павло Підгородний",
              description:
                "Психолог у Львові. Індивідуальні та сімейні консультації, онлайн психолог, допомога при депресії, тривозі, сімейних конфліктах та соціальній адаптації дітей і підлітків.",
              url: siteUrl,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Львів",
                addressCountry: "UA",
              },
              telephone: "+380679802165",
              priceRange: "600-900 UAH",
              areaServed: "Lviv, Ukraine",
              sameAs: [
                "https://pidgorognuy.com.ua",
                "https://pidgorognuy.vercel.app",
              ],
            }),
          }}
        />
      </Head>

      <div className="intro">
        <div className="intro__container">
          <Image
            priority
            src="/images/poster-d.jpg"
            className="intro__poster"
            height={1800}
            width={800}
            alt="Психолог Павло Підгородний, консультація психолога у Львові та онлайн"
          />
        </div>

        <div className="intro__poster-content">
          <p className="intro__pre-title">Психолог Павло Підгородний</p>
          <h1 className="intro__page-title section-title">
            Психолог Львів – консультації онлайн та офлайн
          </h1>
          <p className="intro__sub-title">
            Індивідуальні та сімейні консультації. Підтримка для дітей,
            підлітків і дорослих.
          </p>

          <button type="button" className="button button--contrast">
            <a href="#contact-form" className="button__link">
              <span className="button__text">Записатись</span>
              <div className="button__icon">
                <svg
                  className="button__arrow"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="right-arrow&contrast"
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
            </a>
          </button>
        </div>

        <div className="experience">
          <div className="experience__ellipse"></div>

          <ul className="experience__list">
            <li className="experience__item">
              <span className="experience__number">10*</span>{" "}
              <span className="experience__label">Років досвіду</span>
            </li>

            <li className="experience__item">
              <span className="experience__number">250+</span>{" "}
              <span className="experience__label">Задоволених клієнтів</span>
            </li>

            <li className="experience__item">
              <span className="experience__number">6*</span>{" "}
              <span className="experience__label">Проведено коучингів</span>
            </li>

            <li className="experience__item">
              <span className="experience__number">6 років</span>{" "}
              <span className="experience__label">Акредитації в Україні</span>
            </li>
          </ul>
        </div>
      </div>

      <main>
        <section className="row" id="services">
          <h2 className="section-title row__title">Послуги</h2>

          <ol className="num-list">
            <li className="num-list__item">
              <p className="num-list__text">
                Допомога із соціальної адаптації для дітей і підлітків,
                психологічна підтримка в навчанні,{" "}
                <strong>психолог для дітей і підлітків у Львові</strong>.
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                <strong>Сімейне консультування</strong>, консультація з проблем
                подружніх відносин,{" "}
                <strong>консультування чоловіка та жінки</strong>,{" "}
                <strong>консультації перед весіллям</strong>.
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                <strong>
                  Онлайн психолог – індивідуальні та сімейні консультації
                </strong>
                , термінове консультування,{" "}
                <strong>
                  консультація психолога онлайн або у Львові
                </strong>
                .
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                <strong>Допомога при депресії</strong>, тривожності, емоційному
                вигоранні; консультації проти азартних ігор,{" "}
                <strong>профілактика та профорієнтація молоді</strong>.
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                Консультування з професійної реабілітації,{" "}
                <strong>
                  консультування підготовки до певного виду діяльності
                </strong>
                ,{" "}
                <strong>профорієнтація школярів і старшокласників</strong>.
              </p>
            </li>
            <li className="num-list__item">
              <p className="num-list__text">
                <strong>Послуги соціального працівника</strong>, послуги по
                захищенню медіа-компетентності та ІКІ, послуги по захищенню ІКІ
                і програмуванню,{" "}
                <strong>допомога Психолога</strong> у кризових ситуаціях.
              </p>
            </li>
          </ol>
        </section>

        <section className="row" id="about">
          <h2 className="section-title row__title">Про мене</h2>

          <div className="about">
            <Image
              src="/images/mind.svg"
              className="about__image"
              height={400}
              width={399}
              alt="Силует голови з мозком, що символізує психологічну допомогу у Львові"
            />

            <div className="about__text">
              <p className="about__paragraph">
                Я – <strong>Психолог Павло Підгородний</strong>, практичний
                психолог та соціальний педагог. Закінчив Дрогобицький державний
                педагогічний університет імені Івана Франка і отримав вищу
                освіту за спеціальністю{" "}
                <span className="about__accent">
                  «Практична психологія. Соціальна педагогіка»
                </span>{" "}
                та здобув кваліфікацію практичного психолога у закладах освіти
                і соціального педагога.
              </p>

              <p className="about__paragraph">
                Працюю з дорослими, сім’ями, дітьми та підлітками. Допомагаю
                подолати наслідки стресу, травматичних подій, конфліктів у
                стосунках, проблем із самооцінкою та професійним вибором.
                Особливу увагу приділяю роботі з{" "}
                <span className="about__accent">
                  девіантною поведінкою та соціальною адаптацією
                </span>
                .
              </p>

              <p className="about__paragraph">
                У 2013 році підвищив кваліфікацію в Національному університеті{" "}
                <span className="about__accent">«Львівська політехніка»</span>,
                здобувши ступінь магістра з управління навчальним закладом. З
                2013 року займаюся{" "}
                <strong>приватним консультуванням у Львові та онлайн</strong> і
                надаю підтримку тим, хто шукає професійну психологічну допомогу.
              </p>
            </div>
          </div>
        </section>

        <section className="row" id="prices">
          <h2 className="section-title row__title">Ціни</h2>

          <ol className="price">
            <li className="price__item">
              <p className="price__label">
                Індивідуальна консультація психолога або соціального педагога
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Навчально-виховна робота з дітьми дошкільного віку
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультування в процесі професійної реабілітації
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультування з питань шлюбу і сім’ї, сімейне консультування
              </p>
              <p className="price__value">
                900 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультація та профілактика в процесі позбавлення шкідливих
                звичок, психологічна підтримка жертвам стихійних лих
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
            <li className="price__item">
              <p className="price__label">
                Консультування із соціальної адаптації дітей і підлітків
              </p>
              <p className="price__value">
                600 грн. <span className="price__time">/ 1 год.</span>
              </p>
            </li>
          </ol>
        </section>

        <section className="row" id="posts">
          <h2 className="section-title row__title">Статті</h2>

          <ul className="posts-list">
            {allPostsData.map(({ id, date, title, img, excerpt }) => (
              <li className="post posts-list__item" key={id}>
                <Image
                  src={img}
                  className="post__image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={title}
                />
                <Date dateString={date} className="post__date" />
                <Link href={`/posts/${id}`}>
                  <h3 className="post__title">{title}</h3>
                </Link>

                <main className="post__content ">
                  <div dangerouslySetInnerHTML={{ __html: excerpt }} />

                  <div className="posts-list__footer">
                    <p className="posts-list__author">
                      Підгородний Павло Михайлович
                    </p>
                    <p className="posts-list__contacts">
                      Тел.
                      <a
                        className="posts-list__phone"
                        href="tel:+380632404508"
                      >
                        0632404508
                      </a>
                      <a
                        className="posts-list__phone"
                        href="tel:+380679802165"
                      >
                        0679802165
                      </a>
                    </p>
                  </div>
                </main>

                <button
                  type="button"
                  className="posts-list__button button button--gray button--s"
                >
                  <Link href={`/posts/${id}`} className="button__link">
                    <span className="button__text">Читати далі</span>
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
                          <line x1="5" y1="50" x2="95" y2="50"></line>
                          <line x1="58" y1="13" x2="95" y2="50"></line>
                          <line x1="58" y1="87" x2="95" y2="50"></line>
                        </g>
                      </svg>
                    </div>
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Додатковий SEO-текст із ключовими фразами */}
        <section className="row" id="seo-text">
          <h2 className="section-title row__title">
            Психологічна підтримка у Львові – запис на прийом
          </h2>
          <p>
            Якщо вам потрібен{" "}
            <strong>психолог Львів – консультації</strong> для дорослих, пар,
            дітей чи підлітків, ви можете звернутися до мене як до фахівця з
            багаторічним досвідом. Я працюю як{" "}
            <strong>
              онлайн психолог – індивідуальні та сімейні консультації
            </strong>
            , так і очно у Львові. Як{" "}
            <strong>сімейний психолог Львів – допомога у стосунках</strong>,
            допомагаю подружжю налагодити діалог, пройти кризові періоди,
            підготуватися до шлюбу та вирішити конфлікти в родині.
          </p>
          <p>
            До мене звертаються за послугою{" "}
            <strong>Психолог Павло Підгородний – консультація онлайн</strong>,
            коли потрібна{" "}
            <strong>психологічна підтримка у Львові</strong> або з будь-якого
            міста світу. Я надаю{" "}
            <strong>консультації психолога онлайн або у Львові</strong> при
            складних життєвих ситуаціях, проводжу{" "}
            <strong>термінове консультування</strong>,{" "}
            <strong>консультування батьків по вихованню дітей</strong>, роботу з
            залежностями та азартними іграми, а також{" "}
            <strong>послуги по захищенню медіа-компетентності та ІКІ</strong> та{" "}
            <strong>послуги по захищенню ІКІ і програмуванню</strong>.
          </p>
        </section>
      </main>
    </Layout>
  );
}