import { Navigate, Route, Routes } from 'react-router'
import { Home } from './pages/home'

export function App() {
  return (
    <Routes>
      <Route element={<Navigate to="/" />} path="*" />
      <Route element={<Home />} path="/" />
    </Routes>
  )
}
