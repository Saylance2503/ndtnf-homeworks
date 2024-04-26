import { searchGitHubRepositories, searchPublicAPI } from './api';

searchGitHubRepositories('rxjs')
  .subscribe(
    (repositories: any[]) => {
      console.log('Найденные репозитории на GitHub:');
      repositories.forEach(repo => {
        console.log(`${repo.name}: ${repo.html_url}`);
      });
    },
    (error: any) => console.error('Произошла ошибка:', error)
  );

searchPublicAPI('https://jsonplaceholder.typicode.com/posts?', 'userId=1')
  .subscribe(
    (data: any[]) => {
      console.log('Результаты запроса к общедоступному API:');
      console.log(data);
    },
    (error: any) => console.error('Произошла ошибка:', error)
  );
