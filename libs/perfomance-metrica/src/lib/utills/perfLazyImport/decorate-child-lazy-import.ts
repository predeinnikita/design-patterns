import { Injector } from "@angular/core";
import { LoadChildrenCallback, Router, Routes } from "@angular/router";
import { PerfomanceMetricaService } from "../../perfomance-metrica.service";

export function getDecorateChildLazyImportFunction(perfMetrica: PerfomanceMetricaService) {
    return function decorateChildLazyImport(loadChildren: LoadChildrenCallback, name: string): LoadChildrenCallback {
        // Возвращаем функцию, которая декорирует loadChildren: () => import('').then....
        return () => {
            perfMetrica.group('Ленивая загрузка модулей')
            perfMetrica.time(`Ленивая загрузка модуля ${name}`);

            return (loadChildren() as Promise<any>).then((m) => {
                perfMetrica.endGroup('Ленивая загрузка модулей')
                perfMetrica.endTime(`Ленивая загрузка модуля ${name}`);

                return m;
            })
        }
    }
}