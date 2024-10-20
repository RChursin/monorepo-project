import React from 'react';

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Contact Page Header</h2>
      {children}
      <footer>Contact Page Footer</footer>
    </div>
  );
};

export default ContactLayout;
