import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, Provider } from "@angular/core"
import { Router } from "@angular/router";
import { PerfomanceMetricaLogInterceptor } from "../interceptors/peromance-metrica-log.interceptor";
import { PerfomanceMetricaService } from "../perfomance-metrica.service";
import { logLazyImportsPerfomanceMetrica } from "./perfomance-metrica-lazy-import";

export const LOG_LAZY_IMPORT_PROVIDER: Provider = {
    provide: APP_INITIALIZER,
    useFactory: logLazyImportsPerfomanceMetrica,
    deps: [Router, PerfomanceMetricaService],
    multi: true,
};

export const LOG_HTTP_REQUESTS_TIME_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: PerfomanceMetricaLogInterceptor,
    multi: true,
};

export function getYandexPerfomanceMetricaProvider(id: string): Provider {
    return {
        provide: APP_INITIALIZER,
        useFactory: (perfMetricaService: PerfomanceMetricaService) => {
            return () => perfMetricaService.setYandexAnalitics(id);
        },
        deps: [PerfomanceMetricaService],
        multi: true,
    };
}