import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./components/layouts/defaultLayout.tsx", [
        index("./routes/rootRoute.tsx")
    ]),
    route("/home", "./routes/homeRoute.tsx"),
] satisfies RouteConfig;
