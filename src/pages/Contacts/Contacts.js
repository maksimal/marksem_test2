import React, { useState } from 'react';
import FAQ from '../../components/FAQ/FAQ';
import ContactFormSection from '../../components/ContactFormSection/ContactFormSection';
import ImageTextBlock from '../../components/ImageTextBlock/ImageTextBlock';
import StyledList from '../../components/shared/StyledList/StyledList';
import StyledListItem from '../../components/shared/StyledListItem/StyledListItem';
import ScrollToTop from '../../components/shared/ScrollToTop'
import ScrollAnimation from 'react-animate-on-scroll';
import "./Contacts.scss";

export default function Contacts(props) {

  useState(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="contacts-page">
      <div className="social-links-container">
        <a href="#" className="social-link">
          <svg width={16} height={16}>
            <use href="./icons-sprite.svg#icon-facebook" />
          </svg>
        </a>
        <a href="#" className="social-link">
          <svg width={16} height={16}>
            <use href="./icons-sprite.svg#icon-twitter" />
          </svg>
        </a>
        <a href="#" className="social-link">
          <svg width={16} height={16}>
            <use href="./icons-sprite.svg#icon-linkedin" />
          </svg>
        </a>
        <a href="#" className="social-link">
          <svg width={16} height={16}>
            <use href="./icons-sprite.svg#icon-instagram" />
          </svg>
        </a>
      </div>

      <ScrollToTop />

      <div className="contacts-header" style={{ backgroundImage: `url(./img/sky.png)` }}>
        <div className="container">
          <h1 className="contacts-main-title">Контактна <br /> інформація</h1>
        </div>
      </div>

      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ImageTextBlock
          style="1"
          title="Зацікавлені в співпраці з нами?"
          mediaType="img"
          isBackground={true}
          mediaPosition="right"
          imgUrl="./img/contacts1.png"
          actionOnClick={() => console.log("click")}
          actionElementType="button"
          actionElementText="Contact us"
          actionElementAlign="bottom"
        >
          <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            Ми відкриті до пропозицій та раді співпраці з іншими компаніями.
              </p>
            <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            Пропонуємо вигідні умови компаніям з таких галузей:
              </p>
            <StyledListItem
            style={{ textTransform: "uppercase", alignItems: "center" }}
            iconUrl="./icons-sprite.svg#plane"
            iconSize={44}
            text="Туроператори"
          />
            <StyledListItem
            style={{ textTransform: "uppercase", alignItems: "center" }}
            iconUrl="./icons-sprite.svg#plant"
            iconSize="44"
            text="Власники земель"
          />
            <StyledListItem
            style={{ textTransform: "uppercase", alignItems: "center" }}
            // iconUrl="./img/icons/bell_icon.png"
            iconPNGUrl="./img/icons/bell_icon.png"
            iconSize="44"
            text="Компанії з надання товарів та послуг"
          />
        </ImageTextBlock>
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <ContactFormSection
          formTitle="Залиште повідомлення"
          formIntroText="Наші менеджери будуть раді відповісти на ваші запитання. Заповніть форму нижче та ми зв’яжемось з вами."
          contactListTitle="Contacts"
          phone="+38(063)630-98-21"
          email="E-mail@gmail.com"
          address="Mashinostroitelnaya 37, office 502 Ukraine, Kyiv"
        />
      </ScrollAnimation>


      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}>
        <section style={{ marginBottom: "120px" }}>
          <div className="container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore</p>

            <FAQ
              queston="Що робить ваша компанія?"
              answer={[
                "MARKSEM — виробник мобільних, модульних та плавучих будинків.",
                "Також ми надаємо повний комплекс послуг з організації орендного та готельного бізнесу. Пропонуємо парки з готельною інфраструктурою для розміщення будинків. Беремо на себе всі клопоти по керуванню та обслуговуванню вашого будинку. Транспортуємо будинок у визначене місце.",
                "Будинки MARKSEM — це інструмент успішного орендного бізнесу."
              ]}
            />
            <FAQ
              queston="Чому ваша команда називається фахівцями?"
              answer={[
                "Ми невпинно втілюємо своє бачення, ми не зупиняємось і постійно розвиваємось, і рухаємось уперед для досягнення нашої мети. Кожен з нас має досвід у своїй сфері, ми не перераховуємо наші досягнення в минулому, ми не прагнемо піару.  Всі наші знання, навички, досвід ми вкладаємо в MARKSEM. Наша мета — це успіх MARKSEM. А для нас — це значить успіх кожного з нас."
              ]}
            />
            <FAQ
              queston="Як це працює?"
              answer={[
                "1. Ви обираєте зручний для вас план інвестицій.",
                "MARKSEM пропонує декілька планів інвестицій. Кожен з них розроблений таким чином, щоб вкладені вами кошти, незалежно від стартової суми, принесли вам максимальну ефективність у часі.",
                "2. Обираєте будинок.",
                "У нашому каталозі ми пропонуємо будинки від 15м2 до 90м2, які мають різне планування. При замовленні будинку ви обираєте бажаний вам інтер’єр та екстер’єр. Також додатково можете замовити терасу.",
                "3. Вказуєте місце розташування майбутнього будинку.",
                "Розмістити будинок ви можете в одному з наших парків MARKSEM, які мають сучасну готельну інфраструктуру, або на своїй території.",
                "4. Обираєте одну з  програм від MARKSEM :",
                "MARKSEM FAMILY — ваш будинок належить тільки вам. Ви не здаєте його в оренду. При потребі МARKSEM тільки доглядає за будинком.",
                "MARKSEM RENT BUSINESS — будинок від MARKSEM ви використовуєте як інструмент орендного бізнесу. Ми організовуємо орендний бізнес та беремо на себе догляд за будинком.",
                "MARKSEM OFFICE — використовуєте будинок як переїзний офіс."
              ]}
            />
            <FAQ
              queston="Чим ви відрізняєтесь?"
              answer={[
                "Традиційно вкладання коштів в орендну справу обмежується холодним фінансовим розрахунком. Ми створюємо можливість отримувати не тільки фінансову користь, а ще й  власний будинок за містом чи в горах, чи на березі моря — будь-де.",
                "MARKSEM пропонує справжню альтернативу інвестицій різного плану нерухомості, техніки, тощо, яка працює за моделлю «оренди».",
                "Ми орієнтовані, насамперед, на створення великої мережі наших парків, де ви, відповідно до обраної вами програми MARKSEM, можете бути власником будинку у раніше недосяжному для вас регіоні."
              ]}
            />
            <FAQ
              queston="У що я інвестую?"
              answer={[
                "Ми пропонуємо інвестування у різноманітні проекти в напрямку оренди житла."
              ]}
            />
            <FAQ
              queston="Чи можу я придбати будинок і розмістити його на свої ділянці без обслуговування MARKSEM?"
              answer={[
                "Так, ви можете придбати будь-який з наших будинків та розмістити на своїй ділянці без обслуговування MARKSEM."
              ]}
            />
            <FAQ
              queston="Чи можу я продати/обміняти свій будинок?"
              answer={[
                "Так, ви можете продати чи обміняти свій будинок будь-коли. Для цього ми маємо програму трейд-ін від MARKSEM. Також ви можете продати своє майно, опублікувавши оголошення в інтернеті. "
              ]}
            />
            <FAQ
              queston="Чи можу я придбати декілька будинків та розмістити їх у парку MARKSEM чи на свої ділянці?"
              answer={[
                "Ви можете придбати будь-яку кількість будинків. Кількість будинків, які можна розмістити у парку MARKSEM, залежить від завантаженості парків."
              ]}
            />
            <FAQ
              queston="Що таке «MARKSEM Change Home»?"
              answer={[
                "Це програма обміну будинками в мережі парків MARKSEM. Власник будинку, який виявив бажання змінити свою локацію для відпочинку чи проживання, публікує про це оголошення в СRМ MARKSEM. Інший учасник програми — власник, який виявив аналогічне бажання. Якщо всі умови влаштовують обидві сторони, за допомогою офісу MARKSEM вони підписують угоду про зміну власників будинків в локаціях: наприклад, гори на море. Такий обмін може бути від 5 діб до без терміновості.",
                "Програма MARKSEM Change Home буде корисною і вигідною вам, якщо ви не маєте власного будинку там, де маєте бажання відпочивати. Обмін будинками дозволяє вам змінювати локації і, одночасно з тим, заощаджувати кошти на проживання."
              ]}
            />
            <FAQ
              queston="Навіщо мені СRМ?"
              answer={[
                "MARKSEM СRМ виконає для вас наступні функції:",
                <p>
                  - календар проживання, надходження коштів; <br />
                  -	аналітична звітність: дохід/витрати, завантаження, рентабельність; <br />
                  -	оплата по лічильникам, сервіс, інші договірні зобов’язання; <br />
                  - бронювання дат, замовлення послуг і товарів до вашого приїзду; <br />
                  - індивідуальний менеджер, інформування про події, проекти та можливості; <br />
                  -	історія всіх документів, дій та операцій з вашим будинком.
                </p>
              ]}
            />
            <FAQ
              queston="Коли мені будуть надходити кошти з оренди будинку?"
              answer={[
                "Кошти будуть надходити вам на рахунок відразу після сплати орендарем. MARKSEM не оперує вашими коштами. Оплата надходить напряму від гостя на ваш особистий рахунок."
              ]}
            />
            <FAQ
              queston="Скільки я можу заробити грошей, здаючи в оренду будинок?"
              answer={[
                "Наш сервіс робить все можливе, щоб ваш будинок здавався якомога частіше. Від цього залежить і сума зароблених вами коштів. Відповідно до кожної локації є сезонний попит чи постійний. Є змінні фактори впливу на відвідування гостями парків. На кожну локацію ми надаємо прогноз ліквідності."
              ]}
            />
            <FAQ
              queston="Які документи я отримаю, придбавши будинок?"
              answer={[
                "Гарантійний талон. Рахунок-фактуру, що містить модель, номер, серію та дату придбання."
              ]}
            />
            <FAQ
              queston="Що таке «інвестиційні плани MARKSEM»?"
              answer={[
                "Ми розробили 3 інвестиційні плани. Ви маєте можливість відразу придбати будинок або внести частину суми, а решту виплачувати з коштів, які будуть надходити вам за оренду будинку.",
                "Детальніше з планами інвестицій ви можете ознайомитись у розділі «MARKSEM інвестиції»."
              ]}
            />
            <FAQ
              queston="Чи можу я взяти кредит в банку для купівлі будинку?"
              answer={[
                "Так, ви можете взяти кредит."
              ]}
            />
            <FAQ
              queston="Як запропонувати свою земельну ділянку для парку?"
              answer={[
                "Заповнити форму на сайті або відправити лист на нашу електронну пошту. Обов’язково вкажіть точне місцезнаходження, розміри ділянки, під’їзд до неї, опишіть комунікації, які є поруч або на ній, інформацію про власність та фото самої земельної ділянки і прилеглої території."
              ]}
            />
            <FAQ
              queston="Що входить у комплектацію будинку?"
              answer={[
                <a href="#">Комплектації</a>
              ]}
            />
            <FAQ
              queston="Скільки людей може розміститись у будинку?"
              answer={[
                "MARKSEM розробив типові планування будинків. Відповідно до них у будинках одночасно можуть розміститись від 2 до 6 осіб. ",
                <a href="#">Планування</a>
              ]}
            />
            <FAQ
              queston="Що є на території парків?"
              answer={[
                "Кожен парк є індивідуальним. Інфраструктура та перелік послуг залежить від багатьох факторів. Ми ретельно вивчаємо попит та конкурентне середовище, пропонуємо в своїх парках відповідно до локації все можливе, завжди слідкуємо за попитом та зміною ринку."
              ]}
            />
            <FAQ
              queston="Як ви шукаєте клієнтів для оренди?"
              answer={[
                "Ми рекламуємо ваш будинок за допомогою наших ексклюзивних маркетингових каналів та обраних туристичних партнерів. Ми використовуємо класичні та нестандартні інструменти для інформування, створення попиту, зацікавленості та запрошення гостей у наші парки."
              ]}
            />
            <FAQ
              queston="Чи можу я зареєструвати будинок як житлову нерухомість?"
              answer={[
                "Так. Наші будинку відповідають нормам постійного проживання. (уточнення по регіону). Для цього вам потрібно оформити всі необхідні документи, побудувати фундамент, підключитись до комунікацій. І виконати всі роботи відповідно до закону.",
                "Наші фахівці надають повний комплекс послуг з питань документів, комунікацій, будівництва фундаменту."
              ]}
            />
            <FAQ
              queston="Як довго будинок може бути в експлуатації?"
              answer={[
                "При дбайливому відношенні — до 50 років."
              ]}
            />
            <FAQ
              queston="Скільки коштує транспортування будинку?"
              answer={[
                "Вартість перевезення залежить від дальності маршруту. Початковою точкою є місцезнаходження заводу MARKSEM."
              ]}
            />
            <FAQ
              queston="Що входить у комплекс послуг по догляду за будинком?"
              answer={[
                <p>
                  - прибирання будинку та прилеглої території; <br />
                  -	необхідні ремонтні роботи; <br />
                  -	поновлення всіх витратних матеріалів та засобів гігієни;  <br />
                  -	прання постільної білизни, рушників, тощо;  <br />
                  - індивідуальний менеджер, інформування про події, проекти та можливості; <br />
                  -	інші послуги за індивідуальним запитом.
                </p>
              ]}
            />
            <FAQ
              queston="За яких умов MARKSEM приймає рішення про створення парку на конкретній території?"
              answer={[
                "Ми проводимо аналіз місцевості та розвитку туризму в цілому."
              ]}
            />
            <FAQ
              queston="Обслуговування будинку компанією MARKSEM — обов’язкова вимога?"
              answer={[
                "Ні. Якщо ви приймаєте рішення розмістити ваш будинок на території нашого парку, єдиною умовою буде підтримання рівня благоустрою парку — тобто прилегла до вашого будинку територія повинна бути постійно прибрана та відповідати загальному стилю парку."
              ]}
            />
            <FAQ
              queston="При встановленні будинку на своїй території, чи може MARKSEM його обслуговувати та допомагати з орендою?"
              answer={[
                "Так. Якщо ваша локація конкурентоспроможна, ми впевнені, що до вас будуть приїжджати гості, ми беремо на себе всі клопоти по обслуговуванню та керуванню."
              ]}
            />
            <FAQ
              queston="Скільки коштує оренда землі для розміщення будинку в парку MARKSEM?"
              answer={[
                "Вартість оренди землі для розміщення будинку коштує так само, як і вартість однієї доби проживання у вашому будинку."
              ]}
            />

          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}