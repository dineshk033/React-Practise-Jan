import Layout from "../pages/Layout";

export const RouterConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "cred",
        element: <div>WElcoe credo</div>,
      },
      {
        path: "hell",
        element: <div>WElcoe to hell</div>,
      },
    ],
  },
  {
    path: "/credo",
    element: <div>Hello credo!</div>,
  },
];
