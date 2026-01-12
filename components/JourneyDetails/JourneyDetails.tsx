import { PregnancyWeek } from '@/types/week';
import { useState } from 'react';
import css from './JourneyDetails.module.css';
import clsx from 'clsx';
import Image from "next/image";

export default function JourneyDetails({ data }: { data: PregnancyWeek }) {
  const [selectedTab, setSelectedTab] = useState(0);
  console.log(data);

  return (
    <section className={css.journeyDetails}>
      <div className={ css.journeyContainer}>
        <div className= {css.tabContainer}>
          <button className={clsx(css.tabButton, selectedTab === 0 && css.active)}
            onClick={() => setSelectedTab(0)}>Розвиток малюка</button>
          
          <button className={clsx(css.tabButton, selectedTab === 1 && css.active)}
           onClick={() => setSelectedTab(1)}
          >Тіло мами</button>
        </div>


        {selectedTab === 0 && data ? (  
        /* Розвиток малюка */
        <div className={css.babyContent}>
          <div className={css.babyContentLeft}>
            <div className={css.babyImageWrapper}>
              <Image
                src={`${data.baby.image}`}
                alt="Baby Size Association Image"
                className={css.babyImage}
              />
            </div>
            <p className={css.babyAnalogy}>
              Ваш малюк розміром як {data.baby.analogy}
            </p>
          </div>
          <div className={css.babyJourneyInfo}>
            <div className={css.babyActivityDevelopment}>
              <p className={css.babyActivityDevelopmentText}>
                Вітаємо з важливою віхою! Ваш малюк офіційно перейшов від стадії
                ембріона до плоду. Це ключовий момент у його розвитку, який
                означає, що всі основні органи та системи вже закладені на своїх
                місцях.
              </p>
              <p className="babyActivityDevelopment">
                {data.baby.babyActivity}
              </p>
              <p className="babyActivityDevelopment">
                {data.baby.development}  
              </p>
            </div>
            <div className={css.babyInterestFact}>
              <div className={css.babyInterestFactTitle}>
                <svg className={css.babyInterestFactLogo} width="24" height="24">
                  <use href="./leleka-sprite.svg#icon-star_shine"></use>
                </svg>
                <h4>Цікавий факт тижня</h4>
              </div>
              <p className="baby-interest-fact-content">
                Малюк вже активно рухається, згинаючи ручки та ніжки, хоча ви
                цього ще не можете відчути.
              </p>
            </div>
          </div>
        </div>):(
        {/* Тіло мами */}
        <div className="mom-content">
          <div className="mom-content-left">
            <div className="fillings-block">
              <h3 className="feelings-title">Як ви можете почуватись</h3>
              <ul className="feelings-list">
                <li className="fillings-item">Звичайний стан</li>
                <li className="fillings-item">Передменструальний синдром</li>
                <li className="fillings-item">Планування</li>
              </ul>
              <p className="sensation-description">
                Фізично це тиждень вашої останньої менструації. Вагітність ще не
                настала, але ваш організм вже готується до неї. Ви можете
                відчувати звичайні симптоми ПМС. Емоційно це може бути час надій
                та планування, якщо ви прагнете завагітніти.
              </p>
            </div>
            <div className="comfort-block">
              <h3 className="feelings-title">Поради для вашого комфорту</h3>
              <ul className="comfort-list">
                <li>
                  <div className="advice-comfort-title">
                    <svg
                      className="baby-interest-fact-logo"
                      width="24"
                      height="24"
                    >
                      <use href="./journey-sprite.svg#fork_spoon"></use>
                    </svg>
                    <h5>Харчування</h5>
                  </div>
                  <p>
                    Зосередьтесь на продуктах, багатих на вітамін C (цитрусові,
                    ківі), він допомагає тілу засвоювати залізо.
                  </p>
                </li>
                <li>
                  <div className="advice-comfort-title">
                    <svg
                      className="baby-interest-fact-logo"
                      width="24"
                      height="24"
                    >
                      <use href="./journey-sprite.svg#fork_spoon"></use>
                    </svg>
                    <h5>Активність</h5>
                  </div>
                  <p>
                    Якщо почуваєтесь добре, спробуйте йогу для вагітних. Вона
                    допомагає розслабитись і зняти напругу.
                  </p>
                </li>
                <li>
                  <div className="advice-comfort-title">
                    <svg
                      className="baby-interest-fact-logo"
                      width="24"
                      height="24"
                    >
                      <use href="./journey-sprite.svg#fork_spoon"></use>
                    </svg>
                    <h5>Відпочинок</h5>
                  </div>
                  <p>
                    Не соромтесь просити про допомогу і більше відпочивайте,
                    коли відчуваєте втому.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="tasks-component">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              recusandae asperiores aut ut consectetur dolores consequuntur iure
              temporibus ducimus dolor voluptas voluptates numquam quam,
              reprehenderit labore sequi esse quaerat non.
            </p>
          </div>
      </div>
      )}
      </div>
    </section>
  );
}
