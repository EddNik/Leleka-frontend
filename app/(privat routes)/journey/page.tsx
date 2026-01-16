import { fetchCurrentWeekJourneyServer } from '@/lib/api/serverApi';
import { redirect } from 'next/navigation';

export default async function JourneyIndexPage() {
  const current = await fetchCurrentWeekJourneyServer();
  if (!current) {
    redirect('/journey');
  }
  console.log(current);

  redirect(`/journey/${current.weekNumber}`);
}
