import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./components/layouts/defaultLayout.tsx", [
        index("./routes/rootPage.tsx")
    ]),
    route("/home", "./routes/homePage.tsx"),
] satisfies RouteConfig;
