import { useOutletContext } from 'react-router-dom';
import { CarList } from '../../components/CarList';
import './styles.css';

export default function Home() {
  const { searchTerm } = useOutletContext();

  return (
    <div className="container">
      <CarList searchTerm={searchTerm} />
    </div>
  );
}

