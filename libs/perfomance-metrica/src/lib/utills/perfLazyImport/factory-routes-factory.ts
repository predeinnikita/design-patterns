import { Injector } from "@angular/core";
import { Routes, Router } from "@angular/router";
import { PerfomanceMetricaService } from "../../perfomance-metrica.service";
import { getDecorateChildLazyImportFunction } from "./decorate-child-lazy-import";
import { decorateAllChildRoutes } from "./decorate-child-routes.utills";

export const getRoutesFactoryFunction = (routes: Routes) => {
    const routesFactoryFunction = (injector: Injector, perfMetrica: PerfomanceMetricaService) => () => {
        const decorateChildLazyImportFunction = getDecorateChildLazyImportFunction(perfMetrica);
        const router: Router = injector.get(Router);
        router.resetConfig(decorateAllChildRoutes(routes, decorateChildLazyImportFunction));
    };

    return routesFactoryFunction;
}