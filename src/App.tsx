import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { Compass } from 'lucide-react'
import { RequireAuth } from './components/RequireAuth'
import { LinkButton } from './components/ui/Button'
import { EmptyState } from './components/ui/EmptyState'
import { useTranslation } from './i18n/useTranslation'
import { AppLayout } from './layouts/AppLayout'
import { AdminPage } from './pages/AdminPage'
import { CompaniesPage } from './pages/CompaniesPage'
import { CompanyDetailsPage } from './pages/CompanyDetailsPage'
import { DashboardPage } from './pages/DashboardPage'
import { InterviewDetailsPage } from './pages/InterviewDetailsPage'
import { InterviewsPage } from './pages/InterviewsPage'
import { LoginPage } from './pages/LoginPage'
import { OnboardingPage } from './pages/OnboardingPage'
import { PracticePage } from './pages/PracticePage'
import { QuestionBankPage } from './pages/QuestionBankPage'
import { QuestionDetailsPage } from './pages/QuestionDetailsPage'
import { RoleSelectPage } from './pages/RoleSelectPage'
import { StudyPage } from './pages/StudyPage'
import { AuthProvider } from './state/AuthProvider'
import { CatalogProvider } from './state/CatalogProvider'
import { SettingsProvider } from './state/SettingsProvider'
import { UserDataProvider } from './state/UserDataProvider'
import { useUserData } from './state/user-data-context'

/** First visit: pick a role. Afterwards the home page is the dashboard. */
function HomeRoute() {
  const { roleId } = useUserData()
  return roleId ? <DashboardPage /> : <Navigate to="/start" replace />
}

function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <div className="mx-auto max-w-2xl">
      <EmptyState
        icon={<Compass aria-hidden className="size-6" />}
        title={t('notFound.title')}
        description={t('notFound.hint')}
        action={<LinkButton to="/">{t('notFound.home')}</LinkButton>}
      />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SettingsProvider>
          <UserDataProvider>
            <CatalogProvider>
              <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route
                  path="onboarding"
                  element={
                    <RequireAuth>
                      <OnboardingPage />
                    </RequireAuth>
                  }
                />
                <Route
                  element={
                    <RequireAuth>
                      <AppLayout />
                    </RequireAuth>
                  }
                >
                  <Route index element={<HomeRoute />} />
                  <Route path="start" element={<RoleSelectPage />} />
                  <Route path="companies" element={<CompaniesPage />} />
                  <Route path="companies/:id" element={<CompanyDetailsPage />} />
                  <Route path="interviews" element={<InterviewsPage />} />
                  <Route path="interviews/:id" element={<InterviewDetailsPage />} />
                  <Route path="questions" element={<QuestionBankPage />} />
                  <Route path="questions/:id" element={<QuestionDetailsPage />} />
                  <Route path="practice" element={<PracticePage />} />
                  <Route path="study" element={<StudyPage />} />
                  <Route path="admin" element={<AdminPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </CatalogProvider>
          </UserDataProvider>
        </SettingsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
