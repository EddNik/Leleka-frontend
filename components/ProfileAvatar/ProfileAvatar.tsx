import css from './ProfileAvatar.module.css';
import Image from 'next/image';

export default function ProfileAvatar() {
  return (
    <div className={css.container}>
      <Image
        src="/img/avatar.jpg"
        width={132}
        height={132}
        className={css.avatar}
        alt="User's avatar"
      />
      <div className={css.info}>
        <div className={css.details}>
            <h3 className={css.name}>Ганна</h3>
            <p className={css.email}>hanna@gmail.com</p>
        </div>
        <button type="button" className={css.button}>
          Завантажити нове фото
        </button>
      </div>
    </div>
  );
}
