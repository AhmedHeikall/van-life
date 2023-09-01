import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home, About, Vans, VanDetail, Host, NotFound, Login } from "./pages";
import { loader as vansPageLoader } from "./pages/vans/Vans";
import { loader as vanDetailLoader } from "./pages/vandetail/VanDetail";
import { loader as hostVansLoader } from "./components/hostVans/HostVans";
import { loader as hostVanDetailLoader } from "./components/hostVanDetail/HostVanDetail";
import { loader as dashboardLoader } from "./components/dashboard/Dashboard";

import { action as loginAction } from "./pages/login/Login";

import {
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanDetail,
  Photo,
  Details,
  Pricing,
} from "./components";

import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<NotFound />}
        loader={vansPageLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<NotFound />}
        loader={vanDetailLoader}
      />

      <Route path="host" element={<Host />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="Photos" element={<Photo />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
