import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from "@angular/router";
import { tap } from "rxjs";
import { PerfomanceMetricaService } from "../../perfomance-metrica.service";

export function logLazyImportsPerfomanceMetrica(router: Router, perfMetrica: PerfomanceMetricaService) {
    return () => router.events.pipe(
        tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
                perfMetrica.group('Ленивая загрузка модулей')
                perfMetrica.time(`Ленивая загрузка модуля ${event.route.path}`);
            }
            if (event instanceof RouteConfigLoadEnd) {
                perfMetrica.endGroup('Ленивая загрузка модулей')
                perfMetrica.endTime(`Ленивая загрузка модуля ${event.route.path}`);
            }
        })
    ).subscribe();
}