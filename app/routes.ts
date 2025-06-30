import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./components/layouts/defaultLayout.tsx", [
        index("./routes/rootRoute.tsx")
    ]),
    layout("./components/layouts/mainLayout.tsx", [
        route("/beranda", "./routes/berandaRoute.tsx"),
    ])
] satisfies RouteConfig;
