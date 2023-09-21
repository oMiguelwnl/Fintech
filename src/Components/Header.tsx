import React from 'react';
import DateRange from './DateRange';
import Meses from './Meses';

const Header = () => {
  const [title, setTitle] = React.useState('Resumo');
  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
