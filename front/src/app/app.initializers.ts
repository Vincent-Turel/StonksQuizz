import { ThemeService } from '../services/theme.service';

export function initializeConfiguration(
    themeService: ThemeService
): () => Promise<any> {
    return () => {
        return new Promise<true | any>((resolve, reject) => {
            themeService.getThemesFromServer().subscribe(
                (initialized: boolean) =>
                    initialized === true ? resolve(true) : reject(),
                (error) => reject(error)
            );
        });
    };
}
