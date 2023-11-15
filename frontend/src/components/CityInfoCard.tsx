import { City } from '../models/city';

export interface CityInfoCardProps {
  cityInfo: City;
}
const CityInfoCard = ({ cityInfo }: CityInfoCardProps) => {
  const cityWikipediaLink = `https://en.wikipedia.org/wiki/${cityInfo.name}`;

  return (
    <div className='flex items-center justify-center h-full p-4'>
      <div className='bg-white rounded-lg shadow-md p-4 max-w-xs w-full'>
        <h3 className='text-xl font-semibold mb-3'>{cityInfo.name}</h3>
        <p>
          <span className='font-semibold'>Country:</span> {cityInfo.country}
        </p>
        <p>
          <span className='font-semibold'>Population:</span> {cityInfo.population}
        </p>
        <p>
          <span className='font-semibold'>Currency:</span> {cityInfo.currency}
        </p>
        <p>
          <span className='font-semibold'>Land Area:</span> {cityInfo.land_area}
        </p>
        <p>
          <span className='font-semibold'>Coordinates:</span> {cityInfo.coordinates.lat},{' '}
          {cityInfo.coordinates.lng}
        </p>
        <div className='mt-4 flex justify-end'>
          <a
            href={cityWikipediaLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'>
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityInfoCard;
