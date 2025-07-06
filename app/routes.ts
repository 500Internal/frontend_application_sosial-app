import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/defaultLayout.tsx", [
        index("./routes/rootRoute.tsx")
    ]),
    layout("./layouts/mainLayout.tsx", [
        route("/beranda", "./routes/berandaRoute.tsx"),
        route("/profile/:profileId", "./routes/detail/profileDetailRoute.tsx"),
    ]),
    ...prefix("auth",[
        route("/login", "./routes/loginRoute.tsx"),
    ])
] satisfies RouteConfig;
