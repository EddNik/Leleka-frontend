'use client';
import css from './GreetingBlock.module.css';
import { useAuthStore } from '@/lib/store/authStore';
export default function GreetingBlock() {
  const { user } = useAuthStore();
  return <h1 className={css.title}>Доброго ранку, {user?.name}!</h1>;
}
