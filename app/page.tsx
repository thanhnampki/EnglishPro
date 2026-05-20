'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { ContinueLearningCard } from '@/components/dashboard/ContinueLearningCard';
import { DailyProgressCard } from '@/components/dashboard/DailyProgressCard';
import { QuickActionGrid } from '@/components/dashboard/QuickActionGrid';

export default function Home() {
  return (
    <>
      <AppHeader />
      <PageContainer>
        <div className="space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="mb-2 text-4xl font-bold text-slate-900">
              Welcome Back!
            </h1>
            <p className="text-lg text-slate-600">
              Continue your English learning journey today.
            </p>
          </div>

          {/* Continue Learning */}
          <ContinueLearningCard />

          {/* Daily Progress */}
          <DailyProgressCard />

          {/* Quick Actions */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-slate-900">
              Quick Actions
            </h2>
            <QuickActionGrid />
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
