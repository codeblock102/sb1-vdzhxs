import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20">
      <Portfolio projectClickHandler={handleProjectClick} />
    </div>
  );
}