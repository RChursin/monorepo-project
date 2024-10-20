import React from 'react';

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Projects Page Header</h2>
      {children}
      <footer>Projects Page Footer</footer>
    </div>
  );
};

export default ProjectsLayout;
