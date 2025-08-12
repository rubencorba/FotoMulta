import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* import LandingComponent from './views/landing/landingComponent';
import LoginComponent from './views/login/loginComponent';
import DocumentosComponent from './views/documentos/documentosComponent';
import AsistenteComponent from './views/asistente/asistenteComponent';
import MiEquipoComponent from './views/miEquipo/miEquipoComponent';
import ExpedientesComponent from './views/expedientes/expedientesComponent';
import NotificacionesComponent from './views/notificaciones/notificacionesComponent';
import CreacionDocumento from './views/creacionDocumento/creacionDocumento'; */
import MainLayout from './layouts/mainLayout';
import DashboardComponent from './views/dashboard/dashboardComponent';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas sin layout (páginas públicas, login, etc.) */}
        {/* <Route path="/" element={<LandingComponent />} />
        <Route path="/login" element={<LoginComponent />} /> */}

        {/* Rutas con menú lateral (privadas / internas) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardComponent />
            </MainLayout>
          }
        />
          {/* <Route
            path="/asistente"
            element={
              <MainLayout>
                <AsistenteComponent />
              </MainLayout>
            }
          />
          <Route
            path="/mi-equipo"
            element={
              <MainLayout>
                <MiEquipoComponent />
              </MainLayout>
            }
          />
        <Route
          path="/documentos"
          element={
            <MainLayout>
              <DocumentosComponent />
            </MainLayout>
          }
        />
        <Route
          path="/creacionDocumento"
          element={
            <MainLayout>
              <CreacionDocumento />
            </MainLayout>
          }
        />
        <Route
          path="/expedientes"
          element={
            <MainLayout>
              <ExpedientesComponent />
            </MainLayout>
          }
        />
        <Route
          path="/notificaciones"
          element={
            <MainLayout>
              <NotificacionesComponent />
            </MainLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;

