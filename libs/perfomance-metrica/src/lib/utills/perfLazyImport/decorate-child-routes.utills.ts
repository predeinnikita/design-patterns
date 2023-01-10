import { Routes, LoadChildrenCallback, Route } from "@angular/router";

export function decorateAllChildRoutes(
    routes: Routes,
    importDecorateFunc: (loadChildren: LoadChildrenCallback, name: string) => LoadChildrenCallback
): Routes {

    return routes.map((route: Route) => {
        const childs = route.children;
        if (childs) {
            const decoratedChilds = childs.map(child => {
                if (child.loadChildren) {
                    child.loadChildren = importDecorateFunc(child.loadChildren, child.path || '');
                }

                return child;
            })

            route.children = decorateAllChildRoutes(decoratedChilds, importDecorateFunc);
        }

        return route;
    }) as Routes;
}

