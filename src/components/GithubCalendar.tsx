import React from 'react';
import GitHubCalendar from 'react-github-calendar';

interface Props {
  username: string;
}

const GithubCalendar: React.FC<Props> = ({ username }) => {
  return <GitHubCalendar username={username} />;
};

export default GithubCalendar;