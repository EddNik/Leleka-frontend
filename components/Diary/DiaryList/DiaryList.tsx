
'use client';
import { Diary } from '@/types/diary';
import DiaryEntryCard from '../DiaryEntryCard/DiaryEntryCard';
import css from './DiaryList.module.css';
import { useRouter } from 'next/navigation';

interface DiaryListProps {
    diaries: Diary[];
}

export default function DiaryList({ diaries }: DiaryListProps) {
    const router = useRouter();

    const handleNewEntryClick = (id: string) => {
        const width = window.innerWidth;
        if (width < 1440) {
            return router.push(`/diary/${id}`);
        }
    };

    return (
        <div className={css.container}>
            <div className={css.listHeader}>
                <h2 className={css.listTitle}>Ваші записи</h2>
                <button className={css.newItemButton}>Новий запис
                    <svg className={css.newItemSvgIcon} width="21" height="21">
                        <use href="/img/sprite.svg#icon-plus"></use>
                    </svg>
                </button>
            </div>
            {!!diaries.length && <ul className={css.listContent}>
                {diaries.map((diary: Diary) => (
                    <DiaryEntryCard key={diary._id} diary={diary} onClick={handleNewEntryClick} />
                ))}
            </ul>}
        </div>
    );
}   