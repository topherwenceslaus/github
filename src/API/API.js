import axios from 'axios'

export function getIssues(org, repo, page = 1) {

    const url = `https://api.github.com/repos/rails/rails/issues?per_page=25&page=1`;
    return axios.get(url)
      .then(res => {
        return {
          data: res.data
        };
      })
      .catch(err => Promise.reject(err));
  }

  export function getIssue(number) {
    const url = `https://api.github.com/repos/rails/rails/issues/${number}`;
    return axios.get(url)
      .then(res => res.data)
      .catch(err => Promise.reject(err));
  }