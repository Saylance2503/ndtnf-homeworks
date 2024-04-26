import { from } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import fetch from 'node-fetch';

export function searchGitHubRepositories(query: string) {
    const url = `https://api.github.com/search/repositories?q=${query}`;

    return from(fetch(url)).pipe(
        switchMap(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }),
        catchError(error => {
            console.error('Произошла ошибка:', error);
            throw error;
        })
    );
}

export function searchPublicAPI(endpoint: string, query: string) {
    const url = `${endpoint}${query}`;

    return from(fetch(url)).pipe(
        switchMap(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }),
        catchError(error => {
            console.error('Произошла ошибка:', error);
            throw error;
        })
    );
}
