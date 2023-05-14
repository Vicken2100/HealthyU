import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, startTransition } from "react";

const HomeU = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/HomeU"));
    });
  });
});

const Redirect = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/redirect"));
    });
  });
});

const Login = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Login"));
    });
  });
});

const Register = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Register"));
    });
  });
});

const Materi = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Materi"));
    });
  });
});


const Profile = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/Profile"));
    });
  });
});


const UnggahM = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/UnggahM"));
    });
  });
});


const About = lazy(() => {
  return new Promise((resolve) => {
    startTransition(() => {
      resolve(import("./page/About"));
    });
  });
});


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeU />} />                                                      {/* selesai */}
        <Route path="/Login" element={<Login />} />                                                 {/* selesai */}
        <Route path="/Register" element={<Register />} />                                           {/* selesai */}
        <Route path="/Materi" element={<Materi />} />                                               {/* selesai */}
        <Route path="/Materi/UnggahM" element={<UnggahM />} />                                      {/* selesai */}
        <Route path="/Profile" element={<Profile/>} />                                              {/* selesai */}
        <Route path="/About" element={<About/>} />                                               {/* selesai */}
        <Route path="*" element={<Redirect />}/>                                                    {/* selesai */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;